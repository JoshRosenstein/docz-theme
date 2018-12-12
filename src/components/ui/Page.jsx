import  React, { Fragment } from 'react'
import { getThemeP,styler} from '@styles/system'

import { ThemeConfig } from 'docz'
import lighten from 'polished/lib/color/lighten'
import Edit from 'react-feather/dist/icons/edit-2'
import styled from '@emotion/styled'
import { get } from '@utils/theme'
import { ButtonLink } from './Button'
import { GithubLink, Sidebar, Main } from '../shared'

const Wrapper = styled('div') `
  flex: 1;
  color: ${get('colors.text')};
  background: ${get('colors.background')};
`
export const Container = styled('div')({
  position: 'relative',
  margin: '0 auto'
},styler({'':getThemeP('styles.container')}))


export const Container2 = styled('div') `
  position: relative;
  margin: 0 auto;
  ${p => p.theme.docz.mq(p.theme.docz.styles.container)};
`
const EditPage = styled(ButtonLink.withComponent('a')) `
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 2px 8px;
  margin: 8px;
  border-radius: 3px;
  border: 1px solid ${get('colors.border')};
  opacity: 0.7;
  transition: opacity 0.4s;
  font-size: 14px;
  color: ${get('colors.text')};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    background: ${p => lighten(0.1, p.theme.docz.colors.border)};
  }

  ${p => p.theme.docz.mq({
    visibility: ['hidden', 'hidden', 'visible'],
    top: [0, -60, 10],
    right: [0, 0, 32],
  })};
`
const EditIcon = styled(Edit) `
  margin-right: 5px;
`
export const Page =({ children, doc: { link='#', fullpage, edit = true } }) => {

  const content = (<Fragment>
    {true && // // Link
        edit && (<EditPage href={link} target="_blank">
      <EditIcon width={14}/> Edit page
    </EditPage>)}
    {children}
  </Fragment>)
  return (<ThemeConfig>
    {({ repository, ...config }) => (<Main config={config}>
      {repository && <GithubLink repository={repository}/>}
         
      {!fullpage && <Sidebar />}
      <Wrapper>
        {fullpage ? content : <Container>{content}</Container>}
      </Wrapper>
    </Main>)}
  </ThemeConfig>)
}
