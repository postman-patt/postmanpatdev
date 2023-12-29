import * as React from "react"
import AboutScreen from "../components/screens/AboutScreen"
import { profile } from "../data/profile"
import { Script } from "gatsby"

const Index = (): React.ReactElement => {
  return (
    <main>
      <Script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></Script>
      <AboutScreen profile={profile} />
    </main>
  )
}

export default Index
