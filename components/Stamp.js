import Image from "next/image";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

const Stamp = () => {
  return (
    <dialog id="stamp_modal" className="modal">
      <div className="modal-box py-3 px-4">
        <h3 className="font-bold text-lg">スタンプ</h3>
        <p className="py-2 text-xs">
          メッセージだけでなく用意されたスタンプも送れるようにする。文章を考える手間を軽減しつつ、相手に返答を行う負担もワンアクションで行える。
        </p>
        <div className="flex flex-wrap justify-between py-2">
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-01.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-02.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-03.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-04.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-05.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
          <div className="w-1/3 p-1">
            <Image
              src={`${imagePath}stamp/stamp-06.png`}
              width={160}
              height={160}
              className="rounded-lg overflow-hidden border"
            />
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Stamp;
