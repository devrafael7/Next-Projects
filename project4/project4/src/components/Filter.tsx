import { useState } from "react";

export default function Filter(){
    const listname: String[] = ['Nike', 'Adidas', 'Puma'];

    const [researchedValue, setResearchedValue] = useState('');

    const filteredItems = listname.filter((name)=>
        name.toLowerCase().includes(researchedValue.toLowerCase())
    );

    return (
        <div className="flex flex-col px-7 py-7">
            <h1 className="text-2xl self-center mb-7">What are you searching for?</h1>
            <input placeholder="Searching" type="text" name="" id="" 
            className="px-4 py-2 rounded-lg outline-none mb-2"
            value={researchedValue}
            onChange={e => setResearchedValue(e.target.value)}
            />
            <div className="w-full flex flex-col">
                <h3 className="text-md self-center font-semibold mb-4">Items List</h3>
                {filteredItems.length > 0 ?(
                    filteredItems.map((i, index)=>(
                        <p key={index}>{String(index + 1)} - {i}</p>
                    ))
                ) : (
                    <p>No items found</p>
                )}
            </div>
        </div>
    )
}