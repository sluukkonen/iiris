import { intersperse } from '../src/intersperse'

it('inserts a separator between each element of an array', () => {
  expect(intersperse(',', [])).toEqual([])
  expect(intersperse(',', ['a'])).toEqual(['a'])
  expect(intersperse(',', ['a', 'b'])).toEqual(['a', ',', 'b'])
  expect(intersperse(',', ['a', 'b', 'c'])).toEqual(['a', ',', 'b', ',', 'c'])
})
