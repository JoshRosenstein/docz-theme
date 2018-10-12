import styled from 'react-emotion'
// import { get } from '@utils/theme';

import { styler,getThemeP } from '@styles/system'

export const H6= styled('h6')(styler({'':getThemeP('styles.h6')})) 


// export const H6 = styled('h6') `
//   ${p => p.theme.docz.mq(get('styles.h6')(p))};
// `;
