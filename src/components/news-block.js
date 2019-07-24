import styled from "@emotion/styled"
import { css } from '@emotion/core'
import React from "react"

import Img from 'gatsby-image'

const NewsBlock = styled.div`
    max-width: 680px;
    height: auto;
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    flex-wrap: wrap;
`
const NewsDate = styled.div`
    color: #B8B8B8;
    font-size: 20px;
    margin-bottom: 10px;
`
const NewsTitle = styled.div`
    color: #007649;
    line-height: 38px;
    font-family: Infini;
    font-size: 36px;
    margin-bottom: 10px;
`
const NewsAuthor = styled.div`
    color: #007649;
    font-size: 20px;
    margin-bottom: 20px;
`

const NewsAbstract = styled.div`
    color: #B8B8B8;
    font-size: 15px;
`


const NewsBlockComponent = (props) => (
    <NewsBlock>
        <div css={css`
            width: 330px;
            margin-right: 40px;
        `}>
            <Img fluid={props.fluidImage} />
        </div>
        <div css={css`
            width: 270px;
        `}>
            <NewsDate>{props.date}</NewsDate>
            <NewsTitle>{props.title}</NewsTitle>
            <NewsAuthor>{props.author}</NewsAuthor>
            <NewsAbstract>{props.abstract}</NewsAbstract>
        </div>
    </NewsBlock>
)


export default NewsBlockComponent;


