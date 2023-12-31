import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { ImageType } from "../../types/ImageType"
import { useFluidCover } from "../../hooks/useFluidCover"

type FluidImageProps = {
  image?: ImageType | null | undefined
  fluidImage?: IGatsbyImageData | null | undefined
  className?: string
}

const FluidImage = (props: FluidImageProps): React.ReactElement | null => {
  const { image, fluidImage: fluidImageProvided, className = "" } = props

  const fluidImageFetched = useFluidCover({ imagePath: image?.src })
  const fluidImage = fluidImageProvided || fluidImageFetched

  if (!fluidImage) {
    // @TODO: Consider to return an image placeholder.
    return null
  }

  return (
    <GatsbyImage
      image={fluidImage}
      alt={image?.caption || ""}
      title={image?.caption || ""}
      className={className}
    />
  )
}

export default FluidImage
