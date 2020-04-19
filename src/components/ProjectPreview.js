import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"
import ReadLink from "./ReadLink"
import Pill from "./Pill"

const ProjectPreview = ({ project }) => {
  return (
    <>
      <div
        css={css`
          margin: 1rem 0;
        `}
      >
        <Link
          to={`work/${project.slug}`}
          css={css`
            text-decoration: none;
          `}
        >
          <h3>{project.title}</h3>
        </Link>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div
          css={css`
            width: 50%;
          `}
        >
          <Link
            to={`work/${project.slug}`}
            css={css`
              height: 100%;
            `}
          >
            <Image
              fluid={project.image.childImageSharp.fluid}
              alt={project.title}
            />
          </Link>
        </div>

        <div
          css={css`
            width: 50%;
            margin-left: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media only screen and (min-width: 768px) {
              justify-content: space-evenly;
            }
          }
          `}
        >
          <p>{project.shortDescription}</p>
          <div
            css={css`
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
          <div>
            <ReadLink to={`work/${project.slug}`}>Read more &rarr;</ReadLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectPreview
