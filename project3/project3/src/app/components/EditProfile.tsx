"use client";

import { TiArrowLeft } from "react-icons/ti";
import { IoMdCheckmark } from "react-icons/io";
import User from "./User";
import DefaultInput from "./DefaultInput";
import { useState } from "react";

export default function EditUseProfile() {
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Função de submit
  const handleSubmit = () => {
    const user = { name, email };
    localStorage.setItem('user', JSON.stringify(user));
    setVisible(false); // Oculta a tela
  };

  return (
    <>
      {visible && (
        <div className="absolute left-0 w-full h-screen bg-gray-200 px-4 py-4 flex flex-col items-center">
          <header className="w-full flex justify-between items-center mb-2">
            <TiArrowLeft className="w-9 h-auto" />
            <span className="text-lg font-bold">My Profile</span>
            <IoMdCheckmark
              onClick={handleSubmit}
              className="w-7 h-auto cursor-pointer"
            />
          </header>
          <User />

          <form className="w-full flex flex-col items-center gap-4">
            <DefaultInput
              label="Name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <DefaultInput
              label="E-mail address"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Os outros campos você pode adicionar depois, se quiser guardar também */}
          </form>
        </div>
      )}
    </>
  );
}
