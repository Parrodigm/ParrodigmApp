"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";

import { ProductDetailCard } from "@/src/components/Product/ProductDetailCard";
import { ButtonBar } from "@/src/components/Button/ButtonBar";
import { Text } from "@/src/components/Text";
import { Flex } from "@/styled-system/jsx";

import { css } from "@/../../styled-system/css";

import { useCartState } from "@/src/stores/useCartState";
import { usePageController } from "@/src/hooks/usePageController";

import { Product } from "@/src/types/types";

export default function Page() {
  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const { addCartItem, getCartItemCount } = useCartState();
  const { showCart } = usePageController();

  const addItemToCart = useCallback(() => {
    if (!product) {
      return;
    }
    addCartItem(product.id, 1);
  }, [product, addCartItem]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?id=${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <Flex direction="column" gap="28px" align="center">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  if (!product) {
    return (
      <Flex direction="column" gap="28px" align="center">
        <Text>Product not found</Text>
      </Flex>
    );
  }

  return (
    <Flex padding="0 20px" direction="column" gap="1em">
      <ProductDetailCard key={product.id} product={product} />
      <div className={css({ flex: 1, fontSize: "1.2em", fontWeight: "bold", textAlign: "center", color: "#6294FF", overflow: "scroll" })}>
        {product.description}
      </div>
      <ButtonBar type="default" onBuy={() => {}} onAddToCart={addItemToCart} onBasket={showCart} cartCount={getCartItemCount()} />
    </Flex>
  );
}
