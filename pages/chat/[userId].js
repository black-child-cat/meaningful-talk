import { useRouter } from "next/router";

// コンポーネント群
import MyTabs from "../../components/MyTabs";
import MessagesDisplay from "../../components/chat/MessagesDisplay.js";
import SendMessage from "../../components/chat/SendMessage.js";

// ユーザー情報
import users from "../../data/users";

export async function getStaticPaths() {
  // `users` データからすべての可能な `userId` を取得します
  const paths = users.map((user) => ({
    params: { userId: user.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // `params.userId` を使用して必要なデータを取得します
  const user = users.find((user) => user.id === params.userId);

  // ユーザーが存在しない場合は、404ページを表示する
  if (!user) {
    return { notFound: true };
  }

  return { props: { user } };
}

const ChatPage = ({ user }) => {
  // `user` は `getStaticProps` から直接受け取る
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
