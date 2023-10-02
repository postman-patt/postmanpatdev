import React from "react"
import PageLayout from "../layouts/PageLayout"
import { ProjectType } from "../../types/ProjectType"
import Project from "../elements/Project"
import Tag from "../shared/Tag"

interface ProjectScreenProps {
  projects: ProjectType[]
}

const ProjectScreen = (props: ProjectScreenProps): React.ReactElement => {
  const { projects } = props

  const projectElements = projects.map((project: ProjectType) => {
    return <Project project={project} key={project.id} />
  })

  return (
    <PageLayout>
      <div className="flex flex-row mb-6">
        <div className="antialiased text-3xl font-semibold">
          <h1>PROJECTS</h1>
        </div>
        <div className="ml-3">
          <Tag tag={projects.length} />
        </div>
      </div>
      <div className="my-4 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projectElements}
      </div>
    </PageLayout>
  )
}

export default ProjectScreen
