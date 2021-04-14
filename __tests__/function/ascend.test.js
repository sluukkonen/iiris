import { ascend } from '../../src/ascend.js'

it('returns an ascending comparator for a function', () => {
  const age = (x) => x.age
  const byAge = ascend(age)

  expect(byAge({ age: 15 }, { age: 16 })).toBe(-1)
  expect(byAge({ age: 15 }, { age: 15 })).toBe(0)
  expect(byAge({ age: 16 }, { age: 15 })).toBe(1)
})
