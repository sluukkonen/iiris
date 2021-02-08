import { uniqWith } from '../src/uniqWith'

it('returns the unique values with respect to a custom equality function', () => {
  const eq = (a, b) => a.a === b.a

  expect(uniqWith(eq, [{ a: 1 }])).toEqual([{ a: 1 }])
  expect(uniqWith(eq, [{ a: 1 }, { a: 1 }])).toEqual([{ a: 1 }])
  expect(uniqWith(eq, [{ a: 1 }, { a: 1 }, { b: 2 }])).toEqual([
    { a: 1 },
    { b: 2 },
  ])
})
