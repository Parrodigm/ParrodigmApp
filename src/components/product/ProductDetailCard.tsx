import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Product } from "@/src/types/types";

// Swiper 스타일 가져오기
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const ProductDetailCard = ({ product }: { product: Product }) => {
  return (
    <Flex
      marginTop="1em"
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
      <Box flexShrink={0} position="relative" width="390px" height="330px" borderTopLeftRadius="xl" borderTopRightRadius="xl" overflow="hidden">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            renderBullet: function (index, className) {
              return '<span class="' + className + '" style="background-color: #6294FF;"></span>';
            },
          }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3초마다 자동 슬라이드
          style={
            {
              width: "100%",
            } as React.CSSProperties
          }
          className="product-swiper"
        >
          {product.images.map((image, index) => (
            <SwiperSlide key={index}>
              <Box position="relative" height="330px" width="100%">
                <Image src={image.url} alt={`${product.displayName} - 이미지 ${index + 1}`} fill style={{ objectFit: "cover" }} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Flex direction="column" flex="1" justify="center" gap="0" minWidth={0}>
        <HStack alignItems="start" padding="0.2em 0.5em" gap="1.5">
          <VStack alignItems="start" gap="0" width="100%">
            <Box fontWeight="600" fontSize="17px" width="100%" display="block" p={1} lineHeight="1.2">
              {product.displayName}
            </Box>
            <Box px="1" height="12px">
              <StarRate rating={product.rating} />
            </Box>
          </VStack>
        </HStack>

        <HStack justify="end" gap="2">
          <Box fontSize="21px" color="#c30010" fontWeight="500" mr="3" padding="0.2em">
            ${product.price.toFixed(2)}
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};
