import { inc } from '../math/inc.js'
import { pipe } from './pipe.js'

it('sequentially applies each function to the initial value', () => {
  const toString = (x) => x.toString()
  const fromString = (x) => parseInt(x, 10)

  expect(pipe(1, inc)).toEqual(2)
  expect(pipe(1, inc, toString)).toEqual('2')
  expect(pipe(1, inc, toString, fromString)).toEqual(2)
  expect(pipe(1, inc, toString, fromString, inc)).toEqual(3)
  expect(pipe(1, inc, toString, fromString, inc, toString)).toEqual('3')
})

it('returns the initial if called with a single argument', () => {
  expect(pipe(1)).toEqual(1)
})

it('returns undefined if called with no arguments', () => {
  expect(pipe()).toBeUndefined()
})
