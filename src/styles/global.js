import {normalize} from 'polished'
import codem from './codemirror/css'


const additional=`  
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

export default [normalize(),codem(),additional]
