import { timesU } from '../src/internal/timesU'
import { repeat } from '../src/repeat'

it('repeats the value n times', () => {
  expect(repeat('a', 0)).toEqual([])
  expect(repeat('a', 1)).toEqual(['a'])
  expect(repeat('a', 2)).toEqual(['a', 'a'])
  expect(repeat('a', 3)).toEqual(['a', 'a', 'a'])
})
