import { singleton } from '../../src/set/singleton.js'

it('creates a singleton set', () => {
  expect(singleton(1)).toEqual(new Set([1]))
})
