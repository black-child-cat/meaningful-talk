// components/Header.js
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const isIndexPage = router.pathname === "/";
  console.log(isIndexPage);
  return (
    <header
      className={`${
        isIndexPage ? "" : "shadow-sm border-b border-gray-100"
      } bg-white`}
    >
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
