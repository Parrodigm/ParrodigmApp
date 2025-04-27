import { HStack, Box } from "../../../styled-system/jsx";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";
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
  const notify = () => toast("Pushed to cart");
  return (
    <HStack justify="center">
      {isCart && ( // 장바구니에 있는 버튼
        <Button onClick={props.onBuy} style={{ width: "70%" }}>
          Buy Now
        </Button>
      )}
      {/* 장바구니를 제외한 화면에 위치한 Buy Now 버튼 */}
      {!isCart && <Button onClick={props.onBuy}> Buy Now</Button>}
      {!isCart && (
        <Button
          onClick={() => {
            props.onAddToCart(); // 장바구니에 아이템 추가
            notify(); // 토스트 띄우기
          }}
        >
          Add to Cart
        </Button>
      )}
      <ToastContainer position="top-center" />

      <Box position="relative">
        {" "}
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
