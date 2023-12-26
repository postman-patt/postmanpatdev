import React from "react"
import { AiFillGithub } from "../../../node_modules/react-icons/Ai"
import { AiFillLinkedin } from "../../../node_modules/react-icons/Ai"

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
            size={40}
            className="fill-gray-500 hover:fill-rose-600"
          />
        </a>
        <a href="https://www.linkedin.com/in/patrick-v-b1a8621a9/">
          <AiFillLinkedin
            size={40}
            className="fill-gray-500 hover:fill-sky-600"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
