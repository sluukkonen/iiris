import { ifElse } from '../src/ifElse'

it('simulates an if-else expression', () => {
  const isEven = (x) => x % 2 === 0
  const inc = (x) => x + 1
  const dec = (x) => x - 1

  expect(ifElse(isEven, inc, dec, 0)).toEqual(1)
  expect(ifElse(isEven, inc, dec, 1)).toEqual(0)
  expect(ifElse(isEven, inc, dec, 2)).toEqual(3)
  expect(ifElse(isEven, inc, dec, 3)).toEqual(2)
  expect(ifElse(isEven, inc, dec, 4)).toEqual(5)
})
