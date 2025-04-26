import { ProductCard } from "./ProductCard";
import { Grid } from "@/styled-system/jsx"; // Changed SimpleGrid to Grid
import { products } from "@/src/products";

export const ProductBox = () => {
  return (
    <Grid columns={2} gap="4" px="20px">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          index={index + 1}
          imageUrl={product.image_url}
          title={product.name}
          rating={product.rating}
          price={product.price}
        />
      ))}
    </Grid>
  );
};
