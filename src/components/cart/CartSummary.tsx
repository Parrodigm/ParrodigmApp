import { Box, Flex } from "@/styled-system/jsx";
import { useLocalStorage } from "usehooks-ts";
import { useState, useEffect } from "react";

import { CartItem } from "@/src/types/types";

export const CartSummary = () => {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(5.99); // 기본 배송비
  const [total, setTotal] = useState(0);

  // 총액 계산
  useEffect(() => {
    const calculateSubtotal = () => {
      let sum = 0;
      cartList.forEach((item) => {
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
  }, [cartList]);

  return (
    <Box bg="white" p="2" width="full" mt="2" mb="2">
      <Flex justify="start" mb="1">
        <Box color="#6294FF" fontSize="20px">
          SubTotal:&nbsp;
        </Box>
        <Box fontWeight="normal" color="#6294FF" fontSize="20px">
          ${subtotal.toFixed(2)}
        </Box>
      </Flex>

      <Flex justify="start" mb="1">
        <Box color="#6294FF" fontSize="20px">
          Shipping Fee:&nbsp;
        </Box>
        <Box fontWeight="normal" color="#6294FF" fontSize="20px">
          ${shipping.toFixed(2)}
        </Box>
      </Flex>

      {/* <Divider my="3" borderColor="#E2E8F0" /> */}

      <Flex justify="start" mb="1" mt="2">
        <Box color="#6294FF" fontSize="30px" fontWeight="bold">
          Total:&nbsp;
        </Box>
        <Box fontWeight="bold" color="#6294FF" fontSize="30px">
          ${total.toFixed(2)}
        </Box>
      </Flex>
    </Box>
  );
};
