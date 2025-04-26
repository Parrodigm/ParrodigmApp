import Image from "next/image";
import { Box, Flex, HStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import Button from "@/src/components/Button/Button";

interface CartProductCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  id: number;
}

export default function CartProductCard({
  imageUrl,
  title,
  rating,
  price,
  id,
}: CartProductCardProps) {
  return (
    <Flex
      bg="white"
      borderRadius="xl"
      gap="2"
      align="stretch"
      width="full"
      maxW="md"
      height="80px"
    >
      <Box
        flexShrink={0}
        position="relative"
        width="85px"
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

      <Flex direction="column" flex="1" justify="center" gap="1" minWidth={0}>
        <Box
          fontWeight="semibold"
          fontSize="md"
          color="#6294FF"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          width="100%"
          mt="1"
        >
          {title}
        </Box>

        <StarRate rating={rating} />

        <HStack justify="space-between" gap="2" mt="1">
          <Button variant="cartQuantity">+</Button>
          <Box fontSize="md" color="#6294FF" fontWeight="bold" mr="3">
            ${price.toFixed(2)}
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};