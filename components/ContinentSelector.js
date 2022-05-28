import React from 'react';
import { useQuery } from "@apollo/client";
import { Select } from '@chakra-ui/react'
import Loading from './Loader';
import {GET_CONTINENTS} from "../queries/getContinents"

const ContinentSelector = ({onChange}) => {
  const { data, loading, error } = useQuery(GET_CONTINENTS);

  if (loading) return (<Loading />)
  if (error) return `Error! ${error.message}`;

  const continents = data.continents

  return (
    <React.Fragment>
      <Select borderColor="gray.500" width="300px" marginBottom={20} onChange={onChange}>
        <option value="" >Show All</option>
        {continents.map(continent => (
          <option value={continent.code} key={continent.code}>{continent.name}</option>
        ))}
      </Select>
    </React.Fragment>
  );
}
 
export default ContinentSelector;