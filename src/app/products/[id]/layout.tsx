"use client";

import { ButtonBar } from "@/src/components/Button/ButtonBar";
import { Flex } from "@/styled-system/jsx";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export interface CartItem {
  item: {
    id: number;
  };
  quantity: number;
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const itemId = Number(params.id);
  const handleBasketClick = () => {
    router.push("/cart");
  };

  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);

  //장바구니 로직
  const handleAddToCart = (itemId: number) => {
    // 이미 아이템 들어 있으면 오른쪽 장바구니버튼 숫자만 +1 해주는 것
    if (cartList.some((el) => el.item.id === itemId)) {
      setCartList((prev) =>
        prev.map((el) =>
          el.item.id === itemId ? { ...el, quantity: el.quantity + 1 } : el
        )
      );
      // 그렇지 않다면 아이템을 장바구니 리스트에 추가해줌!
    } else {
      setCartList((prev) => [...prev, { item: { id: itemId }, quantity: 1 }]);
    }
  };

  return (
    <Flex
      height="100%"
      padding="0 20px"
      direction="column"
      justify="space-between"
      paddingBottom="10"
    >
      {children}
      <ButtonBar
        type="default"
        onBuy={() => {}}
        onAddToCart={() => handleAddToCart(itemId)}
        onBasket={handleBasketClick}
        cartCount={cartList.reduce((acc, el) => acc + el.quantity, 0)}
      />
    </Flex>
  );
}
