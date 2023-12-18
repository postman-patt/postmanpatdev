import React from "react"
import NavBar from "./NavBar"

interface HeaderProps {
  className: string
}

const Header = (props: HeaderProps): React.ReactElement => {
  const { className } = props

  return (
    <header className={`flex flex-row justify-items-center pt-8 ${className}`}>
      <div className="mr-6 font-extrabold text-sm">
        <a href="/">POSTMANPAT.DEV</a>
      </div>
      <nav className="flex flex-row items-end">
        <NavBar />
      </nav>
    </header>
  )
}

export default Header
