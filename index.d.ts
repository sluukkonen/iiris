// Function type aliases

/** An empty tuple. */
type I = []
/** A tuple with 1 element. */
type Tuple1 = [unknown]
/** A tuple with 2 elements. */
type Tuple2 = [unknown, unknown]
/** A tuple with 3 elements. */
type Tuple3 = [unknown, unknown, unknown]
/** A tuple with 4 elements. */
type Tuple4 = [unknown, unknown, unknown, unknown]

/** A function that takes no arguments. */
type Function0<R> = () => R
/** A function that takes one argument. */
type Function1<T, R> = (value: T) => R
/** A function that takes two arguments. */
type Function2<T1, T2, R> = (a1: T1, a2: T2) => R

/** A function that takes zero or more arguments. */
type VariadicFunction0<R> = (...args: unknown[]) => R
/** A function that takes one or more arguments. */
type VariadicFunction1<T, R> = (a1: T, ...args: unknown[]) => R
/** A function that takes two or more arguments. */
type VariadicFunction2<T1, T2, R> = (a1: T1, a2: T2, ...args: unknown[]) => R

/** Drop the first element of a tuple. */
type Drop1<T extends unknown[]> = T extends [unknown, ...infer U] ? U : never
/** Drop the first two elements of a tuple. */
type Drop2<T extends unknown[]> = T extends [unknown, unknown, ...infer U]
  ? U
  : never
/** Drop the first three elements of a tuple. */
type Drop3<T extends unknown[]> = T extends [
  unknown,
  unknown,
  unknown,
  ...infer U
]
  ? U
  : never

/** Drop the last element from a tuple. */
type DropLast1<T extends unknown[]> = T extends [...infer U, unknown]
  ? U
  : never
/** Drop the last two elements of a tuple. */
type DropLast2<T extends unknown[]> = T extends [...infer U, unknown, unknown]
  ? U
  : never
/** Drop the last three elements of a tuple. */
type DropLast3<T extends unknown[]> = T extends [
  ...infer U,
  unknown,
  unknown,
  unknown
]
  ? U
  : never

/** A curried function of two arguments. */
type CurriedFunction2<T extends Tuple2, R> = {
  (...args: T): R
  (...args: DropLast1<T>): (...args: Drop1<T>) => R
}

/** A curried function of three arguments. */
type CurriedFunction3<T extends Tuple3, R> = {
  (...args: T): R
  (...args: DropLast1<T>): (...args: Drop2<T>) => R
  (...args: DropLast2<T>): CurriedFunction2<Drop1<T>, R>
}

/** A curried function of four arguments. */
type CurriedFunction4<T extends Tuple4, R> = {
  (...args: T): R
  (...args: DropLast1<T>): (...args: Drop3<T>) => R
  (...args: DropLast2<T>): CurriedFunction2<Drop2<T>, R>
  (...args: DropLast3<T>): CurriedFunction3<Drop1<T>, R>
}

/** A data type that can be compared with the `<` and `>` operators. */
type Ordered = number | bigint | string | Date | boolean

/** A helper type that widens primitive literal types. */
type Widen<T> = T extends number
  ? number
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : T extends boolean
  ? boolean
  : T

// Internal helper types

/** Remove `undefined` from `T` */
type Defined<T> = T extends undefined ? never : T

/** An object that has a property `K` of type `V`. */
type HasKey<K extends string, V = unknown> = { [P in K]?: V } & object

// Ah shit, here we go again…

/**
 * Add two numbers together.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.add(1), [1, 2, 3])
 * // => [2, 3, 4]
 * ```
 */
export function add(n: number): (m: number) => number
export function add(n: number, m: number): number

/**
 * Append a new element to the end of an array.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.append(4, [1, 2, 3])
 * // => [1, 2, 3, 4]
 * ```
 *
 * @see prepend
 * @see concat
 */
export function append<T>(value: T): (array: readonly T[]) => T[]
export function append<T>(value: T, array: readonly T[]): T[]

/**
 * Given a `fn` that maps a `value` to an {@link Ordered} value, create an
 * ascending comparator function.
 *
 * **Note:** This function is not curried.
 *
 * @category Sorting arrays
 * @example
 *
 * ```typescript
 * I.sort(I.ascend(I.prop('age')), [{ name: 'Bob' }, { name: 'Alice' }])
 * // => [{ name: 'Alice' }, { name: 'Bob' }]
 * ```
 *
 * @see descend
 * @see sort
 * @see sortWith
 */
export function ascend<T>(
  fn: (value: T) => Ordered
): (first: T, second: T) => number

/**
 * Retrieves the element at `index` from `array` or `undefined`.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.at(0, [1, 2, 3])
 * // => 1
 *
 * I.at(0, [])
 * // => undefined
 * ```
 *
 * @see atOr
 * @see prop
 */
export function at(index: number): <T>(array: readonly T[]) => T | undefined
export function at<T>(index: number, array: readonly T[]): T | undefined

/**
 * Like {@link at}, but if the resolved value is `undefined`, `defaultValue` is
 * returned instead.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.atOr(999, 0, [1, 2, 3])
 * // => 1
 *
 * I.atOr(999, 0, [])
 * // => 999
 *
 * I.atOr(999, 0, [undefined])
 * // => 999
 * ```
 *
 * @see at
 * @see propOr
 */
export function atOr<T>(
  defaultValue: T
): {
  (index: number): (array: readonly T[]) => T
  (index: number, array: readonly T[]): T
}
export function atOr<T>(
  defaultValue: T,
  index: number
): (array: readonly T[]) => T
export function atOr<T>(defaultValue: T, index: number, array: readonly T[]): T

/**
 * Create a version of `fn` that accepts two arguments.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * const fn = (...args) => args
 * const wrapped = I.binary(fn)
 *
 * fn(1, 2, 3)
 * // => [1, 2, 3]
 *
 * wrapped(1, 2, 3)
 * // => [1, 2]
 * ```
 *
 * @see unary
 */
export function binary<T1, T2, R>(
  fn: VariadicFunction2<T1, T2, R>
): Function2<T1, T2, R>

/**
 * Convert the first code point of `string` to uppercase and the rest to
 * lowercase.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.capitalize('aBc')
 * // => 'Abc'
 * ```
 *
 * @see toLowerCase
 * @see toUpperCase
 */
export function capitalize(string: string): string

/**
 * Clamp a number within the closed interval `[lower, upper]`.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.clamp([0, 10], 5)
 * // => 5
 *
 * I.clamp([0, 10], 15)
 * // => 10
 *
 * I.clamp([0, 10], -5)
 * // => 0
 * ```
 */
export function clamp<T extends Ordered>(
  interval: [lower: T, upper: T]
): (value: Widen<T>) => Widen<T>
export function clamp<T extends Ordered>(
  interval: [lower: T, upper: T],
  value: T
): Widen<T>

/**
 * Create a version of a predicate `fn` that flips the returned boolean value.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * const isZero = (v) => v === 0
 * const notZero = I.complement(isZero)
 *
 * notZero(0)
 * // => false
 *
 * notZero(1)
 * // => true
 * ```
 *
 */
export function complement<T extends VariadicFunction0<boolean>>(fn: T): T

/**
 * Right-to-left function composition.
 *
 * **Note:** This function is not curried.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * const composed = I.compose(I.add(10), I.multiply(2))
 *
 * composed(2)
 * // => 14
 * ```
 */
