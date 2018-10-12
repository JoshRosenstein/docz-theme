import * as React from 'react'
import styled from 'react-emotion'


const BaseButton = styled('button') ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  outline: 'none',
  border: 'none'
})
export const Button = ({ as: Component = BaseButton, ...props }) => <Component {...props}/>
export const ButtonLink = styled(Button) ({
  background: 'transparent'
})