import React, { useEffect, useState } from "react"

export default function ValidatePassword() {
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const IsPasswordValidate = {
        Validated: ()=> window.alert("Password has been validated"),
        NotValidated: ()=> window.alert("Password has not been validated"),
    }

    const submitPassword = (e: React.FormEvent) =>{
        e.preventDefault();

        validPassword ? IsPasswordValidate.Validated() : IsPasswordValidate.NotValidated()
    }

    useEffect(()=>{
        setValidPassword(password.length >= 5);
    }, [password])
    
    console.log(validPassword)

    return (
        <form onSubmit={submitPassword} className="w-full min-h-screen flex flex-col px-7 py-7" action="">
            <h1 className="text-3xl self-center mb-7">Form</h1>
            <input placeholder="Password" type="password" name="" id="" 
            className="px-4 py-2 rounded-lg outline-none mb-3"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
            <button className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all" type="submit">
                Submit
            </button>
        </form>
    )    
}