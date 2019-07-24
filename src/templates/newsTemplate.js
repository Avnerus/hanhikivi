import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import Disqus from 'gatsby-plugin-disqus'

const NewsContainer = styled.div`
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
      <NewsContainer>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Disqus
          identifier={id}
          title={'Doc: ' + frontmatter.title}
          url={`http://hanhikivi.center${frontmatter.path}`}
        />
      </NewsContainer>
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
