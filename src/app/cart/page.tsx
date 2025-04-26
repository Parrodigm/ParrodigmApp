"use client";
import CartProductCard from "@/src/components/product/CartProductCard";
import { Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { CartItem } from "../products/[id]/layout";
import { products } from "@/src/products";
// import { CartProductCard } from "@/src/components/product/CartProductCard";

export default function Basket() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  console.log(cartList);
  return (
    <Flex direction="column" gap="28px" align="center">
      {cartList.map((el) => {
        const itemId = el.item.id;
        return (
          <CartProductCard
            key={itemId}
            id={itemId}
            imageUrl={products[itemId - 1].image_url}
            title={products[itemId - 1].name}
            rating={products[itemId - 1].rating}
            price={products[itemId - 1].price}
          />
        );
      })}
    </Flex>
  );
}
