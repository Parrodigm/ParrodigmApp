"use client";
import { Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";
import { useRouter } from "next/navigation";
import Button from "@/src/components/Button/Button";

export default function Page() {
  const router = useRouter();
  const onClick = () => {
    router.push("/results");
  };
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      padding="0 53px"
      gap="4em"
    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="#6294FF">
        Looking for something in particular today? I can help you find it!
      </Text>
      <Button variant="start" onClick={onClick}>
        Let's try it!
      </Button>
    </Flex>
  );
}
