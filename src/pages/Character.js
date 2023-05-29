import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { loading, error, data } = useCharacter(id);

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  console.log(data);
  return (
    <div>
      {data && (
        <article
          key={data.character.id}
          style={{
            margin: "16px",
          }}
        >
          <img
            src={data.character.image}
            alt={data.character.name}
            width="250"
            height="250"
          />
          <h3>{data.character.characterName}</h3>

          {data.character.episode.map((e) => {
            return (
              <>
                <h2>{e.episode}</h2>
                <p>{e.name}</p>
              </>
            );
          })}

          <Link to="/">Back To All Characters</Link>
        </article>
      )}
    </div>
  );
};

export default Character;
