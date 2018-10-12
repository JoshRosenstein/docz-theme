import styled from 'react-emotion'
// import { get } from '@utils/theme'

import { styler,getThemeP } from '@styles/system'

export const H4 = styled('h4')(styler({'':getThemeP('styles.h4')})) 

// export const H4 = styled('h4') `
//   ${p => p.theme.docz.mq(get('styles.h4')(p))};
// `
