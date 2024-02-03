"use client";

import React, {useState} from "react";
import { Foundation } from "@/components/foundation"


 function Home() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(() => !showLogin);
    }

function Foundation (props) {
        return (
            <main className="text-2xl font-bold flex justify-center items-center h-screen">
                <div className="center">
                    <p className="text-8xl">Create Today's Capsule</p>
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
                <button className="center"onClick={handleLoginClick}>Here!</button>
            </Foundation>
            {showLogin? <LoginArea /> : <></>}
        </div>
    )
}



export default Home;