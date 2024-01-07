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
            <span className="font-bold text-xs">購入枠N回分</span>
            <div className="flex items-center gap-2 justify-between">
              <p className="">トーク券 （1,500円） ×</p>
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
            <input
              type="text"
              placeholder="1234 5678 9100"
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xs">有効期限（月/年）</span>
              <input
                type="text"
                placeholder="12/34"
                className="input input-bordered w-full"
                disabled
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-bold text-xs">セキュリティコード</span>
              <input
                type="password"
                placeholder="123"
                className="input input-bordered w-full"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 pb-2">
            <span className="font-bold text-xs">カード名義</span>
            <input
              type="text"
              placeholder="OKANE SEIGI"
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <button className="btn btn-sm h-10 rounded-md shadow bg-gray-800 text-white">
            購入する
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
