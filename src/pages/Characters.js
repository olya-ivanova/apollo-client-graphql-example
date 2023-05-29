import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

const Characters = () => {
  const { loading, error, data } = useCharacters();

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      {data &&
        data.characters.results.map((character) => {
          const { id, image, name, gender } = character;
          return (
            <article
              key={id}
              style={{
                margin: "16px",
              }}
            >
              <Link to={`/${id}`}>
                <img src={image} alt={name} width="250" height="250" />
                <h4>{name}</h4>
                <h4>{gender}</h4>
              </Link>
            </article>
          );
        })}
    </section>
  );
};

export default Characters;
