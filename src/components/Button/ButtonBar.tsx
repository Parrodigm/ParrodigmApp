import { HStack, Box, Circle } from "../../../styled-system/jsx";
import Button from "./Button";
import Basket from "../../../public/basket.svg";
import X from "../../../public/backButton.svg";
import { useEffect } from "react";
import { useState } from "react";

type ButtonBarProps =
  | {
      type: "default";
      onBuy: () => void;
      onAddToCart: () => void;
      onBasket: () => void;
      cartCount?: number;
    }
  | {
      type: "cart";
      onBuy: () => void;
      onClickX: () => void;
    };

export const ButtonBar = (props: ButtonBarProps) => {
  const isCart = props.type === "cart";

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null; // or skeleton

  return (
    <HStack justify="space-evenly">
      <Button onClick={props.onBuy}> Buy Now</Button>

      {!isCart && <Button onClick={props.onAddToCart!}>Add to Cart</Button>}

      <Box position="relative">
        {isCart ? (
          <Button variant="noBackground" onClick={props.onClickX}>
            <X />
          </Button>
        ) : (
          <Button variant="icon" onClick={props.onBasket}>
            <Basket />{" "}
            <Box
              position="absolute"
              top="50%"
              right="45%"
              transform="translate(40%, -40%)"
              fontSize="xs"
              fontWeight="bold"
              width="18px"
              height="18px"
              borderColor="blue.500"
              color="white"
            >
              {props.cartCount}
            </Box>
          </Button>
        )}
      </Box>
    </HStack>
  );
};
