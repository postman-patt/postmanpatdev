import React from "react"
import PageLayout from "../layouts/PageLayout"
import Profile from "../elements/Profile"
import { ProfileType } from "../../types/ProfileType"

interface AboutScreenProps {
  profile: ProfileType
}

const AboutScreen = (props: AboutScreenProps): React.ReactElement | null => {
  const { profile } = props

  return (
    <PageLayout>
      <Profile profile={profile} />
    </PageLayout>
  )
}

export default AboutScreen
