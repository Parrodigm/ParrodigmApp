"use client";

import { Grid } from "@/styled-system/jsx";

import { useRouter } from "next/navigation";

import { ProductCard } from "@/src/components/product/ProductCard";

import { useProductsState } from "@/src/stores/useProductsState";

import { TEST_PRODUCTS } from "@/src/products";

export default function Results() {
  const router = useRouter();

  const { products, setProducts } = useProductsState();

  if (products.length === 0) {
    setProducts(TEST_PRODUCTS);
    //router.push("/");
  }

  return (
    <Grid columns={2} gap="4" px="20px">
      {products.map((product, index) => (
        <ProductCard key={product.id} index={index} product={product} />
      ))}
    </Grid>
  );
}
