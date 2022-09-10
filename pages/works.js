import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// import SomeCoolWork1 from '../public/images/diderot.jpg'

const SomeCoolWork1 = '/images/diderot.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="diderot"
              title="Diderot"
              thumbnail={SomeCoolWork1}
            >
              An app for students with shared books, study support and exams
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="diderot"
              title="Diderot"
              thumbnail={SomeCoolWork1}
            >
              An app for students with shared books, study support and exams
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="diderot"
              title="Diderot"
              thumbnail={SomeCoolWork1}
            >
              An app for students with shared books, study support and exams
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem
              id="diderot"
              title="Diderot"
              thumbnail={SomeCoolWork1}
            >
              An app for students with shared books, study support and exams
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Other works
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Works
