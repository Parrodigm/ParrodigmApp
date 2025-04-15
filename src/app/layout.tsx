import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parrot - The Voice Agent",
  description: "Parrot - The Voice Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          minHeight: "calc(100vh - 140px)",
          margin: 0, // 기본 여백 제거
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // 수직 중앙 정렬
          width: "100%", // 전체 화면 너비 사용
          maxWidth: "400px", // 웹앱 최대 너비 설정
          marginLeft: "auto", // 가운데 정렬 (좌우 여백 자동)
          marginRight: "auto", // 가운데 정렬 (좌우 여백 자동)
          overflowX: "hidden", // 가로 스크롤 방지
        }}
      >
        <header className="px-4 py-4 border-b border-gray-200 w-full ">
          <Link href="/main">
            {" "}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                margin: "15px 2px",
              }}
            >
              <Image
                src="/parrot.png"
                alt="Parrodigm Logo"
                width={40}
                height={40}
                priority
              />
              <h1 className="text-2xl font-bold ml-2">Parrodigm</h1>
            </div>
          </Link>
        </header>
        {children}
        <footer className="px-4 py-4 border-t border-gray-200 w-full">
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              borderTop: "1px solid black",
              paddingTop: "10px",
              marginTop: "15px",
            }}
          />
          <div className="flex justify-between items-center">
            <button
              className="flex items-center justify-center w-10 h-10"
              style={{ marginRight: "10px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <button className="flex items-center justify-center w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button
              className="flex items-center justify-center w-10 h-10"
              style={{ marginLeft: "300px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 4v6h-6"></path>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </button>
            <div className="text-center">
              <p>What do you want to log in with?</p>
              <p className="text-blue-600 justify-end">
                I'll log in via Google
              </p>
            </div>
          </div>
          <p className="text-center mt-2">This is a recommended product.</p>
        </footer>
      </body>
    </html>
  );
}
