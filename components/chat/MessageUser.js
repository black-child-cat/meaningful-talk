import UsersImage from "../UsersImage.js";

// ユーザー情報
import users from "../../data/users";

const MessageLady = ({ message }) => {
  const user = users.find((user) => user.id === message.sender);
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-12 rounded-full">
          <UsersImage
            src={`/images/users/` + user.image}
            className="border border-gray-300 rounded-full"
            alt="ユーザーのアイコン"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="chat-bubble rounded-lg bg-white text-gray-800">
        {message.content}
      </div>
      <div className="chat-footer opacity-50 text-xs">{message.timestamp}</div>
    </div>
  );
};

export default MessageLady;