export function compose<T extends unknown[], R>(
  fn: (...args: T) => R
): (...args: T) => R
export function compose<T extends unknown[], T1, R>(
  fn1: Function1<T1, R>,
  fn2: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, R>(
  fn1: Function1<T2, R>,
  fn2: Function1<T1, T2>,
  fn3: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, R>(
  fn1: Function1<T3, R>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T1, T2>,
  fn4: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, T4, R>(
  fn1: Function1<T4, R>,
  fn2: Function1<T3, T4>,
  fn3: Function1<T2, T3>,
  fn4: Function1<T1, T2>,
  fn5: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, T4, T5, R>(
  fn1: Function1<T5, R>,
  fn2: Function1<T4, T5>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T2, T3>,
  fn5: Function1<T1, T2>,
  fn6: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, T4, T5, T6, R>(
  fn1: Function1<T6, R>,
  fn2: Function1<T5, T6>,
  fn3: Function1<T4, T5>,
  fn4: Function1<T3, T4>,
  fn5: Function1<T2, T3>,
  fn6: Function1<T1, T2>,
  fn7: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, T4, T5, T6, T7, R>(
  fn1: Function1<T7, R>,
  fn2: Function1<T6, T7>,
  fn3: Function1<T5, T6>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T3, T4>,
  fn6: Function1<T2, T3>,
  fn7: Function1<T1, T2>,
  fn8: (...args: T) => T1
): (...args: T) => R
export function compose<T extends unknown[], T1, T2, T3, T4, T5, T6, T7, T8, R>(
  fn1: Function1<T8, R>,
  fn2: Function1<T7, T8>,
  fn3: Function1<T6, T7>,
  fn4: Function1<T5, T6>,
  fn5: Function1<T4, T5>,
  fn6: Function1<T3, T4>,
  fn7: Function1<T2, T3>,
  fn8: Function1<T1, T2>,
  fn9: (...args: T) => T1
): (...args: T) => R
export function compose<
  T extends unknown[],
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  R
>(
  fn1: Function1<T9, R>,
  fn2: Function1<T8, T9>,
  fn3: Function1<T7, T8>,
  fn4: Function1<T6, T7>,
  fn5: Function1<T5, T6>,
  fn6: Function1<T4, T5>,
  fn7: Function1<T3, T4>,
  fn8: Function1<T2, T3>,
  fn9: Function1<T1, T2>,
  fn10: (...args: T) => T1
): (...args: T) => R

/**
 * Concatenate two arrays together.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.concat([1, 2, 3], [4, 5, 6])
 * // => [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @see append
 * @see prepend
 */
export function concat<T>(array: readonly T[]): (other: readonly T[]) => T[]
export function concat<T>(array: readonly T[], other: readonly T[]): T[]

/**
 * Create a function that always returns `value`.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.map(I.constant(1), [1, 2, 3])
 * // => [1, 1, 1]
 * ```
 */
export function constant<T>(value: T): () => T

/**
 * Count the number of elements in the `array` the satisfy the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.count((n) => n > 1, [1, 2, 3])
 * // => 2
 * ```
 *
 * @see filter
 */
export function count<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => number
export function count<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): number

/**
 * Apply `keyFn` to each element in the `array` and return an object of counts
 * by key.
 *
 * @category Grouping arrays by key
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice' },
 *   { name: 'Bob' },
 *   { name: 'Alice' }
 * ]
 *
 * I.countBy(I.prop('name'), users)
 * // => { Alice: 2, Bob: 1 }
 * ```
 *
 * @see groupBy
 */
export function countBy<T, K extends string>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, number>
export function countBy<T, K extends string>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, number>

/**
 * Create a curried version of a `fn` taking two arguments.
 *
 * @category Function
 * @example
 *
 * ```typescript
 *  const add = I.curry2((a, b) => a + b)
 *
 *  add(1)(2)
 *  // => 3
 *
 *  add(1, 2)
 *  // => 3
 * ```
 *
 * @see curry3
 * @see curry4
 */
export function curry2<T extends Tuple2, R>(
  fn: (...args: T) => R
): CurriedFunction2<T, R>

/**
 * Create a curried version of a `fn` taking three arguments.
 *
 * @category Function
 * @example
 *
 * ```typescript
 *  const add = I.curry3((a, b, c) => a + b + c)
 *
 *  add(1)(2)(3)
 *  // => 6
 *
 *  add(1, 2, 3)
 *  // => 6
 * ```
 *
 * @see curry2
 * @see curry4
 */
export function curry3<T extends Tuple3, R>(
  fn: (...args: T) => R
): CurriedFunction3<T, R>

/**
 * Create a curried version of a `fn` taking four arguments.
 *
 * @category Function
 * @example
 *
 * ```typescript
 *  const add = I.curry4((a, b, c, d) => a + b + c + d)
 *
 *  add(1)(2)(3)(4)
 *  // => 10
 *
 *  add(1, 2, 3, 4)
 *  // => 10
 * ```
 *
 * @see curry2
 * @see curry3
 */
export function curry4<T extends Tuple4, R>(
  fn: (...args: T) => R
): CurriedFunction4<T, R>

/**
 * Decrement a number by 1.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.dec, [1, 2, 3])
 * // => [0, 1, 2]
 * ```
 *
 * @see inc
 */
export function dec(n: number): number

/**
 * Given a `fn` that maps a `value` to an {@link Ordered} value, create a
 * descending comparator function.
 *
 * **Note:** This function is not curried.
 *
 * @category Sorting arrays
 * @example
 *
 * ```typescript
 * I.sort(I.descend(I.prop('name')), [{ name: 'Alice' }, { name: 'Bob' }])
 * // => [{ name: 'Bob' }, { name: 'Alice' }]
 * ```
 *
 * @see ascend
 * @see sort
 * @see sortWith
 */
export function descend<T>(
  fn: (value: T) => Ordered
): (first: T, second: T) => number

/**
 * Calculate the [set
 * difference](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
 * between the `first` array and the `second` array, using {@link equals} for
 * determining equality.
 *
 * Will not remove duplicates from the `first` array.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * I.difference([1, 2, 3], [2, 3, 4])
 * // => [1]
 * ```
 *
 * @see differenceWith
 * @see union
 * @see intersection
 */
export function difference<T>(first: readonly T[], second: readonly T[]): T[]
export function difference<T>(
  first: readonly T[]
): (second: readonly T[]) => T[]

/**
 * Like {@link difference}, but using a custom equality function.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 * ]
 * const otherUsers = [
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 *   { id: 4, name: 'Dan' }
 * ]
 *
 * I.differenceWith((a, b) => a.id === b.id, users, otherUsers)
 * // => [ { id: 1, name: 'Alice' } ]
 * ```
 *
 * @see difference
 * @see unionWith
 * @see intersectionWith
 */
export function differenceWith<T>(
  equals: (value: T, other: T) => boolean
): {
  (array: readonly T[]): (other: readonly T[]) => T[]
  (array: readonly T[], other: readonly T[]): T[]
}
export function differenceWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[]
): (other: readonly T[]) => T[]
export function differenceWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[],
  other: readonly T[]
): T[]

/**
 * Divide `dividend` by the `divisor`.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.divideBy(2), [1, 2, 3])
 * // => [0.5, 1, 1.5]
 * ```
 */
export function divideBy(divisor: number): (dividend: number) => number
export function divideBy(divisor: number, dividend: number): number

/**
 * Drop the first `n` elements of an `array`.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.drop(1, [1, 2, 3])
 * // => [2, 3]
 *
 * I.drop(2, [1, 2, 3])
 * // => [3]
 * ```
 *
 * @see dropLast
 * @see take
 */
export function drop(n: number): <T>(array: readonly T[]) => T[]
export function drop<T>(n: number, array: readonly T[]): T[]

/**
 * Drop the last `n` elements of an `array`.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.dropLast(1, [1, 2, 3])
 * // => [1, 2]
 *
 * I.dropLast(2, [1, 2, 3])
 * // => [1]
 * ```
 *
 * @see drop
 * @see takeLast
 */
export function dropLast(n: number): <T>(array: readonly T[]) => T[]
export function dropLast<T>(n: number, array: readonly T[]): T[]

/**
 * Drop elements from the end of an `array` while `predicate` is satisfied.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.dropLastWhile((n) => n > 1, [1, 2, 3])
 * // => [1]
 * ```
 *
 * @see dropWhile
 * @see takeLastWhile
 */
export function dropLastWhile<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T[]
export function dropLastWhile<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Drop elements from the beginning of an `array` while `predicate` is
 * satisfied.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.dropWhile((n) => n === 1, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see dropLastWhile
 * @see takeWhile
 */
export function dropWhile<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T[]
export function dropWhile<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Return an array of the own enumerable property key-value pairs of `object`
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.entries({ a: 1, b: 2, c: 3 })
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see fromEntries
 * @see keys
 * @see values
 */
export function entries<T extends object, K extends keyof T & string>(
  object: T
): Array<[K, T[K]]>

/**
 * Check if two values are deeply equal.
 *
 * - Primitive values are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
 * - Only the own enumerable keys of objects are considered.
 * - The order of object keys does not matter.
 * - Built-in objects (e.g. Arrays, Maps & Sets) are not checked for extra keys.
 * - Sets and Map keys are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
 * - Error objects are equal if their `name` and `message` properties are equal.
 * - Functions are compared with `===`.
 * - Supports cyclic references.
 * - Does not support WeakMaps, WeakSets or typed arrays.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.equals([1, 2, 3], [1, 2, 3])
 * // => true
 *
 * I.equals([1, 2, 3], [4, 5, 6])
 * // => false
 * ```
 */
export function equals<T>(value: T): (other: T) => boolean
export function equals<T>(value: T, other: T): boolean

/**
 * Like {@link equals}, but the function `fn` is applied to both values before
 * determining equality.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.equalsBy(Math.floor, 1, 1.5)
 * // => true
 * ```
 *
 * @see equals
 */
export function equalsBy<T, U>(
  fn: Function1<T, U>
): {
  (value: T): (other: T) => boolean
  (value: T, other: T): boolean
}
export function equalsBy<T, U>(
  fn: Function1<T, U>,
  value: T
): (other: T) => boolean
export function equalsBy<T, U>(fn: Function1<T, U>, value: T, other: T): boolean

/**
 * Check if every element in the `array` satisfies the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.every((n) => n < 10, [1, 2, 3])
 * // => true
 *
 * I.every((n) => n < 3, [1, 2, 3])
 * // => false
 * ```
 *
 * @see none
 * @see some
 */
export function every<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => boolean
export function every<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): boolean

/**
 * Find the first element in the `array` that satisfies the `guard`.
 *
 * Returns `undefined` if none of the elements match.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.find((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'b'
 *
 * I.find((c) => c === 'x', ['a', 'b', 'c'])
 * // => undefined
 * ```
 *
 * @see findLast
 * @see findIndex
 */
export function find<T, U extends T>(
  guard: (value: T) => value is U
): (array: readonly T[]) => U | undefined
export function find<T, U extends T>(
  guard: (value: T) => value is U,
  array: readonly T[]
): U | undefined

/**
 * Find the first element in the `array` that satisfies the `predicate`.
 *
 * Returns `undefined` if none of the elements match.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.find((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'b'
 *
 * I.find((c) => c === 'x', ['a', 'b', 'c'])
 * // => undefined
 * ```
 *
 * @see findLast
 * @see findIndex
 */
export function find<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T | undefined
export function find<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T | undefined

/**
 * Find the index of the first element in the `array` that satisfies the
 * `predicate`.
 *
 * Returns `-1` if none of the elements satisfy the predicate.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.findIndex((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 1
 *
 * I.findIndex((c) => c === 'x', ['a', 'b', 'c'])
 * // => -1
 * ```
 *
 * @see findLastIndex
 * @see find
 */
export function findIndex<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => number
export function findIndex<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): number

/**
 * Find the last element in the `array` that satisfies the `guard`.
 *
 * Returns `undefined` if none of the elements match.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.findLast((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'c'
 *
 * I.findLast((c) => c === 'x', ['a', 'b', 'c'])
 * // => undefined
 * ```
 *
 * @see find
 * @see findLastIndex
 */
export function findLast<T, U extends T>(
  guard: (value: T) => value is U
): (array: readonly T[]) => U | undefined
export function findLast<T, U extends T>(
  guard: (value: T) => value is U,
  array: readonly T[]
): U | undefined

/**
 * Find the last element in the `array` that satisfies the `predicate`.
 *
 * Returns `undefined` if none of the elements match.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.findLast((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'c'
 *
 * I.findLast((c) => c === 'x', ['a', 'b', 'c'])
 * // => undefined
 * ```
 *
 * @see find
 * @see findLastIndex
 */
export function findLast<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T | undefined
export function findLast<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T | undefined

/**
 * Find the index of the last element in the `array` that satisfies the
 * `predicate`.
 *
 * Returns `-1` if none of the elements match.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.findLastIndex((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 2
 *
 * I.findLastIndex((c) => c === 'x', ['a', 'b', 'c'])
 * // => -1
 * ```
 *
 * @see findIndex
 * @see findLast
 */
export function findLastIndex<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => number
export function findLastIndex<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): number

/**
 * Return the elements of the `array` that satisfy the `guard`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.filter((n) => n > 1, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see filterWithIndex
 * @see count
 * @see partition
 */
export function filter<T, U extends T>(
  guard: (value: T) => value is U
): (array: readonly T[]) => U[]
export function filter<T, U extends T>(
  guard: (value: T) => value is U,
  array: readonly T[]
): U[]

/**
 * Return the elements of the `array` that satisfy the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.filter((n) => n > 1, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see filterWithIndex
 * @see count
 * @see partition
 */
export function filter<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T[]
export function filter<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Like {@link filter}, but `predicate` also receives the element index as the
 * first argument.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.filterWithIndex((i, n) => i + n === 3, [1, 2, 3])
 * // => [2]
 * ```
 *
 * @see filter
 */
export function filterWithIndex<T>(
  predicate: (index: number, value: T) => boolean
): (array: readonly T[]) => T[]
export function filterWithIndex<T>(
  predicate: (index: number, value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array` and then flattening the result by one level.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.flatMap((n) => [n, n], [1, 2, 3])
 * // => [1, 1, 2, 2, 3, 3]
 * ```
 *
 * @see map
 * @see flatten
 */
export function flatMap<T, U>(
  fn: (value: T) => U[]
): (array: readonly T[]) => U[]
export function flatMap<T, U>(fn: (value: T) => U[], array: readonly T[]): U[]

/**
 * Flatten a nested `array` by `n` levels.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.flatten(1, [1, [2, [3]]])
 * // => [1, 2, [3]]
 *
 * I.flatten(2, [1, [2, [3]]])
 * // => [1, 2, 3]
 * ```
 *
 * @see flatMap
 */
export function flatten<D extends number>(
  depth: D
): <T extends readonly unknown[]>(array: T) => FlatArray<T, D>[]
export function flatten<T extends readonly unknown[], D extends number>(
  depth: D,
  array: T
): FlatArray<T, D>[]

/**
 * Flip the arguments of a binary function.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * const fn = (...args) => args
 * const flipped = I.flip(fn)
 *
 * flipped(1, 2)
 * // => [2, 1]
 * ```
 */
export function flip<T, U, R>(fn: Function2<T, U, R>): Function2<U, T, R>

/**
 * Apply `fn` to each element of the `array` and return the `array`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.forEach(console.log, ['h', 'i', '!'])
 * h
 * i
 * !
 * // => ['h', 'i', '!']
 * ```
 *
 * @see forEachWithIndex
 */
export function forEach<T>(fn: (value: T) => void): (array: readonly T[]) => T[]
export function forEach<T>(fn: (value: T) => void, array: readonly T[]): T[]

/**
 * Like {@link forEach}, but `fn` also receives the element index as the first
 * argument.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.forEachWithIndex(console.log, ['h', 'i', '!'])
 * 0 h
 * 1 i
 * 2 !
 * // => ['h', 'i', '!']
 * ```
 *
 * @see forEach
 */
export function forEachWithIndex<T>(
  fn: (index: number, value: T) => void
): (array: readonly T[]) => T[]
export function forEachWithIndex<T>(
  fn: (index: number, value: T) => void,
  array: readonly T[]
): T[]

/**
 * Create an object from an array of `[key, value]` pairs.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.fromEntries([['a', 1], ['b', 2], ['c', 3]])
 * // => { a: 1, b: 2, c: 3 }
 * ```
 *
 * @see entries
 */
export function fromEntries<K extends string, T>(
  entries: [K, T][]
): Record<K, T>

/**
 * Partition the `array` into an object of arrays according to `keyFn`.
 *
 * @category Grouping arrays by key
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice' },
 *   { name: 'Bob' },
 *   { name: 'Alice' },
 * ]

 * I.groupBy(I.prop('name'), users)
 * // => { Alice: [{ name: 'Alice' }, { name: 'Alice' }], Bob: [{ name: 'Bob' }] }
 * ```
 *
 * @see indexBy
 * @see countBy
 * @see groupMap
 * @see groupMapReduce
 */
export function groupBy<T, K extends string>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, T[]>
export function groupBy<T, K extends string>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, T[]>

/**
 * Like {@link groupBy}, but also apply `mapFn` to each element before adding
 * it to the corresponding array.
 *
 * @category Grouping arrays by key
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 30 }
 * ]
 * const agesByName = I.groupMap(I.prop('age'), I.prop('name'), users)
 * // => { Alice: [10, 30], Bob: [20] }
 * ```
 *
 * @see groupBy
 * @see groupMapReduce
 */
export function groupMap<T, U>(
  mapFn: (value: T) => U
): {
  <K extends string>(keyFn: (value: T) => K): (
    array: readonly T[]
  ) => Record<K, U[]>
  <K extends string>(keyFn: (value: T) => K, array: readonly T[]): Record<
    K,
    U[]
  >
}
export function groupMap<T, U, K extends string>(
  mapFn: (value: T) => U,
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, U[]>
export function groupMap<T, U, K extends string>(
  mapFn: (value: T) => U,
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, U[]>

/**
 * Like {@link groupMap}, but instead of returning an object of arrays, combine
 * elements mapping to the same key with `reducer`.
 *
 * @category Grouping arrays by key
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 30 }
 * ]
 * const sumOfAgesByName = I.groupMapReduce(I.add, I.prop('age'), I.prop('name'), users)
 * // => { Alice: 40, Bob: 20 }
 * ```
 *
 * @see groupBy
 * @see groupMap
 */
export function groupMapReduce<U>(
  reducer: (accumulator: U, value: U) => U
): {
  <T>(mapFn: (value: T) => U): {
    <K extends string>(keyFn: (value: T) => K): (
      array: readonly T[]
    ) => Record<K, U>
    <K extends string>(keyFn: (value: T) => K, array: readonly T[]): Record<
      K,
      U
    >
  }
  <T, K extends string>(mapFn: (value: T) => U, keyFn: (value: T) => K): (
    array: readonly T[]
  ) => Record<K, U>
  <T, K extends string>(
    mapFn: (value: T) => U,
    keyFn: (value: T) => K,
    array: readonly T[]
  ): Record<K, U>
}
export function groupMapReduce<U, T>(
  reducer: (accumulator: U, value: U) => U,
  mapFn: (value: T) => U
): {
  <K extends string>(keyFn: (value: T) => K): (
    array: readonly T[]
  ) => Record<K, U>
  <K extends string>(keyFn: (value: T) => K, array: readonly T[]): Record<K, U>
}
export function groupMapReduce<U, T, K extends string>(
  reducer: (accumulator: U, value: U) => U,
  mapFn: (value: T) => U,
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, U>
export function groupMapReduce<U, T, K extends string>(
  reducer: (accumulator: U, value: U) => U,
  mapFn: (value: T) => U,
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, U>

/**
 * Check if the `second` argument is greater than the `first`.
 *
 * Designed to be used as a curried predicate.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.filter(I.gt(2), [1, 2, 3])
 * // => [3]
 * ```
 */
export function gt<T extends Ordered>(first: T): (second: Widen<T>) => boolean
export function gt<T extends Ordered>(first: T, second: T): boolean

/**
 * Check if the `second` argument is greater than or equal to the `first`.
 *
 * Designed to be used as a curried predicate.
 *
 * @category Relation
 * @example
 * ```typescript
 * I.filter(I.gte(2), [1, 2, 3])
 * // => [2, 3]
 * ```
 */
export function gte<T extends Ordered>(first: T): (second: Widen<T>) => boolean
export function gte<T extends Ordered>(first: T, second: T): boolean

/**
 * Check if `key` is an own property of `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.has('a', { a: 1 })
 * // => true
 *
 * I.has('toString', { a: 1 })
 * // => false
 * ```
 */
export function has<K extends string>(
  key: K
): (object: unknown) => object is Record<K, unknown>
export function has<K extends string>(
  key: K,
  object: unknown
): object is Record<K, unknown>

/**
 * Return the first element of the `array` or `undefined`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.head([1, 2, 3])
 * // => 1
 *
 * I.head([])
 * // => undefined
 * ```
 *
 * @see tail
 * @see init
 * @see last
 */
export function head<T>(array: readonly T[]): T | undefined

/**
 * Identity function. Returns the first argument.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.identity(5)
 * // => 5
 * ```
 */
export function identity<T>(value: T): T

/**
 * Increment a number by 1.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.inc, [1, 2, 3])
 * // => [2, 3, 4]
 * ```
 */
export function inc(n: number): number

/**
 * Check if the `array` includes the specified `value`, using {@link equals} for
 * determining equality.
 *
 * @category Searching arrays by value
 * @example
 *
 * ```typescript
 * I.includes(1, [1, 2, 3])
 * // => true
 *
 * I.includes(0, [1, 2, 3])
 * // => false
 * ```
 */
export function includes<T>(value: T): (array: readonly T[]) => boolean
export function includes<T>(value: T, array: readonly T[]): boolean

/**
 * Apply `keyFn` to each element in the `array` and return an object of
 * elements indexed by each key.
 *
 * If multiple elements map to the same key, the last one is selected.
 *
 * @category Grouping arrays by key
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Carol' }
 * ]
 * I.indexBy(I.prop('id'), users)
 * // => { '1': { id: 1, name: 'Carol' }, '2': { id: 2, name: 'Bob' } }
 * ```
 *
 * @see groupBy
 */
export function indexBy<T, K extends string>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, T>
export function indexBy<T, K extends string>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, T>

/**
 * Return the index of the first element equaling `value`, using {@link equals}
 * for determining equality. Returns `-1` if no match can be found.
 *
 * @category Searching arrays by value
 * @example
 *
 * ```typescript
 * I.indexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => 1
 *
 * I.indexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => -1
 * ```
 *
 * @see lastIndexOf
 * @see includes
 */
export function indexOf<T>(value: T): (array: readonly T[]) => number
export function indexOf<T>(value: T, array: readonly T[]): number

/**
 * Return all elements of the `array` except the last.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.init([1, 2, 3])
 * // => [1, 2]
 *
 * I.init([])
 * // => []
 * ```
 *
 * @see last
 * @see head
 * @see tail
 */
export function init<T>(array: readonly T[]): T[]

/**
 * Calculate the [set
 * intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory))
 * between the `first` array and the `second` array, using {@link equals} for
 * determining equality.
 *
 * Will not remove duplicates from the first array.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * I.intersection([1, 2, 3], [2, 3, 4])
 * // => [2, 3]
 * ```
 *
 * @see intersectionWith
 * @see union
 * @see difference
 */
export function intersection<T>(
  first: readonly T[]
): (second: readonly T[]) => T[]
export function intersection<T>(first: readonly T[], second: readonly T[]): T[]

/**
 * Like {@link intersection}, but using a custom equality function.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 * ]
 * const otherUsers = [
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 *   { id: 4, name: 'Dan' }
 * ]
 *
 * I.intersectionWith((a, b) => a.id === b.id, users, otherUsers)
 * // => [ { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' } ]
 * ```
 *
 * @see intersection
 * @see unionWith
 * @see differenceWith
 */
export function intersectionWith<T>(
  equals: (value: T, other: T) => boolean
): {
  (array: readonly T[]): (other: readonly T[]) => T[]
  (array: readonly T[], other: readonly T[]): T[]
}
export function intersectionWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[]
): (other: readonly T[]) => T[]
export function intersectionWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[],
  other: readonly T[]
): T[]

/**
 * Return a copy of `array` with `separator` inserted between each element.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.intersperse(',', ['a', 'b', 'c'])
 * // => ['a', ',', 'b', ',', 'c']
 *
 * I.intersperse(',', [])
 * // => []
 * ```
 *
 * @see join
 */
export function intersperse<T>(separator: T): (array: readonly T[]) => T[]
export function intersperse<T>(separator: T, array: readonly T[]): T[]

/**
 * Check if the `value` is an
 * [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
 *
 * @category Type tests
 */
export function isArray<T>(
  value: T | readonly unknown[]
): value is readonly unknown[]

/**
 * Check if the `value` is a
 * [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
 *
 * @category Type tests
 */
export function isBigInt<T>(value: T | bigint): value is bigint

/**
 * Check if the `value` is a
 * [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/boolean).
 *
 * @category Type tests
 */
export function isBoolean<T>(value: T | boolean): value is boolean

/**
 * Check if the `value` is a
 * [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
 *
 * @category Type tests
 */
export function isDate<T>(value: T | Date): value is Date

/**
 * Check if the `value` is not
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 *
 * @category Type tests
 */
export function isDefined<T>(value: T | undefined): value is T

/**
 * Check if the `value` is an
 * [`Error`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error).
 *
 * @category Type tests
 */
export function isError<T>(value: T | Error): value is Error

/**
 * Check if the `value` is a
 * [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).
 *
 * @category Type tests
 */
export function isFunction<T>(value: T | Function): value is Function // eslint-disable-line @typescript-eslint/ban-types

/**
 * Check if the `value` is
 * [`null`](https://developer.mozilla.org/en-US/docs/Glossary/null) or
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 *
 * @category Type tests
 */
export function isNil<T>(value: T | null | undefined): value is null | undefined

/**
 * Check if the `value` is
 * [`null`](https://developer.mozilla.org/en-US/docs/Glossary/null).
 *
 * @category Type tests
 */
export function isNull<T>(value: T | null): value is null

/**
 * Check if the `value` is a
 * [`number`](https://developer.mozilla.org/en-US/docs/Glossary/number).
 *
 * @category Type tests
 */
export function isNumber<T>(value: T | number): value is number

/**
 * Check if the `value` is a
 * [`Map`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map).
 *
 * @category Type tests
 */
export function isMap<T>(
  value: T | Map<unknown, unknown>
): value is Map<unknown, unknown>

/**
 * Check if the `value` is an
 * [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).
 *
 * Note that functions and arrays are also objects.
 *
 * @category Type tests
 */
export function isObject<T>(value: T | object): value is object

/**
 * Check if the `value` is a
 * [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
 *
 * @category Type tests
 */
export function isRegExp<T>(value: T | RegExp): value is RegExp

/**
 * Check if the `value` is a
 * [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
 *
 * @category Type tests
 */
export function isSet<T>(value: T | Set<unknown>): value is Set<unknown>

/**
 * Check if the `value` is a
 * [`string`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String).
 *
 * @category Type tests
 */
export function isString<T>(value: T | string): value is string

/**
 * Check if the `value` is a
 * [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
 *
 * @category Type tests
 */
export function isSymbol<T>(value: T | symbol): value is symbol

/**
 * Check if the `value` is
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 *
 * @category Type tests
 */
export function isUndefined<T>(value: T | undefined): value is undefined

/**
 * Convert the `array` to a string, inserting the `separator` between each
 * element.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.join(', ', [1, 2, 3])
 * // => '1, 2, 3'
 * ```
 *
 * @see split
 * @see intersperse
 */
export function join(separator: string): <T>(array: readonly T[]) => string
export function join<T>(separator: string, array: readonly T[]): string

/**
 * Return the last element of the `array` or `undefined`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.last([1, 2, 3])
 * // => 3
 *
 * I.last([])
 * // => undefined
 * ```
 *
 * @see init
 * @see head
 * @see tail
 */
export function last<T>(array: readonly T[]): T | undefined

/**
 * Return the index of the last element equaling `value`, using {@link equals}
 * for determining equality. Returns `-1` if no match can be found.
 *
 * @category Searching arrays by value
 * @example
 *
 * ```typescript
 * I.lastIndexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => 4
 *
 * I.lastIndexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => -1
 * ```
 *
 * @see indexOf
 * @see includes
 */
export function lastIndexOf<T>(value: T): (array: readonly T[]) => number
export function lastIndexOf<T>(value: T, array: readonly T[]): number

/**
 * Check if the `second` argument is less than the `first`.
 *
 * Designed to be used as a curried predicate.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.filter(I.lt(2), [1, 2, 3])
 * // => [1]
 * ```
 */
export function lt<T extends Ordered>(first: T): (second: Widen<T>) => boolean
export function lt<T extends Ordered>(first: T, second: T): boolean

/**
 * Check if the `second` argument is less than or equal to the `first`.
 *
 * Designed to be used as a curried predicate.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.filter(I.lte(2), [1, 2, 3])
 * // => [1, 2]
 * ```
 */
export function lte<T extends Ordered>(first: T): (second: Widen<T>) => boolean
export function lte<T extends Ordered>(first: T, second: T): boolean

/**
 * Return an array of the own enumerable property keys of `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.keys({ a: 1, b: 2, c: 3 })
 * // => ['a', 'b', 'c']
 * ```
 *
 * @see entries
 * @see values
 */
export function keys<T extends object>(object: T): Array<keyof T & string>

/**
 * Apply `fn` to `maybeValue` if it is not `undefined`, return `defaultValue`
 * otherwise.
 *
 * @category Logic
 * @example
 *
 * ```typescript
 * I.maybe('', (s) => s.toUpperCase(), 'hi')
 * // => 'HI'
 *
 * I.maybe('', (s) => s.toUpperCase(), undefined)
 * // => ''
 * ```
 */
export function maybe<R>(
  defaultValue: R
): {
  <T>(fn: (value: T) => R): (maybeValue: T | undefined) => R
  <T>(fn: (value: T) => R, maybeValue: T | undefined): R
}
export function maybe<T, R>(
  defaultValue: R,
  fn: (value: T) => R
): (maybeValue: T | undefined) => R
export function maybe<T, R>(
  defaultValue: R,
  fn: (value: T) => R,
  maybeValue: T | undefined
): R

/**
 * Return the larger of two values.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.max(1, 2)
 * // => 2
 *
 * I.max('a', 'b')
 * // => 'b'
 * ```
 *
 * @see min
 * @see maxBy
 */
export function max<T extends Ordered>(value: T): (other: Widen<T>) => Widen<T>
export function max<T extends Ordered>(value: T, other: T): Widen<T>

/**
 * Like {@link max}, but apply `fn` to both values before determining their
 * ordering.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.maxBy(Math.abs, 1, -2)
 * // => -2
 * ```
 *
 * @see max
 * @see minBy
 */
export function maxBy<T>(
  fn: (value: T) => Ordered
): { (value: T, other: T): Widen<T>; (value: T): (other: T) => Widen<T> }
export function maxBy<T>(
  fn: (value: T) => Ordered,
  value: T
): (other: Widen<T>) => Widen<T>
export function maxBy<T>(
  fn: (value: T) => Ordered,
  value: T,
  other: T
): Widen<T>

/**
 * Return the largest element of an `array` or `undefined`.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * I.maximum([1, 2, 3])
 * // => 3
 *
 * I.maximum([])
 * // => undefined
 * ```
 *
 * @see minimum
 * @see maximumBy
 */
export function maximum<T extends Ordered>(array: readonly T[]): T | undefined

/**
 * Like {@link maximum}, but apply `fn` to each value before determining
 * their ordering.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Carol', age: 30 },
 * ]
 *
 * I.maximumBy((u) => u.age, users)
 * // => { name: 'Carol', age: 30 }
 * ```
 *
 * @see maximum
 * @see minimumBy
 */
export function maximumBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T | undefined
export function maximumBy<T>(
  fn: (value: T) => Ordered,
  array: readonly T[]
): T | undefined

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array`.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.map(I.inc, [1, 2, 3])
 * // => [2, 3, 4]
 * ```
 *
 * @see mapWithIndex
 * @see mapMaybe
 * @see flatMap
 */
export function map<T, U>(fn: (value: T) => U): (array: readonly T[]) => U[]
export function map<T, U>(fn: (value: T) => U, array: readonly T[]): U[]

/**
 * Like {@link map}, but `fn` also receives the element index as the first
 * argument.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.mapWithIndex((i, c) => `${i}-${c}`, ['a', 'b', 'c'])
 * // => ['0-a', '1-b', '2-c']
 * ```
 *
 * @see map
 */
export function mapWithIndex<T, U>(
  fn: (index: number, value: T) => U
): (array: readonly T[]) => U[]
export function mapWithIndex<T, U>(
  fn: (index: number, value: T) => U,
  array: readonly T[]
): U[]

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array`, discarding any `undefined` values.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: undefined },
 *   { name: 'Carol', age: 20 }
 * ]
 *
 * I.mapMaybe(I.prop('age'), users)
 * // => [10, 20]
 * ```
 *
 * @see map
 */
export function mapMaybe<T, U>(
  fn: (value: T) => U | undefined
): (array: readonly T[]) => U[]
export function mapMaybe<T, U>(
  fn: (value: T) => U | undefined,
  array: readonly T[]
): U[]

/**
 * Return an object containing the results of applying `fn` to each key of
 * the original `object`.
 *
 * If multiple keys map to the same new key, the latest value is selected.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
 * // => { A: 1, B: 2, C: 3 }
 * ```
 */
export function mapKeys<K1 extends string, K2 extends string>(
  fn: (value: K1) => K2
): <V>(object: Record<K1, V>) => Record<K2, V>
export function mapKeys<K1 extends string, K2 extends string, V>(
  fn: (key: K1) => K2,
  object: Record<K1, V>
): Record<K2, V>

/**
 * Return an object containing the results of applying `fn` to each value of
 * the original `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.mapValues(I.inc, { a: 1, b: 2, c: 3 })
 * // => { a: 2, b: 3, c: 4 }
 * ```
 */
export function mapValues<V1, V2>(
  fn: (value: V1) => V2
): <K extends string>(object: Record<K, V1>) => Record<K, V2>
export function mapValues<V1, V2, K extends string>(
  fn: (value: V1) => V2,
  object: Record<K, V1>
): Record<K, V2>

/**
 * Copy the own enumerable properties of two objects, preferring the values from
 * `second` in case of duplicate keys.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.merge({ a: 1, b: 1 }, { b: 2, c: 2 })
 * // => { a: 1, b: 2, c: 2 }
 * ```
 */
export function merge<T extends object>(
  first: T
): <U extends object>(second: U) => T & U
export function merge<T extends object, U extends object>(
  first: T,
  second: U
): T & U

/**
 * Return the smaller of two values.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.min(1, 2)
 * // => 1
 *
 * I.min('a', 'b')
 * // => 'a'
 * ```
 *
 * @see max
 * @see minBy
 */
export function min<T extends Ordered>(value: T): (other: Widen<T>) => Widen<T>
export function min<T extends Ordered>(value: T, other: T): T

/**
 * Like {@link min}, but apply `fn` to both values before determining their
 * ordering.
 *
 * @category Relation
 * @example
 *
 * ```typescript
 * I.minBy(Math.abs, -1, 2)
 * // => -1
 * ```
 *
 * @see min
 * @see maxBy
 */
export function minBy<T>(
  fn: (value: T) => Ordered
): {
  (value: T): (other: T) => Widen<T>
  (value: T, other: T): Widen<T>
}
export function minBy<T>(
  fn: (value: T) => Ordered,
  value: T
): (other: Widen<T>) => Widen<T>
export function minBy<T>(
  fn: (value: T) => Ordered,
  value: T,
  other: T
): Widen<T>

/**
 * Return the smallest element of `array` or `undefined`.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * I.minimum([1, 2, 3])
 * // => 1
 *
 * I.minimum([])
 * // => undefined
 * ```
 *
 * @see maximum
 * @see minimumBy
 */
export function minimum<T extends Ordered>(array: readonly T[]): T | undefined

/**
 * Like {@link minimum}, but `fn` is applied to each value before determining
 * their ordering.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Carol', age: 30 },
 * ]
 *
 * I.minimumBy((u) => u.age, users)
 * // => { name: 'Alice', age: 10 }
 * ```
 *
 * @see minimum
 * @see maximumBy
 */
export function minimumBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T | undefined
export function minimumBy<T>(
  fn: (value: T) => Ordered,
  array: readonly T[]
): T | undefined

/**
 * Returns a copy of `array` where the element at `index` has been replaced by
 * applying `fn` to its current value.
 *
 * - If `index` is not within `array` bounds, the `array` is returned
 *   unchanged.
 * - Removes the element if `fn` returns `undefined`.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.modifyAt(0, I.inc, [1, 2, 3])
 * // => [2, 2, 3]
 *
 * I.modifyAt(-1, I.inc, [1, 2, 3])
 * // => [1, 2, 4]
 *
 * I.modifyAt(0, I.noop, [1, 2, 3])
 * // => [2, 3]
 *
 * I.modifyAt(999, I.inc, [1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see setAt
 * @see removeAt
 */
export function modifyAt(
  index: number
): {
  <T>(fn: (value: T) => T): (array: readonly T[]) => T[]
  <T>(fn: (value: T) => T, array: readonly T[]): T[]
}
export function modifyAt<T>(
  index: number,
  fn: (value: T) => T
): (array: readonly T[]) => T[]
export function modifyAt<T>(
  index: number,
  fn: (value: T) => T,
  array: readonly T[]
): T[]

/**
 * Return a copy of `object` where the property `key` has replaced by applying
 * `fn` to its current value.
 *
 * - If `key` is not an own property of `object`, the `object` is returned
 *   unchanged.
 * - If `fn` returns `undefined`, the property is removed.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
 * // => { a: 2, b: 2, c: 3 }
 *
 * I.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 *
 * I.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
 * // => { a: 1, b: 2, c: 3, d: 4 }
 * ```
 *
 * @see setProp
 * @see removeProp
 */
export function modifyProp<K extends string>(
  key: K
): {
  <V>(fn: (value: V) => V): <T extends HasKey<K, V>>(object: T) => T
  <T extends HasKey<K>>(fn: (value: Defined<T[K]>) => T[K], object: T): T
}
export function modifyProp<K extends string, V>(
  key: K,
  fn: (value: V) => V
): <T extends HasKey<K, V>>(object: T) => T
export function modifyProp<K extends keyof T & string, T extends object>(
  key: K,
  fn: (value: Defined<T[K]>) => T[K],
  object: T
): T

/**
 * Multiply two numbers together.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.multiply(2), [1, 2, 3])
 * // => [2, 4, 6]
 * ```
 */
export function multiply(multiplicand: number): (multiplier: number) => number
export function multiply(multiplicand: number, multiplier: number): number

/**
 * Return `n` with its sign reversed.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.negate, [1, 2, 3])
 * // => [-1, -2, -3]
 * ```
 */
export function negate(n: number): number

/**
 * Check if none of the elements in the `array` satisfy the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.none((n) => n > 5, [1, 2, 3])
 * // => true
 *
 * I.none((n) => n > 5, [1, 2, 3])
 * // => false
 * ```
 *
 * @see every
 * @see some
 */
export function none<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => boolean
export function none<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): boolean

/**
 * Logical not. Flip the value of a boolean argument
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.not(true)
 * // => false
 *
 * I.not(false)
 * // => true
 * ```
 *
 * @see complement
 *
 */
export function not(bool: boolean): boolean

/**
 * Do nothing an return `undefined`.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.map(I.noop, [1, 2, 3])
 * // => [undefined, undefined, undefined]
 * ```
 */
export function noop(): undefined

/**
 * Create a singleton array containing `value`
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * I.of(1)
 * // => [1]
 * ```
 *
 * @see pair
 */
export function of<T>(value: T): [T]

/**
 * Return a copy of `object` without the specified `keys`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
 * // => { c: 3 }
 * ```
 *
 * @see pick
 */
export function omit<K extends string>(
  keys: readonly K[]
): <T extends HasKey<K>>(object: T) => Omit<T, Extract<keyof T, K>>
export function omit<K extends keyof T & string, T extends object>(
  keys: readonly K[],
  object: T
): Omit<T, K>

/**
 * Create two element array containing `first` and `second`.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * I.pair(1, 2)
 * // => [1, 2]
 * ```
 *
 * @see of
 */
export function pair<T>(first: T): <U>(second: U) => [T, U]
export function pair<T, U>(first: T, second: U): [T, U]

/**
 * Partition the `array` into two arrays, the first containing the elements
 * that satisfy the `guard` and the second containing the elements that do not.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * const [evens, odds] = I.partition((n) => n % 2 === 0, [1, 2, 3])
 * // => [[2], [1, 3]]
 * ```
 *
 * @see filter
 */
export function partition<T, U extends T>(
  guard: (value: T) => value is U
): (array: readonly T[]) => [U[], Exclude<T, U>[]]
export function partition<T, U extends T>(
  guard: (value: T) => value is U,
  array: readonly T[]
): [U[], Exclude<T, U>[]]

/**
 * Partition the `array` into two arrays, the first containing the elements
 * that satisfy the `predicate` and the second containing the elements that do
 * not.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * const [evens, odds] = I.partition((n) => n % 2 === 0, [1, 2, 3])
 * // => [[2], [1, 3]]
 * ```
 *
 * @see filter
 */
export function partition<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => [T[], T[]]
export function partition<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): [T[], T[]]

/**
 * Prepend a new element to the beginning of an array.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.prepend(0, [1, 2, 3])
 * // => [0, 1, 2, 3]
 * ```
 *
 * @see append
 * @see concat
 */
export function prepend<T>(value: T): (array: readonly T[]) => T[]
export function prepend<T>(value: T, array: readonly T[]): T[]

/**
 * Retrieves the property `key` from `object` or `undefined`.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.prop('a', { a: 1, b: 2, c: 3 })
 * // => 1
 *
 * I.prop('a', {})
 * // => undefined
 * ```
 *
 * @see propOr
 * @see at
 */
export function prop<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => T[K]
export function prop<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): T[K]

