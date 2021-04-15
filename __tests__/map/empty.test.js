import { empty } from '../../src/map/empty.js'

it('creates an empty map', () => {
  expect(empty()).toEqual(new Map())
})
