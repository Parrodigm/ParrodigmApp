"use client";

import { ButtonBar } from "@/src/components/Button/ButtonBar";
import { Flex } from "@/styled-system/jsx";
import { useRouter } from "next/navigation";
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleXClick = () => {
    router.push("/results");
  };

  const handleBuy = () => {
    alert("Buy");
  };

  return (
    <Flex
      height="100%"
      // padding="0 20px"
      direction="column"
      justify="space-between"
      paddingBottom="10"
    >
      {children}
      <ButtonBar type="cart" onBuy={handleBuy} onClickX={handleXClick} />
    </Flex>
  );
}
