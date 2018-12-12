import styled from '@emotion/styled'

import { styler,getColor,getThemeP } from '@styles/system'

export const Blockquote =styled('blockquote')(styler(
  {
    background: getColor('blockquoteBg'),
    borderLeftWidth:'5px',
    borderLeftStyle:'solid',
    borderLeftColor:getColor('blockquoteBorder'),
    color:getColor('blockquoteColor'),
    
    '& > p': {
      margin: '0px',
      color: getColor('blockquoteColor')
    },
 
  }
),getThemeP('styles.blockquote'))

// export const Blockquoter = styled('blockquote') `
//   background: ${get('colors.blockquoteBg')};
//   border-left: 5px solid ${get('colors.blockquoteBorder')};
//   color: ${get('colors.blockquoteColor')};
//   ${get('styles.blockquote')};

//   & > p {
//     margin: 0;
//     color: ${get('colors.blockquoteColor')};
//   }
// `
