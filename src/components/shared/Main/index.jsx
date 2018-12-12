import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import get from 'lodash.get'

const Wrapper = styled('div') ({
  display: 'flex',
  maxWidth: '100vw'
})
const base = body => injectGlobal `
    body {
      ${body};
    }
  `
export class Main extends Component {
  componentDidUpdate (prevProps) {
    const body = this.getBody(this.props)
    const prevBody = this.getBody(prevProps)
    if (body && prevBody !== body)
      base(body)
  }
  componentDidMount () {
    base(this.getBody(this.props))
  }
  render () {
    return <Wrapper>{this.props.children}</Wrapper>
  }
  getBody (props) {
    return get(props, 'config.themeConfig.styles.body')
  }
}
