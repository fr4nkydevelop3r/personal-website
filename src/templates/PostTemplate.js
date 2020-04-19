import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import ReadLink from "../components/ReadLink"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
          margin: 0.5rem 0;
        `}
      >
        by {post.frontmatter.author}
      </p>
      <div
        css={css`
          p:nth-of-type(2) {
              margin-top: 2rem;
            }
          }
        `}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
      <ReadLink
        css={css`
          margin-top: 0.5rem;
        `}
        to="/blog"
      >
        &larr; back to all posts
      </ReadLink>
    </Layout>
  )
}

export default PostTemplate
