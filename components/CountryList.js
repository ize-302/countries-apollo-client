import React from 'react';
import { useQuery } from "@apollo/client";
import Link from 'next/link'
import { Grid, GridItem, Stack, Box, Heading, Text, Button } from '@chakra-ui/react'
import Loading from './Loader';
import {GET_COUNTRIES} from "../queries/getCountries";

const CountryList = ({selectedContinent}) => {
  const [index, setindex] = React.useState(30);

  const variables = {
    filter: {
      continent: {
        eq: selectedContinent
      }
    }
  }
  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    variables: selectedContinent ? variables : {}
  });

  if (loading) return (<Loading />)
  if (error) return `Error! ${error.message}`;

  let countries = data.countries.slice(0, index)
  
  return (
    <React.Fragment>
      <Grid paddingX={5} gridTemplateColumns='repeat(auto-fill, minmax(200px,1fr))' width="100%" gridGap={5}>
        {countries.map((country) => (
          <Link href={`/country/${country.code}`} key={country.code}>
            <GridItem _hover={{background: 'gray.100'}} bg='white' rounded={5} borderWidth="1px" borderColor="gray.500" cursor="pointer" p={4}>
              <Stack gap={1}>
                <Box>
                  {country.emoji}
                  <Heading fontSize={16}>{country.name} ({country.code})</Heading>
                </Box>
                <Text color="gray.600">{country.capital}</Text>
              </Stack>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Button background="green.300" marginY={10} disabled={index >= data.countries.length} onClick={() => setindex(index+30)}>Show more</Button>
    </React.Fragment>
  );
}
 
export default CountryList;