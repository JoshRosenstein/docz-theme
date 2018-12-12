import * as React from 'react'
import styled from '@emotion/styled'
import Hash from 'react-feather/dist/icons/hash'
import { Link } from 'docz'
// import { get } from '@utils/theme'
import { styler,getColor,getThemeP } from '@styles/system'

const Icon = styled(Hash)(styler({
  position: 'absolute',
  display: 'inline-block',
  top: '11px',
  left: '-28px',
  opacity: '0',
  transition: 'opacity 0.2s',
  color:getColor('primary')
}))

// const Icon = styled(Hash) `
//   position: absolute;
//   display: inline-block;
//   top: 11px;
//   left: -28px;
//   opacity: 0;
//   transition: opacity 0.2s;
//   color: ${get('colors.primary')};
// `

const Heading= styled('h2')(styler({
  position: 'relative',
  margin: '50px 0 20px',
  '':getThemeP('styles.h2'),
  '&:hover svg': {
    opacity: '1'
  }
}))

// const Headingh= styled('h2') `
//   position: relative;
//   margin: 50px 0 20px;
//   ${p => p.theme.docz.mq(get('styles.h2')(p))};

//   &:hover svg {
//     opacity: 1;
//   }
// `
export const H2 = ({ children, ...props }) => (<Heading {...props}>
  <Link aria-hidden to={{ hash: `#${props.id}` }}>
    <Icon height={20}/>
  </Link>
  {children}
</Heading>)
