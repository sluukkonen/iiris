import { maxBy } from './maxBy.js'

it('returns the greater of two values with respect to a function', () => {
  const getX = (foo) => foo.x

  expect(maxBy(getX, { x: 0 }, { x: 1 })).toEqual({ x: 1 })
  expect(maxBy(getX, { x: 1 }, { x: 0 })).toEqual({ x: 1 })

  expect(maxBy(getX, { x: 'a' }, { x: 'b' })).toEqual({ x: 'b' })
  expect(maxBy(getX, { x: 'b' }, { x: 'a' })).toEqual({ x: 'b' })
})
