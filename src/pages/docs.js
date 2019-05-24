import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from '@emotion/core'

import Layout from "../components/layout"
import SEO from "../components/seo"

import fileIcon from "../images/file.png"

const DocsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const DocBlock = styled.div`
    width: 323px;
    height: 350px;
    border-style: solid;
    border-color: #007649;
    margin-right: 25px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DocTitle = styled.div`
    color: #007649;
    font-weight: bold;
    margin-top: 15px;
    margin-left: 15px;
    line-height: 32px;
    font-family: inconsolata;
    font-size: 30px;
`
const DocCategory = styled.div`
    color: #B8B8B8;
    font-size: 20px;
    margin-left: 15px;
    margin-top: 15px;
    text-transform: uppercase;
`
const DocFooter = styled.div`
    display: flex;
    color: #B8B8B8;
    padding-bottom: 15px;
    padding-left: 15px;
    justify-content: space-between;
    align-items: baseline;
    padding-right: 20px;
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
                      <DocBlock>
                            <div>
                                <DocCategory>
                                    {doc.node.frontmatter.category}
                                </DocCategory>
                                <DocTitle>
                                    {doc.node.frontmatter.title}
                                </DocTitle>
                            </div>
                            <DocFooter>
                                <div
                                    css={css`
                                    `}
                                >
                                > More Info
                                </div>
                                <div>
                                    <img style={{paddingBottom: 0}} src={fileIcon}></img>
                                </div>
                            </DocFooter>
                      </DocBlock>
                   </Link>
                ))}
            </DocsGrid>
    </div>
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
            category
            tags
          }
        }
      }
    }
  }
 `

export default DocsPage
