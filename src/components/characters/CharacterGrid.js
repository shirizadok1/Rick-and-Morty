import React from "react";
import Spinner from "../Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
