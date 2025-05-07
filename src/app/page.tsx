"use client";

import { css } from "@/../../styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";

import Logo from "../app/parrodigm_logo.svg";

import { Button } from "@/src/components/Button/Button";

import { usePageController } from "@/src/hooks/usePageController";

export default function Home() {
  const { showConversation } = usePageController();

  return (
    <Flex direction="column" justify="center" align="center" gap="4em" padding="0 20px">
      <Logo className={css({ width: "10em" })} />
      <Text textAlign="center" fontSize="3xl" fontWeight="light" color="#93C5F1">
        Hey there!
        <br /> I can help you{" "}
        <Text fontWeight="bold" color="#6294FF">
          find products, track orders, or answer quick questions-all by voice.{" "}
        </Text>
      </Text>
      <Button variant="start" onClick={showConversation}>
        Start
      </Button>
    </Flex>
  );
}
