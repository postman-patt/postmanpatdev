import * as React from "react"
import PostScreen from "../components/screens/PostScreen"
import { graphql, PageProps } from "gatsby"

interface BlogPostProps {
  data: PageProps<Queries.PostTemplateQuery>
  children: React.ReactNode
}

export const query = graphql`
  query PostTemplate($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      internal {
        contentFilePath
      }
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

const BlogPost = (props: BlogPostProps): React.ReactElement => {
  const { data, children } = props
  return <PostScreen post={data}>{children}</PostScreen>
}

export default BlogPost
