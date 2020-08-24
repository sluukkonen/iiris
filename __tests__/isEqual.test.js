import { isEqual } from '../src'

const expectIsEqual = (a, b, equals) => {
  expect(isEqual(a, b)).toBe(equals)
  expect(isEqual(a)(b)).toBe(equals)
  expect(isEqual(b, a)).toBe(equals)
  expect(isEqual(b)(a)).toBe(equals)
}

it('strings', () => {
  expectIsEqual('a', 'a', true)
  expectIsEqual('a', 'b', false)
})

it('loose equality', () => {
  expectIsEqual(1, '1', false)
  expectIsEqual(0, '0', false)
})

it('numbers', () => {
  expectIsEqual(1, 0, false)
  expectIsEqual(0, 0, true)
  expectIsEqual(0, -0, true)
  expectIsEqual(NaN, NaN, true)
  expectIsEqual(Infinity, Infinity, true)
  expectIsEqual(-Infinity, -Infinity, true)
  expectIsEqual(-Infinity, Infinity, false)
})

it('symbols', () => {
  expectIsEqual(Symbol.for('a'), Symbol.for('a'), true)
  expectIsEqual(Symbol.for('a'), Symbol.for('b'), false)
  expectIsEqual(Symbol.for('a'), Symbol('a'), false)
  expectIsEqual(Symbol('a'), Symbol('a'), false)
})

it('null & undefined', () => {
  expectIsEqual(null, null, true)
  expectIsEqual(undefined, undefined, true)
  expectIsEqual(null, undefined, false)
})

it('functions', () => {
  const fn = () => {}
  const fn2 = () => {}

  expectIsEqual(fn, fn, true)
  expectIsEqual(fn, fn2, false)
})

it('dates', () => {
  const now = new Date()

  expectIsEqual(now, now, true)
  expectIsEqual(now, new Date(0), false)
  expectIsEqual(new Date('invalid'), new Date('also invalid'), true)
})

it('regular expressions', () => {
  expectIsEqual(/.*/, /.*/, true)
  expectIsEqual(/.*/, /.*/i, false)
})

it('arrays', () => {
  // Equal arrays
  expectIsEqual([1, 2, 3], [1, 2, 3], true)
  // Differing lengths
  expectIsEqual([1, 2], [1, 2, 3], false)
  expectIsEqual([1, 2, 3], [1, 2], false)
  // Differing contents
  expectIsEqual([1, 2, 3], [1, 2, 4], false)
  // Nested arrays
  expectIsEqual([[[1, 2, 3]]], [[[1, 2, 3]]], true)
  // Sparse arrays
  // eslint-disable-next-line no-sparse-arrays
  expectIsEqual([1, 2, , 3], [1, 2, , 3], true)
  // Object with array prototype
  expectIsEqual([], Object.create(Array.prototype), false)
})

it('objects', () => {
  // Equal objects
  expectIsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, true)
  // Missing keys
  expectIsEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }, false)
  expectIsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }, false)
  // Differing keys
  expectIsEqual({ a: 1, b: 2, d: 3 }, { a: 1, b: 2, c: 3 }, false)
  // Differing contents
  expectIsEqual({ a: 1, b: 2, c: 4 }, { a: 1, b: 2, c: 3 }, false)
  expectIsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 }, false)
  // Non-own keys
  expectIsEqual(Object.create({ a: 1 }), { a: 1 }, false)
  expectIsEqual({ a: 1 }, Object.create({ a: 1 }), false)
  // Non-enumerable keys
  const obj = Object.defineProperty({}, 'a', { value: 1, enumerable: false })
  expectIsEqual({ a: 1 }, obj, false)
  expectIsEqual(obj, { a: 1 }, false)
  // Same class
  class A {
    constructor(x) {
      this.x = x
    }
  }
  expectIsEqual(new A('a'), new A('a'), true)
  expectIsEqual(new A('a'), new A('b'), false)
  // Different prototypes
  expectIsEqual({}, Object.create(null), false)
  expectIsEqual(new (class {})(), new (class {})(), false)
})

