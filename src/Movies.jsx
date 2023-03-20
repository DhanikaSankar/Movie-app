import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Movies.css";
import { imageUrl } from "./Url";
import { UserContext } from "./UserProvider";

function Movies({ apitest }) {
  const { data, setData , hide, setHide, setDetails} = useContext(UserContext);
  const [movies, setMovies] = useState([]);
  const [content, setContent] = useState();
  const nav = useNavigate();

  useEffect(() => {
    axios.get(apitest).then((res) => setMovies(res.data.results));
    setDetails(movies)
    setHide(true)
  }, [data, apitest]);

  const MoreInfo = (id1) => {
    setData(id1)
    nav("/movie-details");
  };

  // const moreDetails = (data,id) =>{
  //   setId(id);
  //   setContent(data)
  //   setHide((hide) => !hide)
  // }

  return (
    <div className="row main-row">
      {movies.map((data) => {
        return (
          <Card className="card">
            <Card.Img variant="top" src={imageUrl + data.backdrop_path} className="img" />
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                {/* {" "} */}
                {data.title ? data.title : data.name}
              </Card.Title>
              {/* <Card.Title className='card-title'> {data.title || data.name}</Card.Title> */}
              {hide === false ? (
                <Card.Text>
                  {content === data.overview ? content : ""}{" "}
                </Card.Text>
              ) : (" ")}
              <div className="text-center">
                {/* <Button variant="warning" className='btn' onClick={ () => moreDetails(data.overview,data.id)} > */}
                {/* <Button variant="warning" className='btn' onClick={()=>nav('/movie-details')} > */}
                <Button variant="warning" className="btn" onClick={() => MoreInfo(data)} >
                  More Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Movies;
