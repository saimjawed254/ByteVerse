import './hero.css'
import { useEffect, useState } from "react"
import axios from "axios";

function Hero(){

    const [msg,setMsg]= useState("");
    const [latitude,setLat]= useState("");
    const [longitude,setLong]= useState("");
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            const data= await axios.get("http://localhost:3000/",{
                withCredentials: true
            });
            setMsg(data.data.message);
        } 
        fetchData();
    },[]);

        const getLoc=()=>{
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(success,error);
            } else {
                console.log("Not Possible");
            }
        }

    // function getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(success, error);
    //     } else { 
    //       console.log("Geolocation is not supported by this browser.");
    //     }
    //   }

      function success(position) {

        setLoading(true);
        
        const lat=position.coords.latitude.toString();
        const long=position.coords.longitude.toString();

        setLat(lat);
        setLong(long);
        const newsrc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d104128.91649944017!2d"+latitude+"!3d"+longitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1743491925268!5m2!1sen!2sin"
        document.getElementsByClassName("gmap").src=newsrc
        console.log(typeof(newsrc))

        console.log(newsrc)
      }
      
      function error() {
        alert("Sorry, no position available.");
      }

    return(
        <>
        <div>
        <h1>Hero Page</h1>
        <h1>{msg}</h1>
        <button onClick={getLoc}>Get Location</button>
        </div>
        <div className="maps">
            <iframe className="gmap" src={"http://maps.google.com/maps?q="+latitude+","+longitude+"&z=15&output=embed"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default Hero