/**
 * Like {@link prop}, but if the resolved value is `undefined`, `defaultValue`
 * is returned instead.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.propOr(999, 'a', { a: 1, b: 2, c: 3 })
 * // => 1
 *
 * I.propOr(999, 'a', {})
 * // => 999
 *
 * I.propOr(999, 'a', { a: undefined })
 * // => 999
 * ```
 *
 * @see prop
 * @see atOr
 */
export function propOr<V>(
  defaultValue: V
): {
  <K extends string>(key: K): <T extends HasKey<K, V>>(
    object: T
  ) => Defined<T[K]> | V
  <K extends string, T extends HasKey<K, V>>(key: K, object: T):
    | Defined<T[K]>
    | V
}
export function propOr<V, K extends string>(
  defaultValue: V,
  key: K
): <T extends HasKey<K, V>>(object: T) => Defined<T[K]> | V
export function propOr<V extends T[K], K extends keyof T & string, T>(
  defaultValue: V,
  key: K,
  object: T
): Defined<T[K]> | V

/**
 * Create an array of numbers between `start` (inclusive) and `end`
 * (exclusive).
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * I.range(0, 10)
 * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * // I.range(0, 0)
 * // => []
 * ```
 *
 * @see times
 * @see repeat
 */
export function range(start: number): (end: number) => number[]
export function range(start: number, end: number): number[]

