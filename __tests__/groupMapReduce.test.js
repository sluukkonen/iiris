import { groupMapReduce, inc, add } from '../src'

it('partitions an array with keyFn, maps each value with mapFn and combines the mapped values with reducer', () => {
  expect(groupMapReduce(Math.floor, inc, add, [])).toEqual({})
  expect(groupMapReduce(Math.floor, inc, add, [1])).toEqual({ '1': 2 })
  expect(groupMapReduce(Math.floor, inc, add, [1, 1.5])).toEqual({ '1': 4.5 })
  expect(groupMapReduce(Math.floor, inc, add, [1, 1.5, 2])).toEqual({
    '1': 4.5,
    '2': 3,
  })
  expect(groupMapReduce(Math.floor, inc, add, [1, 1.5, 2, 3.5])).toEqual({
    '1': 4.5,
    '2': 3,
    '3': 4.5,
  })
})
