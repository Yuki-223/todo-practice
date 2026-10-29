import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Practice",
  description: "待办清单全栈练习项目",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
