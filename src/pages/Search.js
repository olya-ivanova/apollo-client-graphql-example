import React, { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    { variables: { name } }
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>
      <br />
      {data && (
        <ul>
          {data.characters.results.map((c) => {
            return <li key={c.location.name}>{c.location.name}</li>;
          })}
        </ul>
      )}
      <br />
      <Link to="/">Back To All Characters</Link>
    </div>
  );
};

export default Search;
