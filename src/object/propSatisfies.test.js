import { equals } from '../core/equals.js'
import { propSatisfies } from './propSatisfies.js'

it('checks if a property satisfies a predicate', () => {
  const obj = { a: 1 }

  expect(propSatisfies('a', equals(1), obj)).toBe(true)
  expect(propSatisfies('a', equals(2), obj)).toBe(false)
  expect(propSatisfies('b', equals(undefined), obj)).toBe(false)
})
