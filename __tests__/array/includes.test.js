import { includes } from '../../src/array/includes.js'

it('returns whether a value can be found from an array', () => {
  expect(includes(0, [])).toBe(false)
  expect(includes(0, [1])).toBe(false)
  expect(includes(0, [1, 0, 0])).toBe(true)
})

it('supports deep equality', () => {
  expect(includes({}, [{}])).toBe(true)
})
