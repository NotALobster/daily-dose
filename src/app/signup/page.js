"use client";
import { useRouter } from 'next/navigation';
import React from "react"
import Link from "next/link";
import { CiPill } from "react-icons/ci";
import {SignupNewAccount} from '../utils.js';
import axios from "axios";
import Cookies from 'universal-cookie';


const URL = "https://qwer-2024.onrender.com/";

const Signup = () => {
    const router = useRouter();

    //stolen from home
    function server(username, password) {
        axios.post(URL + "users/signin", {
            username, 
            password
        })
        .then(response => {
            //console.log(response);
            if (response.status == 200) {
                const cookies = new Cookies(null, { path: '/' });
                cookies.set('userToken', response.data.accessToken);
                router.push("/choice")
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }



    const SignupNewAccount = (username, password) => {
        axios.post(URL + "users/signup", {
            'username' : username,
            'password' : password
        }) 
        .then(response => {
            console.log(response);
            server(username, password);
        })
        .catch(err => {
            console.log("if this is 400 then username is already in use")
            console.log(err);
            //TODO: actual error handling...
        })       
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        SignupNewAccount(username, password);
    };
    return (
      <>
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">                      
                      <div className="mt-3 text-center sm:ml-0 sm:mt-0 sm:text-left">
                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Sign Up</h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-800">Welcome To Daily Dose!</p>
                        </div>
                      </div>
                    <div className="flex justify-end w-full">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg className="h-6 w-6 text-red-600 flex justify-center mr-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <CiPill className="flex justify-center items-center" size={25} />
                        </svg>
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
                                type="submit" className="mt-3 inline-flex w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto">
                                Sign Up
                            </button>   
                        </div>
                  </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </>
    );
  };
  
  export default Signup;  