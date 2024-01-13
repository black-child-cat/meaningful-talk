import React, { useState } from "react";
import UserList from "../components/UserList";
import users from "../data/users";

const IndexPage = () => {
  const [suitabilityFilter, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="max-w-lg mx-auto flex flex-col">
      <div className="py-2 px-3">
        <p className="text-gray-700 font-bold text-center pb-1">
          ユーザーランク=女性評価の降順に並んでるよ
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
      <div className="border-t border-gray-100 flex gap-3 justify-between items-center px-3 py-1">
        <div className="">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-gray-600 pr-2">
                適性良客フィルタ
              </span>
              <input
                type="checkbox"
                checked={suitabilityFilter}
                onChange={handleCheckboxChange}
                className="checkbox checkbox-sm rounded"
              />
            </label>
          </div>
        </div>
        <div className="">
          <button
            className="btn btn-sm shadow-none rounded"
            onClick={() =>
              document.getElementById("display_settings").showModal()
            }
          >
            <span className="text-sm text-gray-500">表示設定</span>
          </button>
          <dialog id="display_settings" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">表示設定</h3>
              <p className="py-4">内容に応じてユーザー側の表示を切り替える。</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
      <UserList users={users} suitabilityFilter={suitabilityFilter} />
    </div>
  );
};

export default IndexPage;
