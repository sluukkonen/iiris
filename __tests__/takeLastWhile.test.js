import { takeLastWhile } from '../src/takeLastWhile'

it('takes elements matching a predicate from the end of array', () => {
  const gt1 = (x) => x > 1

  expect(takeLastWhile(gt1, [])).toEqual([])
  expect(takeLastWhile(gt1, [1])).toEqual([])
  expect(takeLastWhile(gt1, [1, 2])).toEqual([2])
  expect(takeLastWhile(gt1, [1, 2, 3])).toEqual([2, 3])
})
