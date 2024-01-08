// MessagesDisplay.js
import React, { useContext } from "react";
import { ChatContext } from "../chat/ChatContext";
import MessageLady from "../chat/MessageLady";
import MessageUser from "../chat/MessageUser";

// ユーザー情報
import users from "../../data/users";

const MessagesDisplay = ({ roomId }) => {
  const { messages } = useContext(ChatContext);
  const address = messages.address;
  return (
    <div>
      {messages.map((message, index) => {
        if (message.sender === "lady") {
          // メッセージの送り主が女性の場合
          const user = users.find((user) => user.id === message.address);
          if (roomId === message.address) {
            return <MessageLady key={index} message={message} />;
          } else {
            return "";
          }
        } else {
          const user = users.find((user) => user.id === message.sender);
          if (roomId === message.sender) {
            return <MessageUser key={index} message={message} />;
          } else {
            return "";
          }
        }
      })}
    </div>
  );
};

export default MessagesDisplay;
