import React from "react"
import { css } from "@emotion/core"

const Quote = ({ quote }) => {
  return quote.description ? (
    <blockquote
      css={css`
        margin-top: 1rem;
      `}
    >
      {quote.description}
      <footer
        css={css`
          margin-top: 0.5rem;
          text-align: right;
          font-size: 16px;
          font-style: oblique;
        `}
      >
        — {quote.author}
      </footer>
    </blockquote>
  ) : (
    <div></div>
  )
}

export default Quote
