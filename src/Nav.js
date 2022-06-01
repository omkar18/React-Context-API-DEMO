import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div
      style={{
        backgroundColor: "grey",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "10px",
      }}
    >
      <h4>Context Demo</h4>
      <h4>Total Movies: {movies?.length}</h4>
    </div>
  );
}

export default Nav;
