module.exports = {
  globals:{
    expect:true,
    describe:true,
    test:true,
    it:true,
    jest:true
  },
  extends: 'react-tools',
  rules: {
    semi: ['warn', 'never'],
    'react/prop-types': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'react/jsx-filename-extension': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 0,
    'react/prefer-stateless-function': 0,
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': [2, 'as-needed'],
    'no-console': 0,
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    radix: 0,
    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-underscore-dangle': 0,
    'global-require': 0,
    'react/no-multi-comp': 0,
    'react/no-unescaped-entities': 0,
    'no-cond-assign': 0,
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/sort-comp': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-autofocus': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'space-infix-ops': 0,
    camelcase: 0,
    'comma-dangle': [
      'error',
      {
        functions: 'ignore',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        arrays: 'only-multiline'
      }
    ],
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    quotes: ['warn', 'single', { avoidEscape: true }],
    'quote-props':['error', 'as-needed'],
    'linebreak-style':0,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    indent: ['warn', 2],
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated'
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead'
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.'
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.'
    }]
  }
}