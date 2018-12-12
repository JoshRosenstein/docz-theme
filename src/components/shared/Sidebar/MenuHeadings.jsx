import * as React from 'react'
import { Docs, Link } from 'docz'
import styled from '@emotion/styled'
import { getColor,styler } from '@styles/system'


import get from 'lodash.get'

const sidebarPrimary = getColor('sidebarPrimary')
const primaryColor = getColor('primary')

const Submenu = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '5px 0 0 24px'
})
const SmallLink = styled(Link)(styler({
  position: 'relative',
  fontSize: '14px',
  padding: '0 0 5px 16px',
  textDecoration: 'none',
  opacity: '0.5',
  transition: 'opacity 0.2s',
  '&, &:visited, &.active':{
    color: getColor('sidebarText')
  },
   
  '&.active': {
    opacity: '1'
  }, 
  '&:before': {
    zIndex: '1',
    position: 'absolute',
    display: 'block',
    content: "''",
    top: '1px',
    left: '0',
    width: '0',
    height: '20px',
    transition: 'width 0.2s',
    background:p => sidebarPrimary(p) || primaryColor(p)
  },
  
  '&.active:before': {
    width: '2px'
  }
  
  
} 
))


const isSmallLinkActive = slug => (m, location) => slug === location.hash.slice(1, Infinity)
const getHeadings = (route, docs) => {
  const doc = docs.find(doc => doc.route === route)
  const headings = get(doc, 'headings')
  return headings ? headings.filter(heading => heading.depth === 2) : []
}
export const MenuHeadings = ({ route, onClick }) => (<Docs>
  {({ docs }) => {
    const headings = getHeadings(route, docs)
    return (headings.length > 0 && (<Submenu>
      {headings.map(heading => (<SmallLink key={heading.slug} onClick={onClick} to={{ pathname: route, hash: heading.slug }} isActive={isSmallLinkActive(heading.slug)}>
        {heading.value}
      </SmallLink>))}
    </Submenu>))
  }}
</Docs>)
