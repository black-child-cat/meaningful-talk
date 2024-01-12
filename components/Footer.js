// components/Footer.js
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 text-gray-500">
      <div className="max-w-lg mx-auto">
        <div className="p-3">
          <button
            className="btn btn-outline w-full rounded-md shadow"
            onClick={() =>
              document.getElementById("feedback_modal").showModal()
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={22}
              height={22}
            >
              <path d="M4 3H20L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3ZM13 14V10H11V14H8L12 18L16 14H13ZM19.7639 7L18.7639 5H5.23656L4.23744 7H19.7639Z"></path>
            </svg>
            <span className="text-[1.05rem]">改善要望の申請フォーム</span>
          </button>
          <dialog id="feedback_modal" className="modal">
            <div className="modal-box py-3 px-5">
              <h3 className="font-bold text-lg text-gray-800">
                女性の声を機能に反映させる
              </h3>
              <p className="pb-4 pt-1 text-gray-500 text-sm">
                女性の負担が問題になっているので、女性の悩みや要望に耳を傾ける姿勢が大事。
                女性の感想や意見をフィードバックしてもらうためのフォームを用意する。
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <p className="px-4 py-4 text-sm">
          このサイトは某チャットコンテンツの問題点や課題をブラッシュアップして、改善できそうなことを形にしてみたデモサイト
        </p>
        <p className="px-2 py-3 text-sm text-gray-300">
          Copyright © 2024 - All right reserved by kurokoneko
        </p>
      </div>
    </footer>
  );
};

export default Footer;
