// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function MainPage() {
//   const router = useRouter();
//   const [selectedItem, setSelectedItem] = useState<number | null>(null);

//   const handleItemClick = (id: number) => {
//     setSelectedItem(id);
//     // Navigate to search results page when an item is clicked
//     router.push("/search");
//   };

//   return (
//     <div className="flex flex-col min-h-screen w-full">
//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {/* Featured Product - Large Image */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">1</h2>
//           <div className="rounded-lg overflow-hidden mb-2">
//             <Image
//               src="/dog1.jpeg"
//               alt="Dog house"
//               width={400}
//               height={300}
//               className="w-full h-64 object-cover"
//             />
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="font-medium">Dog house</span>
//             <span className="font-medium">70$</span>
//           </div>
//         </div>

//         {/* Small Products - Horizontal Row */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "20px",
//             flexWrap: "nowrap",
//             width: "100%",
//           }}
//         >
//           <div
//             onClick={() => handleItemClick(2)}
//             className="cursor-pointer w-1/3 flex-shrink-0"
//           >
//             <div className="text-sm font-medium mb-1">2</div>
//             <div className="bg-gray-100 rounded-lg overflow-hidden">
//               <Image
//                 src="/bell2.jpeg"
//                 alt="Bell"
//                 width={120}
//                 height={120}
//                 className="w-full h-24 object-cover"
//               />
//             </div>
//             <div className="mt-1">
//               <p className="text-sm">Bell</p>
//               <p className="text-sm">8$</p>
//             </div>
//           </div>

//           <div
//             onClick={() => handleItemClick(3)}
//             className="cursor-pointer w-1/3 flex-shrink-0"
//           >
//             <div className="text-sm font-medium mb-1">3</div>
//             <div className="bg-gray-100 rounded-lg overflow-hidden">
//               <Image
//                 src="/fish3.png"
//                 alt="Fish toy"
//                 width={120}
//                 height={120}
//                 className="w-full h-24 object-cover"
//               />
//             </div>
//             <div className="mt-1">
//               <p className="text-sm">Fish toy</p>
//               <p className="text-sm">40$</p>
//             </div>
//           </div>

//           <div
//             onClick={() => handleItemClick(4)}
//             className="cursor-pointer w-1/3 flex-shrink-0"
//           >
//             <div className="text-sm font-medium mb-1">4</div>
//             <div className="bg-gray-100 rounded-lg overflow-hidden">
//               <Image
//                 src="/dog4.jpeg"
//                 alt="Mint gum 300g"
//                 width={120}
//                 height={120}
//                 className="w-full h-24 object-cover"
//               />
//             </div>
//             <div className="mt-1">
//               <p className="text-sm">Mint gum 300g</p>
//               <p className="text-sm">20$</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="px-4 py-4 border-t border-gray-200 w-full">
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "400px",
//             borderTop: "1px solid black",
//             paddingTop: "10px",
//             marginTop: "15px",
//           }}
//         />
//         <div className="flex justify-between items-center">
//           <button
//             className="flex items-center justify-center w-10 h-10"
//             style={{ marginRight: "10px" }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="9" cy="21" r="1"></circle>
//               <circle cx="20" cy="21" r="1"></circle>
//               <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//             </svg>
//           </button>
//           <button className="flex items-center justify-center w-10 h-10">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//             </svg>
//           </button>
//           <button
//             className="flex items-center justify-center w-10 h-10"
//             style={{ marginLeft: "300px" }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M23 4v6h-6"></path>
//               <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
//             </svg>
//           </button>
//           <div className="text-center">
//             <p>What do you want to log in with?</p>
//             <p className="text-blue-600 justify-end">I'll log in via Google</p>
//           </div>
//         </div>
//         <p className="text-center mt-2">This is a recommended product.</p>
//       </footer>
//     </div>
//   );
// }
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
