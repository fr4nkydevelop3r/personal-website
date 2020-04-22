import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            slug
            technologies
            title
            description
            shortDescription
            urlProject
            instructions
            image {
              childImageSharp {
                fixed(width: 180) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allProjectsJson.edges.map(project => ({
    slug: project.node.slug,
    technologies: project.node.technologies,
    title: project.node.title,
    urlProject: project.node.urlProject,
    description: project.node.description,
    instructions: project.node.instructions,
    shortDescription: project.node.shortDescription,
    image: project.node.image,
  }))
}

export default useProjects
