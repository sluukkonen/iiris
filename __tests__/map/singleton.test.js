import { singleton } from '../../src/map/singleton.js'

it('creates a singleton map containin the entry', () => {
  expect(singleton('a', 1)).toEqual(new Map([['a', 1]]))
})
