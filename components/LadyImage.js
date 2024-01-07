// components/MyImageComponent.js
import Image from "next/image";

const MyImageComponent = () => (
  <Image
    src="/images/lady-02.jpg" // 画像のパス
    // src="/next.svg"
    className="border border-gray-300 rounded-full"
    alt="女性のアイコン画像" // 画像の説明
    width={200} // 画像の幅
    height={200} // 画像の高さ
  />
);

export default MyImageComponent;
