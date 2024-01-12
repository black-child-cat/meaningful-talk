import LadyImage from "../LadyImage.js";

import Image from "next/image";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

const MessageLady = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <LadyImage />
        </div>
      </div>
      <div className="chat-bubble bg-pink-300 text-gray-700 w-full max-w-full">
        <Image
          src={`${imagePath}stamp/${message.stamp}`}
          alt="スタンプ画像"
          width={160}
          height={160}
          className={`rounded-lg overflow-hidden border border-gray-400 w-full border-opacity-50`}
        />
      </div>
      <div className="chat-footer opacity-50 text-xs">{message.timestamp}</div>
    </div>
  );
};

export default MessageLady;
