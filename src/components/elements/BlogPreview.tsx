import React from "react"
import Card from "../shared/Card"

interface BlogPreviewProps {
  post: any
}

const BlogPreview = (props: BlogPreviewProps): React.ReactElement => {
  const { post } = props

  const titleElement = post.frontmatter.title ? (
    <>
      <h1>{post.frontmatter.title}</h1>
      <a href={post.frontmatter.slug}>Link to the Post</a>
    </>
  ) : null

  return <Card>{titleElement}</Card>
}

export default BlogPreview
