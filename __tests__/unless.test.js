import { unless } from '../src/unless'

it('applies a function to value if the predicate fails', () => {
  const isEven = (x) => x % 2 === 0
  const inc = (x) => x + 1

  expect(unless(isEven, inc, 0)).toEqual(0)
  expect(unless(isEven, inc, 1)).toEqual(2)
  expect(unless(isEven, inc, 2)).toEqual(2)
  expect(unless(isEven, inc, 3)).toEqual(4)
  expect(unless(isEven, inc, 4)).toEqual(4)
})
