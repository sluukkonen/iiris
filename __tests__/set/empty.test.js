import { empty } from '../../src/set/empty.js'

it('creates an empty set', () => {
  expect(empty()).toEqual(new Set())
})
