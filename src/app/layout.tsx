import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { css } from "../../styled-system/css";

import { Header } from "@/src/components/Header";
import { ConversationViewer } from "@/src/components/ConversationViewer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parrodigm - The Voice Agent",
  description: "Parrodigm - The Voice Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={css({ height: "100%", width: "100%" })}>
      <body
        className={
          css({
            backgroundColor: "#808080",
            height: "100%",
            width: "100%",
          }) + ` ${geistSans.variable} ${geistMono.variable}`
        }
      >
        <div
          className={
            css({
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              width: "100%",
              height: "100%",
              maxWidth: "430px",
              maxHeight: "1000px",
              backgroundColor: "#ffffff",
              overflow: "hidden",
            }) + " app-background-animated"
          }
        >
          <Header />
          <div className={css({ flex: 1, display: "flex", overflow: "hidden" })}>{children}</div>
          <ConversationViewer css={{ height: "15em" }} />
        </div>
      </body>
    </html>
  );
}
