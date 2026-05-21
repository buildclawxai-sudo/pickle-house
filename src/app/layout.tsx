import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "匹克屋 Pickle House — 專為新手挑選的質感球拍與生活選物",
  description: "匹克屋是台灣匹克球品牌代理與選物平台，專為新手挑選質感球拍，讓匹克球成為生活的一部分。",
  keywords: ["匹克球", "pickleball", "球拍", "Enhance", "台灣", "新手", "質感"],
  authors: [{ name: "匹克屋 Pickle House" }],
  openGraph: {
    title: "匹克屋 Pickle House — 專為新手挑選的質感球拍與生活選物",
    description: "匹克屋是台灣匹克球品牌代理與選物平台，專為新手挑選質感球拍，讓匹克球成為生活的一部分。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}