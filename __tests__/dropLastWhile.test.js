import { dropLastWhile } from '../src/dropLastWhile'

it('drops elements matching a predicate from the begining of array', () => {
  const gt1 = (x) => x > 1

  expect(dropLastWhile(gt1, [])).toEqual([])
  expect(dropLastWhile(gt1, [1])).toEqual([1])
  expect(dropLastWhile(gt1, [1, 2])).toEqual([1])
  expect(dropLastWhile(gt1, [1, 2, 3])).toEqual([1])
})
