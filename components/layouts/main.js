import { Box, Container } from '@chakra-ui/layout'
import Navbar from '../navbar'
import Head from 'next/head'
const Main = ({ children, router }) => {
  return (
    <div>
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Mykhaylo Kozachok - Homepage</title>
        </Head>
        <Navbar path={router.asPath} />
        <Container maxW="container.md" pt={14}>
          {children}
        </Container>
      </Box>
    </div>
  )
}

export default Main
