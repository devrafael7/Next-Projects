"use client";

import { TiArrowLeft } from "react-icons/ti";
import { IoMdCheckmark } from "react-icons/io";
import User from "./User";
import DefaultInput from "./DefaultInput";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

type Props = {
  closeForm: () => void;
  updateUser: (user: { name: string; email: string }) => void;
};

export default function EditUseProfile({ closeForm, updateUser }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      const parsed = JSON.parse(userSaved);
      setName(parsed.name || "");
      setEmail(parsed.email || "");
    }
  }, []);

  const handleSubmit = () => {
    const user = { name, email };
    localStorage.setItem("user", JSON.stringify(user));
    flushSync(() => {
      updateUser(user);
    });
    closeForm(); // Fecha o modal
  };

  return (
    <div className="absolute left-0 w-full h-screen bg-gray-200 px-4 py-4 flex flex-col items-center">
      <header className="w-full flex justify-between items-center mb-2">
        <TiArrowLeft
          className="w-9 h-auto cursor-pointer"
          onClick={closeForm}
        />
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <DefaultInput
          label="E-mail address"
          placeholder="E-mail"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </form>
    </div>
  );
}