/**
 * Left-associative fold.
 *
 * Combine the elements of an `array` in to a single value by calling `reducer`
 * with the accumulated value so far and the current element. The first call to
 * `reducer` receives `initial` as the accumulator.
 *
 * If the array is empty, `initial` is returned.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * I.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
 * // => 10
 * ```
 *
 * @see reduceRight
 */
export function reduce<T, R>(
  reducer: (accumulator: R, value: T) => R
): {
  (initial: R): (array: readonly T[]) => R
  (initial: R, array: readonly T[]): R
}
export function reduce<T, R>(
  reducer: (accumulator: R, value: T) => R,
  initial: R
): (array: readonly T[]) => R
export function reduce<T, R>(
  reducer: (accumulator: R, value: T) => R,
  initial: R,
  array: readonly T[]
): R

/**
 * Right-associative fold.
 *
 * Combine the elements of an `array` in to a single value by calling `reducer`
 * with the current element and the accumulated value so far. The first call to
 * `reducer` receives `initial` as the accumulator.
 *
 * If the array is empty, `initial` is returned.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * I.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
 * // => 10
 * ```
 *
 * @see reduce
 */
export function reduceRight<T, R>(
  reducer: (value: T, accumulator: R) => R
): {
  (initial: R): (array: readonly T[]) => R
  (initial: R, array: readonly T[]): R
}
export function reduceRight<T, R>(
  reducer: (value: T, accumulator: R) => R,
  initial: R
): (array: readonly T[]) => R
export function reduceRight<T, R>(
  reducer: (value: T, accumulator: R) => R,
  initial: R,
  array: readonly T[]
): R

