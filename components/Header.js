// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-lg mx-auto flex">
        <Link href="/" className="text-center mx-auto">
          <span className="c-title text-5xl text-gray-800 inline-block align-[0.5rem]">
            オ<span className="">モ</span>ニトーク
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
