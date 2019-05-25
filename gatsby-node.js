/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const templates = {
      'news' : path.resolve(`src/templates/newsTemplate.js`),
      'docs':  path.resolve(`src/templates/docTemplate.js`)
  }

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const category = node.frontmatter.path.match(/^\/(\w+)\//)[1];
      createPage({
        path: node.frontmatter.path,
        component: templates[category],
        context: {}, // additional data can be passed via context
      })
    })
  })
}
