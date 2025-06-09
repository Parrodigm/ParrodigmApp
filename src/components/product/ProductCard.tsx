import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import Link from "next/link";

import { Product } from "@/src/types/types";

export const ProductCard = ({ index, product }: { index: number; product: Product }) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Box bg="white" overflow="hidden" borderRadius="xl" width="100%" shadow="0 2px 1px 0 rgba(0, 0, 0, 0.13)">
        <Box position="relative" width="100%" height="175px" overflow="hidden">
          <Image
            src={product.images[0].url}
            alt={product.displayName}
            fill
            sizes="(max-width: 768px) 100vw, 175px"
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </Box>
        <VStack alignItems="start" gap="0.3em">
          <HStack alignItems="start" gap="0.3em">
            <Flex
              marginStart="8px"
              marginTop="8px"
              width="4"
              height="4"
              bg="blue.500"
              p="3"
              borderRadius="full"
              align="center"
              justify="center"
              color="white"
              fontWeight="500"
              fontSize="15px"
            >
              {index + 1}
            </Flex>
            <VStack alignItems="start" gap="0">
              <Box fontWeight="600" fontSize="15px" padding="0.3em" lineHeight="1.2" width="100%" display="block">
                {product.displayName}
              </Box>
              <Box px="3px">
                <StarRate rating={product.rating} />
              </Box>
            </VStack>
          </HStack>
          <Box fontSize="16px" padding="0.2em" fontWeight="bold" color="#c30010" alignSelf="flex-end" mr="2">
            ${product.price.toFixed(2)}
          </Box>
        </VStack>
      </Box>
    </Link>
  );
};
