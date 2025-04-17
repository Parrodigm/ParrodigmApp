import Button from "./Button";
import { HStack } from "../../../styled-system/jsx";
import Basket from "../../../public/basket.svg";

export const ButtonBar = ({
  onBuy,
  onAddToCart,
}: {
  onBuy: () => void;
  onAddToCart: () => void;
}) => (
  <HStack justify="space-evenly">
    <Button onClick={onBuy}>Buy Now</Button>
    <Button onClick={onAddToCart}>Add to Cart</Button>
    <Button variant="icon">
      <Basket />
    </Button>
  </HStack>
);
