import { injectGlobal } from 'emotion'
// import 'normalize.css';
import {normalize} from 'polished'
import codem from './codemirror/css'

// tslint:disable
injectGlobal `
${normalize}
${codem}
  *, *:before, *:after {
    box-sizing: border-box;
  }

  .icon-link {
    display: none;
  }

  body {
    margin: 0;
    padding: 0;
  }

  .with-overlay {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
  }
`
