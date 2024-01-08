import React, { useContext, useState } from "react";
import { ChatContext } from "../chat/ChatContext.js";

import Settlement from "../chat/Settlement.js";

const SendMessage = ({ sender, address }) => {
  const { addMessage } = useContext(ChatContext);
  const { messages } = useContext(ChatContext);
  const [messageText, setMessageText] = useState("");

  const count = messages.filter(
    (message) => message.sender === sender && message.address === address
  ).length;

  function getCurrentTimeFormatted() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function getCurrentTimeFormatted() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const handleSendMessage = () => {
    if (messageText.trim()) {
      addMessage({
        sender: sender,
        address: address,
        timestamp: getCurrentTimeFormatted(),
        content: messageText,
      });
      setMessageText(""); // テキストエリアをクリア
    }
  };

  return (
    <div className="p-3 sticky bottom-[0] bg-white border-t border-gray-100">
      {address === "lady" && count < 3 ? (
        <textarea
          maxLength={200}
          className="w-full textarea border-gray-300 text-[16px]"
          placeholder="女性宛にメッセージを送ってね"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      ) : address === "lady" ? (
        <textarea
          maxLength={200}
          className="w-full textarea border-gray-300 text-[16px]"
          placeholder="送信上限に達しました。制限解除を行うか、予約することで送信数を増やせます。"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          disabled
        />
      ) : (
        <textarea
          className="w-full textarea border-gray-300 text-[16px]"
          placeholder="ユーザーに向けて自由にメッセージを送ってね"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      )}
      <div className="flex gap-3 pt-1">
        {address === "lady" && count < 3 ? (
          <button className="btn btn-sm bg-gray-100 text-gray-400 rounded-md shadow-none">
            残り送信回数{3 - count}
          </button>
        ) : address === "lady" ? (
          <>
            <button
              className="btn btn-sm bg-indigo-400 text-white rounded-md"
              onClick={() =>
                document.getElementById("settlement_modal").showModal()
              }
            >
              制限解除
            </button>
            <Settlement />
          </>
        ) : (
          <>
            <button
              className="btn btn-sm bg-blue-500 text-white rounded-md"
              onClick={() =>
                document.getElementById("user_info_modal").showModal()
              }
            >
              ユーザー情報
            </button>
            <dialog id="user_info_modal" className="modal">
              <div className="modal-box py-3 px-4">
                <h3 className="font-bold text-lg">ユーザー情報の表示</h3>
                <p className="py-2 text-xs">
                  ユーザーが会話を続けるに値する相手なのか？女性が判断しやすい情報を表示する。
                  予約頻度とかトーク数に対する予約回数の比率とか、女性評価の内容など
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </>
        )}

        <button
          onClick={handleSendMessage}
          className="btn btn-sm bg-gray-800 text-white rounded-md ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={16}
            height={16}
          >
            <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
          </svg>
          送信する
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
