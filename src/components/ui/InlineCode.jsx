import styled from 'react-emotion'
// import { get } from '@utils/theme'
import { styler,getThemeP,getColor } from '@styles/system'

export const InlineCode= styled('code')(styler({
  background:getColor('codeBg'),
  color:getColor('codeColor'),
  '':getThemeP('styles.code')
}))

// export const InlineCodes = styled('code') `
//   background: ${get('colors.codeBg')};
//   color: ${get('colors.codeColor')};
//   ${p => p.theme.docz.mq(p.theme.docz.styles.code)};
// `
