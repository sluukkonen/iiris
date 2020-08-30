import { uniqBy } from '../src/uniqBy'
import { identity } from '../src/identity'

it('returns a new array with only the unique values from the source array', () => {
  expect(uniqBy(Math.abs, [])).toEqual([])
  expect(uniqBy(Math.abs, [1])).toEqual([1])
  expect(uniqBy(Math.abs, [1, -1])).toEqual([1])
  expect(uniqBy(Math.abs, [1, -1, -2])).toEqual([1, -2])
  expect(uniqBy(Math.abs, [1, -1, -2, 2])).toEqual([1, -2])
})

it('compares objects deeply', () => {
  expect(uniqBy(identity, [{ a: 1 }])).toEqual([{ a: 1 }])
  expect(uniqBy(identity, [{ a: 1 }, { a: 1 }])).toEqual([{ a: 1 }])
  expect(uniqBy(identity, [{ a: 1 }, { a: 1 }, { b: 2 }])).toEqual([
    { a: 1 },
    { b: 2 },
  ])
  expect(uniqBy(identity, [{ a: 1 }, { a: 1 }, { b: 2 }])).toEqual([
    { a: 1 },
    { b: 2 },
  ])
})
