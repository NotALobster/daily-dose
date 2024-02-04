"use client";
import React from "react";

import {AddCapsule} from '../utils.js'

function Entry() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.user_message.value;
        console.log(message);
        AddCapsule(message);

    };

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
        </div>
    );
}

export default Entry;