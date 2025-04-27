import Image from "next/image";
import { Box, Flex, HStack, VStack } from "@/styled-system/jsx";
import { StarRate } from "./StarRate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Swiper 스타일 가져오기
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ProductDetailCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  id: number;
  // 추가 이미지를 위한 배열 (선택적)
  additionalImages?: string[];
}

export const ProductDetailCard = ({
  imageUrl,
  title,
  rating,
  price,
  id,
  additionalImages = [],
}: ProductDetailCardProps) => {
  // 모든 이미지를 하나의 배열로 합치기
  const allImages = [imageUrl, ...additionalImages];

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
      //height="410px"
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
        {/* <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 100px) 100vw, 33vw"
        /> */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                '" style="background-color: #6294FF;"></span>'
              );
            },
          }}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // 3초마다 자동 슬라이드
          style={
            {
              width: "100%",
              height: "100%",
            } as React.CSSProperties
          }
          className="product-swiper"
        >
          {allImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Box position="relative" width="100%" height="330px">
                <Image
                  src={img}
                  alt={`${title} - 이미지 ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 430px) 100vw, 430px"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
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
