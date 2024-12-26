module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js', 'scripts/', 'build', 'test'],
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json', 'client/tsconfig', 'server/tsconfig.json'],
      },
      node: {
        project: ['tsconfig.json', 'client/tsconfig', 'server/tsconfig.json'],
      },
    },
  },
  overrides: [
    {
      files: ['client/**/*.ts'],
      parserOptions: {
        project: 'client/tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      env: {
        browser: true,
        amd: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
      },
    },
    {
      files: ['client/**/*.html'],
      parserOptions: {
        project: 'client/tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      rules: {},
    },
    {
      files: ['server/src/*.ts'],
      parserOptions: {
        project: 'server/tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      env: {
        node: true,
        jest: true,
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
