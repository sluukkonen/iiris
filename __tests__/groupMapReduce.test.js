import { add } from '../src/add'
import { groupMapReduce } from '../src/groupMapReduce'
import { inc } from '../src/inc'

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
