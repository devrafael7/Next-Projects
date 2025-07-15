"use client";

import { TiCogOutline, TiArrowLeft, TiHeartOutline } from "react-icons/ti";
import { MdArrowForwardIos } from "react-icons/md";
import EditUseProfile from "./components/EditProfile";
import User from "./components/User";
import { useEffect, useState } from "react";

export default function Home() {
  const [isConfigVisible, setIsConfigVisible] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const dataSaved = localStorage.getItem('user');
    if (dataSaved) {
      setUser(JSON.parse(dataSaved));
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-200 px-4 py-4 items-center relative">
      
      {isConfigVisible && (
        <EditUseProfile
          closeForm={() => setIsConfigVisible(false)}
          updateUser={setUser}
        />
      )}

      <header className="w-full flex justify-between items-center mb-7">
        <TiArrowLeft className="w-9 h-auto" />
        <span className="text-lg font-bold">My Profile</span>
        <TiCogOutline
          onClick={() => setIsConfigVisible(true)}
          className="w-7 h-auto cursor-pointer"
        />
      </header>

      <div className="w-full flex h-auto items-center justify-start mb-7">
        <User />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h1 className="font-semibold text-xl">{user.name}</h1>
          <h5 className="mb-4 text-gray-500">{user.email}</h5>
          <button
            className="w-max px-5 py-1.5 rounded-md bg-blue-500 text-white"
            onClick={() => setIsConfigVisible(true)}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <section className="w-full flex flex-col items-center gap-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center">
              <TiHeartOutline className="w-7 h-7 mr-4" />
              <span>Favourites</span>
            </div>
            <MdArrowForwardIos className="w-8 h-6" />
          </div>
        ))}
      </section>
    </div>
  );
}
