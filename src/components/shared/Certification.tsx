import React from "react"
import { ImageType } from "../../types/ImageType"
import FluidImage from "./FluidImage"

interface CertificationProps {
  image: ImageType
  link?: string
}

const Certification = (props: CertificationProps): React.ReactElement => {
  const { image, link } = props

  return (
    <a
      href={link}
      className="p-6 transition duration-200 ease-in-out transform  hover:-translate-y-1 hover:scale-105"
    >
      <FluidImage image={image} className="w-full" />
    </a>
  )
}
export default Certification
