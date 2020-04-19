exports.createPages = async ({ actions, graphql, reporter }) => {
  /** PAGES FOR BLOG POSTS*/

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }
  const posts = result.data.allMdx.nodes

  //we use foreach beause we don't return anything, the action
  //of create pages is a side effect
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve("./src/templates/PostTemplate.js"),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  /** PAGES FOR PORTFOLIO PROJECTS*/

  const portfolio = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (portfolio.error) {
    console.error("Something went wrong!")
    return
  }

  portfolio.data.allProjectsJson.edges.forEach(edge => {
    const project = edge.node

    actions.createPage({
      path: `/work/${project.slug}/`,
      component: require.resolve("./src/templates/ProjectTemplate.js"),
      context: {
        slug: project.slug,
      },
    })
  })
}
