import React, { useState } from "react";
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

const Stamp = () => {
  const StampArray = [
    "stamp-01.png",
    "stamp-02.png",
    "stamp-03.png",
    "stamp-04.png",
    "stamp-05.png",
    "stamp-06.png",
    "stamp-07.png",
    "stamp-08.png",
    "stamp-09.png",
  ];
  const chunkedData = chunkArray(StampArray, 6);

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
                <button
                  key={idx}
                  className="w-1/3 p-1 rounded-xl block aspect-square text-red-500 focus:bg-gray-800"
                >
                  <Image
                    src={`${imagePath}stamp/${item}`}
                    alt="スタンプ画像"
                    width={160}
                    height={160}
                    className={`rounded-lg overflow-hidden border border-gray-400 border-opacity-50`}
                  />
                </button>
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
          <button className="btn bg-gray-800 text-white w-full">
            <span className="text-[1rem]">チャットに送信する</span>
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
