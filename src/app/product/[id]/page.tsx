"use client";

import { ProductDetailCard } from "@/src/components/product/ProductDetailCard";
import { ButtonBar } from "@/src/components/Button/ButtonBar";
import { Text } from "@/src/components/Text";
import { Flex } from "@/styled-system/jsx";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

import { CartItem, Product } from "@/src/types/types";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);

  const handleAddToCart = useCallback(() => {
    if (!product) {
      return;
    }
    if (cartList.some((el) => el.product.id === product.id)) {
      setCartList((prev) =>
        prev.map((el) =>
          el.product.id === product.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        )
      );
    } else {
      setCartList((prev) => [...prev, { product: product, quantity: 1 }]);
    }
  }, [product, cartList, setCartList]);

  const handleBasketClick = useCallback(() => {
    router.push("/cart");
  }, [router]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/product?id=${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
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
    <Flex
      height="100%"
      padding="0 20px"
      direction="column"
      justify="space-between"
      paddingBottom="10"
    >
      <Flex direction="column" gap="28px" align="center">
        <ProductDetailCard key={product.id} product={product} />
        <Text
          color="#6294FF"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
        >
          {product.description}
        </Text>
      </Flex>
      <ButtonBar
        type="default"
        onBuy={() => {}}
        onAddToCart={handleAddToCart}
        onBasket={handleBasketClick}
        cartCount={cartList.reduce((acc, el) => acc + el.quantity, 0)}
      />
    </Flex>
  );
}
