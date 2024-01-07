import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChatProvider } from "../components/chat/ChatContext.js";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showFooter = !router.pathname.startsWith("/chat/");
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>オモニトーク</title>
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
