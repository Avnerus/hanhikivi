import styled from "@emotion/styled"
import React from "react"

import fileIcon from "../images/file.png"

import Img from 'gatsby-image'

const DocBlock = styled.div`
    width: 330px;
    height: 350px;
    border-style: solid;
    border-color: #007649;
    margin-right: 25px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #F7F2D0;
`

const DocImageBackground = styled.div`
    position: relative;
    height: 100%;
    & > .gatsby-image-wrapper {
        width: 100%;
        position: absolute !important;
        opacity: 0.15;
    }
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

const DocBlockContent = ({props}) => ( 
    <>
    <div>
        <DocCategory>
            {props.category}
        </DocCategory>
        <DocTitle>
            {props.title}
        </DocTitle>
    </div>
    <DocFooter>
        <div>
        > More Info
        </div>
        <div>
            <img alt="file" src={fileIcon}></img>
        </div>
    </DocFooter>
    </>
)
const DocBlockComponent = (props) => (
    <DocBlock>
        {props.fluidImage ?  (
            <DocImageBackground>
                <Img fluid={props.fluidImage} />
                <DocBlockContent props={props}>
                </DocBlockContent>
            </DocImageBackground>
        ) : (
            <DocBlockContent props={props}>
            </DocBlockContent>
            )
        }
    </DocBlock>
)


export default DocBlockComponent;


