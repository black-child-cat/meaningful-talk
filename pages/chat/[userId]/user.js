import { useRouter } from "next/router";
import MyTabs from "../../../components/MyTabs";
import MessagesDisplay from "../../../components/chat/MessagesDisplay.js";
import SendMessage from "../../../components/chat/SendMessage.js";
import Link from "next/link";

import users from "../../../data/users";

const UserSubPage = () => {
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
      <MyTabs type={"user"} user={user} />
      <div className="p-3 flex-grow">
        <div className="bg-gray-100 rounded-lg p-3 min-h-[70vh]">
          <div className="bg-yellow-100 border border-yellow-500 p-3 mb-3 rounded-md sticky top-3 z-10">
            <div className="flex gap-1 items-center pb-1">
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
            <p className="text-xs text-gray-600">
              誹謗中傷や迷惑行為などのメッセージは禁止です。禁止行為を行った場合、強制退会ならびに女性から開示請求の申請があった場合は可及的速やか情報提供に応じます。メッセージを送信すると同意したものとします。
            </p>
          </div>
          <MessagesDisplay roomId={user.id} />
        </div>
      </div>
      <SendMessage sender={user.id} address="lady" />
    </div>
  );
};

export default UserSubPage;