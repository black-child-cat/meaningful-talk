// pages/index.js
import UserList from "../components/UserList";
import users from "../data/users";
const IndexPage = () => {
  return (
    <div className="max-w-lg mx-auto flex flex-col">
      <div className="py-2 px-3">
        <p className="text-gray-700 font-bold text-center pb-1">
          仮想ユーザーランクの高い順に並んでるよ
        </p>
        <p className="text-gray-500 text-xs mb-3">
          予約回数やプレイ後の女性レビューの評価がユーザーランクに反映される想定だよ。
          予約をしないのにダル絡みが多かったり、利用時のマナーや女性評価が悪いと必然的にランクは下がるよ！
        </p>
        {/* <div
          role="alert"
          className="alert flex gap-2 rounded-lg py-2 bg-yellow-100 border-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div className="w-75">
            <h3 className="">ユーザーランク</h3>
            <p className="text-left text-xs leading-tight">
              ユーザーランク＝女性評価に応じて、ユーザー側の出来るアクションが変わるよ。
              ユーザーランクが高いほど優遇されて、低いほど冷遇されるから、綺麗に遊ぶことを重荷トークを通じて促せるよ。
            </p>
          </div>
        </div> */}
      </div>
      <UserList users={users} />
    </div>
  );
};

export default IndexPage;
