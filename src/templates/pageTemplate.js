import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const PageContainer = styled.div`
    background-color: white;
    color: black;
    padding-top: 50px;
    max-width: 800px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <PageContainer>
        <h1>{frontmatter.title}</h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
  `
