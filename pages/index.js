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
          女性の負担
        </h1>
        <p className="pt-8 text-md">
          ここに男性が問題意識を持つような文章を入れる。ここに男性が問題意識を持つような文章を入れる。ここに男性が問題意識を持つような文章を入れる。
        </p>
      </div>
      <div className="flex flex-col gap-3 p-3">
        <Link
          href={`chat`}
          className="btn bg-gray-800 text-white rounded-lg shadow-md"
        >
          <span className="text-[1.05rem]">オモニトークを試してみる</span>
        </Link>
        <p className="text-gray-500 text-sm bg-gray-100 py-2 px-4 rounded-lg">
          オモニトークは某オ〇ニトークを参考に、「重荷」とどう向き合うか？をテーマに既存コンテンツのブラッシュアップを形にしたサンプルです。
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
