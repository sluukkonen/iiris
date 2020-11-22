import { when } from '../src/when'

it('applies a function to value if the predicate fails', () => {
  const isOdd = (x) => x % 2 === 1
  const inc = (x) => x + 1

  expect(when(isOdd, inc, 0)).toEqual(0)
  expect(when(isOdd, inc, 1)).toEqual(2)
  expect(when(isOdd, inc, 2)).toEqual(2)
  expect(when(isOdd, inc, 3)).toEqual(4)
  expect(when(isOdd, inc, 4)).toEqual(4)
})
