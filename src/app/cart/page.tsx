"use client";
import { ProductDetailCard } from "@/src/components/product/ProductDetailCard";
import { Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { CartItem } from "../products/[id]/layout";

const products = [
  {
    id: 2,
    name: "CuteBone Dino Big Dog Pajamas, Pink & White, X-Large",
    price: 29.0,
    rating: 0.0,
    image_url:
      "https://image.chewy.com/catalog/general/images/moe/06757779-ffce-7d2e-8000-ade3ac88870b._AC_SL600_V528090960_.jpg",
    description:
      "    These pajamas are designed for medium to large-sized pups, providing comfort, warmth, and style.\n    Made from soft and stretchy fabric, these PJs were made for maximum comfort and flexibility.\n    For your convenience, these PJs have a button/snap closure for easy on and off.\n    These pup PJs are ideal for keeping your furbaby warm during cooler nights.\n    Best of all, these versatile pajamas can be used for lounging, extra warmth, or as a stylish everyday outfit.\n\nRemember to measure your pet for the perfect fit. Treat your furry friend to the ultimate comfort and style with CuteBone Dino Big Dog Pajamas. These pajamas are specially designed for medium to large-sized pups, like pitbulls and golden retrievers, to provide warmth, coziness, and a touch of fashion. The soft and stretchy fabric allows your furbaby to move freely and comfortably, making these PJs perfect for lounging at home or for extra warmth on chilly nights. With a convenient button/snap closure, these pajamas are easy to put on and take off, so they\u2019re a practical choice for pet parents. Whether your tail wagger needs extra warmth, protection from allergens, or a stylish outfit for everyday wear, these pajamas have got them covered. The durable material ensures long-lasting comfort without restricting movement, so they\u2019re grrrr-eat for bedtime, lounging, or just a relaxing day at home.",
  },
];

export default function Basket() {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  console.log(cartList);
  return (
    <Flex direction="column" gap="28px" align="center">
      {cartList.map((el) => (
        <ProductDetailCard
          id={el.item.id}
          imageUrl={products[0].image_url}
          title={products[0].name}
          rating={products[0].rating}
          price={products[0].price}
        />
      ))}
    </Flex>
  );
}
