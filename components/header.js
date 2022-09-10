import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box display={{ md: 'flex' }} my={6}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Mykhaylo Kozachok
        </Heading>
        <p>Front End Developer (Typescript and React)</p>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src="/images/me.png"
          alt="Profile image"
        />
      </Box>
    </Box>
  )
}

export default Header
