import React, { useContext, useState } from "react";
import { ChatContext } from "../components/chat/ChatContext.js";

import Image from "next/image";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

// 配列を6個ごとに分割するヘルパー関数
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const Stamp = ({ sender, address }) => {
  const { addMessage } = useContext(ChatContext);
  const { messages } = useContext(ChatContext);
  const [selectedStamp, setSelectedStamp] = useState("");
  // ラジオボタンの選択をハンドル
  const handleSelectStamp = (e) => {
    setSelectedStamp(e.target.value);
  };

  const StampArray = [
    { text: "stamp-01", image: "stamp-01.png" },
    { text: "stamp-02", image: "stamp-02.png" },
    { text: "stamp-03", image: "stamp-03.png" },
    { text: "stamp-04", image: "stamp-04.png" },
    { text: "stamp-05", image: "stamp-05.png" },
    { text: "stamp-06", image: "stamp-06.png" },
    { text: "stamp-07", image: "stamp-07.png" },
    { text: "stamp-08", image: "stamp-08.png" },
    { text: "stamp-09", image: "stamp-09.png" },
  ];
  const chunkedData = chunkArray(StampArray, 6);

  function getCurrentTimeFormatted() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // スタンプ送信関数
  const sendStampMessage = () => {
    if (selectedStamp) {
      // console.log("Sending stamp message:", selectedStamp); // デバッグ用
      addMessage({
        sender: "lady",
        address: address,
        timestamp: getCurrentTimeFormatted(), // 現在の時刻
        content: null,
        stamp: selectedStamp,
      });
      setSelectedStamp(""); // スタンプ選択をリセット
    }
  };

  return (
    <dialog id="stamp_modal" className="modal">
      <div className="modal-box py-3 px-4">
        <h3 className="font-bold text-lg">スタンプ</h3>
        <p className="pb-2 pt-1 text-xs">
          メッセージだけでなく用意されたスタンプも送れるようにする。文章を考える手間を軽減しつつ、相手に返答を行う負担もワンアクションで行える。
        </p>
        <div className="carousel w-full">
          {chunkedData.map((chunk, index) => (
            <div
              key={index}
              id={`item` + (index + 1)}
              className="carousel-item w-full flex flex-wrap justify-between pt-1 items-start"
            >
              {chunk.map((item, idx) => (
                <label
                  key={idx}
                  className="w-1/3 p-1 rounded-xl block aspect-square text-red-500 focus:bg-gray-800 active:bg-gray-800"
                >
                  <input
                    type="radio"
                    name={`stamp`}
                    className="hidden"
                    value={item.image}
                    onChange={handleSelectStamp}
                  />
                  <Image
                    src={`${imagePath}stamp/${item.image}`}
                    alt="スタンプ画像"
                    width={160}
                    height={160}
                    className={`rounded-lg overflow-hidden border border-gray-400 border-opacity-50`}
                  />
                </label>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {chunkedData.map((chunk, index) => (
            <a href={`#item` + (index + 1)} key={index} className="btn btn-xs">
              {index + 1}
            </a>
          ))}
        </div>
        <div className="pt-3 mt-1 border-t border-gray-100">
          <button
            className="btn bg-gray-800 text-white w-full"
            onClick={sendStampMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={20}
              height={20}
            >
              <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"></path>
            </svg>
            <span className="text-[1rem] pl-1">チャットに送信する</span>
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Stamp;
