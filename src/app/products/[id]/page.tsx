"use client";
import { ProductDetailCard } from "@/src/components/product/ProductDetailCard";
import { Text } from "@/src/components/Text";
import { Flex } from "@/styled-system/jsx";
import { products } from "@/src/products";
import { useParams } from "next/navigation";

export default function Results() {
  const params = useParams();
  const itemId = Number(params.id);
  return (
    <Flex direction="column" gap="28px" align="center">
      <ProductDetailCard
        key={itemId}
        id={products[itemId - 1].id}
        imageUrl={products[itemId - 1].image_url}
        title={products[itemId - 1].name}
        rating={products[itemId - 1].rating}
        price={products[itemId - 1].price}
      />
      <Text color="#6294FF" fontSize="2xl" fontWeight="bold" textAlign="center">
        This strawberry dog outfit features a soft, breathable fabric with an
        adorable red-and-green design, complete with tiny leaf accents. Perfect
        for photos, playdates, or turning heads on daily walks!
      </Text>
    </Flex>
  );
}
