import { useRouter } from "next/router";

// コンポーネント群
import LadyImage from "../../components/LadyImage.js";
import UsersImage from "../../components/UsersImage.js";
import MyTabs from "../../components/MyTabs";
import MessagesDisplay from "../../components/chat/MessagesDisplay.js";
import SendMessage from "../../components/chat/SendMessage.js";
import Link from "next/link";

// ユーザー情報
import users from "../../data/users";

const ChatPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return (
      <div className="max-w-lg w-full mx-auto border-x border-gray-100">
        <div className="p-3 flex flex-col gap-3">
          <h1 className="">ユーザーが見つかりません。</h1>
          <Link href="/" className="">
            TOPページに戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-gray-100 px-3 py-1">
        <p className="text-gray-500 text-center text-sm">
          「{user.name}」とのチャット画面
        </p>
      </div>
      <MyTabs type={"lady"} user={user} />

      <div className="p-3 flex-grow">
        <div className="bg-gray-100 rounded-lg p-3 min-h-[70vh]">
          <MessagesDisplay roomId={user.id} />
        </div>
      </div>
      <SendMessage sender="lady" address={user.id} />
    </div>
  );
};

export default ChatPage;
