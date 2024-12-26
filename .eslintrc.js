module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js', 'scripts/', 'build'],
  overrides: [
    {
      files: ['client/**/*.ts'],
      env: {
        browser: true,
        amd: true,
      },
      parserOptions: {
        project: 'client/tsconfig.json',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:import/recommended',
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
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/export': 'off',
      },
    },
    {
      files: ['client/**/*.html'],
      parserOptions: {
        project: 'client/tsconfig.json',
      },
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
      ],
      rules: {},
    },
    {
      files: ['server/src/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
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
