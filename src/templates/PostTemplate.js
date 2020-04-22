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
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          margin: 1rem 0;
        `}
      >
        <span
          css={css`
            font-size: 0.75rem;
          `}
        >
          by {post.frontmatter.author}
        </span>
        <span
          css={css`
            font-size: 0.75rem;
          `}
        >
          {post.frontmatter.date}
        </span>
      </div>
      <div
        css={css`
          p:nth-of-type(2) {
              margin-top: 2rem;
            }
            p{
              margin-bottom: 1rem;
              strong{
                em{
                  color: #D3D3D3;

                }
              }
            }
            ul{
              li{
                margin-bottom: 1rem;
                strong{
                  em{
                    color: #D3D3D3;

                  }
                }
              }
            }
            a{
              color: #fff;
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
