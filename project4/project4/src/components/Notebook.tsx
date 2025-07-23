import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";


export default function Notebook() {
    const [text, setText] = useState('');
    const [notes, setNotes] = useState<string[]>([]);

    const [light, setLight] = useState(false);

    const ThemeIcon = light ? CiDark : CiLight
  return (
    <div className={`${light ? "bg-gray-200" : "bg-gray-900"} px-5 py-5 w-full flex flex-col min-h-screen relative transition-all`}>
        <h1 className={`${light ? "text-black" : "text-white"} text-2xl self-center mb-7`}>
            Your Notes Here!
        </h1>
        <input className={`${light ? "bg-gray-300 text-black" : "bg-gray-700 text-white"} w-full h-auto py-2 px-4 outline-none mb-4 rounded-lg`} placeholder="Write Note" type="text" name="" id="" 
        value={text}
        onChange={e => setText(e.target.value)}/>
        <button onClick={()=> {setNotes([...notes, text]); setText(''); }} 
        className={`${light ? "bg-gray-800 text-white hover:bg-gray-900" : "bg-gray-300 text-black" } w-full h-auto py-2 rounded-lg hover:bg-gray-200 transition-all`} type="button">
            Save
        </button>
        <ul>
            {notes.map((note, i) => <li key={i}>{note}</li>)}
        </ul>
        <ThemeIcon onClick={()=> setLight(!light)} className={`${light ? "text-black border-black" : "text-white border-gray-400"} text-4xl border-solid border rounded-full p-1 cursor-pointer absolute bottom-5`}/>
    </div>
  );
}
