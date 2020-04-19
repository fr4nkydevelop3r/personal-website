import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Pill from "../components/Pill"
import ReadLink from "../components/ReadLink"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      technologies
      urlProject
      instructions
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  console.log(project)
  return (
    <Layout>
      <div>
        <h3>{project.title}</h3>
        <div
          css={css`
            margin: 0;
          `}
        >
          <Image
            fluid={project.image.childImageSharp.fluid}
            alt={project.title}
            style={{ margin: "1rem 0" }}
          />
        </div>

        <p>{project.description}</p>
        {project.instructions && (
          <div
            css={css`
              margin-top: 1rem;
            `}
          >
            <p>
              In order to test this app you have to introduce a valid Upper East
              Side (New York) address, for example: 1176 5th Ave, New York, NY,
              USA. In the checkout section you can use any of these test{" "}
              <a
                href="https://stripe.com/docs/testing"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                  color: #fff;
                `}
              >
                cards
              </a>
            </p>
            <p>
              For further instructions to test the owner module please mail me.
            </p>
          </div>
        )}
        <p
          css={css`
            margin-top: 1rem;
            lfont-size: 20px;
            font-size: bold;
          `}
        >
          Technologies
        </p>
        <div
          css={css`
            margin-top: 1rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            @media only screen and (min-width: 768px) {
              justify-content: flex-start;
            }
            span {
              margin-right: 0.5rem;
            }
          `}
        >
          {project.technologies.map(technology => (
            <Pill key={technology} technology={technology} />
          ))}
        </div>
        <p
          css={css`
            margin-top: 1rem;
            lfont-size: 20px;
            font-size: bold;
          `}
        >
          Link Demo
        </p>
        <div>
          <a
            href={`${project.urlProject}`}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              color: #fff;
              width: 100%;
            `}
          >{`${project.urlProject}`}</a>
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <ReadLink
            css={css`
              margin-top: 0.5rem;
            `}
            to="/work"
          >
            &larr; back to projects
          </ReadLink>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectTemplate
