/** @type {import('next').NextConfig} */
const nextConfig = {};
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // GitHub Pages用に設定
  assetPrefix: isProd ? "/meaningful-talk/" : "",
  basePath: isProd ? "/meaningful-talk" : "",
  output: "export",
};
