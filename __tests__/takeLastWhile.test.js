import { gt } from '../src/gt'
import { takeLastWhile } from '../src/takeLastWhile'

it('takes elements matching a predicate from the end of array', () => {
  expect(takeLastWhile(gt(1), [])).toEqual([])
  expect(takeLastWhile(gt(1), [1])).toEqual([])
  expect(takeLastWhile(gt(1), [1, 2])).toEqual([2])
  expect(takeLastWhile(gt(1), [1, 2, 3])).toEqual([2, 3])
})
