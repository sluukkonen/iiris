import { empty } from './empty.js'

it('creates an empty set', () => {
  expect(empty()).toEqual(new Set())
})
