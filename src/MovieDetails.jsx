import {MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCardTitle} from "mdb-react-ui-kit";
import React, { useContext, useEffect } from "react";
import {imageUrl} from "./Url";
import { UserContext } from "./UserProvider";
import "./App.css"

function MovieDetails() {
  const { data,setHide } = useContext(UserContext);
  
  useEffect(() => {
    setHide(false)
  }, [])
  
  return (
    // <div className="main-div">
          <MDBCard alignment="center" className="cardDiv" style={{background: "linear-gradient(45deg, #000 30%, orange 90%)"}}>
            <MDBCardImage position="top" src={imageUrl + data.backdrop_path} alt="..."/>
            <MDBCardBody className="card-body" >
              <MDBCardTitle className="title">{data.title || data.name}</MDBCardTitle>
              <MDBCardText className="text">{data.overview}</MDBCardText>
            </MDBCardBody>
          </MDBCard>
    // </div>
  );
}

export default MovieDetails;
