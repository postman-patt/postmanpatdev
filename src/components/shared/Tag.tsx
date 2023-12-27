import React from "react"

interface TagProps {
  tag: string | number
}

const Tag = (props: TagProps): React.ReactElement => {
  const { tag } = props

  return (
    <span
      key={tag}
      className="inline-block bg-gray-200 rounded-sm px-2 py-1 mr-2 my-1 text-xs font-normal last:mr-0 first:ml-0"
    >
      {tag}
    </span>
  )
}

export default Tag
