"use client";
import CartProductCard from "@/src/components/product/CartProductCard";
import { Box, Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { CartItem } from "../products/[id]/layout";
import { products } from "@/src/products";
import { Text } from "@/src/components/Text";
import Button from "@/src/components/Button/Button";
import { CartSummary } from "@/src/components/cart/CartSummary";

export default function Basket() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  console.log(cartList);
  // 장바구니 비우기 함수
  const handleClearCart = () => {
    setCartList([]);
  };
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
            {cartList.map((el, index) => {
              const itemId = el.item.id;
              return (
                <CartProductCard
                  key={itemId}
                  id={itemId}
                  index={index}
                  imageUrl={products[itemId - 1].image_url}
                  title={products[itemId - 1].name}
                  rating={products[itemId - 1].rating}
                  price={products[itemId - 1].price}
                />
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      {/* 장바구니 요약 컴포넌트 */}
      {cartList.length > 0 && <CartSummary />}
    </Flex>
  );
}
