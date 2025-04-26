import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";

interface ProductDetailCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  id: number;
}

export const ProductDetailCard = ({
  imageUrl,
  title,
  rating,
  price,
  id,
}: ProductDetailCardProps) => {
  return (
    <Flex
      bg="white"
      borderRadius="xl"
      gap="0"
      align="stretch"
      width="full"
      flexDir="column"
      maxW="md"
      height="auto"
      shadow="0 2px 1px 0 rgba(0, 0, 0, 0.13)"
    >
      <Box
        flexShrink={0}
        position="relative"
        width="100%"
        height="330px"
        borderTopLeftRadius="xl"
        borderTopRightRadius="xl"
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

      <Flex direction="column" flex="1" justify="center" gap="0" minWidth={0}>
        <HStack alignItems="start" gap="1.5">
          <Flex
            marginStart="2"
            marginTop="2"
            width="6"
            height="6"
            bg="blue.500"
            px="3"
            borderRadius="full"
            align="center"
            justify="center"
            color="white"
            fontWeight="bold"
            fontSize="sm"
          >
            {id}
          </Flex>
          <VStack alignItems="start" gap="0" width="100%">
            <Box
              fontWeight="600"
              fontSize="17px"
              color="#6294FF"
              // whiteSpace="nowrap"
              // overflow="hidden"
              // textOverflow="ellipsis"
              width="100%"
              display="block"
              p={1}
              lineHeight="1.2"
            >
              {title}
            </Box>
            <Box px="1" height="12px">
              <StarRate rating={rating} />
            </Box>
          </VStack>
        </HStack>

        <HStack justify="end" gap="2">
          <Box fontSize="21px" color="#6294FF" fontWeight="500" mr="3">
            ${price.toFixed(2)}
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};
