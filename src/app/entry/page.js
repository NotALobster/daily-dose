import React from "react";


function Entry() {
    return (
        <div className="flex justify justify-center font-sans-arial text-6xl font-light px-3 mt-64">
            <h2>Tell Me About Your Day:</h2>
            <br/>
            <div>
                <form className="flex justify justify-center font-sans-arial text-3xl font-light px-2 mb-32">
                    <label htmlFor="msg">Message:</label>
                    <textarea id="msg" name="user_message"></textarea>
                </form>
            </div>
        </div>
    );
}

export default Entry;