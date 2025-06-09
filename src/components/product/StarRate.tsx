// src/components/StarRating.tsx
import { Box } from "@/styled-system/jsx";
// import HalfStar from "../../../public/halfStar.svg";

// type StarType = "full" | "half" | "empty";
type StarType = "full" | "empty";
const Star = ({ type }: { type: StarType }) => {
  const color = "	#bf9b30";
  return (
    <Box color={color} fontSize="12px" lineHeight="1">
      {/* {type === "full" ? "★" : type === "half" ? <HalfStar /> : "☆"} */}
      {type === "full" ? "★" : "☆"}
    </Box>
  );
};

export const StarRate = ({ rating }: { rating: number }) => {
  const stars: StarType[] = [];

  const floored = Math.floor(rating); // 정수 부분
  const decimal = rating - floored; // 소수점

  for (let i = 0; i < floored; i++) {
    stars.push("full");
  }

  if (stars.length < 5) {
    // if (decimal > 0 && decimal <= 0.5) {
    //   stars.push("half");
    // } else if (decimal > 0.5) {
    //   stars.push("full");
    // }
    if (decimal > 0.5) {
      stars.push("full");
    }
  }

  while (stars.length < 5) {
    stars.push("empty");
  }

  return (
    <Box display="flex" gap="0.5">
      {stars.map((type, i) => (
        <Star key={i} type={type} />
      ))}
    </Box>
  );
};
