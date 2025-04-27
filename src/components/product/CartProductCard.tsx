import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";
import Button from "@/src/components/Button/Button";
import { CartItem } from "@/src/app/products/[id]/layout";

interface CartProductCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  id: number;
  index: number;
}

export default function CartProductCard({
  imageUrl,
  title,
  rating,
  price,
  id,
  index,
}: CartProductCardProps) {
  const [cartList, setCartList] = useLocalStorage<CartItem[]>("cartList", []);
  const [totalPrice, setTotalPrice] = useState(price);
  // 현재 상품의 수량 찾기
  const currentItem = cartList.find((item) => item.item.id === id);
  const quantity = currentItem ? currentItem.quantity : 0;

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity, price]);

  const handleIncrease = () => {
    setCartList((prev) =>
      prev.map((item) =>
        item.item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = () => {
    setCartList((prev) =>
      prev.map((item) =>
        item.item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 상품을 카트에서 삭제하는 함수
  const handleRemoveItem = () => {
    setCartList((prev) => prev.filter((item) => item.item.id !== id));
  };

  return (
    <Flex
      bg="white"
      borderRadius="xl"
      gap="2"
      align="stretch"
      width="full"
      maxW="md"
      height="80px"
      shadow="0 2px 1px 0 rgba(0, 0, 0, 0.13)"
    >
      <Box
        flexShrink={0}
        position="relative"
        width="80px"
        height="full"
        borderTopLeftRadius="xl"
        borderBottomLeftRadius="xl"
        overflow="hidden"
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 100px) 100vw, 33vw"
        />
      </Box>

      <Flex direction="column" flex="1" minWidth={0}>
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
                color="#6294FF"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
                width="100%"
                display="block"
                paddingRight="2"
              >
                {title}
              </Box>
            </div>
            <Box height="12px">
              <StarRate rating={rating} />
            </Box>
            <Flex justify="space-between" mt="8px" width="full">
              <Flex alignItems="center">
                <Box
                  width="24px"
                  display="flex"
                  justifyContent="center"
                  ml="-1"
                >
                  {quantity === 1 ? (
                    // 수량이 1일 때는 쓰레기통 버튼 표시
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
                    // 수량이 2 이상일 때는 감소 버튼 표시
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
                <Box
                  fontSize="15px"
                  color="#6294FF"
                  fontWeight="bold"
                  mx="2px"
                  width="15px"
                  textAlign="center"
                >
                  {quantity}
                </Box>
                <Box width="20px" display="flex" justifyContent="center">
                  <Button
                    variant="oval"
                    onClick={handleIncrease}
                    style={{ fontSize: "11px" }}
                  >
                    +
                  </Button>
                </Box>
              </Flex>
              <Box fontSize="20px" color="#6294FF" fontWeight="500" mr="3">
                ${totalPrice.toFixed(2)}
              </Box>
            </Flex>
          </VStack>
        </HStack>
        {/* <Box
          fontWeight="semibold"
          fontSize="md"
          color="#6294FF"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          width="100%"
        >
          {title}
        </Box>

        <StarRate rating={rating} /> */}

        {/* <HStack justify="space-between" mt="3">
          <Flex gap="4px">
            <Button
              variant="circle"
              fontSize="12px"
              marginTop="4px"
              onClick={handleDecrease}
            >
              -
            </Button>
            <Box fontSize="sm" color="#6294FF" fontWeight="bold">
              {quantity}
            </Box>
            <Button
              variant="circle"
              fontSize="12px"
              marginTop="4px"
              onClick={handleIncrease}
            >
              +
            </Button>
          </Flex>
          <Box fontSize="20px" color="#6294FF" fontWeight="500" mr="3">
            ${totalPrice.toFixed(2)}
          </Box>
        </HStack> */}
      </Flex>
    </Flex>
  );
}
