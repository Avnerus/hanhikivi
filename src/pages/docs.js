import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DocBlock from "../components/doc-block"

const DocsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const DocsPage = ({data}) => (
  <Layout>
    <SEO title="Docs" />
    <section style={{
        backgroundColor: '#F7F2D0',
        paddingTop: '80px'
    }}>
    <div style={{marginLeft: "35px"}}>
        <span style={{
            color: "#007649",
            fontFamily: 'Infini',
            fontStyle: 'italic',
            fontSize: 26
        }}>Featured Documents</span>
            <DocsGrid>
                {data.allMarkdownRemark.edges.map(doc => (
                  <Link key={doc.node.id}
                      to={doc.node.frontmatter.path}
                      style={{textDecoration: "none"}}>
                      <DocBlock
                          category={doc.node.frontmatter.category}
                          title={doc.node.frontmatter.title}
                      >
                      </DocBlock>
                   </Link>
                ))}
            </DocsGrid>
    </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query IndexDocsQuery {
      allMarkdownRemark(limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {path: {regex: "/^/docs//"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            abstract
            category
            tags
          }
        }
      }
    }
  }
 `

export default DocsPage
