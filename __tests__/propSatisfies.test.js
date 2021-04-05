import { propSatisfies } from '../src/propSatisfies'
import { equals } from '../src/equals'

it('checks if a property satisfies a predicate', () => {
  const obj = { a: 1 }

  expect(propSatisfies(equals(1), 'a', obj)).toBe(true)
  expect(propSatisfies(equals(2), 'a', obj)).toBe(false)
  expect(propSatisfies(equals(undefined), 'b', obj)).toBe(false)
})
