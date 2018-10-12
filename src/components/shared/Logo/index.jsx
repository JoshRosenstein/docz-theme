import * as React from 'react'
import { ThemeConfig, Link } from 'docz'
import styled from 'react-emotion'
import { breakpoints } from '@styles/responsive'
import {getColor} from '@styles/system'
import {ThemeToggler} from '../ThemeToggler'

const sidebarPrimary = getColor('sidebarPrimary')
const primaryColor = getColor('primary')
const Wrapper = styled('div') `
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${p => sidebarPrimary(p) || primaryColor(p)};
  }

  @media screen and (max-width: ${breakpoints.desktop}px) {
    &:before {
      height: ${p => (p.showBg ? '3px' : 0)};
    }
  }
`
const LogoImg = styled('img') `
  padding: 0;
  margin: 5px 0;
`
const LogoText = styled('h1') `
  margin: 5px 0;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: ${getColor('sidebarText')};
`
export const Logo = ({ showBg }) => (<ThemeConfig>
  {({ title, themeConfig: { logo } }) => (<Wrapper showBg={showBg}>
    <Link to="/">
      {logo ? (<LogoImg src={logo.src} width={logo.width} alt={title}/>) : (<LogoText>{title}</LogoText>)}
    </Link>
    <ThemeToggler/>
  </Wrapper>)}
</ThemeConfig>)
