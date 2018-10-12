import * as React from 'react'
import styled from 'react-emotion'
import SearchIcon from 'react-feather/dist/icons/search'
import placeholder from 'polished/lib/mixins/placeholder'
import rgba from 'polished/lib/color/rgba'
import { styler,getColor } from '@styles/system'
import {whenFunctionCallWith} from '@roseys/futils'

const sidebarBorder = getColor('sidebarBorder')
const sidebarText = getColor('sidebarText')
const Wrapper = styled('div') (
  styler({
    display: 'flex',
    alignItems: 'center',
    padding: '5px 24px',
    marginBottom: '20px',
    opacity: 1,
    borderTopStyle: 'dotted',
    borderBottomStyle: 'dotted',
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderTopColor: sidebarBorder,
    borderBottomColor: sidebarBorder
  
  }))

// const Wrapper = styled('div') `
//   display: flex;
//   align-items: center;
//   padding: 5px 24px;
//   margin-bottom: 20px;
//   opacity: 1;
//   border-top: 1px dotted ${sidebarBorder};
//   border-bottom: 1px dotted ${sidebarBorder};
 
// `
const Icon = styled(SearchIcon) (styler({
  stroke:sidebarText,
  width: '20px',
  opacity: '0.5'
}))

const Input= styled('input')(styler({
  outline: 'none',
  width: '100%',
  padding: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '16px',
  color:sidebarText

}),p => placeholder({
  color: rgba(sidebarText(p), 0.5),
}) )


// const Inputw = styled('input') `
//   outline: none;
//   width: 100%;
//   padding: 10px;
//   background: transparent;
//   border: none;
//   font-size: 16px;
//   color: ${sidebarText};

//   ${p => placeholder({
//     color: rgba(sidebarText(p), 0.5),
//   })};
// `

export const Search = ({ onSearch }) => (<Wrapper>
  <Icon />
  <Input type="text" placeholder="Search here..." onChange={ev =>whenFunctionCallWith(ev.target.value)(onSearch)}/>
</Wrapper>)
