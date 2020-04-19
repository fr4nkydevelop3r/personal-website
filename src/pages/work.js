import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
