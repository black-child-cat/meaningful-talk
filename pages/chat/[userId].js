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
    <div className="bg-white">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="border-b border-gray-100 px-3 py-1">
          <p className="text-gray-500 text-center text-sm">
            「{user.name}」とのチャット画面
          </p>
        </div>
        <MyTabs type={"lady"} user={user} />

        <div className="p-3 pt-2 flex-grow">
          <div className="bg-gray-100 rounded-lg p-3 min-h-[70vh]">
            <div className="rounded-md sticky top-3 z-10 mb-2">
              <button
                className="btn bg-white text-gray-500 rounded-md w-full h-10 min-h-0"
                onClick={() =>
                  document.getElementById("user_info_modal").showModal()
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={24}
                  height={24}
                >
                  <path d="M3 18H21V6H3V18ZM1 5C1 4.44772 1.44772 4 2 4H22C22.5523 4 23 4.44772 23 5V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V5ZM9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10ZM11 10C11 11.6569 9.65685 13 8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10ZM8.0018 16C7.03503 16 6.1614 16.3907 5.52693 17.0251L4.11272 15.6109C5.10693 14.6167 6.4833 14 8.0018 14C9.52031 14 10.8967 14.6167 11.8909 15.6109L10.4767 17.0251C9.84221 16.3907 8.96858 16 8.0018 16ZM13 9V15H15V9H13ZM17 9V15H19V9H17Z"></path>
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
    </div>
  );
};

export default ChatPage;
