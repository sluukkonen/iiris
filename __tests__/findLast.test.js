import { findLast } from '../src/findLast'

it('finds the last element matching a predicate', () => {
  const xIs1 = (foo) => foo.x === 1

  expect(findLast(xIs1, [])).toBeUndefined()
  expect(findLast(xIs1, [{ x: 1 }])).toEqual({ x: 1 })
  expect(findLast(xIs1, [{ x: 0 }, { x: 1 }])).toEqual({ x: 1 })
  expect(findLast(xIs1, [{ x: 0 }, { x: 1 }, { x: 1, y: 2 }])).toEqual({
    x: 1,
    y: 2,
  })
  expect(findLast(xIs1, [{ x: 0 }, { x: 2 }, { x: 3 }])).toBeUndefined()
})
