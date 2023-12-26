import React from "react"
import ProjectScreen from "../components/screens/ProjectScreen"
import { projects } from "../data/projects_data"

const Projects = () => {
  return (
    <main>
      <ProjectScreen projects={projects} />
    </main>
  )
}

export default Projects
