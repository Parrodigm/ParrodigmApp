"use client";

import { Grid, Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";

import { useState, useEffect } from "react";

import { ProductCard } from "@/src/components/Product/ProductCard";

import { useProductsState } from "@/src/stores/useProductsState";

import { Product } from "@/src/types/types";

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${productIds.map((id) => `id=${id}`).join("&")}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productIds]);

  if (loading) {
    return (
      <Flex direction="column" gap="28px" align="center">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return (
    <Grid columns={2} gap="4" px="20px" height="fit-content">
      {products.map((product, index) => (
        <ProductCard key={product.id} index={index} product={product} />
      ))}
    </Grid>
  );
}
