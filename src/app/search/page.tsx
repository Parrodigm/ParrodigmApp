"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image_url: string;
}

export default function SearchResultsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json");
      const data: Product[] = await res.json();

      // 랜덤으로 4개만 추출
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 4);
      setProducts(selected);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <main style={{ padding: "16px 16px 0px" }}>
        {products.length > 0 && (
          <>
            {/* 첫 번째 featured 상품 */}
            <div style={{ marginBottom: "1.25rem" }}>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                1
              </h2>
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "0.5rem",
                }}
              >
                <Image
                  src={products[0].image_url}
                  alt={products[0].name}
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "16rem", objectFit: "cover" }}
                  onClick={() => router.push(`/product/${products[0].id}`)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: 500 }}>{products[0].name}</span>
                <span style={{ fontWeight: 500 }}>${products[0].price}</span>
              </div>
            </div>

            {/* 나머지 3개 */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                flexWrap: "nowrap",
                width: "100%",
              }}
            >
              {products.slice(1).map((product, index) => (
                <div
                  key={product.id}
                  style={{ width: "33%", cursor: "pointer", flexShrink: 0 }}
                  onClick={() => router.push(`/product/${product.id}`)}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      marginBottom: "4px",
                    }}
                  >
                    {index + 2}
                  </div>
                  <div
                    style={{
                      backgroundColor: "#f3f4f6",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "96px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    <p style={{ fontSize: "14px" }}>{product.name}</p>
                    <p style={{ fontSize: "14px" }}>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
