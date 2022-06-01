import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

function AddMovies() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const handleUpdateName = (e) => setName(e.target.value);
  const handleUpdatePrice = (e) => setPrice(e.target.value);

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((previousMovies) => [...previousMovies, { name, price }]);
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <input name="name" type="text" onChange={handleUpdateName} />
        <input name="price" type="text" onChange={handleUpdatePrice} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovies;
