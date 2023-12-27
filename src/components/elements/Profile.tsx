import React from "react"
import { ProfileType } from "../../types/ProfileType"
import { GoLocation } from "react-icons/go"
import Tag from "../shared/Tag"
import Avatar from "../shared/Avatar"

interface ProfileProps {
  profile: ProfileType
}

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props

  const usernameElement =
    profile?.firstName || profile.lastName ? (
      <h1 className="font-bold tracking-normal text-center md:text-left text-3xl mb-4">
        {profile.firstName?.toUpperCase() +
          " " +
          profile.lastName?.toUpperCase()}
      </h1>
    ) : null

  const avatarElement = profile?.image ? (
    <Avatar
      image={profile.image}
      className="w-64 h-64 rounded-full overflow-hidden"
    />
  ) : null

  const positionElement = profile?.position ? (
    <h1 className="font-light text-lg text-center md:text-left mb-5">
      {profile.position}
    </h1>
  ) : null

  const locationElement = profile?.location ? (
    <div className="flex justify-center md:justify-start mb-4">
      <GoLocation size={20} className="fill-gray-400 mr-2" />
      <h1 className="font-sans font-light text-lg text-gray-500">
        {profile.location}
      </h1>
    </div>
  ) : null

  const tagElement = profile?.tags ? (
    <div className="flex justify center mb-4">
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
      <div className="flex flex-auto justify-items-center flex-col md:flex-row items-center">
        <div className="flex flex-auto justify-items-center flex-col items-center mb-12">
          {avatarElement}
        </div>
        <div className="flex flex-auto justify-items-center flex-col items-left md:ml-4">
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
