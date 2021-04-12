import { find } from '../../src/array/find.js'

it('finds the first element matching a predicate', () => {
  const xIs1 = (foo) => foo.x === 1

  expect(find(xIs1, [])).toBeUndefined()
  expect(find(xIs1, [{ x: 1 }])).toEqual({ x: 1 })
  expect(find(xIs1, [{ x: 0 }, { x: 1 }])).toEqual({ x: 1 })
  expect(find(xIs1, [{ x: 0 }, { x: 1 }, { x: 1, y: 2 }])).toEqual({ x: 1 })
  expect(find(xIs1, [{ x: 0 }, { x: 2 }, { x: 3 }])).toBeUndefined()
})
