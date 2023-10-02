import * as React from "react"
import AboutScreen from "../components/screens/AboutScreen"
import { profile } from "../data/profile"

const Index = (): React.ReactElement => {
  return (
    <main>
      <AboutScreen profile={profile} />
    </main>
  )
}

export default Index
