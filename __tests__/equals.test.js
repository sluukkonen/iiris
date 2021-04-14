import { equals } from '../src/equals.js'

const expectEquals = (a, b, result) => {
  expect(equals(a, b)).toBe(result)
  expect(equals(a)(b)).toBe(result)
  expect(equals(b, a)).toBe(result)
  expect(equals(b)(a)).toBe(result)
}

it('strings', () => {
  expectEquals('a', 'a', true)
  expectEquals('a', 'b', false)
})

it('loose equality', () => {
  expectEquals(1, '1', false)
  expectEquals(0, '0', false)
})

it('numbers', () => {
  expectEquals(1, 0, false)
  expectEquals(0, 0, true)
  expectEquals(0, -0, true)
  expectEquals(NaN, NaN, true)
  expectEquals(Infinity, Infinity, true)
  expectEquals(-Infinity, -Infinity, true)
  expectEquals(-Infinity, Infinity, false)
})

it('symbols', () => {
  expectEquals(Symbol.for('a'), Symbol.for('a'), true)
  expectEquals(Symbol.for('a'), Symbol.for('b'), false)
  expectEquals(Symbol.for('a'), Symbol('a'), false)
  expectEquals(Symbol('a'), Symbol('a'), false)
})

it('null & undefined', () => {
  expectEquals(null, null, true)
  expectEquals(undefined, undefined, true)
  expectEquals(null, undefined, false)
})

it('functions', () => {
  const fn = () => {}
  const fn2 = () => {}

  expectEquals(fn, fn, true)
  expectEquals(fn, fn2, false)
})

it('dates', () => {
  const now = new Date()

  expectEquals(now, now, true)
  expectEquals(now, new Date(0), false)
  expectEquals(new Date('invalid'), new Date('also invalid'), true)
})

it('regular expressions', () => {
  expectEquals(/.*/, /.*/, true)
  expectEquals(/.*/, /.*/i, false)
})

it('arrays', () => {
  // Equal arrays
  expectEquals([], [], true)
  expectEquals([1], [1], true)
  expectEquals([1, 2, 3], [1, 2, 3], true)
  // Differing lengths
  expectEquals([], [1], false)
  expectEquals([1], [], false)
  expectEquals([1, 2], [1, 2, 3], false)
  expectEquals([1, 2, 3], [1, 2], false)
  // Differing contents
  expectEquals([1, 2, 3], [1, 2, 4], false)
  // Nested arrays
  expectEquals([[[1, 2, 3]]], [[[1, 2, 3]]], true)
  // Sparse arrays
  // eslint-disable-next-line no-sparse-arrays
  expectEquals([1, 2, , 3], [1, 2, , 3], true)
  // Object with array prototype
  expectEquals([], Object.create(Array.prototype), false)
})

it('objects', () => {
  // Equal objects
  expectEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }, true)
  // Missing keys
  expectEquals({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }, false)
  expectEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }, false)
  // Differing keys
  expectEquals({ a: 1, b: 2, d: 3 }, { a: 1, b: 2, c: 3 }, false)
  // Differing contents
  expectEquals({ a: 1, b: 2, c: 4 }, { a: 1, b: 2, c: 3 }, false)
  expectEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 }, false)
  // Non-own keys
  expectEquals(Object.create({ a: 1 }), { a: 1 }, false)
  expectEquals({ a: 1 }, Object.create({ a: 1 }), false)
  // Non-enumerable keys
  const obj = Object.defineProperty({}, 'a', { value: 1, enumerable: false })
  expectEquals({ a: 1 }, obj, false)
  expectEquals(obj, { a: 1 }, false)
  // Same class
  class A {
    constructor(x) {
      this.x = x
    }
  }
  expectEquals(new A('a'), new A('a'), true)
  expectEquals(new A('a'), new A('b'), false)
  // Different prototypes
  expectEquals({}, Object.create(null), true)
  expectEquals(new (class {})(), new (class {})(), true)
})

