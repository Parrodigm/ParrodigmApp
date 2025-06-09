import { useState, useEffect } from "react";

import { Box, Flex } from "@/styled-system/jsx";

import { Product } from "@/src/types/types";

export const CartSummary = ({ cartProducts }: { cartProducts: { product: Product; quantity: number }[] }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(5.99); // 기본 배송비
  const [total, setTotal] = useState(0);

  // 총액 계산
  useEffect(() => {
    const calculateSubtotal = () => {
      let sum = 0;
      cartProducts.forEach((item) => {
        sum += item.product.price * item.quantity;
      });
      return sum;
    };

    const newSubtotal = calculateSubtotal();
    setSubtotal(newSubtotal);
    // 무료 배송 기준액 (300달러 이상 구매 시)
    const newShipping = newSubtotal >= 300 ? 0 : 5.99;
    setShipping(newShipping);
    // 총 결제 금액
    setTotal(newSubtotal + newShipping);
  }, [cartProducts]);

  return (
    <Box padding="1em 1.5em" backgroundColor="#ffffff" width="full" mt="2" mb="2" borderRadius="0.8em">
      <Flex justify="start" mb="1">
        <Box fontSize="1em">SubTotal:&nbsp;</Box>
        <Box fontWeight="normal" fontSize="1em">
          ${subtotal.toFixed(2)}
        </Box>
      </Flex>

      <Flex justify="start" mb="1">
        <Box fontSize="1em">Shipping Fee:&nbsp;</Box>
        <Box fontWeight="normal" fontSize="1em">
          ${shipping.toFixed(2)}
        </Box>
      </Flex>

      <Flex justify="start" mb="1" mt="2">
        <Box fontSize="1.5em" fontWeight="bold">
          Total:&nbsp;
        </Box>
        <Box fontWeight="bold" fontSize="1.5em">
          ${total.toFixed(2)}
        </Box>
      </Flex>
    </Box>
  );
};
