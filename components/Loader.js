import { Spinner, Grid } from '@chakra-ui/react'

const Loading = () => {
  return (<Grid placeItems="center" height="100vh"><Spinner size='xl' /></Grid>);
}

export default Loading;