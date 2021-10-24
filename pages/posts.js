import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCoffee from '../public/images/posts/coffee.jpg'
import thumbCoffeeStuff from '../public/images/posts/coffee-stuff.jpg'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
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

export default Posts
