import React, { useEffect, useState } from "react";

export default function User() {
  const [emailInput, setEmailInput] = useState("");
  const [emailRes, setEmailRes] = useState([""]);

  const sendEmailRequest = (e: React.FormEvent) => {
    e.preventDefault();

    
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((user: any) => user.email === emailInput);

            if (found) {
                setEmailRes([found.email]);
            } else {
                setEmailRes([]);
                console.log("User email typed is invalid");
            }
        })
        
        .catch((err) => {
          console.log("Error when searching for user data.", err);
        });
    }
 

  return (
    <div className="w-full min-h-screen flex flex-col p-7">
      <h1 className="text-2xl font-semibold self-center mb-7">
        Looking for some user?
      </h1>
      <form
        className="w-full flex flex-col items-center gap-y-2 mb-7"
        onSubmit={sendEmailRequest}
      >
        <input
          placeholder="Search by user email"
          type="email"
          className="w-full py-2 rounded-lg outline-none px-4"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-400 py-2 rounded-lg hover:bg-blue-500 transition-all"
        >
          Search it!
        </button>
      </form>
      <section className="w-full flex flex-col">
        {emailRes.length > 0 ? (
          emailRes.map((ur, i) => {
            return <p key={i}>{ur}</p>;
          })
        ) : (
          <p>No Users Found</p>
        )}
      </section>
    </div>
  );
}
