import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Theme } from "./layout"
import styled from "@emotion/styled"

import logo from "../images/logo.svg"

const Separator = styled.div`
    border-left-style: solid;
    height: 87px;
    color: #007649;
    border-width: 1px;
`

const MenuTitle = styled.div`
    color: #007649;
    font-family: Infini;
    font-size: 36px;
    margin-left: 40px;
    margin-right: 40px;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
        //   marginBottom: `1.45rem`,
        borderBottomStyle: 'solid',
        borderColor: Theme.defaultGreen,
        borderWidth: '1px'
    
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1440,
        padding: `35px 55px`,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
        <img src={logo} style={{
            width: '354px',
            marginRight: '100px'
        }}></img>
    </Link>
    <Separator/>
    <Link
      to="/"
      style={{
        textDecoration: `none`,
      }}
    >
        <MenuTitle>Home</MenuTitle>
    </Link>
    <Separator/>
    <Link
      to="/news"
      style={{
        textDecoration: `none`,
      }}
    >
        <MenuTitle>News</MenuTitle>
    </Link>
    <Separator/>
    <Link
      to="/docs"
      style={{
        textDecoration: `none`,
      }}
    >
        <MenuTitle>Docs</MenuTitle>
    </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
