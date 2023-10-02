import React from "react"
import BlogScreen from "../components/screens/BlogScreen"
import { graphql } from "gatsby"

interface BlogProps {
  data: any
}

export const BlogPageQuery = graphql`
  query BlogPageQuery {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            cover
            date
            summary
            title
            slug
          }
        }
      }
    }
  }
`

const Blog = (props: BlogProps): React.ReactElement => {
  const { data } = props
  return (
    <main>
      <BlogScreen posts={data} />
    </main>
  )
}

export default Blog
