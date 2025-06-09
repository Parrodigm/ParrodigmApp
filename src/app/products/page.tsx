"use client";

import { Grid, Flex } from "@/styled-system/jsx";

import { useState, useEffect } from "react";

import { ProductCard } from "@/src/components/Product/ProductCard";

import { useProductsState } from "@/src/stores/useProductsState";

import { Product } from "@/src/types/types";

import { PRODUCTS } from "@/src/app/products";
import VoiceText from "@/src/components/VoiceText";

export default function Results() {
  const { productIds, setProductIds } = useProductsState();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  if (productIds.length === 0) {
    setProductIds([1, 2, 3, 4]);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      if (productIds.length === 0) {
        return;
      }
      setLoading(true);
      try {
        setProducts(PRODUCTS);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productIds]);

  if (loading) {
    return <Flex direction="column" gap="28px" align="center"></Flex>;
  }

  return (
    <Flex direction="column" gap="2em" align="center">
      <Grid marginTop="2em" columns={2} gap="4" px="20px" height="fit-content">
        {products.map((product, index) => (
          <ProductCard key={product.id} index={index} product={product} />
        ))}
      </Grid>
      <VoiceText text="Here are your top four." />
    </Flex>
  );
}
