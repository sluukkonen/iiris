import { from } from './from.js'

it('converts an iterable into a set', () => {
  expect(from([1, 2, 3])).toEqual(new Set([1, 2, 3]))
  expect(from('abc')).toEqual(new Set(['a', 'b', 'c']))
})
