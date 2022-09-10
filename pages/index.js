import NextLink from 'next/link'
import {
  Link,
  Button,
  Container,
  Box,
  Heading,
  Image,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { GridItem } from '../components/grid-item'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'

import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const thumbCoffee = '../public/images/posts/coffee.jpg'
const thumbCoffeeStuff  = '../public/images/posts/coffee-stuff.jpg'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, my name is Mykhaylo
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mykhaylo Kozachok
            </Heading>
            <p>Front End Developer (Typescript and React)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Mykhaylo is software engineer and he is building cool stuff using
            javascript. Check more in{' '}
            <NextLink href="works">
              <Link>Works</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>Born in Lviv, Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2008</BioYear>Some other event
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>Some other event
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love
          </Heading>
          <Paragraph>Drawing, skiing, traveling, photography. </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/mkozachok" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @mkozachok
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/epocalips_ua" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @epocalips_ua
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/epocalips" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @epocalips
                </Button>
              </Link>
            </ListItem>
          </List>
          <SimpleGrid columns={[1,2,2]} gap={6}>
          <GridItem
              title="I love drinking coffee"
              thumbnail={thumbCoffee}
              href="some.com"
            ></GridItem>
            <GridItem
              title="You need this staff for making perfect cup of coffee"
              thumbnail={thumbCoffeeStuff}
              href="some.com"
            ></GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
