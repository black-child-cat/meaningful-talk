// チャット画面のタブ切り替え
import Link from "next/link";

const MyTabs = ({ type, user }) => {
  console.log(user.id);
  return (
    <div className="px-3 pt-3">
      <div role="tablist" className="tabs tabs-boxed grid-cols-2 bg-gray-100">
        <Link
          href={`/chat/${user.id}`}
          className={`tab h-9 ${
            type === "lady" ? "bg-gray-800 text-white font-bold" : ""
          }`}
        >
          女性側画面
        </Link>
        <Link
          href={`/chat/${user.id}/user`}
          className={`tab h-9 ${
            type === "user" ? "bg-gray-800 text-white font-bold" : ""
          }`}
        >
          ユーザー側画面
        </Link>
      </div>
    </div>
  );
};

export default MyTabs;
