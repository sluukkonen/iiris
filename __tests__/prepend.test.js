import { prepend } from '../src/prepend'

it('prepends a value to an array', () => {
  expect(prepend('a', [])).toEqual(['a'])
  expect(prepend('a', [1])).toEqual(['a', 1])
  expect(prepend('a', [1, 2])).toEqual(['a', 1, 2])
  expect(prepend('a', [1, 2, 3])).toEqual(['a', 1, 2, 3])
})
