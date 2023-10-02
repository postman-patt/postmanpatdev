import React from "react"

interface PostProps {
  post: any
  children: any
}

const Post = (props: PostProps): React.ReactElement => {
  const { post, children } = props

  return (
    <article
      className="w-full prose prose-sm sm:prose overflow-hidden prose-red"
      style={{ maxWidth: "860px" }}
    >
      {children}
    </article>
  )
}

export default Post
