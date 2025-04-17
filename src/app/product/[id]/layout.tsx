"use client";
import { ButtonBar } from "@/components/Button/ButtonBar";
import { Box, Flex } from "../../../../styled-system/jsx";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      height="100%"
      padding="0 20px"
      direction="column"
      justify="space-between"
      paddingBottom="10"
    >
      {children}
      <ButtonBar onBuy={() => {}} onAddToCart={() => {}} />
    </Flex>
  );
}
