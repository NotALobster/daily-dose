import React from "react"
import Link from "next/link";

const Build = () => {
    return (
      <>
        <div className="flex justify justify-center font-sans-arial text-5xl font-light px-3 mt-20">
            Add to today's capsule!
        </div>
        <Link href="/entry">
            <div className="flex justify justify-center font-sans-arial text-8xl font-light px-3">+</div>
        </Link>
        <Link href="/choice">
              <div className="flex justify justify-center font-sans-arial text-xl mt-64 font-light">Home</div>
        </Link>
      </>
    );
  };
  
  export default Build;  