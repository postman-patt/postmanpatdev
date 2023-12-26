import React from "react"

interface ButtonProps {
  text: string
  icon: React.ReactElement
  link: string
}

const Button = (props: ButtonProps): React.ReactElement => {
  const { text, icon, link } = props

  return (
    <a
      href={link}
      className="transition duration-200 ease-in-out flex flex-row items-center hover:bg-black hover:text-white  mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300"
    >
      {icon}
      {text}
    </a>
  )
}
export default Button
