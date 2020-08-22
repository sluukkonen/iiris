import { concat } from '../src'

it('concatenates two arrays together', () => {
  expect(concat([], [])).toEqual([])

  expect(concat([1], [])).toEqual([1])
  expect(concat([], ['a'])).toEqual(['a'])

  expect(concat([1], ['a'])).toEqual([1, 'a'])
  expect(concat([1, 2], ['a'])).toEqual([1, 2, 'a'])
  expect(concat([1, 2], ['a', 'b'])).toEqual([1, 2, 'a', 'b'])
  expect(concat([1, 2, 3], ['a', 'b'])).toEqual([1, 2, 3, 'a', 'b'])
  expect(concat([1, 2, 3], ['a', 'b', 'c'])).toEqual([1, 2, 3, 'a', 'b', 'c'])
})
