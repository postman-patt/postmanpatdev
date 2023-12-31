import React from "react"
import { ProfileType } from "../../types/ProfileType"
import { GoLocation } from "react-icons/go"
import Tag from "../shared/Tag"
import Avatar from "../shared/Avatar"
import Button from "../shared/Button"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Certification from "../shared/Certification"

interface ProfileProps {
  profile: ProfileType
}

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props

  const usernameElement =
    profile?.firstName || profile.lastName ? (
      <h1 className="font-bold tracking-normal text-center md:text-left text-3xl mb-4">
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
    <h1 className="font-light text-lg text-center md:text-left mb-4">
      {profile.position}
    </h1>
  ) : null

  const locationElement = profile?.location ? (
    <div className="flex justify-center md:justify-start mb-4">
      <GoLocation size={20} className="fill-gray-400 mr-2" />
      <h1 className="font-sans font-light text-lg">{profile.location}</h1>
    </div>
  ) : null

  const tagElement = profile?.tags ? (
    <div className="flex justify-center md:justify-start mb-4">
      {profile.tags.map((t) => (
        <Tag tag={t} />
      ))}
    </div>
  ) : null

  const resumeButton = profile?.resumeLink ? (
    <div className="flex justify-center md:justify-start mb-4">
      <Button text="Download Resume" link={profile?.resumeLink} />
    </div>
  ) : null

  const social = (
    <div className="flex flex-row justify-center md:justify-start space-x-3 mb-5">
      <a href="https://github.com/postman-patt/">
        <AiFillGithub
          size={30}
          className="antialiased transition duration-200 ease-in-out hover:fill-violet-600"
        />
      </a>
      <a href="https://www.linkedin.com/in/patrick-v-b1a8621a9/">
        <AiFillLinkedin
          size={30}
          className="antialiased transition duration-200 ease-in-out hover:fill-sky-600"
        />
      </a>
    </div>
  )

  const certifications = profile.certifications
    ? profile.certifications.map((certification) => {
        return (
          <Certification
            image={certification.image}
            link={certification.link}
          />
        )
      })
    : null

  const summaryElement = profile?.summary ? (
    <p className="font-light whitespace-pre-wrap mb-6">{profile.summary}</p>
  ) : null

  return (
    <div>
      <div className="flex flex-auto justify-items-center flex-col md:flex-row items-center">
        <div className="flex flex-auto justify-items-center flex-col items-center mb-12">
          {avatarElement}
        </div>
        <div className="flex flex-auto justify-items-center flex-col items-left">
          {usernameElement}
          {positionElement}
          {locationElement}
          {tagElement}
          {resumeButton}
          {social}
        </div>
      </div>
      <div>{summaryElement}</div>
      <hr className="rounded mb-2" />
      <div className="grid grid-cols-2 md:grid-cols-5">{certifications}</div>
    </div>
  )
}

export default Profile
