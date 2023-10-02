import React from "react"
import PageLayout from "../layouts/PageLayout"
import Post from "../elements/Post"

interface PostScreenProps {
  post: any
  children: any
}

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post, children } = props

  return (
    <PageLayout>
      <Post post={post}>{children}</Post>
    </PageLayout>
  )
}

export default PostScreen
