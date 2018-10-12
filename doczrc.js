import * as path from 'path'
import pkg from './package.json'

const libName = pkg.name
// const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')
const DOCS = path.resolve(__dirname, 'docz')

export default {
  dest: './docs',
  // files: './docz/**/*.mdx',
  ordering: 'ascending',
  src: './docz',
  title: 'Roseys Docz',
  description: pkg.description,
  base: `/${libName}/`,
  theme: 'src/index',
  // themeConfig:{mode:'light'},
  //  description: 'assist',
  // indexHtml: `${DOCS}/index.html`,
  //  theme: 'src/theme/index',
  // ordering: 'ascending',
  //   propsParser: false,
  //  mdPlugins: [externalLinks.default],
  // htmlContext: {
  //   favicon: '/public/favicon.ico',
  // },

  modifyBundlerConfig: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@shared': path.resolve(__dirname, 'src/components/shared'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    })
  
    return config
  },
}
