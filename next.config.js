/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // GitHub Pages用に設定
  assetPrefix: isProd ? "/meaningful-talk/" : "",
  basePath: isProd ? "/meaningful-talk" : "",
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/chat": { page: "/chat" },
      // 他の静的ページ...
    };

    // 予め定義されたユーザーIDのリスト
    const userIds = ["01", "02", "03", "04", "05", "06", "07"];

    // 各ユーザーIDに対してパスを生成
    userIds.forEach((userId) => {
      paths[`/chat/${userId}`] = { page: "/chat/[userId]", query: { userId } };
      paths[`/chat/${userId}/user`] = {
        page: "/chat/[userId]/user",
        query: { userId },
      };
    });

    return paths;
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};
