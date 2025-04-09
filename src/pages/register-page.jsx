import { useEffect, useState } from "react"
import axios from "axios";

function Register(){

    const [msg,setMsg]= useState("");

    useEffect(()=>{
        const fetchData = async()=>{
            const data= await axios.get("https://byteversebackend.onrender.com/logout",{
                withCredentials: true
            });
            setMsg(data.data.message);
        } 
        fetchData();
    },[]);

    return(
        <>
        <h1>Register Page</h1>
        </>
    )
}

export default Register