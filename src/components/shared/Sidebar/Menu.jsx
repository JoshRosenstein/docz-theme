import React, { Component } from 'react'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import styled from '@emotion/styled'
import { styler,getColor } from '@styles/system'
import {  getActiveFromClass } from './MenuLink'

import MenuLink from './MenuLink'

const Wrapper = styled('div') ({
  display: 'flex',
  flexDirection: 'column'
})


const List = styled('dl')(styler({
  flex: '1',
  overflowY: 'auto',
  visibility:{
    opened:'visible',
    default:'hidden'
  },
  maxHeight:{
    opened:'none',
    default:'0'
  }
}))


const IconStyles=styler({
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform:{
    opened:'translateY(-50%) rotate(-180deg)',
    default:'translateY(-50%) rotate(0deg)'
  },
  transformOrigin: '50% 50%',
  transition: 'transform 0.3s',
  '& svg':{
    stroke:getColor('sidebarText')
  }

})

const Icon = styled('div')(IconStyles)

// const iconRotate = (p) => (p.opened ? '-180deg' : '0deg')
// const Icon = styled('div')( `
//   position: absolute;
//   top: 50%;
//   right: 20px;
//   transform: translateY(-50%) rotate(${iconRotate});
//   transform-origin: 50% 50%;
//   transition: transform 0.3s;

//   & svg {
//     stroke: ${getColor('sidebarText')};
//   }
// `)

export class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false,
  
    }
    this.toggle = () => {
      this.setState(state => ({ opened: !state.opened }))
    }
    this.checkActiveLink = () => {
      const hasActive = this.$els.some(el => getActiveFromClass(el))
      if (hasActive)
        this.setState({  opened: true })
    }
    this.$els = []
  }
  componentDidMount () {
    this.checkActiveLink()
  }
  handleToggle=ev=>{
    ev.preventDefault()
    this.toggle() 
  }
  render () {
    const { item, sidebarToggle, collapseAll } = this.props
    const show = collapseAll || this.state.opened
    const hasChildren = !item.href && item.menu && item.menu.length > 0
    const hasToggle = !item.href && !item.route

    return (<Wrapper>
      <MenuLink item={item} {...hasToggle && { onClick: this.handleToggle }}>
        {item.name}
        {hasChildren && (<Icon opened={show}>
          <ChevronDown size={15}/>
        </Icon>)}
      </MenuLink>
      {hasChildren && (<List opened={show}>
        {item.menu &&
            item.menu.map(item => (<dt key={item.id}>
              <MenuLink item={item} onClick={sidebarToggle} innerRef={node => {
                this.$els = this.$els.concat([node])
              }}>
                {item.name}
              </MenuLink>
            </dt>))}
      </List>)}
    </Wrapper>)
  }
}
