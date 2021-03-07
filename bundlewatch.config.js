/* eslint-disable import/no-commonjs */
const { branch } = require('ci-env')

module.exports = {
  ci: {
    trackBranches: [branch],
  },
  files: [
    {
      path: 'dist/index.min.mjs',
      maxSize: '5kB',
    },
  ],
}
