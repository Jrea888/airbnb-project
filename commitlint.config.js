/* eslint-disable */
module.exports = {
    extends: ['cz'],
    rules: {
        'header-max-length': [2, 'always', 100],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-empty': [2, 'never'],
        'scope-enum': [0]
    },

    ignores: [
        message => {
            const list = ['Merge branch', 'Accept Merge Request']
            for (const item of list) {
                if (message.indexOf(item) === 0) {
                    return true
                }
            }
            return false;
        }
    ]
}
