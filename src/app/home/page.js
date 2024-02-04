"use client";
import { LuSparkle } from "react-icons/lu";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const apiUrl = "https://qwer-2024.onrender.com/";

function Home() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin((prevShowLogin) => !prevShowLogin);
    };

    function Foundation(props) {
        return (
            <main className="text-2xl font-bold flex justify-center items-center h-screen">
                <div>{props.children}</div>
            </main>
        );
    }

    function LoginArea() {
        const handleSubmit = (event) => {
            console.log("GOT TO HERE");
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;
            server(username, password);
        };

        return (
            <div className="flex justify justify-center">
                <form onSubmit={handleSubmit}>
                    <input className="flex justify justify-center border" type="text" name="username" placeholder="Username" autoComplete="off" />
                    <input className="flex justify justify-center border" type="password" name="password" placeholder="Password" autoComplete="off" />
                    <button className="flex justify justify-center border" type="submit">Login</button>
                </form>
            </div>
        );
    }

    function server(username, password) {
        axios.post(apiUrl + "users/signin", {
            username,
            password
        })
        .then(response => {
            console.log(response);
            const cookies = new Cookies(null, { path: '/' });
            cookies.set('userToken', response.data.accessToken);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <Foundation>
                <div className="flex justify justify-center font-sans-arial text-7xl font-light px-3">
                    <button onClick={handleLoginClick}>Create Today's Capsule!</button>
                </div>       
            </Foundation>
            {showLogin ? <LoginArea /> : null}
        </div>
    );
}

export default Home;