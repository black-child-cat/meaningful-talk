function Settlement() {
  return (
    <dialog id="settlement_modal" className="modal">
      <div className="modal-box py-3 px-4">
        <h3 className="font-bold text-lg">トーク制限を解除する</h3>
        <p className="py-2 text-xs">
          「トーク券」を追加購入することでメッセージ送信回数を増やせます。女性の返信を約束するものではありません。また、ユーザーランクに応じて購入金額が変動します。
        </p>
        <div className="flex flex-col gap-2 border-t border-gray-100 pt-2">
          <div className="flex flex-col gap-1 border-b border-gray-100">
            <span className="font-bold text-xs">購入枚数</span>
            <div className="flex items-center gap-2 justify-between bg-gray-100 p-1 rounded-md">
              <p className="pl-1">トーク券 （1,500円） ×</p>
              <select className="select select-bordered select-sm">
                <option disabled selected>
                  1枚
                </option>
                <option>2枚</option>
                <option>3枚</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">合計金額</p>
              <p className="font-bold text-[1.35rem]">
                1500<span className="text-sm pl-1">円</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold text-xs">カード番号</span>
            <div className="relative text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="currentColor"
                className="absolute inset-y-3 left-3"
              >
                <path d="M22.0049 9.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V9.99979H22.0049ZM22.0049 7.99979H2.00488V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V7.99979ZM15.0049 15.9998V17.9998H19.0049V15.9998H15.0049Z"></path>
              </svg>
              <input
                type="text"
                placeholder="1234 5678 9100"
                className="input input-bordered w-full pl-11 text-[1.25rem]"
                value={`1234 5678 9100`}
                disabled
              />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xs">有効期限（月/年）</span>
              <input
                type="text"
                placeholder="12/34"
                value="12/34"
                className="input input-bordered w-full text-lg"
                disabled
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xs">セキュリティコード</span>
              <input
                type="password"
                placeholder="123"
                value="123"
                className="input input-bordered w-full text-lg"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <span className="font-bold text-xs">カード名義</span>
            <input
              type="text"
              placeholder="OKANE SEIGI"
              value="OKANE SEIGI"
              className="input input-bordered w-full text-lg"
              disabled
            />
          </div>
          <button className="btn btn-sm h-12 rounded-md shadow bg-gray-800 text-white">
            <span className="text-lg">購入する</span>
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Settlement;