it('maps', () => {
  // Equal maps
  expectIsEqual(
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    true
  )
  // Different order
  expectIsEqual(
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    new Map([
      ['b', 2],
      ['a', 1],
    ]),
    true
  )
  // Differing lengths
  expectIsEqual(
    new Map([['a', 1]]),
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    false
  )
  expectIsEqual(
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    new Map([['a', 1]]),
    false
  )
  // Equal object keys with different identity
  expectIsEqual(new Map([[{}, 1]]), new Map([[{}, 1]]), false)
  // Differing values
  expectIsEqual(new Map([['a', 1]]), new Map([['a', 2]]), false)
  expectIsEqual(new Map([['a', 2]]), new Map([['a', 1]]), false)
  // Undefined value on different keys
  expectIsEqual(new Map([['a', undefined]]), new Map([['b', undefined]]), false)
  // Nested maps
  expectIsEqual(
    new Map([['x', new Map([['x', 1]])]]),
    new Map([['x', new Map([['x', 1]])]]),
    true
  )
})

it('sets', () => {
  // Equal sets
  expectIsEqual(new Set([1, 2, 3]), new Set([1, 2, 3]), true)
  // Different order
  expectIsEqual(new Set([1, 2, 3]), new Set([3, 2, 1]), true)
  // Differing lengths
  expectIsEqual(new Set([1, 2]), new Set([1, 2, 3]), false)
  expectIsEqual(new Set([1, 2, 3]), new Set([1, 2]), false)
  // Differing values
  expectIsEqual(new Set([1, 2, 3]), new Set([1, 2, 4]), false)
  expectIsEqual(new Set([1, 2, 4]), new Set([1, 2, 3]), false)
})

it('errors', () => {
  // Same name, same message
  expectIsEqual(new Error('msg'), new Error('msg'), true)
  // Different message
  expectIsEqual(new Error('msg'), new Error('other msg'), false)
  // Different name
  expectIsEqual(new Error('msg'), new TypeError('msg'), false)
})

it('wrapped primitive objects', () => {
  expectIsEqual(new Number(0), new Number(0), true)
  expectIsEqual(new Number(0), new Number(-1), false)

  expectIsEqual(new Boolean(true), new Boolean(true), true)
  expectIsEqual(new Boolean(true), new Boolean(false), false)

  expectIsEqual(new String('a'), new String('a'), true)
  expectIsEqual(new String('a'), new String('b'), false)
})

it('weak references', () => {
  expectIsEqual(new WeakMap(), new WeakMap(), false)
  expectIsEqual(new WeakSet(), new WeakSet(), false)
})

describe('cycles', () => {
  it('equal cyclic objects', () => {
    const obj1 = { x: {} }
    obj1.x.y = obj1

    const obj2 = { x: {} }
    obj2.x.y = obj2

    expectIsEqual(obj1, obj2, true)
  })

  it('obj1 is cyclic, obj2 is otherwise equal but refers to obj1', () => {
    const obj1 = {}
    obj1.x = obj1

    const obj2 = { x: obj1 }

    expectIsEqual(obj1, obj2, true)
  })

  it('different kinds of cyclic objects', () => {
    const obj1 = { x: {} }
    obj1.x.y = obj1

    const obj2 = { x: {} }
    obj2.x.y = obj2.x

    expectIsEqual(obj1, obj2, false)
  })

  it('two maps that refer to each other', () => {
    const map1 = new Map()
    const map2 = new Map()

    map1.set('x', map2)
    map2.set('x', map1)

    expectIsEqual(map1, map2, true)
  })

  it('equal cyclic maps', () => {
    const map1 = new Map()
    map1.set('x', map1)

    const map2 = new Map()
    map2.set('x', map2)

    expectIsEqual(map1, map2, true)
  })

  it('equal cyclic arrays', () => {
    const array1 = []
    array1[0] = array1

    const array2 = []
    array2[0] = array2

    expectIsEqual(array1, array2, true)
  })

  it('two arrays that refer to each other', () => {
    const array1 = []
    const array2 = []
    array1[0] = array2
    array2[0] = array1

    expectIsEqual(array1, array2, true)
  })

  it('different kinds of cyclic arrays', () => {
    const array1 = [[]]
    array1[0][0] = array1

    const array2 = [[]]
    array1[0][0] = array1[0]

    expectIsEqual(array1, array2, false)
  })

  it('array1 is cyclic, array2 otherwise equal but refers to obj1', () => {
    const array1 = []
    array1[0] = array1

    const array2 = [array1]

    expectIsEqual(array1, array2, true)
  })
})
