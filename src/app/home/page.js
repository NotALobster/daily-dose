"use client";
import { LuSparkle } from "react-icons/lu";
import React, {useState} from "react";



 function Home() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(() => !showLogin);
    }

function Foundation (props) {
        return (
            <main className="text-2xl font-bold flex justify-center items-center h-screen">
                <div>
                    {props.children}
                </div>
            </main> 
        );
    }


function LoginArea() {
    return (
        <div>
            <h2 className="font-bold ml-16">Login Area</h2>
                <form >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
    );
}


 return (
        <div>
            <Foundation>
                <div className="flex justify justify-center font-sans-arial text-7xl font-light px-3">
                <button onClick={handleLoginClick}>Create Todays's Capsule!</button>
                </div>       
            </Foundation>
            {showLogin? <LoginArea /> : <></>}
        </div>
    )
}



export default Home;