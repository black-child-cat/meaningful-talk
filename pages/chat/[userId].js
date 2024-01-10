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

      <div className="p-3 pt-2 flex-grow">
        <div className="bg-gray-100 rounded-lg p-3 min-h-[70vh]">
          <div className="rounded-md sticky top-3 z-10 mb-1">
            <button
              className="btn bg-white text-gray-500 rounded-md w-full"
              onClick={() =>
                document.getElementById("user_info_modal").showModal()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={20}
                height={20}
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path>
              </svg>
              <span className="text-[1rem]">ユーザー情報</span>
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
          </div>
          <MessagesDisplay roomId={user.id} />
        </div>
      </div>
      <SendMessage sender="lady" address={user.id} />
    </div>
  );
};

export default ChatPage;
