import { useRouter } from "next/router";
import MyTabs from "../../../components/MyTabs";
import MessagesDisplay from "../../../components/chat/MessagesDisplay.js";
import SendMessage from "../../../components/chat/SendMessage.js";

import users from "../../../data/users";

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

const UserSubPage = ({ user }) => {
  // `user` は `getStaticProps` から直接受け取る
  return (
    <div className="bg-white">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="border-b border-gray-100 px-3 py-1">
          <p className="text-gray-500 text-center text-sm">
            「{user.name}」とのチャット画面
          </p>
        </div>
        <MyTabs type={"user"} user={user} />
        <div className="p-3 pt-2 flex-grow">
          <div className="bg-gray-100 rounded-lg p-3 min-h-[70vh]">
            <div className="sticky top-3 z-10 flex flex-col gap-3">
              <div className="collapse bg-yellow-100 border border-yellow-500 p-3 mb-3 rounded-md">
                <input type="checkbox" className="min-h-0 h-auto" />
                <div className="collapse-title flex gap-1 items-center p-0 text-gray-800 min-h-0 h-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -1 24 24"
                    fill="currentColor"
                    width={18}
                    height={18}
                  >
                    <path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path>
                  </svg>
                  <h3 className="font-bold">注意事項</h3>
                </div>
                <div className="collapse-content p-0 m-0">
                  <p className="text-xs text-gray-600 pt-3">
                    誹謗中傷や迷惑行為などのメッセージは禁止です。禁止行為を行った場合、強制退会ならびに女性から開示請求の申請があった場合は可及的速やか情報提供に応じます。メッセージを送信すると同意したものとします。
                  </p>
                </div>
              </div>
            </div>
            <MessagesDisplay roomId={user.id} />
          </div>
        </div>
        <SendMessage sender={user.id} address="lady" />
      </div>
    </div>
  );
};

export default UserSubPage;
