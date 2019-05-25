import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

import NewsBlock from "../components/news-block"

const NewsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const NewsPage = ({data}) => (
  <Layout>
    <SEO title="News" />
    <section style={{
        backgroundColor: 'white',
        paddingTop: '80px'
    }}>
    <div style={{marginLeft: "35px"}}>
        <span style={{
            color: "black",
            fontFamily: 'Infini',
            fontStyle: 'italic',
            fontSize: 26
        }}>Featured News</span>
            <NewsGrid>
                {data.allMarkdownRemark.edges.map(doc => (
                  <Link key={doc.node.id}
                      to={doc.node.frontmatter.path}
                      style={{textDecoration: "none"}}>
                        <NewsBlock
                            category={doc.node.frontmatter.category}
                            title={doc.node.frontmatter.title}
                            date={doc.node.frontmatter.date}
                            author={doc.node.frontmatter.author}
                            fluidImage={doc.node.frontmatter.image.childImageSharp.fluid}
                            abstract={doc.node.frontmatter.abstract}
                        >
                        </NewsBlock>
                   </Link>
                ))}
            </NewsGrid>
    </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query IndexNewsQuery {
      allMarkdownRemark(limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {path: {regex: "/^/news//"}}}
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
            author
            image {
                childImageSharp {
                   fluid(maxWidth: 350) {
                      ...GatsbyImageSharpFluid
                   }
               }
            }
          }
        }
      }
    }
  }
 `

export default NewsPage
