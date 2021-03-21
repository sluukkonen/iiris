import { capitalize } from '../src/capitalize'

it('capitalizes a string', () => {
  expect(capitalize('aBc')).toEqual('Abc')
  expect(capitalize('')).toEqual('')
})
