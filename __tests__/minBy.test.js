import { minBy } from '../src/minBy'

it('returns the smaller of two values with respect to a function', () => {
  const getX = (foo) => foo.x

  expect(minBy(getX, { x: 0 }, { x: 1 })).toEqual({ x: 0 })
  expect(minBy(getX, { x: 1 }, { x: 0 })).toEqual({ x: 0 })

  expect(minBy(getX, { x: 'a' }, { x: 'b' })).toEqual({ x: 'a' })
  expect(minBy(getX, { x: 'b' }, { x: 'a' })).toEqual({ x: 'a' })
})
