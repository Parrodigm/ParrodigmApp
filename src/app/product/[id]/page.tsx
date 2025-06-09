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

import { PRODUCTS } from "@/src/app/products";
import VoiceText from "@/src/components/VoiceText";

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
        setProduct(PRODUCTS.find((product) => product.id === Number(params.id)));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <Flex direction="column" gap="28px" align="center"></Flex>;
  }

  if (!product) {
    return (
      <Flex direction="column" gap="28px" align="center">
        <Text>Product not found</Text>
      </Flex>
    );
  }

  return (
    <Flex padding="0 20px 20px 20px" direction="column" gap="1em">
      <ProductDetailCard key={product.id} product={product} />
      <div className={css({ flex: 1 })}>
        <VoiceText text={"Beautiful. Adding to cart. Oh, and good news — it’s available for same-day delivery."} fontSize="1.2em" />
      </div>
      <ButtonBar type="default" onBuy={() => {}} onAddToCart={addItemToCart} onBasket={showCart} cartCount={1} />
    </Flex>
  );
}
