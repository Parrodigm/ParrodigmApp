import { useEffect, useCallback } from "react";

import { useRouter, usePathname } from "next/navigation";

import { usePageState } from "../stores/usePageState";

import { PageInfo } from "@/src/types/types";

export const usePageController = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { currentPageInfo, setCurrentPageInfo } = usePageState();

  const getInitialPageInfo = useCallback((): PageInfo => {
    if (pathname === "/") {
      return { type: "home" };
    } else if (pathname === "/conversation") {
      return { type: "conversation" };
    } else if (pathname === "/products") {
      return { type: "product-list" };
    } else if (pathname.startsWith("/product/")) {
      const productId = parseInt(pathname.split("/").pop() || "0");
      return { type: "product-details", productId };
    } else if (pathname === "/cart") {
      return { type: "cart" };
    }
    return { type: "home" };
  }, [pathname]);

  useEffect(() => {
    setCurrentPageInfo(getInitialPageInfo());
  }, [getInitialPageInfo, setCurrentPageInfo]);

  const showConversation = useCallback(() => {
    setCurrentPageInfo({ type: "conversation" });
    router.replace("/conversation");
  }, [router, setCurrentPageInfo]);

  const showProducts = useCallback(() => {
    setCurrentPageInfo({ type: "product-list" });
    router.replace("/products");
  }, [router, setCurrentPageInfo]);

  const showProductDetails = useCallback(
    (productId: number) => {
      setCurrentPageInfo({ type: "product-details", productId });
      router.replace(`/product/${productId}`);
    },
    [router, setCurrentPageInfo]
  );

  const showCart = useCallback(() => {
    setCurrentPageInfo({ type: "cart" });
    router.replace("/cart");
  }, [router, setCurrentPageInfo]);

  return {
    currentPageInfo,
    showConversation,
    showProducts,
    showProductDetails,
    showCart,
  };
};
