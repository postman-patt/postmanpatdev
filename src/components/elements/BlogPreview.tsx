import React from "react"
import Card from "../shared/Card"
import FluidImage from "../shared/FluidImage"
import { BiCalendar } from "@react-icons/all-files/Bi/BiCalendar"

interface BlogPreviewProps {
  post: any
}

const BlogPreview = (props: BlogPreviewProps): React.ReactElement => {
  const { post } = props

  const cover = post.frontmatter.cover ? (
    <FluidImage
      fluidImage={post.frontmatter.cover.childImageSharp.gatsbyImageData}
      className="object-contain"
    />
  ) : null

  const title = post.frontmatter.title ? (
    <div className="text-xl">
      <h1>{post.frontmatter?.title}</h1>
    </div>
  ) : null

  const date = post.frontmatter.date ? (
    <div className="flex flex-row items-center my-3 font-light text-xs text-gray-500">
      <BiCalendar size={20} className="fill-gray-500 mr-2" />
      <p>{post.frontmatter.date}</p>
    </div>
  ) : null

  const summary = post.frontmatter.summary ? (
    <div className="pt-1 font-light text-base whitespace-pre-line">
      <p>{post.frontmatter?.summary}</p>
    </div>
  ) : null

  return (
    <a href={post.frontmatter.slug} className="md:flex flex-row shadow-md">
      <div className="md:flex overflow-hidden">
        <div className="transition duration-200 ease-in-out transform hover:-translate-x-1 hover:scale-105 md:w-64 bg-cover bg-gray-200 block cursor-pointer">
          {cover}
        </div>
      </div>
      <div className="flex-1 px-8 py-4">
        {title}
        {date}
        {summary}
      </div>
    </a>
  )
}

export default BlogPreview
