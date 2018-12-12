import styled from '@emotion/styled'
import { styler,getThemeP } from '@styles/system'

export const List = styled('ul')(styler({'':getThemeP('styles.list')})) 

// export const List = styled('ul') `
//   ${p => p.theme.docz.mq(p.theme.docz.styles.list)};
// `;
