import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
      capital
    }
  }
`;