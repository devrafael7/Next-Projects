import React from "react";
import { useState } from "react";


export default function Calculator() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

        return (
        <div className="w-full h-auto flex flex-col gap-4">
            <h1 className="self-center text-2xl my-4 font-semibold">
                Sum Calculator
            </h1>

            <input className="px-4 py-2 rounded-lg outline-none" type="number" placeholder="Number 1" onChange={e => setValue1(Number(e.target.value))}/>
            <input className="px-4 py-2 rounded-lg outline-none" type="number" placeholder="Number 1" onChange={e => setValue2(Number(e.target.value))}/>
            <button className="w-full py-2 bg-gray-300 text-black rounded-lg font-semibold hover:bg-gray-200 transition-all" type="button"
            onClick={() => setResult(value1 + value2)}>
                Sum it!
            </button>

            <span className="text-xl">
                Result: {result}
            </span>
        </div>
    )
}