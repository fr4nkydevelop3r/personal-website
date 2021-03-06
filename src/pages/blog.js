import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import usePosts from "../hooks/usePosts"
import PostPreview from "../components/PostPreview"
import { css } from "@emotion/core"

const Blog = () => {
  const posts = usePosts()
  return (
    <>
      <Layout>
        <SEO title="Blog" />
        <div>
          {posts.map(post => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Blog
