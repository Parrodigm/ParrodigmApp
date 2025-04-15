"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState<string | null>(null);

  const handleLogin = (provider: string) => {
    setLoginMethod(provider);
    setTimeout(() => {
      // Navigate to main page after "login"
      router.push("/main");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <div style={{ height: "200px" }} />
      {/* 로그인 버튼들 */}
      <div
        className="button-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => handleLogin("Apple")}
          style={{
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            padding: "10px 130px",
          }} // 검정색 테두리 추가
          className="button border-2 border-black" // 검정색 테두리 추가
        >
          Apple
        </button>
        <div style={{ height: "30px" }} />
        <button
          onClick={() => handleLogin("Google")}
          style={{
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "1px",
            padding: "10px 125px",
          }}
          className="button border-2 border-black" // 검정색 테두리 추가
        >
          Google
        </button>
      </div>
      <div style={{ height: "300px" }} />
      {/* 하단 버튼 및 텍스트 영역 */}
      <div className="mt-auto flex flex-col items-center w-full pt-8 space-y-4">
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            borderTop: "1px solid black",
            paddingTop: "10px",
          }}
        />
        <div className="flex items-center justify-between w-full max-w-sm">
          <button
            className="icon-button"
            style={{ marginLeft: "5px", marginRight: "5px" }}
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
          <button className="icon-button ml-4">
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
          <button className="icon-button" style={{ marginLeft: "300px" }}>
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
        </div>

        <div className="text-center">
          {loginMethod ? (
            <p>I'll log in via {loginMethod}</p>
          ) : (
            <p>Hi! What do you want to log in with?</p>
          )}
        </div>
      </div>
    </div>
  );
}
