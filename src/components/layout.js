import React from "react"
import { Global, css } from "@emotion/core"

import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
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
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
