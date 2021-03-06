import React, { useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { css } from "@emotion/core"
import { useDencrypt } from "use-dencrypt-effect"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNode,
  faGit,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faFire,
  faDatabase,
  faR,
} from "@fortawesome/free-solid-svg-icons"

const values = ["mind", "soul", "heart", "family", "neighborhood"]

const About = () => {
  const { result, dencrypt } = useDencrypt()
  const git = <FontAwesomeIcon icon={faGit} />
  const coding = <FontAwesomeIcon icon={faCode} />
  const html5 = <FontAwesomeIcon icon={faHtml5} />
  const css3 = <FontAwesomeIcon icon={faCss3} />
  const js = <FontAwesomeIcon icon={faJs} />
  const react = <FontAwesomeIcon icon={faReact} />
  const firebase = <FontAwesomeIcon icon={faFire} />
  const node = <FontAwesomeIcon icon={faNode} />
  const mongo = <FontAwesomeIcon icon={faDatabase} />

  useEffect(() => {
    let i = 0

    const action = setInterval(() => {
      dencrypt(values[i])

      i = i === values.length - 1 ? 0 : i + 1
    }, 2000)

    return () => clearInterval(action)
  }, [])

  return (
    <Layout>
      <SEO title="About me" />
      <div>
        <h2>Hola mundo 👋</h2>
        <p
          css={css`
            margin-top: 1rem;
            font-size: 20px;
            font-weight: bold;
          `}
        >
          I'm helping mexican restaurants to sell online without crazy fees. I
          love food{" "}
          <span role="img" aria-label="taco">
            🌮{" "}
          </span>
          and I love technology{" "}
          <span role="img" aria-label="techno-man">
            👨‍💻{" "}
          </span>
          Esta va por{" "}
          <span role="img" aria-label="mexico">
            {" "}
            🇲🇽
          </span>
        </p>

        <div
          css={css`
            margin-top: 2rem;
          `}
        >
          {coding}{" "}
          <span
            css={css`
              font-size: 20px;
              font-weight: bold;
            `}
          >
            My toolbox
          </span>
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin-top: 1rem;

              li {
                list-style: none;
                padding: 8px;
              }
            `}
          >
            <li>HTML {html5}</li>
            <li>CSS {css3}</li>
            <li>Javasript {js}</li>
            <li>React {react}</li>
            <li>Firebase {firebase}</li>
            <li>Node {node}</li>
            <li>
              Express <span>E</span>{" "}
            </li>
            <li>MongoDB {mongo}</li>
            <li>Git {git}</li>
          </ul>
        </div>

        <p
          css={css`
            margin-top: 1.5rem;
          `}
        >
          Being a developer allows you to discover a new world, a world where
          with enough persistence you can make a change in your{" "}
          <span
            css={css`
              font-size: 22px;
            `}
          >
            {result}
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default About
