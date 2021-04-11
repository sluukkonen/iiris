import { descend } from './descend.js'

it('returns a descending comparator for a function', () => {
  const age = (x) => x.age
  const byAge = descend(age)

  expect(byAge({ age: 15 }, { age: 16 })).toBe(1)
  expect(byAge({ age: 15 }, { age: 15 })).toBe(0)
  expect(byAge({ age: 16 }, { age: 15 })).toBe(-1)
})
