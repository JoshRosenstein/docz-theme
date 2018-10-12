import styled from 'react-emotion'
// import { get } from '@utils/theme'
import { styler,getThemeP } from '@styles/system'

export const H3 = styled('h3')(styler({'':getThemeP('styles.h3')})) 


// export const H3 = styled('h3') `
//   ${p => p.theme.docz.mq(get('styles.h3')(p))};
// `
