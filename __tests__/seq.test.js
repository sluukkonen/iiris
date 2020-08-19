import { seq } from '../src/seq'

it('sequentially applies each function to the initial value', () => {
  const inc = (x) => x + 1
  const toString = (x) => x.toString()
  const fromString = (x) => parseInt(x, 10)

  expect(seq(1, inc)).toEqual(2)
  expect(seq(1, inc, toString)).toEqual('2')
  expect(seq(1, inc, toString, fromString)).toEqual(2)
  expect(seq(1, inc, toString, fromString, inc)).toEqual(3)
  expect(seq(1, inc, toString, fromString, inc, toString)).toEqual('3')
})

it('returns the initial if called with a single argument', () => {
  expect(seq(1)).toEqual(1)
})

it('returns undefined if called with no arguments', () => {
  expect(seq()).toBeUndefined()
})
