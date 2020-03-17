import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import SEO from "../components/seo"

import rehypeReact from "rehype-react"
import SubscribeComponent from "../components/subscribe"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "subscribe-component": SubscribeComponent }
}).Compiler

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
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageContainer>
        <h1>{frontmatter.title}</h1>
        <div
          className="page-content"
      >{renderAst(htmlAst)}
      </div>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
  `
