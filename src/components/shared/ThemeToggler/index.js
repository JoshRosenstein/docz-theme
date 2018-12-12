import React from 'react'
import { Sun, Moon  } from 'react-feather'
import styled from '@emotion/styled'
import { getThemeP} from '@styles/system'

import {ThemeContext} from '@styles/themeToggle'


const IconButtonLink = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;
  cursor:pointer;
background:none;
border:none;
outline:none;
  color:${getThemeP('colors.primary')};

  opacity: 0.5;
  transition: opacity 0.2s;
  font-size: 15px;
  font-weight: 400;

  &.active,
  &:visited,
  &:hover {
    color: ${getThemeP('colors.text')};
    opacity: 1;
  }

`

export const ThemeToggler=()=> <ThemeContext.Consumer>
  {({ toggleTheme, mode }) => (
    <IconButtonLink title='Toggle Theme' onClick={toggleTheme}>
      {mode==='dark' ? <Sun />:<Moon /> }
    </IconButtonLink>

  
  )}
</ThemeContext.Consumer>
  
