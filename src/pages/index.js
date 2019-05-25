import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

import DocBlock from "../components/doc-block"
import NewsBlock from "../components/news-block"

const IndexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <IndexGrid>
        {data.allMarkdownRemark.edges.map(doc => {
            const category = doc.node.frontmatter.path.match(/^\/(\w+)\//)[1];
            let block;
            if (category == 'news') {
                block = <NewsBlock
                    category={doc.node.frontmatter.category}
                    title={doc.node.frontmatter.title}
                    date={doc.node.frontmatter.date}
                    author={doc.node.frontmatter.author}
                    fluidImage={doc.node.frontmatter.image.childImageSharp.fluid}
                    abstract={doc.node.frontmatter.abstract}
                >
                </NewsBlock>
            } else {
                block = <DocBlock
                    category={doc.node.frontmatter.category}
                    title={doc.node.frontmatter.title}
                >
                </DocBlock>
            }

           return (
              <Link key={doc.node.id}
              to={doc.node.frontmatter.path}
              style={{textDecoration: "none"}}>
              {block}
               </Link>
            )
        } )}
    </IndexGrid>
  </Layout>
)

export const pageQuery = graphql`
  query IndexGlobalQuery {
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


export default IndexPage
