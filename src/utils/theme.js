import getter from 'lodash.get'

export const get = val => p => getter(p, `theme.docz.${val}`)
