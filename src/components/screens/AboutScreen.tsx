import React from "react"
import PageLayout from "../layouts/PageLayout"
import Profile from "../elements/Profile"
import { ProfileType } from "../../types/ProfileType"
import { Helmet } from "react-helmet"

interface AboutScreenProps {
  profile: ProfileType
}

const AboutScreen = (props: AboutScreenProps): React.ReactElement | null => {
  const { profile } = props

  return (
    <PageLayout>
      <Helmet title="Patrick Vuong | About">
        <meta
          name="description"
          content={
            profile.firstName + " " + profile.lastName + " " + profile.position
          }
        />
      </Helmet>
      <Profile profile={profile} />
    </PageLayout>
  )
}

export default AboutScreen
