"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  image_url: string;
  description: string;
  detail: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [showFullDetail, setShowFullDetail] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/data.json");
      const data: Product[] = await res.json();
      const target = data.find((item) => String(item.id) === id);
      setProduct(target || null);
    };
    fetchData();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const shouldTruncate = product.detail?.length > 150;
  const displayedDetail = showFullDetail
    ? product.detail
    : product.detail?.slice(0, 150);

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="bg-white text-black rounded-lg p-4 max-w-md mx-auto">
        <Image
          src={product.image_url}
          alt={product.name}
          width={600}
          height={600}
          className="w-full h-auto rounded"
          style={{ marginTop: "2rem" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <h2 style={{ fontSize: "1.125rem", fontWeight: "700" }}>
            {product.name}
          </h2>{" "}
          {/* text-lg + font-bold */}
          <span style={{ fontSize: "1.125rem", fontWeight: "700" }}>
            ${product.price}
          </span>
        </div>

        <div style={{ marginTop: "1rem", fontSize: "0.875rem", color: "gray" }}>
          {" "}
          {/* text-sm + text-blue-600 */}
          {product.description}
        </div>

        <div style={{ marginTop: "0.25rem", whiteSpace: "pre-wrap" }}>
          {displayedDetail}
          {shouldTruncate && !showFullDetail && "..."}
        </div>

        {shouldTruncate && (
          <button
            style={{
              marginTop: "0.5rem",
              color: "#2563eb",
              fontSize: "0.875rem",
              textDecoration: "underline",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            onClick={() => setShowFullDetail(!showFullDetail)}
          >
            {showFullDetail ? "show more" : "show less"}
          </button>
        )}
      </div>
    </div>
  );
}
