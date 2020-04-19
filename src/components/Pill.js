import React from "react"
import { css } from "@emotion/core"

const Pill = ({ technology }) => (
  <span
    css={css`
      display: inline-block;
      padding: 0.25em 0.6em;
      font-size: 75%;
      font-weight: 700;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 10rem;
      background-color: #fff;
      color: #007bff;
      margin-bottom: 0.5rem;
    `}
  >
    {technology}
  </span>
)

export default Pill
