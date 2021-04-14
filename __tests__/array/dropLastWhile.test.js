import { gt } from '../../src/gt.js'
import { dropLastWhile } from '../../src/array/dropLastWhile.js'

it('drops elements matching a predicate from the begining of array', () => {
  expect(dropLastWhile(gt(1), [])).toEqual([])
  expect(dropLastWhile(gt(1), [1])).toEqual([1])
  expect(dropLastWhile(gt(1), [1, 2])).toEqual([1])
  expect(dropLastWhile(gt(1), [1, 2, 3])).toEqual([1])
})
