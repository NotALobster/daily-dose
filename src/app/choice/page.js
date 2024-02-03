import React from "react"
import { CiPill } from "react-icons/ci";
import Link from "next/link";

const Choice = () => {
    return (
      <>
        <div className="grid grid-cols-4 justify-center items-center mt-60 text-black">
          <div></div>
          <div>
            <CiPill className="flex justify-center items-center ml-14" size={150} />
            <Link href="/build">
              <div className="font-sans-arial text-xl font-light px-3">Create Today's Capsule</div>
            </Link>
          </div>
          <div>
            <CiPill className="flex justify-center items-center ml-28" size={150} />
            <Link href="/calendar">
              <div className="flex justify justify-center font-sans-arial text-xl font-light px-3">Look at Past Capsules</div>
            </Link>
          </div>
          <div></div>
        </div>
      </>
    );
  };
  
  export default Choice;