/**
 * Returns a copy of `array` without the element at `index`.
 *
 * - If `index` is not within the `array` bounds, the `array` is returned
 *   unchanged.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.removeAt(0, [1, 2, 3])
 * // => [2, 3]
 *
 * I.removeAt(-1, [1, 2, 3])
 * // => [1, 2]
 *
 * I.removeAt(999, [1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see modifyAt
 * @see setAt
 */
export function removeAt(index: number): <T>(array: readonly T[]) => T[]
export function removeAt<T>(index: number, array: readonly T[]): T[]

/**
 * Return a copy of `object` without the property `key`.
 *
 * - If `key` is not an own property of `object`, the `object` is returned
 *   unchanged.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.removeProp('a', { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 * ```
 */
export function removeProp<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => Omit<T, K>
export function removeProp<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): Omit<T, K>

/**
 * Repeat the given `value` `n` times.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * I.repeat('a', 5)
 * // => ['a', 'a', 'a', 'a', 'a']
 * ```
 *
 * @see range
 * @see times
 */
export function repeat<T>(value: T): (n: number) => T[]
export function repeat<T>(value: T, n: number): T[]

/**
 * Reverse an `array`.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * I.reverse([1, 2, 3])
 * // => [3, 2, 1]
 * ```
 */
export function reverse<T>(array: readonly T[]): T[]

