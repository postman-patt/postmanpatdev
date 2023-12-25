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
            date(formatString: "DD MMMM, YYYY")
            summary
            title
            slug
            cover {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  quality: 95
                  transformOptions: {
                    fit: COVER
                    cropFocus: CENTER
                    grayscale: false
                  }
                )
              }
            }
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
