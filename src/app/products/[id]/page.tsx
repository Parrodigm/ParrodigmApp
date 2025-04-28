"use client";
import { ProductDetailCard } from "@/src/components/product/ProductDetailCard";
import { Text } from "@/src/components/Text";
import { Flex } from "@/styled-system/jsx";
import { products } from "@/src/products";
import { useParams } from "next/navigation";

export default function Results() {
  const params = useParams();
  const itemId = Number(params.id);
  const product = products[itemId - 1];
  
  // Get the main image URL and additional image URLs from the images array
  const mainImageUrl = product.images[0]?.url || "";
  const additionalImageUrls = product.images.slice(1).map(img => img.url);
  
  return (
    <Flex direction="column" gap="28px" align="center">
      <ProductDetailCard
        key={itemId}
        id={product.id}
        imageUrl={mainImageUrl}
        title={product.displayName}
        rating={product.rating}
        price={product.price}
        additionalImages={additionalImageUrls}
      />
      <Text color="#6294FF" fontSize="2xl" fontWeight="bold" textAlign="center">
        This strawberry dog outfit features a soft, breathable fabric with an
        adorable red-and-green design, complete with tiny leaf accents. Perfect
        for photos, playdates, or turning heads on daily walks!
      </Text>
    </Flex>
  );
}
