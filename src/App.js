import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  //whenever the query changes the useEffect will fire off again,
  //if it was empty the useEffect would fire off only ones at the beginning
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((result) => result.data.results.slice(0, 16)
      )
      .then((items) => {
        console.log(items)
        setItems(items);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
