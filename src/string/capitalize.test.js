import { capitalize } from './capitalize.js'

it('capitalizes a string', () => {
  expect(capitalize('aBc')).toEqual('Abc')
  expect(capitalize('')).toEqual('')
})
