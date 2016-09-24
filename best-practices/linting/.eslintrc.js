module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: ['off', 11],
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['error', {commentPattern: '^no default$'}],
    'dot-notation': ['error', {allowKeywords: true}],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'allow-null'],
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', {exceptions: []}],
    'no-native-reassign': 'off',
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': ['error', {allowLoop: false, allowSwitch: false}],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {props: true}],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': ['off', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated,'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Object',
      property: 'assign',
      message: 'Please use the object spread operator (...) instead.',
    }],
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-warning-comments': ['off', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'outside'],
    yoda: 'error',
    'comma-dangle': ['error', 'never'],
    'prefer-numeric-literals': 'off',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['off', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
    }],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-negated-in-lhs': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': ['error', {requireStringLiterals: true}],
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', {vars: 'local', args: 'after-used'}],
    'no-use-before-define': 'error'
  }
};