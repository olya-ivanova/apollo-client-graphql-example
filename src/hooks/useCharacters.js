import { gql, useQuery } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export const useCharacters = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);

  return { loading, error, data };
};
