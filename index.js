module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint-config-standard',
    ],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'id-length': ['error', { exceptions: ['i', 'j', 'k'] }],
        'no-underscore-dangle': ['error'],
        'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'prefer-object-spread': 'error',
        'prefer-destructuring': ['error', {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: false,
            },
        }, {
            enforceForRenamedProperties: false,
        }],
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'no-useless-escape': 'error',
        'prefer-rest-params': 'error',
        'default-param-last': 'off',
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        'arrow-spacing': ['error', { before: true, after: true }],
    },
}