"use client";
import Link from "next/link.js";
import React from "react";
import { useRouter } from 'next/navigation';

import {AddCapsule, GetCookie} from '../utils.js'
import Congrats from "../congrats/page.js";

function Entry() {

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.user_message.value;
        //console.log(message);
        AddCapsule(message);
        router.push("/congrats");
    };
    //console.log(GetCookie());
    return (
        <div className="flex flex-col align-center font-sans-arial text-6xl font-light px-3 mt-32 space-y-4">
            <h2 className="flex justify-center">Tell Me About Your Day:</h2>            
            <div className="flex justify-center">   
                <form onSubmit={handleSubmit} className="flex flex-col">
                <textarea id="msg" name="user_message" className="w-[50vw] min-h-[15vw]" style={{alignSelf: "center", border: "solid 1px black", fontSize:'30px'}}></textarea>
                <button 
                    type="submit" className="mt-3 flex-col w-full rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:w-auto">
                    Submit
                </button>  
                </form>
            </div>
            <Link className="flex-col justify-center" href="/choice">
                    <div className="flex justify justify-center font-sans-arial text-xl mt-32 font-light pt-2 ">Home</div>
                </Link>
        </div>
        
    );
}

export default Entry;