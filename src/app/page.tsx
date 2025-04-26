"use client";
import { Flex } from "@/styled-system/jsx";
import Button from "@/src/components/Button/Button";
import { Text } from "@/src/components/Text";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const onClick = () => {
    router.push("/tutorial");
  };
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
        </Text>{" "}
        Would you like to try{" "}
        <Text fontWeight="bold" color="#6294FF">
          voice mode?
        </Text>
      </Text>
      <Button
        variant="start"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={onClick}
      >
        {hover ? "Yes, let's try it!" : "Google"}
      </Button>
    </Flex>
  );
}
