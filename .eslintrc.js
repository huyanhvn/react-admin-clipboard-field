module.exports = {
    env: { browser: true, es2021: true },
    extends: ['plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['import', 'react', '@typescript-eslint'],
    ignorePatterns: [
        'config',
        'node_modules',
        'public',
        'build',
        'src/__generated__',
    ],
    rules: {
        indent: 'off',
        'react/jsx-one-expression-per-line': 'off',
        'linebreak-style': 'off',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.tsx', '.ts'] },
        ],
        'import/extensions': ['warn', 'never'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'react/prop-types': 'warn',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
