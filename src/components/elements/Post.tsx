import React from "react"

interface PostProps {
  post: any
  children: any
}

const Post = (props: PostProps): React.ReactElement => {
  const { children } = props

  return (
    <article
      className="w-full prose prose-sm sm:prose overflow-hidden prose-red prose-img:object-contain"
      style={{ maxWidth: "860px" }}
    >
      {children}
    </article>
  )
}

export default Post
