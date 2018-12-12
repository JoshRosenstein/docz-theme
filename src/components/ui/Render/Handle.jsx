import lighten from 'polished/lib/color/lighten'
import darken from 'polished/lib/color/darken'
import styled from '@emotion/styled'

import { styler,getColor,getThemeP } from '@styles/system'


export const HANDLE_SIZE = '20px'
const borderColor = getColor('border')
const preBg = getColor('preBg')
const mode = getThemeP('mode')

const whenHorizontal = (on, off) => p => p.horizontal ? on : off

const line = position=>({
  content: "''",
  position: 'absolute',
  display: 'block',
  top: whenHorizontal( '50%' ,position),
  left: whenHorizontal( position,'50%' ),
  width: whenHorizontal( '2px','25px' ),

  height: whenHorizontal( '25px','2px', ),
  background: p=>mode(p) === 'light'
    ? darken(0.05, borderColor(p))
    : lighten(0.06, borderColor(p)),

  transform: 'translate(-50%, -50%)'
})

// const line = position => p => css `
//   content: '';
//   position: absolute;
//   display: block;
//   top: ${p.horizontal ? '50%' : position};
//   left: ${p.horizontal ? position : '50%'};
//   width: ${p.horizontal ? '2px' : '25px'};
//   height: ${p.horizontal ? '25px' : '2px'};
//   background: ${mode(p) === 'light'
//     ? darken(0.05, borderColor(p))
//     : lighten(0.06, borderColor(p))};
//   transform: translate(-50%, -50%);
// `

const handleHeight = p => p.horizontal ? `calc(100% + ${p.full ? '5px' : '0px'})` : HANDLE_SIZE

export const Handle=styled('div') (styler({
  zIndex: p => (p.full ? (p.horizontal ? 9999 : 9998) : 9),
  position: 'absolute',
  display: 'block',
  width: whenHorizontal(HANDLE_SIZE, 'calc(100% + 5px)'),
  height:handleHeight,
  border: p=>`1px solid${ lighten(0.03, borderColor(p))}`,
  borderRadius: whenHorizontal('0 4px 4px 0', '0 0 4px 4px'),
  background: p => darken(0.01, preBg(p)),
  '&:after': line('calc(50% + 3px)'),
  '&:before': line('calc(50% - 3px)')
}),whenHorizontal({top: 0,right: 0}, {bottom: 0,left: 0}))

// export const Handle4 = styled('div') `
//   z-index: ${p => (p.full ? (p.horizontal ? 9999 : 9998) : 9)};
//   position: absolute;
//   display: block;
//   width: ${whenHorizontal(HANDLE_SIZE, 'calc(100% + 5px)')};
//   height: ${handleHeight};
//   border: 1px solid ${p => lighten(0.03, borderColor(p))};
//   border-radius: ${whenHorizontal('0 4px 4px 0', '0 0 4px 4px')};
//   background: ${p => darken(0.01, preBg(p))};

//   ${whenHorizontal(`
//       top: 0;
//       right: 0;
//     `, `
//       bottom: 0;
//       left: 0;
//     `)};

//   &:after {
//     ${line('calc(50% + 3px)')};
//   }

//   &:before {
//     ${line('calc(50% - 3px)')};
//   }
// `
