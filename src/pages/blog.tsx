import React from "react"
import BlogScreen from "../components/screens/BlogScreen"
import { graphql, PageProps } from "gatsby"

interface BlogProps {
  data: PageProps<Queries.BlogPageQuery>
}

export const BlogPage = graphql`
  query BlogPage {
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
