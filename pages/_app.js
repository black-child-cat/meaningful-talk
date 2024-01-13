import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

import Image from "next/image";
const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChatProvider } from "../components/chat/ChatContext.js";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showFooter = !router.pathname.startsWith("/chat/");
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 一旦開発終了します。
      <div
        role="alert"
        className="alert alert-warning rounded-none p-1 gap-1 flex items-center justify-center bg-yellow-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0"
          fill="none"
          viewBox="0 -2 24 24"
          width={20}
          height={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="text-[.9rem]">開発中！お問い合わせは黒子猫まで</span>
      </div>
      */}
      <Head>
        <title>
          オモニトーク |
          改善案をブラッシュアップして負担軽減の具体策を考えるサイト
        </title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://black-child-cat.github.io/meaningful-talk/"
        />
        <meta property="og:title" content="オモニトーク" />
        <meta
          property="og:description"
          content="改善案をブラッシュアップして負担軽減の具体策を考えるサイト"
        />
        <meta
          property="og:image"
          content={`https://black-child-cat.github.io/meaningful-talk/images/ogp.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://black-child-cat.github.io/meaningful-talk/"
        />
        <meta property="twitter:title" content="オモニトーク" />
        <meta
          property="twitter:description"
          content="改善案をブラッシュアップして負担軽減の具体策を考えるサイト"
        />
        <meta
          property="twitter:image"
          content={`https://black-child-cat.github.io/meaningful-talk/images/ogp.png`}
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐈‍⬛</text></svg>"
        ></link>
      </Head>
      <Header />
      <ChatProvider className="max-w-lg w-full mx-auto border-x border-gray-100 flex-grow">
        <Component {...pageProps} />
      </ChatProvider>
      {showFooter && <Footer />}
    </div>
  );
}

export default MyApp;
