import React from "react";
import Link from "next/link";

const Page = () => {
    return (
      <div className="text-black bg-indigo-800 h-screen flex justify-center">
        <div className="bg-white h-96 w-96 mt-28 p-5 flex justify-center flex-col rounded-3xl">
          <p>Welcome to Daily Dose! We are a virtual time capsule, helping remind you of precious memories, one capsule at a time!</p>
          <p>----------------------------------------------</p>
          <p>1. You have one capsule per day which you can fill with text, photos, etc.</p>
          <p>2. Set a date for the capsule to be opened.</p>
          <p>3. We will send you an email reminding you to open your capsule on that day!</p>

          <Link href="/home" className="bg-blue-500 text-white px-4 py-2 flex justify justify-center mt-8 rounded-md hover:bg-blue-600">
            okay!
          </Link>
        </div>
      </div>
    );
};

export default Page;
