"use client";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import { CiPill } from "react-icons/ci";
import Link from "next/link";

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <CiPill className="flex justify-center items-center ml-6" size={100} />
      <Link href="/home">
        <div className="font-sans-arial text-l font-light px-3">D/D</div>
      </Link>

      <div className='app'>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container'>
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default App;