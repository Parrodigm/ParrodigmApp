"use client";
import { ProductDetailCard } from "@/src/components/product/ProductDetailCard";
import { Box, Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { CartItem } from "../products/[id]/layout";
import { products } from "@/src/products";
import { Text } from "@/src/components/Text";
import Trash from "@/public/Trash.svg";
export default function Basket() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  console.log(cartList);
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
    >
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
        <Trash />
      </Flex>
      {/* {cartList.map((el) => {
        const itemId = el.item.id;
        return (
          <ProductDetailCard
            key={itemId}
            id={itemId}
            imageUrl={products[itemId - 1].image_url}
            title={products[itemId - 1].name}
            rating={products[itemId - 1].rating}
            price={products[itemId - 1].price}
          />
        );
      })} */}
    </Flex>
  );
}
