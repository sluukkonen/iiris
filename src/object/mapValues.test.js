import { inc } from '../math/inc.js'
import { mapValues } from './mapValues.js'

it('maps the values of an object', () => {
  expect(mapValues(inc, {})).toEqual({})
  expect(mapValues(inc, { a: 1 })).toEqual({ a: 2 })
  expect(mapValues(inc, { a: 1, b: 2 })).toEqual({ a: 2, b: 3 })
  expect(mapValues(inc, { a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 3, c: 4 })
})

it('considers only the own keys of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2 })

  expect(mapValues(inc, obj)).toEqual({ b: 3 })
})
