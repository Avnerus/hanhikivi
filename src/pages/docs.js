import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DocsGrid = styled.div`
    display: flex;
`

const DocBlock = styled.div`
    width: 323px;
    height: 350px;
    border-style: solid;
    border-color: #007649;
    margin-right: 26px;
`

const DocsPage = ({data}) => (
  <Layout>
    <SEO title="Docs" />
    <section style={{
        backgroundColor: '#F7F2D0'
    }}>
    <h1 style={{
        color: "#007649"
    }}>Docs</h1>
        <DocsGrid>
            {data.allMarkdownRemark.edges.map(doc => (
              <DocBlock key={doc.node.id}>
                  <Link
                    to={doc.node.frontmatter.path}>
                    {doc.node.frontmatter.title}
                  </Link>
              </DocBlock>
            ))}
        </DocsGrid>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
      allMarkdownRemark(limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            abstract
          }
        }
      }
    }
  }
 `

export default DocsPage
