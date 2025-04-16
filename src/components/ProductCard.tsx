import Image from "next/image";
import { Box, Flex, VStack, HStack, Text } from "@/styled-system/jsx";

interface ProductCardProps {
  index: number;
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
}

export const ProductCard = ({
  index,
  imageUrl,
  title,
  rating,
  price,
}: ProductCardProps) => {
  return (
    <Box bg="white" borderRadius="2xl" overflow="hidden" boxShadow="lg" p="4">
      <Box position="relative">
        <Image
          src={imageUrl}
          alt={title}
          style={{ borderRadius: "1rem", objectFit: "cover" }}
          width={400}
          height={300}
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

      <VStack align="start" spacing="1" mt="3">
        <Text fontWeight="semibold" fontSize="md" color="blue.600">
          {title}
        </Text>

        <Text color="blue.500" fontSize="sm">
          {"★".repeat(rating)}
        </Text>

        <HStack spacing="2">
          <Text
            as="span"
            fontSize="sm"
            color="gray.400"
            textDecoration="line-through"
          >
            ${price.toFixed(2)}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
