import { add } from '../../src/add.js'
import { inc } from '../../src/inc.js'
import { groupMapReduce } from '../../src/array/groupMapReduce.js'

it('partitions an array with keyFn, maps each value with mapFn and combines the mapped values with reducer', () => {
  expect(groupMapReduce(add, inc, Math.floor, [])).toEqual({})
  expect(groupMapReduce(add, inc, Math.floor, [1])).toEqual({ 1: 2 })
  expect(groupMapReduce(add, inc, Math.floor, [1, 1.5])).toEqual({ 1: 4.5 })
  expect(groupMapReduce(add, inc, Math.floor, [1, 1.5, 2])).toEqual({
    1: 4.5,
    2: 3,
  })
  expect(groupMapReduce(add, inc, Math.floor, [1, 1.5, 2, 3.5])).toEqual({
    1: 4.5,
    2: 3,
    3: 4.5,
  })
})

it('considers only own properties of the object', () => {
  expect(groupMapReduce(add, inc, () => 'toString', [1, 2])).toEqual({
    toString: 5,
  })
})
