import React from "react"
import Link from "next/link";

const Congrats = () => {
    return (
      <>
        <div className="flex justify justify-center font-sans-arial text-5xl font-light px-3 mt-20">
            Time Capsule Submitted! 
        </div>
        <div className="flex justify justify-center font-sans-arial text-3xl font-light px-3 mt-20">
            See you in 24 hours!
        </div>
        <Link href="/choice">
              <div className="flex justify justify-center font-sans-arial text-xl mt-64 font-light">Home</div>
        </Link>
      </>
    );
  };
  
  export default Congrats;  