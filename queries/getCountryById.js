import { gql } from "@apollo/client";

export const GET_COUNTRY_BY_ID = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      emoji
      code
      phone
      continent {
        name
      }
      capital
      currency
    }
  }
`;