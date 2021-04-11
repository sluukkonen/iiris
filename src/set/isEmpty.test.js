import { isEmpty } from './isEmpty.js'
import { empty } from './empty.js'
import { singleton } from './singleton.js'

it('checks if a set is empty', () => {
  expect(isEmpty(empty())).toBe(true)
  expect(isEmpty(singleton(1))).toBe(false)
})
