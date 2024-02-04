import React from "react"
import Link from "next/link";
import { CiPill } from "react-icons/ci";

const Build = () => {
    return (
      <>
      <div>
        <CiPill className="flex justify-center items-center ml-6" size={100} />
        <Link href="/home">
          <div className="font-sans-arial text-l font-light px-3">D/D</div>
        </Link>
      </div>
        <div className="flex justify justify-center font-sans-arial text-5xl font-light px-3 mt-20">
            Add to today's capsule!
        </div>
        <Link href="/entry">
            <div className="flex justify justify-center font-sans-arial text-8xl font-light px-3">+</div>
        </Link>
      </>
    );
  };
  
  export default Build;  