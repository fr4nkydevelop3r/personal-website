import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "franky.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 150, maxHeight: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const linkedin = <FontAwesomeIcon icon={faLinkedin} />
  const email = <FontAwesomeIcon icon={faEnvelope} />
  const github = <FontAwesomeIcon icon={faGithub} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Hello I'm Frank</h1>
        <h2
          css={css`
            margin-top: 1.5rem;
          `}
        >
          I'm a full-stack developer building awesome web-apps
        </h2>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 2em;
          `}
        >
          <div
            css={css`
              width: 180px;
              height: 180px;
            `}
          >
            <Img
              css={css`
                border-radius: 50%;
              `}
              fluid={data.file.childImageSharp.fluid}
              alt="Frank Andrade"
            />
          </div>
          <div
            css={css`
              width: 180px;
              margin-top: 1rem;
              display: flex;
              justify-content: space-around;
              font-size: 24px;
              a {
                color: #fff;
              }
            `}
          >
            {" "}
            <a
              href="https://www.linkedin.com/in/frank-andrade-olivares/"
              target="_blank"
            >
              {linkedin}{" "}
            </a>{" "}
            <a href="https://github.com/fr4nkydevelop3r" target="_blank">
              {github}{" "}
            </a>
            <a href="https://twitter.com/fandrademx" target="_blank">
              {twitter}
            </a>
          </div>
          <div
            css={css`
              width: 230px;
              margin-top: 1rem;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 18px;
            `}
          >
            <span
              css={css`
                font-weight: bold;
                font-size: 16px;
              `}
            >
              {email} hola@frankandrade.dev
            </span>
          </div>
        </div>
        <div
          css={css`
            margin-top: 2rem;
            display: flex;
            justify-content: center;
          `}
        >
          <Link
            css={css`
              border: 2px solid #fff;
              padding: 12px;
              color: #fff;
              text-decoration: none;
            `}
            to="/about"
          >
            Know more about me &rarr;
          </Link>
        </div>
                   
      </div>
    </Layout>
  )
}

export default IndexPage
