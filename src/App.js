
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {PopularMoviesUrl,ComedyMoviesUrl,LatestMoviesUrl } from "./Url";
import Movies from "./Movies";
import Banner from "./Banner";
import MovieDetails from "./MovieDetails";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

function App() {
  const { hide } = useContext(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        { hide ? <Banner /> : "" }
        <Routes>
          <Route path = "/" element = {<Movies  apitest={PopularMoviesUrl} />} ></Route>
          <Route path = "/Latest" element = {<Movies  apitest={LatestMoviesUrl} />}></Route>
          <Route path = "/Comedy" element = {<Movies  apitest={ComedyMoviesUrl} />}></Route>
          <Route path = "/Movie-details" element = {<MovieDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
