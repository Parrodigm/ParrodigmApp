"use client";

import { useCallback } from "react";

import CartProductCard from "@/src/components/product/CartProductCard";
import { Box, Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { Text } from "@/src/components/Text";
import Button from "@/src/components/Button/Button";

import { CartSummary } from "@/src/components/cart/CartSummary";

import { CartItem } from "@/src/types/types";

export default function Basket() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);

  const handleClearCart = useCallback(() => {
    setCartList([]);
  }, [setCartList]);

  return (
    <Flex
      direction="column"
      align="center"
      height="100%"
      marginTop="10px"
      borderTop="3px solid #6294FF"
      padding="0 20px"
      borderTopRadius="40px"
      position="relative"
      justifyContent="space-between"
    >
      <Flex direction="column" align="center" width="100%">
        <Box
          position="absolute"
          top="-4px"
          width="120px"
          height="6px"
          bg="#6294FF"
          borderRadius="full"
        />
        <Flex justifyContent="space-between" width="100%" marginTop="20px">
          <Text color="#6294FF" fontSize="24px" fontWeight="semibold">
            Shopping Cart
          </Text>
          <Button variant="trash" onClick={handleClearCart} />
        </Flex>
        <Flex direction="column" width="100%">
          <Flex
            direction="column"
            gap="15px"
            align="center"
            width="100%"
            marginTop="20px"
          >
            {cartList.map((cartItem, index) => {
              return (
                <CartProductCard
                  key={cartItem.product.id}
                  index={index}
                  product={cartItem.product}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      {cartList.length > 0 && <CartSummary />}
    </Flex>
  );
}
