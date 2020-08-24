import { toSet } from '../src/toSet'

it('toSet()', () => {
  expect(toSet([1, 2, 3])).toEqual(new Set([1, 2, 3]))
  expect(toSet('abc')).toEqual(new Set(['a', 'b', 'c']))
})
