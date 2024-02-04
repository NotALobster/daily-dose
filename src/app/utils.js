
import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const URL = "https://qwer-2024.onrender.com/";//"http://localhost:3000/";//'https://qwer-2024.onrender.com/' "http://localhost:3000/";


export function StartCookie(){
    const cookies = new Cookies(null, { path: '/' });
}

export function GetCookie(){
    const cookies = new Cookies(null, { path: '/' });
    console.log(cookies.get('userToken'));
    return cookies.get('userToken');
}


export function Signin(username, password){
    axios.post(URL + "users/signin", {
        username,
        password
    })    
    .then(response => {
        const cookies = new Cookies(null, { path: '/' });
        cookies.set('userToken', response.data.accessToken);
        
    })
}

export function HelloWorld(){
    axios.get(URL + "hello")
    .then(response => console.log(response.data));
}

export function HelloWorldBasic(){
    console.log("Hello World, Basic Edition");
}

export function GetCapsules(){
    const cookies = new Cookies(null, { path: '/' });
    axios.get(URL + "capsules/user", {headers: {'auth_temp' : cookies.get("userToken")}})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}

//TODO: date selection?
export function AddCapsule(message){
    const cookies = new Cookies(null, { path: '/' });
    console.log( cookies.get("userToken"));
    axios.post(URL + "capsules/user", {data: {'message' : message}, headers: {'auth_temp' : cookies.get("userToken"), withCredentials: true}}) // 'auth' : cookies.get("userToken")
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}



export function UploadImage(formData){
    console.log(formData);
    axios.post(URL + "upload",  formData, { headers: {'Content-Type': 'multipart/form-data'}})
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })
}
