"use client";

import { useCallback, useEffect, useState } from "react";

import CartProductCard from "@/src/components/Product/CartProductCard";
import { Box, Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";
import { Button } from "@/src/components/Button/Button";
import { ButtonBar } from "@/src/components/Button/ButtonBar";

import { CartSummary } from "@/src/components/Cart/CartSummary";

import { useCartState } from "@/src/stores/useCartState";
import { usePageController } from "@/src/hooks/usePageController";

import { Product } from "@/src/types/types";

import { PRODUCTS } from "@/src/app/products";

export default function Page() {
  const { cart, clearCart } = useCartState();
  const { showProducts } = usePageController();
  const [products, setProducts] = useState<{ [key: number]: Product }>({});
  const [loading, setLoading] = useState(false);

  const handleClose = useCallback(() => {
    showProducts();
  }, [showProducts]);

  const purchaseHandler = useCallback(() => {
    console.log("Purchase");
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      if (cart.length === 0) {
        return;
      }
      setLoading(true);
      try {
        const data = PRODUCTS;
        setProducts(data.reduce((acc, product) => ({ ...acc, [product.id]: product }), {}));
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [cart]);

  if (loading) {
    return <Flex direction="column" gap="28px" align="center"></Flex>;
  }

  const cartProducts: {
    product: Product;
    quantity: number;
  }[] = cart
    .map((cartItem) => {
      if (products[cartItem.productId]) {
        return {
          product: products[cartItem.productId],
          quantity: cartItem.quantity,
        };
      }
      return null;
    })
    .filter((product) => product !== null);

  return (
    <Flex width="100%" direction="column" padding="1.5em" position="relative" gap="1em">
      <Flex direction="column" align="center" width="100%" marginBottom="auto">
        <Flex justifyContent="space-between" width="100%">
          <Text fontSize="24px" fontWeight="semibold">
            Cart
          </Text>
          <Button variant="trash" onClick={clearCart} />
        </Flex>
        <Flex direction="column" width="100%">
          <Flex direction="column" gap="15px" align="center" width="100%" marginTop="20px">
            {cartProducts.map((cartProduct, index) => (
              <CartProductCard key={cartProduct.product.id} index={index} product={cartProduct.product} quantity={cartProduct.quantity} />
            ))}
          </Flex>
        </Flex>
      </Flex>
      {cartProducts.length > 0 && <CartSummary cartProducts={cartProducts} />}
      <ButtonBar type="cart" onBuy={purchaseHandler} onClickX={handleClose} />
    </Flex>
  );
}
