import { useCallback } from "react";

import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import { Button } from "@/src/components/Button/Button";

import { useCartState } from "@/src/stores/useCartState";

import { Product } from "@/src/types/types";

export default function CartProductCard({ index, product, quantity }: { index: number; product: Product; quantity: number }) {
  const { updateCartItem, removeCartItem } = useCartState();

  const handleIncrease = useCallback(() => {
    updateCartItem(product.id, quantity + 1);
  }, [product, quantity, updateCartItem]);

  const handleDecrease = useCallback(() => {
    updateCartItem(product.id, quantity - 1);
  }, [product, quantity, updateCartItem]);

  const handleRemoveItem = useCallback(() => {
    removeCartItem(product.id);
  }, [product, removeCartItem]);

  return (
    <Flex bg="white" borderRadius="xl" gap="2" align="stretch" width="full" maxW="md" shadow="0 2px 1px 0 rgba(0, 0, 0, 0.13)">
      <Box flexShrink={0} position="relative" width="80px" height="full" borderTopLeftRadius="xl" borderBottomLeftRadius="xl" overflow="hidden">
        <Image src={product.images[0].url} alt={product.displayName} fill style={{ objectFit: "cover" }} sizes="(max-width: 100px) 100vw, 33vw" />
      </Box>

      <Flex direction="column" flex="1" minWidth={0} padding="0.2em">
        <HStack alignItems="start" gap="1.5">
          <Flex
            marginTop="1"
            width="4px"
            height="4px"
            bg="blue.500"
            p="11px"
            borderRadius="full"
            align="center"
            justify="center"
            color="white"
            fontWeight="500"
            fontSize="15px"
          >
            {index + 1}
          </Flex>
          <VStack alignItems="start" gap="0" width="100%" pl="1">
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "29px",
              }}
            >
              <Box
                fontWeight="semibold"
                position="absolute"
                fontSize="md"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                width="100%"
                display="block"
                paddingRight="2"
              >
                {product.displayName}
              </Box>
            </div>
            <Box height="12px">
              <StarRate rating={product.rating} />
            </Box>
            <Flex justify="space-between" mt="8px" width="full">
              <Flex alignItems="center">
                <Box width="24px" display="flex" justifyContent="center" ml="-1">
                  {quantity === 1 ? (
                    <Button
                      key="quantity-button"
                      variant="trash"
                      onClick={handleRemoveItem}
                      style={{
                        transform: "scale(0.5)",
                        padding: "0",
                        transition: "none",
                        marginLeft: "-2px",
                      }}
                    />
                  ) : (
                    <Button
                      key="quantity-button"
                      variant="oval"
                      onClick={handleDecrease}
                      style={{
                        fontSize: "11px",
                        transition: "none",
                      }}
                    >
                      -
                    </Button>
                  )}
                </Box>
                <Box fontSize="15px" fontWeight="bold" mx="2px" width="15px" textAlign="center">
                  {quantity}
                </Box>
                <Box width="20px" display="flex" justifyContent="center">
                  <Button variant="oval" onClick={handleIncrease} style={{ fontSize: "11px" }}>
                    +
                  </Button>
                </Box>
              </Flex>
              <Box fontSize="20px" color="#c30010" fontWeight="500" mr="3">
                ${(product.price * quantity).toFixed(2)}
              </Box>
            </Flex>
          </VStack>
        </HStack>
      </Flex>
    </Flex>
  );
}
