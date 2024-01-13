import Link from "next/link";

import Image from "next/image";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

const IndexPage = () => {
  return (
    <div className="max-w-lg mx-auto flex flex-col">
      <div>
        <Image src={imagePath + `main.jpg`} alt="" width={700} height={700} />
      </div>
      <div className="flex flex-col py-2 px-3">
        <p className="text-center font-bold text-[2.1rem] leading-none text-gray-800 c-serif">
          無視していませんか？
        </p>
        <h1 className="pt-1 text-center text-[4.25rem] leading-none font-black text-gray-800 c-serif">
          女性<span className="text-[4rem]">の</span>負担
        </h1>
        <p className="pt-8 text-md">
          「オ●ニトーク」は誰のための何の目的のコンテンツですか？媒体がユーザーを獲得するための「無料接待ツール」ですか？店舗がコストゼロで集客を期待する「無料営業ツール」ですか？ユーザーが女性と無料で絡むための「チャットツール」ですか？
          その陰で負担を強いられているのは誰でしょうか？
          <br />
          本来は最短距離で予約に促すためのコンテンツではないでしょうか？
        </p>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <Link
          href={`chat`}
          className="btn bg-gray-800 text-white rounded-lg shadow-md h-[3.5rem] hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width={22}
            height={22}
          >
            <path d="M17.0007 1.20825 18.3195 3.68108 20.7923 4.99992 18.3195 6.31876 17.0007 8.79159 15.6818 6.31876 13.209 4.99992 15.6818 3.68108 17.0007 1.20825ZM10.6673 9.33325 15.6673 11.9999 10.6673 14.6666 8.00065 19.6666 5.33398 14.6666.333984 11.9999 5.33398 9.33325 8.00065 4.33325 10.6673 9.33325ZM11.4173 11.9999 9.18905 10.8115 8.00065 8.58325 6.81224 10.8115 4.58398 11.9999 6.81224 13.1883 8.00065 15.4166 9.18905 13.1883 11.4173 11.9999ZM19.6673 16.3333 18.0007 13.2083 16.334 16.3333 13.209 17.9999 16.334 19.6666 18.0007 22.7916 19.6673 19.6666 22.7923 17.9999 19.6673 16.3333Z"></path>
          </svg>
          <span className="text-[1.05rem]">オモニトークを試してみる</span>
        </Link>
        <p className="text-gray-500 text-sm bg-gray-100 py-2 px-4 rounded-lg">
          ここに男性が問題意識を持つような文章を入れる。ここに男性が問題意識を持つような文章を入れる。ここに男性が問題意識を持つような文章を入れる。
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
