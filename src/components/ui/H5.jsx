import styled from '@emotion/styled'
// import { get } from '@utils/theme';

import { styler,getThemeP } from '@styles/system'

export const H5 = styled('h5')(styler({'':getThemeP('styles.h5')})) 

// export const H5 = styled('h5') `
//   ${p => p.theme.docz.mq(get('styles.h5')(p))};
// `;
