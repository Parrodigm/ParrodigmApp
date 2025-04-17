import Image from "next/image";
import { Box, Flex, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import Link from "next/link";

interface ProductCardProps {
  index: number;
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  id: number;
}

export const ProductCard = ({
  index,
  imageUrl,
  title,
  rating,
  price,
  id,
}: ProductCardProps) => {
  return (
    <Link href={`/products/${id}`}>
      {" "}
      <Box
        bg="white"
        overflow="hidden"
        borderRadius="xl"
        width="100%"
        height={245}
      >
        <Box position="relative" width="100%" height="175px" overflow="hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 175px"
            style={{
              objectFit: "cover",
            }}
            priority
          />
          <Flex
            position="absolute"
            top="2"
            left="2"
            width="6"
            height="6"
            bg="blue.500"
            borderRadius="full"
            align="center"
            justify="center"
            color="white"
            fontWeight="bold"
            fontSize="sm"
          >
            {index}
          </Flex>
        </Box>
        <VStack alignItems="start" gap="0.05">
          <Box
            fontWeight="semibold"
            fontSize="md"
            color="#6294FF"
            px="2"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            width="100%"
            display="block"
          >
            {title}
          </Box>
          <Box px="2">
            <StarRate rating={rating} />
          </Box>
          <Box fontSize="sm" color="#6294FF" alignSelf="flex-end" mr="2">
            ${price.toFixed(2)}
          </Box>
        </VStack>
      </Box>
    </Link>
  );
};
