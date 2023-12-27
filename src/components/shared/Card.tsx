import React from "react"

interface CardProps {
  children: React.ReactNode
}

const Card = (props: CardProps): React.ReactElement => {
  const { children } = props

  return (
    <div className="flex flex-col transition duration-200 ease-in-out shadow-md rounded-md overflow-hidden bg-white">
      {children}
    </div>
  )
}
export default Card
