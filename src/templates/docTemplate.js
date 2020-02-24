import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Theme} from "../components/layout"
import styled from "@emotion/styled"
import Disqus from 'gatsby-plugin-disqus'

const DocContainer = styled.div`
    background-color: ${Theme.docsBackgroundColor};
    color: #007649;
    padding-top: 50px;
    width: 1200px;
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    & .gatsby-resp-image-wrapper {
      margin-left: 0 !important;
    }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <DocContainer>
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
      </DocContainer>
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
