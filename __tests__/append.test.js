import { append } from '../src/append'

it('appends a value to an array', () => {
  expect(append('a', [])).toEqual(['a'])
  expect(append('a', [1])).toEqual([1, 'a'])
  expect(append('a', [1, 2])).toEqual([1, 2, 'a'])
  expect(append('a', [1, 2, 3])).toEqual([1, 2, 3, 'a'])
})
