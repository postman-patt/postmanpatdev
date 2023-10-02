import * as React from "react"
import PostScreen from "../components/screens/PostScreen"
import { graphql } from "gatsby"

interface BlogPostProps {
  data: any
  children: React.ReactNode
}

export const PostQuery = graphql`
  query PostTemplateQuery($slug: String!) {
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
