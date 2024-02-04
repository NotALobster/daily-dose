"use client";
import React, {useEffect, useState} from "react"
import Link from "next/link";
import Cookies from "universal-cookie";
import axios from "axios";

const URL = "https://qwer-2024.onrender.com/";

const Today = () => {
    const [sendState, setSendState] = useState("Loading...");

    useEffect(() => {
        const cookies = new Cookies(null, { path: '/' });
        let toSend = "No capsules for today!"
        let foundCap = false;
        axios.get(URL + "capsules/user", {headers: {'auth_temp' : cookies.get("userToken")}})
        .then(response => {
            let actualDate = new Date();
            response.data.forEach(element => {
                let dateToCheck = new Date(element.date_can_open);
                console.log(element);
                let isSameDay = (dateToCheck.getDate() === actualDate.getDate() 
                && dateToCheck.getMonth() === actualDate.getMonth()
                && dateToCheck.getFullYear() === actualDate.getFullYear())
                console.log(isSameDay);
                if(isSameDay){
                    toSend = (element.date_added + ": " + element.message).toString();
                    setSendState(toSend);
                    foundCap = true;
                }
            });
            if(!foundCap){
                setSendState(toSend);
            }
        })
        .catch(err => {
            console.log(err);
        })

    }, [])
    
    return (
      <>
        <div className="flex justify justify-center font-sans-arial text-5xl font-light px-3 mt-20">
            Today's Capsule: 
        </div>
        <div className="flex justify justify-center font-sans-arial text-2xl font-light px-3 mt-20">
            {sendState}
        </div>
        <Link href="/choice">
              <div className="flex justify justify-center font-sans-arial text-xl mt-64 font-light">Home</div>
        </Link>
      </>
      
    );
  };
  
  export default Today;  