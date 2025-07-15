import React, { useState } from "react";

type Cart = {
  id: number;
  category: string;
};

export default function Cart() {
  const [items, setItems] = useState<Cart[]>([]);

  const [itemID, setItemID] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  const addItemSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: Cart = {
      id: Number(itemID),
      category: itemCategory.trim(),
    };

    setItems([...items, newItem]);
    setItemID('');
    setItemCategory('');
  };

  console.log(items);
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl self-center my-4">Cart Items</h1>

      <form
        onSubmit={addItemSubmit}
        className="w-full items-center flex flex-col gap-3 mb-7"
        action=""
      >
        <input
          type="number"
          name="id"
          placeholder="Item ID"
          className="px-4 py-2 w-full rounded-lg outline-none"
          value={itemID}
          onChange={(e) => setItemID(e.target.value)}
          required
        />
        <input
          type="text"
          name="id"
          placeholder="Item Category"
          className="px-4 py-2 w-full rounded-lg outline-none"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          required
        />
        <button
          className="w-full py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-200"
          type="submit"
        >
          Add Item to Cart
        </button>
      </form>

      {items.map((i) => (
        <span className="text-md mb-1" key={i.id}>
          <span className="font-semibold">{i.id}</span> - {i.category}
        </span>
      ))}
    </div>
  );
}
