import * as React from 'react'
import { Component } from 'react'
import styled from 'react-emotion'
import rgba from 'polished/lib/color/rgba'
import BaseCheck from 'react-feather/dist/icons/check'
import Clipboard from 'react-feather/dist/icons/clipboard'
import { Controlled as CodeMirror } from 'react-codemirror2'
import PerfectScrollbar from 'react-perfect-scrollbar'
import copy from 'copy-text-to-clipboard'
import getter from 'lodash.get'
import { ButtonSwap } from '../ButtonSwap'
import { ButtonLink } from '../Button'
import * as themes from '@styles/codemirror'
import { get } from '@utils/theme'
import './ps-scrollbar'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/css/css'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/fold/xml-fold'
import {withTheme} from 'emotion-theming'

const getLanguage = children => {
  const defaultLanguage = 'jsx'
  if (typeof children === 'string')
    return defaultLanguage
  const language = getter(children, 'props.props.className') || defaultLanguage
  const result = language.replace('language-', '')
  if (result === 'js' || result === 'javascript')
    return 'jsx'
  if (result === 'ts' || result === 'tsx' || result === 'typescript') {
    return 'text/typescript'
  }
  return result
}
const getChildren = children => children && typeof children !== 'string'
  ? getter(children, 'props.children')
  : children
const Wrapper = styled('div') `
  margin: 30px 0;
  position: relative;
  width: 100%;
  border: 1px solid ${get('colors.border')};
  border-radius: 3px;
`
const Scrollbar = styled(PerfectScrollbar) `
  overflow: auto;
  position: relative;
  max-height: 360px;

  .ps__rail-y {
    z-index: 9;
    opacity: 0.4;
  }
`
const preStyles = get('styles.pre')
const EditorStyled = styled(CodeMirror) `
  ${themes.dark()};
  ${themes.light()};
  ${p => p.theme.docz.mq(preStyles(p))};
  position: relative;
  border-radius: 3px;
  flex: 1;

  .CodeMirror {
    max-width: 100%;
    height: 100%;
  }

  .CodeMirror pre {
    ${p => p.theme.docz.mq(preStyles(p))};
  }

  .CodeMirror-gutters {
    left: 1px !important;
  }

  .CodeMirror-lines {
    padding: 10px 0;
  }

  .CodeMirror-line {
    padding: 0 10px;
  }

  .CodeMirror-linenumber {
    padding: 0 7px 0 5px;
  }
`
const Actions = styled('div') `
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px;
  background: transparent;
`
const textColor = get('colors.text')
export const ActionButton = styled(ButtonSwap) `
  padding: 4px;
  background: transparent;
  font-size: 12px;
  text-transform: uppercase;
  color: ${p => rgba(textColor(p), 0.4)};
  transition: color 0.3s;

  &:hover {
    color: ${p => rgba(textColor(p), 0.7)};
  }
`
const Check = styled(BaseCheck) `
  stroke: ${get('colors.primary')};
`
export const ClipboardAction = ({ content, ...props }) => (<ActionButton {...props} as={ButtonLink} title="Copy to clipboard" onClick={() => copy(content)} swap={<Check width={17}/>}>
  <Clipboard width={15}/>
</ActionButton>)
class Editorr extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      code: getChildren(this.props.children),
    }
    this.removeLastLine = editor => {
      if (editor && !this.props.withLastLine && this.props.readOnly) {
        const lastLine = editor.lastLine()
        editor.doc.replaceRange('', { line: lastLine - 1 }, { line: lastLine })
      }
    }
    this.handleChange = (editor, data, code) => {
      this.props.onChange && this.props.onChange(code)
      this.setState({ code })
    }
  }
  render () {
    const { code } = this.state
    const { mode, children, actions, onChange, className, editorClassName, language: defaultLanguage, ...props } = this.props
    const language = defaultLanguage || getLanguage(children)
    const options = {
      ...props,
      tabSize: 2,
      mode: language || mode,
      lineNumbers: true,
      lineWrapping: true,
      autoCloseTags: true,
      theme: 'docz-light',
    }
    const editorProps = () => ({
      value: this.state.code,
      className: editorClassName,
      editorDidMount: this.removeLastLine,
      onBeforeChange: this.handleChange,
      options: {
        ...options,
        theme:`docz-${this.props.theme.docz.mode}`
        // theme: config && config.themeConfig
        //   ? config.themeConfig.codemirrorTheme
        //   : options.theme,
      },
    })
    const scrollbarOpts = {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
      suppressScrollX: true,
    }
    return (<Wrapper className={className}>
      <Scrollbar option={scrollbarOpts}>
        <EditorStyled {...editorProps()}/>
      </Scrollbar>

 
      <Actions>{actions || <ClipboardAction content={code}/>}</Actions>
      
    
    </Wrapper>)
  }
}


export const Editor=withTheme(Editorr)

Editor.defaultProps = {
  mode: 'js',
  readOnly: true,
  matchBrackets: true,
  indentUnit: 2,
}