/**
 * Return the `second` argument.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.second(1, 2)
 * // => 2
 * ```
 */
export function second<T>(first: unknown, second: T): T

/**
 * Split the `string` into an array of substrings between each `separator`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.split(', ', 'a, b, c')
 * // => ['a', 'b', 'c']
 * ```
 *
 * @see join
 */
export function split(separator: RegExp | string): (string: string) => string
export function split(separator: RegExp | string, string: string): string

/**
 * Return a copy of `object` with only the specified `keys`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * I.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
 * // => { a: 1, b: 2 }
 * ```
 *
 * @see omit
 */
export function pick<K extends string>(
  keys: readonly K[]
): <T extends HasKey<K>>(object: T) => Pick<T, Extract<keyof T, K>>
export function pick<K extends keyof T & string, T extends object>(
  keys: readonly K[],
  object: T
): Pick<T, K>

/**
 * Pipe an `initial` value through one or more functions in left-to-right order,
 * allowing the programmer to chain operations in a readable manner.
 *
 * `I.pipe(initial, f1, f2, ...fn)` can be thought as syntax sugar
 * for `fn(...(f2(f1(initial))))`
 *
 * **Note:** This function is not curried.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.pipe(
 *   [1, 2, 3],
 *   I.map((n) => n * 2),
 *   I.sum
 * )
 * // => 12
 * ```
 *
 * @see compose
 */
