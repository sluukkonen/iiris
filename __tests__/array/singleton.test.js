import { singleton } from '../../src/array/singleton.js'

it('creates a singleton array', () => {
  expect(singleton(1)).toEqual([1])
  expect(singleton(2)).toEqual([2])
})
