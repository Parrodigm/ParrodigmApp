import { css } from "../../../styled-system/css";
import { ProductCard } from "@/components/ProductCard";

export default function Results() {
  return (
    <div
      className={css({ display: "flex", flexDirection: "column", gap: "3em" })}
    >
      <ProductCard
        index={1}
        imageUrl="https://via.placeholder.com/150"
        title="Product 1"
        rating={4.5}
        price={100}
      />
    </div>
  );
}
