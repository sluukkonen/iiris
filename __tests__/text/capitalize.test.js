import { capitalize } from '../../src/text/capitalize.js'

it('capitalizes a string', () => {
  expect(capitalize('aBc')).toEqual('Abc')
  expect(capitalize('')).toEqual('')
})
