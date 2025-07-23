import { useEffect, useState } from "react";

type User = {
  userName: string;
  userAge: number;
  isAdmin: boolean;
  offlineDays: number;
};

export default function TypeFilter() {
  const userList: User[] = [
    {
      userName: "Rafael",
      userAge: 19,
      isAdmin: true,
      offlineDays: 3,
    },
    {
      userName: "Adin",
      userAge: 22,
      isAdmin: false,
      offlineDays: 7,
    },
    {
      userName: "Maria",
      userAge: 25,
      isAdmin: false,
      offlineDays: 20,
    },
  ];

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputAccess, setInputAccess] = useState("");
  const [inputOffDays, setInputOffDays] = useState("");

  const userListFiltered = userList.filter((user) => {
    const nameMatch =
      !inputName ||
      user.userName.toLowerCase().includes(inputName.toLowerCase());
    const ageMatch = !inputAge || user.userAge.toString() === inputAge;
    const accessMatch =
      !inputAccess || (inputAccess === "Admin" ? user.isAdmin : !user.isAdmin);
    const offDaysMatch =
      !inputOffDays || user.offlineDays.toString() === inputOffDays;

    return nameMatch && ageMatch && accessMatch && offDaysMatch;
  });

  useEffect(() => {
    console.log(inputAge);
  });

  const getInputAgeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputAge(e.target.value);
  };

  const getInputAccessValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputAccess(e.target.value);
  };

  const getInputOffDaysValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputOffDays(e.target.value);
  };

  return (
    <div className="w-full flex flex-col p-7">
      <h1 className="font-semibold self-center text-lg mb-7">
        Get the filter user
      </h1>
      <section className="filterSection w-full flex flex-col mb-7 gap-y-4">
        <input
          placeholder="Filter by name"
          type="text"
          className="px-4 py-2 rounded-lg outline-none"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <div className="w-full flex justify-between gap-x-4">
          <div className="flex flex-grow flex-col items-start gap-y-1">
            <label htmlFor="ageFilter">Age</label>
            <select
              className="w-full rounded-sm outline-none"
              id="ageFilter"
              name="ageFilter"
              onChange={getInputAgeValue}
              value={inputAge}
            >
              {Array.from({ length: 100 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-grow flex-col items-start gap-y-1">
            <label htmlFor="isAdminFilter">Access</label>
            <select
              className="w-full rounded-sm outline-none"
              id="isAdminFilter"
              name="isAdminFilter"
              value={inputAccess}
              onChange={getInputAccessValue}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex flex-grow flex-col items-start gap-y-1">
            <label htmlFor="OfflineDays">Off Days</label>
            <select
              className="w-full rounded-sm outline-none"
              id="OfflineDays"
              name="OfflineDays"
              value={inputOffDays}
              onChange={getInputOffDaysValue}
            >
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <h4 className="font-semibold self-center mb-6">User List</h4>
      {userListFiltered.length > 0 ? (
        userListFiltered.map((user, index) => (
          <span className="mb-4" key={index}>
            <span className="font-semibold">{index + 1}</span> - Name:{" "}
            {user.userName} <br /> Age: {user.userAge} <br /> Admin:{" "}
            {String(user.isAdmin)} <br /> Offline Days: {user.offlineDays}
          </span>
        ))
      ) : (
        <p>No item found.</p>
      )}
    </div>
  );
}
