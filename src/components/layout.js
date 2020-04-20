import React from "react"
import { Global, css } from "@emotion/core"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header
        css={css`
          height: 10vh;
        `}
      />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            color: #fff;
            font-family: "Roboto Slab", serif;
            font-size: 18px;
            line-height: 1.4;
            background-image: linear-gradient(
              to right,
              #6a11cb 0%,
              #2575fc 100%
            );
            min-height: 100vh;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Roboto Slab", serif;
            color: #fff;
          }
          ,
          h6 {
            line-height: 1.1, + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <main
        css={css`
          margin: 2rem auto 2rem;
          max-width: 90vw;
          width: 550px;
          min-height: 80vh;
        `}
      >
        {children}
      </main>
      <Footer
        css={css`
          height: 10vh;
        `}
      />
    </>
  )
}

export default Layout
