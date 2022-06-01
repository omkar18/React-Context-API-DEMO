import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovies from "./AddMovies";
function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovies />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
