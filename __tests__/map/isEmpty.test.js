import { isEmpty } from '../../src/map/isEmpty.js'

it('checks if the map is Empty', () => {
  expect(isEmpty(new Map([['a', 1]]))).toBe(false)
  expect(isEmpty(new Map())).toBe(true)
})
