import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Diderot">
    <Container>
      <Title>
        Diderot <Badge>2019</Badge>
      </Title>
      <P>
        An app for remote studying. Students are able to attend courses online.
      </P>
      <P>
        An app for remote studying. Students are able to attend courses online.
      </P>
      <P>
        An app for remote studying. Students are able to attend courses online.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="diderot.one">
            diderot.one <ExternalLinkIcon mx={2} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Bootstrap, Python, AWS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/diderot.jpg" alt="Diderot"></WorkImage>
      <WorkImage src="/images/diderot.jpg" alt="Diderot"></WorkImage>
    </Container>
  </Layout>
)

export default Work
