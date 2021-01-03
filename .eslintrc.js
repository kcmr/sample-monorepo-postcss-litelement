module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['@open-wc/eslint-config', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/no-named-as-default': 0,
  },
  overrides: [
    {
      files: ['packages/*/index.js'],
      rules: {
        'import/no-unresolved': 0,
      },
    },
    {
      files: 'postcss.config.js',
      rules: {
        'global-require': 0,
      },
    },
  ],
};
