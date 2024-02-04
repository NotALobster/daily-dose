import React from "react";
import { CiPill } from "react-icons/ci";
import Link from "next/link";

function Entry() {
    return (
        <>
            <div>
                <CiPill className="flex justify-center items-center ml-6" size={100} />
                <Link href="/home">
                    <div className="font-sans-arial text-l font-light px-3">D/D</div>
                </Link>
            </div>

            <div className="flex flex-col align-center font-sans-arial text-6xl font-light px-3 mt-64">
                <h2>Tell Me About Your Day:</h2>            
                
                <textarea id="msg" name="user_message" className="w-[50vw]" style={{ alignSelf: "center", border: "solid 1px black" }}></textarea>
            </div>
        </>
    );
}

export default Entry;