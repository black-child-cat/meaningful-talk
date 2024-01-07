import LadyImage from "../LadyImage.js";

const MessageLady = ({ message }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <LadyImage />
        </div>
      </div>
      <div className="chat-bubble bg-pink-200 text-gray-700">
        {message.content}
      </div>
      <div className="chat-footer opacity-50 text-xs">{message.timestamp}</div>
    </div>
  );
};

export default MessageLady;
