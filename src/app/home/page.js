"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const apiUrl = "https://qwer-2024.onrender.com/";


function Home() {

    const router = useRouter()
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin((prevShowLogin) => !prevShowLogin);
    };  
    
    const closePopup = () => {
        setShowLogin(false);
    }

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
            /*
            <div className="flex justify justify-center">
                <form onSubmit={handleSubmit}>
                    <input className="flex justify justify-center border" type="text" name="username" placeholder="Username" autoComplete="off" />
                    <input className="flex justify justify-center border" type="password" name="password" placeholder="Password" autoComplete="off" />
                    <button className="flex justify justify-center border" type="submit">Login</button>
                </form>
            </div>
            */
                        /*

                        CAN ADD LOGO WITH THIS, INSERT AROUND LINE 70ISH IN THE BIG GAP
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                      </div>

                        */
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">


                      <div className="mt-3 text-center sm:ml-0 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Sign In</h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">Welcome back!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex justify-center">
                  <form onSubmit={handleSubmit}
                    className="flex-auto justify-center">
                        <div className="flex justify-center gap-4">
                            <input className="flex justify-center" type="text" name="username" placeholder="Username" autoComplete="off" />
                            <input className="flex justify-center" type="password" name="password" placeholder="Password" autoComplete="off" />
                        </div>
                        <div className="flex justify-end">
                            <button 
                                onClick={closePopup}
                                type="button" className="mt-3 inline-flex w-full rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto">
                                Close
                            </button>
                            <button 
                                type="submit" className="mt-3 inline-flex w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                                Login
                            </button>   
                        </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
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
            if (response.status == 200) {
                router.push("/choice")
            }
            const cookies = new Cookies(null, { path: '/' });
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