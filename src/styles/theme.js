import { darken, lighten } from 'polished'
import {light as LC, dark as DC}  from './modes'

const deriveColors = base => ({
  dark: [
    darken(0.025, base),
    darken(0.05, base),
    darken(0.075, base),
    darken(0.1, base),
    darken(0.125, base)
  ],
  light: [
    lighten(0.025, base),
    lighten(0.05, base),
    lighten(0.075, base),
    lighten(0.1, base),
    lighten(0.125, base)
  ]
})

const variables = {
  baseFontSize: 18
}

const defaults = {
  white: '#fff',
  black: '#10161a',
  primary: '#eb532d',
  secondary: '#43bf4d',
  selection: '#50DED8',
}

const contrast = ['#e1e8ed', '#ced9e0', '#a7b6c2', '#738694', '#394b59']

const lightColors = {
  ...defaults,
  ...deriveColors('#f5f8fa'),
  base: '#f5f8fa',
  text: '#293742',
  contrast
}

const darkColors = {
  ...defaults,
  ...deriveColors('#293742'),
  base: '#293742',
  text: '#fff',
  contrast: contrast.slice(0).reverse()
}

export const breakpoints = {
  mobile: 420,
  tablet: 920,
  desktop: 1120,
}

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [14.4, 18, 22.5, 28.134, 35.154, 43.938]
const lineHeights = [1, 1.25, 1.6, 2, 2.4]

const fontWeights = {
  normal: 400,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.125em'
}

const radii = ['0', '3px', '5px', '18px', '40%', '50%']

const borderWidths = [0, 1, 2]

const shadows = [
  '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  '0 1px 4px 0 rgba(0, 0, 0, 0.1)'
]

const wrapper = {
  narrow: '36rem',
  normal: '51rem',
  wide: '64rem'
}

export const theme = {
  ...variables,
  borderWidths,
  breakpoints,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
  wrapper
}

export const light = {
  ...{
    name: 'light',
    colors: {...lightColors,...LC}
  },
  ...theme
}
  
export const dark = {
  ...{
    name: 'dark',
    colors: {...darkColors,...DC}
  },
  theme
}
  
