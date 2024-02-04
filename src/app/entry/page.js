import React from "react";


function Entry() {
    return (
        <div className="flex flex-col align-center font-sans-arial text-6xl font-light px-3 mt-64 space-y-16">
            <h2 className="flex justify-center">Tell Me About Your Day:</h2>            
            <div className="flex justify-center">
                <textarea id="msg" name="user_message" className="w-[50vw]" style={{alignSelf: "center", border: "solid 1px black"}}></textarea>
            </div>
        </div>
    );
}

export default Entry;