import { useState } from "react";

type Product = {
    id: number;
    name: string;
};

const products: Product[] = [
    {id: 1, name: 'Shirt'},
    {id: 2, name: 'Cap'},
    {id: 3, name: 'Shoes'}
];

export default function ShoppingCart(){
    const [cart, setCart] = useState<Product[]>([]);

    const addProduct = (product: Product) => {
        setCart([...cart, product]);
    };

    console.log(cart)
    return (
        <div className="w-full flex flex-col">
            <h1 className="text-2xl self-center my-3">Products</h1>
            
            {products.map(p => (
                <div key={p.id}>
                    {p.name} <button type="button" onClick={() => addProduct(p)}>
                        Add to Cart
                    </button>
                </div>
            ))}
            <h2>
                Total in Cart: {cart.length}
            </h2>

        </div>
    )
}