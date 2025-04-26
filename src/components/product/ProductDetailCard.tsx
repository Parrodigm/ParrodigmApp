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
      height="370px"
      shadow="0 2px 1px 0 rgba(0, 0, 0, 0.13)"
    >
      <Box
        flexShrink={0}
        position="relative"
        width="100%"
        height="75%"
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
          <VStack alignItems="start" gap="0">
            <Box
              fontWeight="600"
              fontSize="17px"
              color="#6294FF"
              // whiteSpace="nowrap"
              // overflow="hidden"
              // textOverflow="ellipsis"
              width="78%"
              display="block"
              py="1"
              lineHeight="1.2"
            >
              {/* {title.length > 10 ? title.slice(0, 40) + "..." : title} */}
              {title}
            </Box>
            <Box px="0">
              <StarRate rating={rating} />
            </Box>
          </VStack>
        </HStack>
        {/* <Box
          fontWeight="semibold"
          fontSize="sm"
          color="#6294FF"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          width="100%"
          mt="1"
        >
          {title}
        </Box>

        <StarRate rating={rating} /> */}

        <HStack justify="end" gap="2">
          <Box fontSize="21px" color="#6294FF" fontWeight="500" mr="3">
            ${price.toFixed(2)}
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};
