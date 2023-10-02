import React from "react"
import { ProfileType } from "../../types/ProfileType"
import { GoLocation } from "@react-icons/all-files/Go/GoLocation"
import Tag from "../shared/Tag"
import Avatar from "../shared/Avatar"

interface ProfileProps {
  profile: ProfileType
}

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props

  const usernameElement =
    profile?.firstName || profile.lastName ? (
      <h1 className="font-bold tracking-tight text-3xl mb-3">
        {profile.firstName + " " + profile.lastName}
      </h1>
    ) : null

  const avatarElement = profile?.image ? (
    <Avatar
      image={profile.image}
      className="w-64 h-64 rounded-full overflow-hidden"
    />
  ) : null

  const positionElement = profile?.position ? (
    <h1 className="font-light text-lg mb-3">{profile.position}</h1>
  ) : null

  const locationElement = profile?.location ? (
    <div className="flex">
      <GoLocation size={20} className="fill-gray-400 mr-2" />
      <h1 className="font-sans font-light text-lg text-gray-500 mb-4">
        {profile.location}
      </h1>
    </div>
  ) : null

  const tagElement = profile?.tags ? (
    <div className="mb-4">
      {profile.tags.map((t) => (
        <Tag tag={t} />
      ))}
    </div>
  ) : null

  const summaryElement = profile?.summary ? (
    <p className="font-light whitespace-pre-wrap">{profile.summary}</p>
  ) : null

  return (
    <div>
      <div className="flex flex-auto justify-items-center flex-row items-center">
        <div className="flex flex-auto justify-items-center  flex-col items-center mb-12">
          {avatarElement}
        </div>
        <div className="flex flex-auto justify-items-center  flex-col items-left mb-12">
          {usernameElement}
          {positionElement}
          {locationElement}
          {tagElement}
        </div>
      </div>
      <div>{summaryElement}</div>
    </div>
  )
}

export default Profile
