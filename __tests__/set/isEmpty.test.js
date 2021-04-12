import { isEmpty } from '../../src/set/isEmpty.js'
import { empty } from '../../src/set/empty.js'
import { singleton } from '../../src/set/singleton.js'

it('checks if a set is empty', () => {
  expect(isEmpty(empty())).toBe(true)
  expect(isEmpty(singleton(1))).toBe(false)
})
