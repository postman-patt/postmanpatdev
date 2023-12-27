import React from "react"
import PageLayout from "../layouts/PageLayout"
import Post from "../elements/Post"
import { Helmet } from "react-helmet"

interface PostScreenProps {
  post: any
  children: any
}

const PostScreen = (props: PostScreenProps): React.ReactElement => {
  const { post, children } = props

  return (
    <PageLayout>
      <Helmet title="Patrick Vuong | Post">
        <meta name="description" content="Blog Post" />
      </Helmet>
      <Post post={post}>{children}</Post>
    </PageLayout>
  )
}

export default PostScreen
