import { Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";

export default function Tutorial() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      padding="0 53px"
    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="#6294FF">
        Looking for something in particular today? I can help you find it!
      </Text>
    </Flex>
  );
}
