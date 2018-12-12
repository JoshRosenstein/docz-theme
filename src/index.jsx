
import * as React from 'react'
import { Global, css } from '@emotion/core'
import { theme, DocPreview, ThemeConfig } from 'docz'
import { ThemeProvider } from 'emotion-theming'
import webfont from 'webfontloader'
import {ModeProvider} from '@styles/themeToggle'
import { config } from './config'
import { mq } from './styles/responsive'
import * as components from './components/ui'
import * as modes from './styles/modes'
import GlobalCss from './styles/global'


const mergeTheme = (mode,config) => old => {
  mode=mode || config.themeConfig.mode || 'light'
  const res= {
    ...old,
  
    docz: Object.assign({}, {...config.themeConfig, mode, codemirrorTheme: `docz-${mode}`,colors:modes[mode] }, { mq}),
  }
  return res}


const Theme = () => (<ThemeConfig>
  {config => (
    <ModeProvider >
      {({  mode,setTheme })=>{
        if(config.themeConfig.mode==='dark' && mode===null){
          setTheme('dark')
        }
        
        return <ThemeProvider theme={mergeTheme(mode,config)}>
          <React.Fragment>
          <Global styles={css(GlobalCss)}/>
            {/* <Wrapper ><Toggler onClick={toggleTheme}>Toggle Mode</Toggler></Wrapper>  */}
            <DocPreview components={{
              page: components.Page,
              notFound: components.NotFound,
              render: components.Render,
              blockquote: components.Blockquote,
              h1: components.H1,
              h2: components.H2,
              h3: components.H3,
              h4: components.H4,
              h5: components.H5,
              h6: components.H6,
              ul: components.List,
              p: components.Paragraph,
              a: components.Link,
              inlineCode: components.InlineCode,
              loading: components.Loading,
              table: components.Table,
              pre: components.Pre,
              tooltip: components.Tooltip,
            }}/>
          </React.Fragment>
        </ThemeProvider>}}
  
    </ModeProvider>   )}
</ThemeConfig>)
webfont.load({
  google: {
    families: ['Source Code Pro', 'Source Sans Pro:300,400,600,700'],
  },
})
const transform = ({ mode, codemirrorTheme, ...config }) => {
  const selectedMode = modes[mode]
  // console.log(config) /// colors stlyes
  return {
    ...config,
    mode,
    codemirrorTheme: codemirrorTheme || `docz-${mode}`,
    colors: {
      ...selectedMode,
      ...config.colors,
    },
  }
}
export default theme(config, transform)(Theme)