it('maps', () => {
  // Equal maps
  expectEquals(new Map(), new Map(), true)
  expectEquals(
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
  expectEquals(
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
  expectEquals(
    new Map([['a', 1]]),
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    false
  )
  expectEquals(
    new Map([
      ['a', 1],
      ['b', 2],
    ]),
    new Map([['a', 1]]),
    false
  )
  // Equal object keys with different identity
  expectEquals(new Map([[{}, 1]]), new Map([[{}, 1]]), false)
  // Differing values
  expectEquals(new Map([['a', 1]]), new Map([['a', 2]]), false)
  expectEquals(new Map([['a', 2]]), new Map([['a', 1]]), false)
  // Undefined value on different keys
  expectEquals(new Map([['a', undefined]]), new Map([['b', undefined]]), false)
  // Nested maps
  expectEquals(
    new Map([['x', new Map([['x', 1]])]]),
    new Map([['x', new Map([['x', 1]])]]),
    true
  )
})

it('sets', () => {
  // Equal sets
  expectEquals(new Set(), new Set(), true)
  expectEquals(new Set([1, 2, 3]), new Set([1, 2, 3]), true)
  // Different order
  expectEquals(new Set([1, 2, 3]), new Set([3, 2, 1]), true)
  // Differing lengths
  expectEquals(new Set([1, 2]), new Set([1, 2, 3]), false)
  expectEquals(new Set([1, 2, 3]), new Set([1, 2]), false)
  // Differing values
  expectEquals(new Set([1, 2, 3]), new Set([1, 2, 4]), false)
  expectEquals(new Set([1, 2, 4]), new Set([1, 2, 3]), false)
})

it('errors', () => {
  // Same name, same message
  expectEquals(new Error('msg'), new Error('msg'), true)
  // Different message
  expectEquals(new Error('msg'), new Error('other msg'), false)
  // Different name
  expectEquals(new Error('msg'), new TypeError('msg'), false)
})

it('wrapped primitive objects', () => {
  expectEquals(new Number(0), new Number(0), true)
  expectEquals(new Number(0), new Number(-1), false)

  expectEquals(new Boolean(true), new Boolean(true), true)
  expectEquals(new Boolean(true), new Boolean(false), false)

  expectEquals(new String('a'), new String('a'), true)
  expectEquals(new String('a'), new String('b'), false)
})

it('weak references', () => {
  expectEquals(new WeakMap(), new WeakMap(), false)
  expectEquals(new WeakSet(), new WeakSet(), false)
})

describe('cycles', () => {
  it('equal cyclic objects', () => {
    const obj1 = { x: {} }
    obj1.x.y = obj1

    const obj2 = { x: {} }
    obj2.x.y = obj2

    expectEquals(obj1, obj2, true)
  })

  it('obj1 is cyclic, obj2 is otherwise equal but refers to obj1', () => {
    const obj1 = {}
    obj1.x = obj1

    const obj2 = { x: obj1 }

    expectEquals(obj1, obj2, true)
  })

  it('different kinds of cyclic objects', () => {
    const obj1 = { x: {} }
    obj1.x.y = obj1

    const obj2 = { x: {} }
    obj2.x.y = obj2.x

    expectEquals(obj1, obj2, false)
  })

  it('two maps that refer to each other', () => {
    const map1 = new Map()
    const map2 = new Map()

    map1.set('x', map2)
    map2.set('x', map1)

    expectEquals(map1, map2, true)
  })

  it('equal cyclic maps', () => {
    const map1 = new Map()
    map1.set('x', map1)

    const map2 = new Map()
    map2.set('x', map2)

    expectEquals(map1, map2, true)
  })

  it('equal cyclic arrays', () => {
    const array1 = []
    array1[0] = array1

    const array2 = []
    array2[0] = array2

    expectEquals(array1, array2, true)
  })

  it('two arrays that refer to each other', () => {
    const array1 = []
    const array2 = []
    array1[0] = array2
    array2[0] = array1

    expectEquals(array1, array2, true)
  })

  it('different kinds of cyclic arrays', () => {
    const array1 = [[]]
    array1[0][0] = array1

    const array2 = [[]]
    array1[0][0] = array1[0]

    expectEquals(array1, array2, false)
  })

  it('array1 is cyclic, array2 otherwise equal but refers to obj1', () => {
    const array1 = []
    array1[0] = array1

    const array2 = [array1]

    expectEquals(array1, array2, true)
  })
})
