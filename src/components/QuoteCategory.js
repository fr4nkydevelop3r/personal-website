import React from "react"
import { css } from "@emotion/core"

const QuoteCategory = ({ category }) => {
  const getEmoji = () => {
    let emoji = ""
    switch (category.name) {
      case "self-control":
        emoji = "💆‍"
        break
      case "courage":
        emoji = "🧗"
        break
      case "wisdom":
        emoji = "💫"
        break
      case "love":
        emoji = "❤️"
        break
      default:
        emoji = "💇"
        break
    }
    return emoji
  }

  return (
    <div
      css={css`
        margin-bottom: 0.5rem;
      `}
    >
      <button
        type="button"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 8px 8px 0 8px;
          width: auto;
          height: auto;
          font-size: 16px;
          background-color: inherit;
          color: #fff;
          border: none;
          :focus {
            outline: none;
          }
        `}
      >
        {getEmoji()} #{category.name}
      </button>
    </div>
  )
}

export default QuoteCategory
