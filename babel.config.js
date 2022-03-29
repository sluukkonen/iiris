/* eslint-disable import/no-commonjs */

module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: ['annotate-pure-calls'],
}