export function pipe<T>(initial: T): T
export function pipe<T, R>(initial: T, fn1: Function1<T, R>): R
export function pipe<T1, T2, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, R>
): R
export function pipe<T1, T2, T3, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, R>
): R
export function pipe<T1, T2, T3, T4, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, R>
): R
export function pipe<T1, T2, T3, T4, T5, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T5, R>
): R
export function pipe<T1, T2, T3, T4, T5, T6, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T5, T6>,
  fn6: Function1<T6, R>
): R
export function pipe<T1, T2, T3, T4, T5, T6, T7, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T5, T6>,
  fn6: Function1<T6, T7>,
  fn7: Function1<T7, R>
): R
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T5, T6>,
  fn6: Function1<T6, T7>,
  fn7: Function1<T7, T8>,
  fn8: Function1<T8, R>
): R
export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
  initial: T1,
  fn1: Function1<T1, T2>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T5, T6>,
  fn6: Function1<T6, T7>,
  fn7: Function1<T7, T8>,
  fn8: Function1<T8, T9>,
  fn9: Function1<T9, R>
): R

/**
 * Returns a copy of `array` where the element at `index` has been replaced with `value`.
 *
 * - If `index` is not within the `array` bounds, the `array` is returned
 *   unchanged.
 * - Removes the element if `value` is `undefined`.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.setAt(0, 999, [1, 2, 3])
 * // => [999, 2, 3]
 *
 * I.setAt(-1, 999, [1, 2, 3])
 * // => [1, 2, 999]
 *
 * I.setAt(999, 999, [1, 2, 3])
 * // => [1, 2, 3]
 *
 * I.setAt(0, undefined, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see modifyAt
 * @see removeAt
 */
export function setAt(
  index: number
): {
  <T>(value: T | undefined): (array: readonly T[]) => T[]
  <T>(value: T | undefined, array: readonly T[]): T[]
}
export function setAt<T>(
  index: number,
  value: T | undefined
): (array: readonly T[]) => T[]
export function setAt<T>(
  index: number,
  value: T | undefined,
  array: readonly T[]
): T[]

/**
 * Return a copy of `object` with property `key` set to `value`.
 *
 * - If `value` is `undefined`, the property is removed.
 *
 * @category Getters and setters
 * @example
 *
 * ```typescript
 * I.setProp('a', 999, { a: 1, b: 2, c: 3 })
 * // => { a: 999, b: 2, c: 3 }
 *
 * I.setProp('a', undefined, { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 * ```
 *
 * @see modifyProp
 * @see removeProp
 */
export function setProp<K extends string>(
  key: K
): {
  <V>(value: V): <T extends HasKey<K, V>>(object: T) => T
  <T extends HasKey<K>>(value: T[K], object: T): T
}
export function setProp<K extends string, V>(
  key: K,
  value: V
): <T extends HasKey<K, V>>(object: T) => T
export function setProp<K extends keyof T & string, T extends object>(
  key: K,
  value: T[K],
  object: T
): T

/**
 * Create a copy of `array` containing the elements from `start` (inclusive)
 * to `end` (exclusive).
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.slice(0, 2, [1, 2, 3])
 * // => [1, 2]
 *
 * I.slice(1, 2, [1, 2, 3])
 * // => [2]
 * ```
 */
export function slice(
  start: number
): {
  (end: number): <T>(array: readonly T[]) => T[]
  <T>(end: number, array: readonly T[]): T[]
}
export function slice(
  start: number,
  end: number
): <T>(array: readonly T[]) => T[]
export function slice<T>(start: number, end: number, array: readonly T[]): T[]

/**
 * Check if some elements in the `array` satisfies the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * I.some((n) => n > 2, [1, 2, 3])
 * // true
 *
 * I.some((n) => n > 5, [1, 2, 3])
 * // false
 * ```
 *
 * @see every
 * @see none
 */
export function some<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => boolean
export function some<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): boolean

/**
 * Sort an `array` according to the comparator function.
 *
 * @category Sorting arrays
 * @example
 *
 * ```typescript
 * I.sort((a, b) => a - b, [3, 2, 1])
 * // => [1, 2, 3]
 * ```
 *
 * @see sortBy
 * @see sortWith
 * @see ascend
 * @see descend
 */
export function sort<T>(
  comparator: (first: T, second: T) => number
): (array: readonly T[]) => T[]
export function sort<T>(
  comparator: (first: T, second: T) => number,
  array: readonly T[]
): T[]

/**
 * Sort an `array` into ascending order by mapping each element of the array
 * with `fn`.
 *
 * @category Sorting arrays
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Bob', age: 10 },
 *   { name: 'Alice', age: 20 }
 * ]
 *
 * I.sortBy(I.prop('name'), users)
 * // => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]
 *
 * I.sortBy(I.prop('age'), users)
 * // => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
 * ```
 *
 * @see sort
 * @see sortWith
 */
export function sortBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T[]
export function sortBy<T>(fn: (value: T) => Ordered, array: readonly T[]): T[]

/**
 * Sort an `array` according to an array of comparator functions.
 *
 * The comparators are tried in order until an ordering has been found.
 *
 * @category Sorting arrays
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 20 },
 * ]
 *
 * I.sortWith([I.descend(I.prop('age')), I.ascend(I.prop('name'))], users)
 * // => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Alice', age: 10 }]
 * ```
 *
 * @see sort
 * @see sortBy
 * @see ascend
 * @see descend
 */
export function sortWith<T>(
  comparators: readonly ((first: T, second: T) => number)[]
): (array: readonly T[]) => T[]
export function sortWith<T>(
  comparators: readonly ((first: T, second: T) => number)[],
  array: readonly T[]
): T[]

/**
 * Subtract the `subtrahend` from the `minuend`.
 *
 * @category Math
 * @example
 *
 * ```typescript
 * I.map(I.subtractBy(1), [1, 2, 3])
 * // => [0, 1, 2]
 * ```
 */
export function subtractBy(subtrahend: number): (minuend: number) => number
export function subtractBy(subtrahend: number, minuend: number): number

/**
 * Sum an `array` of numbers together. Returns `0` if the array is empty.
 *
 * Uses the [Kahan summation
 * algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
 * minimizing numerical error.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * const numbers = I.repeat(0.1, 10)
 * // => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
 *
 * I.sum(numbers)
 * // => 1
 *
 * numbers.reduce((sum, n) => sum + n, 0)
 * // => 0.9999999999999999
 * ```
 *
 * @see sumBy
 */
