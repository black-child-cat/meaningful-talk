// MessagesDisplay.js
import React, { useContext } from "react";
import { ChatContext } from "../chat/ChatContext";
import MessageLady from "../chat/MessageLady";
import MessageUser from "../chat/MessageUser";
import MessagesStamp from "../chat/MessagesStamp";

// ユーザー情報
import users from "../../data/users";

const MessagesDisplay = ({ roomId }) => {
  const { messages } = useContext(ChatContext);
  const address = messages.address;
  console.log(messages);
  return (
    <div>
      {messages.map((message, index) => {
        if (message.sender === "lady") {
          // メッセージの送り主が女性の場合
          const user = users.find((user) => user.id === message.address);
          if (roomId === message.address) {
            if (message.stamp !== null) {
              return <MessagesStamp key={index} message={message} />;
            } else {
              return <MessageLady key={index} message={message} />;
            }
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
