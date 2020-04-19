import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Quotes from "../components/Quotes"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        height: 100vh;
      `}
    >
      <h1>Hello I'm Frank</h1>
      <h2
        css={css`
          margin-top: 1.5rem;
        `}
      >
        I'm a frontend developer building awesome web apps using modern
        technologies
      </h2>
      <Quotes />
    </div>
  </Layout>
)

export default IndexPage
