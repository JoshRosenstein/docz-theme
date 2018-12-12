import React,{Component} from 'react'

import { Link, ThemeConfig } from 'docz'
import styled from '@emotion/styled'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {whenFunctionCallWith} from '@roseys/futils'
import { styler,getColor } from '@styles/system'

import { MenuHeadings } from './MenuHeadings'
import {withTheme} from 'emotion-theming'

// const activeWrapper = css `
//   padding-left: 0;

//   &:after {
//     width: 1px;
//   }
// `

const Wrapper=styled('div')(styler(
  {
    position: 'relative',
    transition: 'padding 0.2s',
    paddingLeft:{
      active:0
    },
    '&:after': {
      position: 'absolute',
      display: 'block',
      content: "''",
      top: '30px',
      left: '24px',
      width: {
        active:'1px',
        default:0
      },
      height: 'calc(100% - 36px)',
      borderLeftStyle:'dashed',
      borderLeftWidth:'1px',
      borderLeftColor:getColor('sidebarBorder'),
      transition: 'width 0.2s',
    }

  })) 

// const Wrapper = styled('div') `
//   position: relative;
//   transition: padding 0.2s;

//   &:after {
//     position: absolute;
//     display: block;
//     content: '';
//     top: 30px;
//     left: 24px;
//     width: 0;
//     height: calc(100% - 36px);
//     border-left: 1px dashed ${get('colors.sidebarBorder')};
//     transition: width 0.2s;
//   }

//   ${(p) => p.active && activeWrapper};
// `


export const linkStyle=styler({
  position: 'relative',
  display: 'block',
  padding: '4px 24px',
  fontWeight: '600',
  color: getColor('sidebarText'),
  textDecoration: 'none',
  transition: 'color 0.2s',
  '&:hover, &:visited':{
    color: getColor('sidebarText')
  },
  '&:hover, &.active':{
    color: p=>getColor('sidebarPrimary')(p) || getColor('primary')(p),
    fontWeight: '600'
  }
} ) 

// export const linkStyle = ({ colors }) => css `
//   position: relative;
//   display: block;
//   padding: 4px 24px;
//   font-weight: 600;
//   color: ${colors.sidebarText};
//   text-decoration: none;
//   transition: color 0.2s;

//   &:hover,
//   &:visited {
//     color: ${colors.sidebarText};
//   }

//   &:hover,
//   &.active {
//     color: ${colors.sidebarPrimary || colors.primary};
//     font-weight: 600;
//   }
// `
const LinkAnchor = styled('a')()


// const LinkAnchor = styled('a') `
//   ${p => linkStyle(p.theme.docz)};
// `
export const getActiveFromClass = el => Boolean(el && el.classList.contains('active'))
export class MenuLink extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
    }
    this.updateActive = prevActive => {
      const active = getActiveFromClass(this.$el)
      if (prevActive !== active)
        this.setState({ active })
    }
    this.$el = null
  }
  componentDidUpdate (prevProps, prevState) {
    this.updateActive(prevState.active)
  }
  componentDidMount () {
    this.updateActive(this.state.active)
  }
  render () {
    const { active } = this.state
    const { item, children, onClick, innerRef } = this.props
    const props = {
      children,
      onClick,
     css:linkStyle(this.props) ,// (config.themeConfig),
      innerRef: node => {
        whenFunctionCallWith(node)(innerRef)
        // innerRef && innerRef(node)
        this.$el = node
      },
    }
    const route = item.route === '/' ? '/' : item.route
 

    return (<Wrapper active={active}>
 
      {item.href?<LinkAnchor {...props} href={item.href} target="_blank"/>:item.route?<Link   {...props} to={route}/>: <LinkAnchor {...props} href="#"/> }
   
 
      {active && item.route && <MenuHeadings route={item.route}/>}
    </Wrapper>)
  }
}

export default withTheme(MenuLink)