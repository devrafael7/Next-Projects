import { useState } from "react";
import { FaTrash } from "react-icons/fa";

type User = {
  ID: number;
  Name: string;
  Email: string;
  Password: string;
};

export default function CartTest() {
  const [users, setUsers] = useState<User[]>([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      ID: id,
      Name: name,
      Email: email,
      Password: password,
    };

    setUsers([...users, newUser])
  };

  const removeUser = (ID: number) => {
    const updateUsersList = users.filter(u => u.ID !== ID);
    setUsers(updateUsersList);
  }

  return (
    <div className="w-full flex flex-col px-4 py-4">
      <h1 className="text-2xl self-center mb-7">Your Credentials</h1>
      <form onSubmit={addNewUser} className="w-full gap-2 flex flex-col" action="">
        <input
          className="py-2 px-4 rounded-lg outline-none"
          placeholder="ID"
          type="number"
          onChange={(e) => setId(+e.target.value)}
          required
        />
        <input
          className="py-2 px-4 rounded-lg outline-none"
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="py-2 px-4 rounded-lg outline-none"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="py-2 px-4 rounded-lg outline-none"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="mt-3 bg-blue-400 py-2 rounded-lg hover:bg-blue-500 transition-all"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      <section id="info_users" className="w-full flex flex-col mt-7">
        {users.map(u =>
            <span key={u.ID} className="w-full flex justify-between mt-1">
                <div>
                    <span className="font-semibold">{u.ID}</span> {u.Name} {u.Email} {u.Password}
                </div>
                <FaTrash onClick={()=> removeUser(u.ID)} className="cursor-pointer"/>
            </span>
        )}
      </section>
    </div>
  );
}
