import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import useProjects from "../hooks/useProjects"
import ProjectPreview from "../components/ProjectPreview"

const Work = () => {
  const projects = useProjects()
  return (
    <Layout>
      <SEO title="Work" />
      {projects.map(project => (
        <ProjectPreview project={project} key={project.slug} />
      ))}
    </Layout>
  )
}

export default Work
