import React from "react"
import PageLayout from "../layouts/PageLayout"
import Tag from "../shared/Tag"
import BlogPreview from "../elements/BlogPreview"

interface BlogScreenProps {
  posts: any
}

const BlogScreen = (props: BlogScreenProps): React.ReactElement => {
  const { posts } = props

  const blogPostElements = posts.allMdx.edges.map((post: any) => {
    return <BlogPreview post={post.node} key={post.id} />
  })

  return (
    <PageLayout>
      <div className="flex flex-row mb-6">
        <div className="antialiased text-3xl font-semibold">
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
