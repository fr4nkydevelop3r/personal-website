import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <footer
    css={css`
      width: 100%;
      text-align: center;
      padding: 0.5rem;
    `}
  >
    <p
      css={css`
        font-size: 14px;
      `}
    >
      Made with ❤️ using the JAM Stack
    </p>
  </footer>
)

export default Footer
