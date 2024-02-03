import React from "react"
import { LuSparkle } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Build = () => {
    return (
      <>
        <div className="flex justify justify-center font-sans-arial text-5xl font-light px-3 mt-20">
            Add to today's capsule
        </div>
        <div className="flex justify justify-center font-sans-arial text-xl font-light px-3 mt-5">
            Choose ingredients to add to your capsule!
        </div>
        <div className="flex justify-center items-center mt-5 mr-5">
            <FaRegStar className="flex justify-center items-center mt-14" size={150} />
            <LuSparkle className="flex justify-center items-center mb-20" size={150} />
        </div>
        <div className="flex justify-center items-center mr-5">
            <FaRegHeart className="flex justify-center items-center ml-60" size={150} />
        </div>
      </>
    );
  };
  
  export default Build;