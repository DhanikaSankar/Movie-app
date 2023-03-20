import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ComedyMoviesUrl, imageUrl } from "./Url";

function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get(ComedyMoviesUrl).then((items) =>setBanner(items.data.results[Math.floor(Math.random() * items.data.results.length - 1)]));
  }, []);

  let img =imageUrl + banner.backdrop_path;
  
  return (
    <>
      <div style={{backgroundImage:'url('+img+')', height: "80vh", backgroundSize: "cover",padding:"150px",color:"yellow"}}>
        <h1 style={{textAlign:"center"}}>{banner.name}</h1>
        <p style={{fontSize:"20px"}}>{banner.overview}</p>
      </div> 
    </>
  );
}

export default Banner;
