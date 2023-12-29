import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

interface FooterProps {
  className?: string
}

const Footer = (props: FooterProps): React.ReactElement => {
  const { className } = props

  return (
    <footer>
      <div className="flex flex-row justify-center space-x-4 mb-5">
        <a href="https://github.com/postman-patt/">
          <AiFillGithub
            size={30}
            className="antialiased transition duration-200 ease-in-out fill-gray-400 hover:fill-violet-600"
          />
        </a>
        <a href="https://www.linkedin.com/in/patrick-v-b1a8621a9/">
          <AiFillLinkedin
            size={30}
            className="antialiased transition duration-200 ease-in-out fill-gray-400 hover:fill-sky-600"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
