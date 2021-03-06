import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Image from "gatsby-image"

import ReadLink from "./ReadLink"

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        padding-bottom: 1rem;
        display: flex;
        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={`/${post.slug}`}
        css={css`
          margin: 1rem 1rem 0 0;
          min-width: 100px;
        `}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3
          css={css`
            margin: 1rem 0 0 0;
          `}
        >
          <Link
            css={css`
              text-decoration: none;
              color: #fff;
            `}
            to={`/${post.slug}`}
          >
            {post.title}
          </Link>
        </h3>
        <p
          css={css`
            margin: 0.5rem 0 0 0;
          `}
        >
          {post.excerpt}
        </p>
        <ReadLink
          css={css`
            margin: 1rem 0 0 0;
          `}
          to={`/${post.slug}`}
        >
          read this post &rarr;
        </ReadLink>
      </div>
    </article>
  )
}

export default PostPreview
