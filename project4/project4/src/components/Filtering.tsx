import { useEffect, useState } from "react";
import type { TypeProduct } from "../ts/types/TypeProduct";
import { generateRandomSKU } from "../ts/utils/GenerateRandomSKU";

export default function Filtering() {
    const [SKUList, setSKUList] = useState<string[]>([]);

  const SKUGenerator = () => {
    const newSKU = generateRandomSKU();
    setSKUList((prev)=> [...prev, newSKU]);
    console.log(SKUList)
  };

  const activeProducts: TypeProduct[] = [
    {
      ProductSKU: "1",
      ProductName: "Phone",
      ProductDescription: "An example of a Phone Description",
      ProductCategory: "Electronic",
      ProductImage: "https://example.com/images/phone.jpg",
      ProductFabricationDate: new Date("2025-01-01"),
      ProductDueDate: new Date("2025-12-31"),
    },
  ];

  return (
    <div>
      <button onClick={SKUGenerator}>Add</button>
      <h1>oi</h1>
    </div>
  );
}
