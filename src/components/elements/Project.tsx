import React from "react"
import { ProjectType } from "../../types/ProjectType"
import { AiFillGithub } from "react-icons/ai"
import { BiCalendar } from "react-icons/bi"
import { FaPlayCircle } from "react-icons/fa"
import Tag from "../shared/Tag"
import Card from "../shared/Card"
import FluidImage from "../shared/FluidImage"
import Button from "../shared/Button"

interface ProjectProps {
  project: ProjectType
}

const Project = (props: ProjectProps): React.ReactElement => {
  const { project } = props

  const projectName = project?.projectName ? (
    <div className="my-2 antialiased text-xl">
      <h1>{project.projectName}</h1>
    </div>
  ) : null

  const summary = project?.summary ? (
    <div className="my-3 mb-6 font-light whitespace-pre-line">
      <p>{project.summary}</p>
    </div>
  ) : null

  const projectCover = project?.image ? (
    <div className="transition duration-200 ease-in-out transform  hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block  cursor-pointer">
      <FluidImage image={project.image} className="object-contain" />
    </div>
  ) : null

  const projectDuration =
    project?.startDate || project?.endDate ? (
      <div className="flex flex-row items-center my-3 font-light text-sm">
        <BiCalendar size={20} className="fill-gray-500 mr-2" />
        <p className="text-gray-500">
          {project.startDate} → {project.endDate}
        </p>
      </div>
    ) : null

  const projectTags = project?.tags ? (
    <div className="my-3">
      {project?.tags.map((t) => (
        <Tag tag={t} key={t} />
      ))}
    </div>
  ) : null

  const demoButton = project?.demoURL ? (
    <Button
      text="Demo"
      link="google.com"
      icon={<FaPlayCircle size={20} className="mr-2" />}
    />
  ) : null

  const sourceButton = project?.githubURL ? (
    <Button
      text="Source Code"
      link="google.com"
      icon={<AiFillGithub size={25} className="mr-2" />}
    />
  ) : null

  return (
    <Card>
      {projectCover}
      <div className="px-6 pt-6 flex-grow">
        {projectName}
        {projectDuration}
        {summary}
        {projectTags}
      </div>
      <div className="px-6 pb-6 mt-4">
        <div className="flex flex-row items-center">
          {demoButton}
          {sourceButton}
        </div>
      </div>
    </Card>
  )
}

export default Project
