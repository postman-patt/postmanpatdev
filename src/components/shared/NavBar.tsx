import React from "react"
import { routes, Routes } from "../../constants/routes"

const NavBar = (): React.ReactElement => {
  const links = Object.values(routes).map(
    (route: Routes): React.ReactElement => {
      return (
        <li className="md:ml-8 ml-3 text-xs uppercase" key={route.name}>
          <a href={route.path}>{route.name}</a>
        </li>
      )
    }
  )

  return <ul className="flex flex-row">{links}</ul>
}
export default NavBar
