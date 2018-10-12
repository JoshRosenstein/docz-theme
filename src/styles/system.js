import {
  mergeAllDeepRight,
  flow,
  when,
  map,
  isNumber,
  ifElse,
  either,
  lt,
  complement,
  whenFunctionCallWith,
  identity,
  prop,
  compact,isObject,toPairs,isFunction
} from '@roseys/futils'
import Assistant from 'style-assistant'
import { light } from './theme'
import {styles} from './styles'

export const containsSpecial = str =>
  /[~`!@#$%\^&*+=\-\[\]\\';.,/{}|\\":<>\?\s]/g.test(str) // eslint-disable-line no-useless-escape

const shouldLoop=(value,selector)=>isObject(value) && containsSpecial(selector)


const containsFunc=obj=>{
  const functor=toPairs(obj)
  const length=functor.length
  let b=false
  for (let i = 0; i < length; ++i) {
    const a = functor[i]
    if (shouldLoop(a[1],a[0])){
      b=containsFunc(a[1])
    }else if (isFunction(a[1])) {
      b=true
      break}
  }
  return b
}

export const callAllStyleFuncs=style=>props=>{
  const mapper=map( (v,k)=>shouldLoop(v,k)? mapper(v): whenFunctionCallWith(props)(v) )
  return mapper(style)
}

export const prepStyles=style=>{
  if(!containsFunc(style)){return style}
  return callAllStyleFuncs(style)}


// import {borderRadius} from 'polished';
  
const isNotNumber = complement(isNumber)
export const compose = (...funcs) => {
  const fn = props =>
    flow(
      funcs,
      map(whenFunctionCallWith(props)),
      compact,
      mergeAllDeepRight
    )
  
  return fn
}
  
export const px = when(isNumber, num => `${num}px`)
  
export const css = props => prop('css',props)
export const themed = key => props => prop(key, prop('theme', props))
  
const defaultLookups = {
  keys: {
    // / Default themeKey to use id matching cssProp is found within transformStyle
    margin: 'space',
    marginTop: 'space',
    marginBottom: 'space',
    marginLeft: 'space', 
    marginRight: 'space',
    padding: 'space',
    paddingTop: 'space',
    paddingBottom: 'space',
    paddingLeft: 'space',
    paddingRight: 'space',
    color: 'colors',
    fontSize: 'fontSizes',
    fontFamily: 'fonts',
    lineHeight: 'lineHeights',
    fontWeight: 'fontWeights',
    letterspace: 'letterspaces',
    maxWidth: 'maxWidths',
    minWidths: 'minWidths',
    height: 'heights',
    gridGap: 'space',
    gridColumnGap: 'space',
    gridRowGap: 'space',
    border: 'borders',
    borderColor: 'colors',
    borderRadius:'radii',
    backgroundColor: 'colors',
    boxShadow: 'shadows'
  },
  getter: {
    // / Default getter to use id matching cssProp is found within transformStyle, can be string to match functions below or function
    margin: 'pxToRem',
    marginTop: 'pxToRem',
    marginBottom: 'pxToRem',
    marginLeft: 'pxToRem',
    marginRight: 'pxToRem',
    padding: 'pxToRem',
    paddingTop: 'pxToRem',
    paddingBottom: 'pxToRem',
    paddingLeft: 'pxToRem',
    paddingRight: 'pxToRem',
    fontSize: 'px'
  },
  functions: {
    // Shorthand lookup functions. used in switchP. If value is a string of one of the keys below, then will call corresponding function with corresponding prop value
    identity,
    returnAsIs: identity, // Can add aliases
    propValue: identity, // alias
    self: identity, // alias
    px,
    ms: x => `${parseFloat(x)}ms`,
    pct: x => {
      x = parseFloat(x)
      x = Math.abs(x) < 1 ? x * 100 : x
      return `${x}%`
    }
  }
}
const defaultTheme = {...light,styles}
  
export const config = {
  defaultTheme,
  baseFontSize: 18, // / Unitless value used for unit conversions Utils
  themeKey: 'theme', // / Unitless value used for unit conversions Utils
  breakpointsKey: 'breakpoints',
  alwaysTransform: true,
  transformOptions: {
    defaultLookup: true,
    defaultTransform: true,
    keys: defaultLookups.keys,
    getter: defaultLookups.getter,
    functions: defaultLookups.functions
  },
  responsivePOptions: {
    transform: true
  },
  switchPOptions: {
    transform: true,
    responsive: true
  },
  parserOptions: {
    transform: true
  }
}

export const {
  responsiveP, // using alias to match styled-system
  switchP,
  getThemeP:getThemeOG,
  media,
  parse:styler,
  matchBlockP,
  toMq
} = new Assistant(config)

export const getThemeP=path=> getThemeOG(`docz.${path}`)

export const getColor=colorPath=> getThemeOG(`docz.colors.${colorPath}`)

export const getWidth = ifElse(
  either(isNotNumber, lt(1)),
  px,
  decimal => `${decimal * 100}%`
)
// export const getWidth = n => (!isNumber(n) || n > 1 ? px(n) : n * 100 + "%");
export const width = responsiveP({
  prop: 'width',
  postFn: getWidth
})
  
export const fontSize = responsiveP({
  cssProp: 'fontSize',
  key: 'fontSizes',
  prop: 'fontSize',
  postFn: px,
  transform: true
})
  
export const textColor = responsiveP({
  prop: 'color',
  key: 'colors'
})
  
export const bgColor = responsiveP({
  prop: 'bg',
  cssProp: 'backgroundColor',
  key: 'colors'
})
  
export const color = compose(
  textColor,
  bgColor
)
  
// typography
export const fontFamily = responsiveP({
  prop: 'fontFamily',
  key: 'fonts'
})
  
export const textAlign = responsiveP({
  prop: 'textAlign'
})
  
export const lineHeight = responsiveP({
  prop: 'lineHeight',
  key: 'lineHeights'
})
  
export const fontWeight = responsiveP({
  prop: 'fontWeight',
  key: 'fontWeights'
})
  
export const fontStyle = responsiveP({
  prop: 'fontStyle'
})
  
export const letterSpacing = responsiveP({
  prop: 'letterSpacing',
  key: 'letterSpacings',
  postFn: px
})
  
// layout
export const display = responsiveP({
  prop: 'display'
})
  
export const maxWidth = responsiveP({
  prop: 'maxWidth',
  key: 'maxWidths',
  postFn: px
})
  
export const minWidth = responsiveP({
  prop: 'minWidth',
  key: 'minWidths',
  postFn: px
})
  
export const height = responsiveP({
  prop: 'height',
  key: 'heights',
  postFn: px
})
  
export const maxHeight = responsiveP({
  prop: 'maxHeight',
  key: 'maxHeights',
  postFn: px
})
  
export const minHeight = responsiveP({
  prop: 'minHeight',
  key: 'minHeights',
  postFn: px
})
  
export const sizeWidth = responsiveP({
  prop: 'size',
  cssProp: 'width',
  postFn: px
})
  
export const sizeHeight = responsiveP({
  prop: 'size',
  cssProp: 'height',
  postFn: px
})
  
export const size = compose(
  sizeHeight,
  sizeWidth
)
  
export const ratioPadding = responsiveP({
  prop: 'ratio',
  cssProp: 'paddingBottom',
  postFn: n => `${n * 100  }%`
})
  
export const ratio = props =>
  props.ratio
    ? {
      height: 0,
      ...ratioPadding(props)
    }
    : null
ratio.propTypes = {
  ...ratioPadding.propTypes
}
  
export const verticalAlign = responsiveP({
  prop: 'verticalAlign'
})
  
// flexbox
export const alignItems = responsiveP({
  prop: 'alignItems'
})
  
export const alignContent = responsiveP({
  prop: 'alignContent'
})
  
export const justifyItems = responsiveP({
  prop: 'justifyItems'
})
  
export const justifyContent = responsiveP({
  prop: 'justifyContent'
})
  
export const flexWrap = responsiveP({
  prop: 'flexWrap'
})
  
export const flexBasis = responsiveP({
  prop: 'flexBasis',
  postFn: getWidth
})
  
export const flexDirection = responsiveP({
  prop: 'flexDirection'
})
  
export const flex = responsiveP({
  prop: 'flex'
})
  
export const justifySelf = responsiveP({
  prop: 'justifySelf'
})
  
export const alignSelf = responsiveP({
  prop: 'alignSelf'
})
  
export const order = responsiveP({
  prop: 'order'
})
  
// grid
export const gridGap = responsiveP({
  prop: 'gridGap',
  postFn: px,
  key: 'space'
})
  
export const gridColumnGap = responsiveP({
  prop: 'gridColumnGap',
  postFn: px,
  key: 'space'
})
  
export const gridRowGap = responsiveP({
  prop: 'gridRowGap',
  postFn: px,
  key: 'space'
})
  
export const gridColumn = responsiveP({
  prop: 'gridColumn'
})
  
export const gridRow = responsiveP({
  prop: 'gridRow'
})
  
export const gridAutoFlow = responsiveP({
  prop: 'gridAutoFlow'
})
  
export const gridAutoColumns = responsiveP({
  prop: 'gridAutoColumns'
})
  
export const gridAutoRows = responsiveP({
  prop: 'gridAutoRows'
})
  
export const gridTemplateColumns = responsiveP({
  prop: 'gridTemplateColumns'
})
  
export const gridTemplateRows = responsiveP({
  prop: 'gridTemplateRows'
})
  
export const gridTemplateAreas = responsiveP({
  prop: 'gridTemplateAreas'
})
  
export const gridArea = responsiveP({
  prop: 'gridArea'
})
  
// borders
const getBorder = n => (isNumber(n) && n > 0 ? `${n  }px solid` : n)
  
export const border = responsiveP({
  prop: 'border',
  key: 'borders',
  postFn: getBorder
})
  
export const borderTop = responsiveP({
  prop: 'borderTop',
  key: 'borders',
  postFn: getBorder
})
  
export const borderRight = responsiveP({
  prop: 'borderRight',
  key: 'borders',
  postFn: getBorder
})
  
export const borderBottom = responsiveP({
  prop: 'borderBottom',
  key: 'borders',
  postFn: getBorder
})
  
export const borderLeft = responsiveP({
  prop: 'borderLeft',
  key: 'borders',
  postFn: getBorder
})
  
export const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft
)
  
export const borderColor = responsiveP({
  prop: 'borderColor',
  key: 'colors'
})
  
export const borderRadius = responsiveP({
  prop: 'borderRadius',
  key: 'radii',
  postFn: 'px'
})
  
export const boxShadow = responsiveP({
  prop: 'boxShadow',
  key: 'shadows'
})
  
export const opacity = responsiveP({
  prop: 'opacity'
})
  
export const overflow = responsiveP({
  prop: 'overflow'
})
  
// backgrounds
export const background = responsiveP({
  prop: 'background'
})
  
export const backgroundImage = responsiveP({
  prop: 'backgroundImage'
})
  
export const backgroundSize = responsiveP({
  prop: 'backgroundSize'
})
  
export const backgroundPosition = responsiveP({
  prop: 'backgroundPosition'
})
  
export const backgroundRepeat = responsiveP({
  prop: 'backgroundRepeat'
})
  
// position
export const position = responsiveP({
  prop: 'position'
})
  
export const zIndex = responsiveP({
  prop: 'zIndex'
})
  
export const top = responsiveP({
  prop: 'top',
  postFn: px
})
  
export const right = responsiveP({
  prop: 'right',
  postFn: px
})
  
export const bottom = responsiveP({
  prop: 'bottom',
  postFn: px
})
  
export const left = responsiveP({
  prop: 'left',
  postFn: px
})
  
export const padding = switchP(
  {
    padding: 'returnAsIs',
    p: 'returnAsIs'
  },
  {
    cssProp: 'padding',
    key: 'space',
    postFn: px
  }
)
  
export const paddingLeft = switchP(
  {
    paddingLeft: 'returnAsIs',
    pl: 'returnAsIs',
    px: 'returnAsIs'
  },
  {
    cssProp: 'paddingLeft',
    key: 'space',
    postFn: px
  }
)
  
export const paddingRight = switchP(
  {
    paddingRight: 'returnAsIs',
    pr: 'returnAsIs',
    px: 'returnAsIs'
  },
  {
    cssProp: 'paddingRight',
    key: 'space',
    postFn: px
  }
)
  
export const paddingTop = switchP(
  {
    paddingTop: 'returnAsIs',
    pt: 'returnAsIs',
    py: 'returnAsIs'
  },
  {
    cssProp: 'paddingTop',
    key: 'space',
    postFn: px
  }
)
  
export const paddingBottom = switchP(
  {
    paddingBottom: 'returnAsIs',
    pb: 'returnAsIs',
    py: 'returnAsIs'
  },
  {
    cssProp: 'paddingBottom',
    key: 'space',
    postFn: px
  }
)
  
export const margin = switchP(
  {
    margin: 'returnAsIs',
    m: 'returnAsIs'
  },
  {
    cssProp: 'margin',
    key: 'space',
    postFn: px
  }
)
  
export const marginLeft = switchP(
  {
    marginLeft: 'returnAsIs',
    ml: 'returnAsIs',
    mx: 'returnAsIs'
  },
  {
    cssProp: 'marginLeft',
    key: 'space',
    postFn: px
  }
)
  
export const marginRight = switchP(
  {
    marginRight: 'returnAsIs',
    mr: 'returnAsIs',
    mx: 'returnAsIs'
  },
  {
    cssProp: 'marginRight',
    key: 'space',
    postFn: px
  }
)
  
export const marginTop = switchP(
  {
    marginTop: 'returnAsIs',
    mt: 'returnAsIs',
    my: 'returnAsIs'
  },
  {
    cssProp: 'marginTop',
    key: 'space',
    postFn: px
  }
)
  
export const marginBottom = switchP(
  {
    marginBottom: 'returnAsIs',
    mb: 'returnAsIs',
    my: 'returnAsIs'
  },
  {
    cssProp: 'marginBottom',
    key: 'space',
    postFn: px
  }
)
  
export const space = compose(
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  padding
)
  
export const buttonStyle = responsiveP({
  key: 'buttons',
  prop: 'variant'
})
export const textStyle = responsiveP({
  prop: 'textStyle',
  key: 'textStyles'
})
export const colorStyle = responsiveP({
  prop: 'colors',
  key: 'colorStyles'
})
  