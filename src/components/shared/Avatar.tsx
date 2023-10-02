import React from "react"
import { ImageType } from "../../types/ImageType"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

interface AvatarProps {
  image: ImageType
  className?: string
}

const Avatar = (props: AvatarProps): React.ReactElement => {
  const { image, className } = props

  const data = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp(filter: { fixed: { originalName: { eq: "pv.jpg" } } }) {
        nodes {
          gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 500)
        }
      }
    }
  `)

  return (
    <div className={className}>
      <GatsbyImage
        image={data.allImageSharp.nodes[0].gatsbyImageData}
        alt="profile-image"
      />
    </div>
  )
}

export default Avatar
