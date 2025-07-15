import React from "react";


export default function Calculator() {


    return (
        <div className="w-full h-auto flex flex-col gap-4">
            <input type="number" placeholder="Number 1" />
            <input type="number" placeholder="Number 1" />
            <button type="button">
                Sum it!
            </button>
            <span>
                Result:
            </span>
        </div>
    )
}