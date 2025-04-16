import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { css } from "../../styled-system/css";
import "./globals.css";
import { Header } from "@/components/Header";

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
          className={css({
            display: "flex",
            margin: "0 auto",
            width: "100%",
            height: "100%",
            maxWidth: "430px",
            maxHeight: "900px",
            backgroundColor: "#ffffff",
            flexDirection: "column",
            overflowY: "auto",
          })}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