export function sum(numbers: readonly number[]): number

/**
 * Like {@link sum}, but each element of the `array` is converted to a number
 * by applying `fn`.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * I.sumBy(I.prop('age'), [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
 * // => 30
 * ```
 *
 * @see sum
 */
export function sumBy<T>(
  fn: (value: T) => number
): (array: readonly T[]) => number
export function sumBy<T>(fn: (value: T) => number, array: readonly T[]): number

/**
 * Return all elements of the `array` except the first.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * I.tail([1, 2, 3])
 * // => [2, 3]
 *
 * I.tail([])
 * // => []
 * ```
 *
 * @see head
 * @see init
 * @see last
 */
export function tail<T>(array: readonly T[]): T[]

/**
 * Take the first `n` elements of an `array`.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.take(2, [1, 2, 3])
 * // => [1, 2]
 * ```
 *
 * @see drop
 * @see takeLast
 */
export function take(n: number): <T>(array: readonly T[]) => T[]
export function take<T>(n: number, array: readonly T[]): T[]

/**
 * Take the last `n` elements of an `array`.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.takeLast(2, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see dropLast
 * @see take
 */
export function takeLast<T>(n: number): (array: readonly T[]) => T[]
export function takeLast<T>(n: number, array: readonly T[]): T[]

/**
 * Take elements from the end of an `array` while `predicate` is satisfied.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.takeLastWhile((n) => n >= 2, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see dropLastWhile
 * @see takeWhile
 */
export function takeLastWhile<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T[]
export function takeLastWhile<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Take elements from the beginning of an `array` while `predicate` is
 * satisfied.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * I.takeWhile((n) => n <= 2, [1, 2, 3])
 * // => [1, 2]
 * ```
 *
 * @see dropWhile
 * @see takeLastWhile
 */
export function takeWhile<T>(
  predicate: (value: T) => boolean
): (array: readonly T[]) => T[]
export function takeWhile<T>(
  predicate: (value: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Create a function that applies `fn` to its argument and returns the
 * argument.
 *
 * Useful for executing a side-effect within a pipeline.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * I.pipe(
 *   [1, 2, 3],
 *   I.map(I.multiply(2)),
 *   I.filter(I.gt(2)),
 *   I.tap(console.log),
 *   I.sum
 * )
 * // Prints: [ 4, 6 ]
 * // => 10
 * ```
 */
export function tap<T>(fn: (value: T) => void): (value: T) => T

/**
 * Check if `string` matches the `regexp`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.test(/abc/, 'abc')
 * // => true
 * ```
 */
export function test(regexp: RegExp): (string: string) => boolean
export function test(regexp: RegExp, string: string): boolean

/**
 * Create an array of length `n` by applying `fn` to the index of each element.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * I.times((n) => n * 10, 3)
 * // => [0, 10, 20]
 * ```
 *
 * @see range
 * @see repeat
 */
export function times<T>(fn: (index: number) => T): (n: number) => T[]
export function times<T>(fn: (index: number) => T, n: number): T[]

/**
 * Convert `string` to lowercase.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.toLowerCase('ABC')
 * // => 'abc'
 * ```
 *
 * @see toUpperCase
 * @see capitalize
 */
export function toLowerCase(string: string): string

/**
 * Convert `string` to uppercase.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.toUpperCase('abc')
 * // => 'ABC'
 * ```
 *
 * @see toLowerCase
 * @see capitalize
 */
export function toUpperCase(string: string): string

/**
 * Remove whitespace from both ends of a `string`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.trim('  abc  ')
 * // => 'abc'
 * ```
 *
 * @see trimStart
 * @see trimEnd
 */
export function trim(string: string): string

/**
 * Remove whitespace from the end of a `string`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.trimEnd('  abc  ')
 * // => '  abc'
 * ```
 *
 * @see trimStart
 * @see trim
 */
export function trimEnd(string: string): string

/**
 * Remove whitespace from the beginning of a `string`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * I.trimStart('  abc  ')
 * // => 'abc  '
 * ```
 *
 * @see trimEnd
 * @see trim
 */
export function trimStart(string: string): string

/**
 * Return `value` if it is not `undefined`, `defaultValue` otherwise.
 *
 * @category Logic
 * @example
 *
 * ```typescript
 * I.valueOr(999, 0)
 * // => 0
 *
 * I.valueOr(999, undefined)
 * // => 999
 * ```
 *
 * @see maybe
 */
export function valueOr<T>(defaultValue: T): (value: T | undefined) => T
export function valueOr<T>(defaultValue: T, value: T | undefined): T

/**
 * Return an array of the own enumerable property values of `object`
 *
 * @category Object
 * @example
 * ```
 * I.keys({ a: 1, b: 2, c: 3 })
 * // => [1, 2, 3]
 * ```
 *
 * @see keys
 * @see entries
 */
export function values<T extends object>(object: T): T[keyof T & string][]

/**
 * Create a version of `fn` that accepts a single argument.
 *
 * @category Function
 * @example
 *
 * ```typescript
 * ['1', '2', '3'].map(I.unary(parseInt))
 * // => [1, 2, 3]
 * ```
 *
 * @see binary
 */
export function unary<T, R>(fn: VariadicFunction1<T, R>): Function1<T, R>

/**
 * Calculate the [set union](https://en.wikipedia.org/wiki/Union_(set_theory))
 * between the `first` array and the `second` array, using {@link equals} for
 * determining equality.
 *
 * Will not remove duplicates from the first array.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * I.union([1, 2, 3], [2, 3, 4])
 * // => [1, 2, 3, 4]
 * ```
 *
 * @see unionWith
 * @see intersection
 * @see difference
 */
export function union<T>(first: readonly T[]): (second: readonly T[]) => T[]
export function union<T>(first: readonly T[], second: readonly T[]): T[]

/**
 * Like {@link union}, but using a custom equality function.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 * ]
 * const otherUsers = [
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Carol' },
 *   { id: 4, name: 'Dan' }
 * ]
 *
 * I.unionWith((a, b) => a.id === b.id, users, otherUsers)
 * // => [ { id: 1, name: 'Alice' },  { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' }, { id: 4, name: 'Dan' } ]
 * ```
 *
 * @see union
 * @see intersectionWith
 * @see differenceWith
 */
export function unionWith<T>(
  equals: (value: T, other: T) => boolean
): {
  (array: readonly T[]): (other: readonly T[]) => T[]
  (array: readonly T[], other: readonly T[]): T[]
}
export function unionWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[]
): (other: readonly T[]) => T[]
export function unionWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[],
  other: readonly T[]
): T[]

/**
 * Remove duplicate values from `array`, using {@link equals} for determining
 * equality.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * I.uniq([1, 2, 3, 1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see uniqWith
 */
export function uniq<T>(array: readonly T[]): T[]

/**
 * Like {@link uniq}, but using a custom equality function.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 * ]
 * I.uniqWith((a, b) => a.id === b.id, users)
 * // => [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
 * ```
 *
 * @see uniq
 */
export function uniqWith<T>(
  equals: (value: T, other: T) => boolean
): (array: readonly T[]) => T[]
export function uniqWith<T>(
  equals: (value: T, other: T) => boolean,
  array: readonly T[]
): T[]

/**
 * Combine the corresponding elements of two arrays into an array of pairs.
 *
 * If one of the arrays is longer than the other, the extra elements are
 * ignored.
 *
 * @category Zipping arrays
 * @example
 *
 * ```typescript
 * I.zip(['a', 'b', 'c'], [1, 2, 3])
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see zipWith
 */
export function zip<T>(
  first: readonly T[]
): <U>(second: readonly U[]) => [T, U][]
export function zip<T, U>(first: readonly T[], second: readonly U[]): [T, U][]

/**
 * Combine an array of `keys` and `values` into an object.
 *
 * If one of the arrays is longer than the other, its extra elements are
 * ignored.
 *
 * @category Zipping arrays
 * @example
 *
 * ```typescript
 * I.zipObject(['a', 'b', 'c'], [1, 2, 3])
 * // => { a: 1, b: 2, c: 3 }
 * ```
 *
 * @see fromEntries
 */
export function zipObject<K extends string>(
  keys: readonly K[]
): <T>(values: readonly T[]) => Record<K, T>
export function zipObject<K extends string, T>(
  keys: readonly K[],
  values: readonly T[]
): Record<K, T>

/**
 * Like {@link zip}, but the elements are combined with `fn` instead of
 * constructing a pair.
 *
 * @category Zipping arrays
 * @example
 *
 * ```typescript
 * I.zipWith(I.add, [1, 2, 3], [4, 5, 6])
 * // => [5, 7, 9]
 * ```
 *
 * @see zip
 */
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R
): {
  (first: readonly T[]): (second: readonly U[]) => R[]
  (first: readonly T[], second: readonly U[]): R[]
}
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R,
  first: readonly T[]
): (second: readonly U[]) => R[]
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R,
  first: readonly T[],
  second: readonly U[]
): R[]
