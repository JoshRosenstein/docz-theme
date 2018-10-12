import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Docs, Link } from 'docz'
import { Github,Sun, Moon  } from 'react-feather'
//import {getThemeP} from "@styles/system";
import { get } from '@utils/theme';

import { lighten, transparentize } from 'polished'

//import {switchMode} from '@styles/helpers'
const getThemeP=()=>()=>null

const StyledContainer=styled('div')`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;

${p =>
  p.theme.docz.mq({
    padding: ['0 14px', '0 20px', '0 20px', '0 20px'],
  })};
`
const Wrapper = styled('div')`
  position: relative;
  height: 60px;
  width: 100%;
  background: radial-gradient(
    farthest-side at bottom center,
    ${props =>
      transparentize(0.025, lighten(0.025, get('colors.primary')(props)))},
    ${getThemeP('colors.base')}
  );
  z-index: 99;

`

const LogoLink = styled(Link)`
  height: 30px;
`

const Menu = styled('div')`
  ${p =>
    p.theme.docz.mq({
      display: ['none', 'none', 'flex', 'flex'],
    })};
`

const linkStyle = (p) => css`
  color:${getThemeP('colors.primary')(p)};

  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${getThemeP('colors.text')(p)};
    opacity: 1;
  }
`

const MenuLink = styled(Link)`
  ${linkStyle};
  margin: 0 10px;
`

const IconLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;


`
const IconButtonLink = styled('a')`
  ${linkStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;


`
export const isActive = (route) => (match, location) =>
  (match && match.url === location.pathname) ||
  (location.pathname.startsWith(route) && route !== '/')

export const Topbar = ({modeToggler,isDarkMode ,...p}) => (
  <Wrapper>
    <StyledContainer {...p}>
      <LogoLink to="/">
    Logo
      </LogoLink>
      <Docs>
        {({ docs: allDocs }) => {
          const docs = allDocs.filter(doc => !doc.parent)

          return (
            <Menu>
              {docs.map(doc => (
                <MenuLink
                  key={doc.id}
                  to={doc.route}
                  isActive={isActive(doc.route)}
                >
                  {doc.name}
                </MenuLink>
              ))}
              <IconLink
                href="https://github.com/pedronauck/docz"
                target="_blank"
              >
                <Github width={30} />
              </IconLink>
              <IconButtonLink onClick={modeToggler}>
              {isDarkMode ? <Sun /> : <Moon />}
              </IconButtonLink>
             
            </Menu>
          )
        }}
      </Docs>
    </StyledContainer>
  </Wrapper>
)
