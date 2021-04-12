import { split } from '../../src/string/split.js'

it('splits a string between each separator', () => {
  expect(split(', ', '')).toEqual([''])
  expect(split(', ', 'a')).toEqual(['a'])
  expect(split(', ', 'a, b')).toEqual(['a', 'b'])
  expect(split(', ', 'a, b, c')).toEqual(['a', 'b', 'c'])
})
