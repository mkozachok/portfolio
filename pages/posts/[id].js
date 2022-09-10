import { Heading, Image } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { getAllPostIds, getPostData } from '../../libs/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData: { title, image, contentHtml } }) {
  return (
    <Layout title={title}>
      <Heading as="h3" fontSize={20} mb={6}>
        {title}
      </Heading>
      <article>
        {image && <Image src={image} alt={title} />}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}
