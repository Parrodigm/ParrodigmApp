import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
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
        height={260}
        shadow="md"
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
          {/* <Flex
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
          </Flex> */}
        </Box>
        <VStack alignItems="start" gap="0">
          <HStack alignItems="start" gap="0.03">
            <Flex
              // position="absolute"
              // top="2"
              // left="2"
              marginStart="1"
              marginTop="1"
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
              {index}
            </Flex>
            <VStack alignItems="start" gap="0">
              <Box
                fontWeight="semibold"
                fontSize="15px"
                color="#6294FF"
                px="2"
                // whiteSpace="nowrap"
                // overflow="hidden"
                // textOverflow="ellipsis"
                width="100%"
                display="block"
              >
                {title.length > 10 ? title.slice(0, 25) + "..." : title}
              </Box>
              <Box px="2">
                <StarRate rating={rating} />
              </Box>
            </VStack>
          </HStack>
          {/* <Box
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
          </Box> */}
          {/* <Box px="8">
            <StarRate rating={rating} />
          </Box> */}
          <Box
            fontSize="sm"
            fontWeight="semibold"
            color="#6294FF"
            alignSelf="flex-end"
            // marginTop="1"
            mr="2"
          >
            ${price.toFixed(2)}
          </Box>
        </VStack>
      </Box>
    </Link>
  );
};
