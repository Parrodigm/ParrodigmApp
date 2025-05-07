"use client";

import { Flex } from "@/styled-system/jsx";
import Button from "@/src/components/Button/Button";
import { Text } from "@/src/components/Text";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push("/conversation");
  }, [router]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      height="100%"
      gap="4em"
      padding="0 20px"
    >
      <Text
        textAlign="center"
        fontSize="3xl"
        fontWeight="light"
        color="#93C5F1"
      >
        Hey there!
        <br /> I can help you{" "}
        <Text fontWeight="bold" color="#6294FF">
          find products, track orders, or answer quick questions-all by
          voice.{" "}
        </Text>
      </Text>
      <Button variant="start" onClick={onClick}>
        Start
      </Button>
    </Flex>
  );
}
