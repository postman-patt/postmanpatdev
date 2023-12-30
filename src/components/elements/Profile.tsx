import React from "react"
import { ProfileType } from "../../types/ProfileType"
import { GoLocation } from "react-icons/go"
import Tag from "../shared/Tag"
import Avatar from "../shared/Avatar"
import Button from "../shared/Button"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import FluidImage from "../shared/FluidImage"

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
    <h1 className="font-light text-lg text-center md:text-left mb-5">
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

  const certifications = (
    <div className="grid justify-items-center grid-cols-2 md:grid-cols-5 mt-5">
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="80ae0cd0-73e3-4a9e-bd0b-7a444b3710b2"
        data-share-badge-host="https://www.credly.com"
        className="justify-center"
      ></div>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="9d5f0150-65d8-466a-82af-2182d62ad8a7"
        data-share-badge-host="https://www.credly.com"
      ></div>
      <div
        data-iframe-width="150"
        data-iframe-height="270"
        data-share-badge-id="76a6c475-4f30-4e90-9151-fd6904d52702"
        data-share-badge-host="https://www.credly.com"
      ></div>
      <div className="my-auto w-36">
        <FluidImage
          image={{
            src: "istqb_foundation.png",
            caption: "ISTQB Foundation Certified",
          }}
          className="object-cover"
        />
      </div>
      <div className="my-auto w-36">
        <FluidImage
          image={{
            src: "isqi_agile_essentials.png",
            caption: "iSQI Agile Essentials Certified",
          }}
          className="object-contain"
        />
      </div>
    </div>
  )

  const summaryElement = profile?.summary ? (
    <p className="font-light whitespace-pre-wrap my-5">{profile.summary}</p>
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
      <hr className="rounded" />
      <div>{certifications}</div>
    </div>
  )
}

export default Profile
