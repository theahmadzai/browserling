module.exports = {
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        node: true,
        es6: true
    },
    extends: [ 'eslint:recommended', 'immortal' ],
    rules: {
        'indent': [ 'error', 4 ]
    }
};
