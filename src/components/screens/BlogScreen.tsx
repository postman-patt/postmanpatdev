import React from "react"
import PageLayout from "../layouts/PageLayout"
import Tag from "../shared/Tag"
import BlogPreview from "../elements/BlogPreview"
import { Helmet } from "react-helmet"

interface BlogScreenProps {
  posts: any
}

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props

  // Order posts
  posts.allMdx.edges.sort((a: any, b: any) => {
    return (
      Date.parse(b.node.frontmatter.date) - Date.parse(a.node.frontmatter.date)
    )
  })

  const blogPostElements = posts.allMdx.edges.map((post: any) => {
    return <BlogPreview post={post.node} key={post.node.id} />
  })

  return (
    <PageLayout>
      <Helmet title="Patrick Vuong | Blog">
        <meta name="description" content="Blog Posts" />
      </Helmet>
      <div className="flex flex-row mb-6">
        <div className="antialiased text-3xl font-bold tracking-normal">
          <h1>BLOG</h1>
        </div>
        <div className="ml-3">
          <Tag tag={posts.allMdx.edges.length} />
        </div>
      </div>
      <div className="my-4 grid gap-12">{blogPostElements}</div>
    </PageLayout>
  )
}

export default BlogScreen
