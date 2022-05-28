import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router'
import {Grid, Text, Heading, Stack, HStack} from '@chakra-ui/react'
import Loading from "../../components/Loader";
import {GET_COUNTRY_BY_ID} from "../../queries/getCountryById"
import Router from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'

const Country = () => {
  const router = useRouter()
  const code = router.query.id

  const { data, loading, error } = useQuery(GET_COUNTRY_BY_ID, {
    variables: { code },
  });

  if (loading) return (<Loading />)

  if (error) {
    console.error(error);
    return null;
  }
  const country = data.country

  return (
    <Grid paddingY={20} placeItems="center" maxW={800} width="100%" margin="0 auto">
      <Stack gap={4}>
        <HStack cursor='pointer' onClick={() => Router.back()} mb={10}>
          <ArrowBackIcon /><Text color="#000" cursor="pointer" fontWeight={600} fontSize={16}>Go back</Text>
        </HStack>
        <Heading fontSize={24}>{country?.emoji} {country?.name} ({country?.code})</Heading>
        {country?.capital && <Text>Capital: {country.capital}</Text>}
        {country?.phone && <Text>Phone code: +{country.phone}</Text>}
        {country?.continent?.name && <Text>Continent: {country.continent.name}</Text>}
        {country?.currency && <Text>Currency: {country.currency}</Text>}
      </Stack>
    </Grid>
  );
}
 
export default Country;