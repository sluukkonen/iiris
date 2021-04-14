/** A function that takes no arguments. */
type Function0<R> = () => R
/** A function that takes one argument. */
type Function1<T, R> = (value: T) => R
/** A function that takes two arguments. */
type Function2<T1, T2, R> = (a1: T1, a2: T2) => R

/** A function that takes zero or more arguments. */
type VariadicFunction0<R> = (...args: any[]) => R // eslint-disable-line @typescript-eslint/no-explicit-any
/** A function that takes one or more arguments. */
type VariadicFunction1<T, R> = (a1: T, ...args: unknown[]) => R
/** A function that takes two or more arguments. */
type VariadicFunction2<T1, T2, R> = (a1: T1, a2: T2, ...args: unknown[]) => R

/** A tuple with 2 elements. */
type Tuple2 = [unknown, unknown]

/** A tuple with 3 elements. */
type Tuple3 = [unknown, unknown, unknown]

/** A tuple with 4 elements. */
type Tuple4 = [unknown, unknown, unknown, unknown]

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
 * Given a `fn` that maps a `value` to an {@link Ordered} value, create an
 * ascending comparator function.
 *
 * **Note:** The returned function is not curried.
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
export function ascend<T, U extends Ordered>(
  fn: (value: T) => U
): (first: T, second: T) => number

/**
 * Create a version of `fn` that accepts two arguments.
 *
 * **Note:** The returned function is not curried.
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
 * **Note:** The returned function is not curried.
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
export function descend<T, U extends Ordered>(
  fn: (value: T) => U
): (first: T, second: T) => number

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
export function equals<T>(first: T): (second: T) => boolean
export function equals<T>(first: T, second: T): boolean

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
  fn: (value: T) => U
): {
  (first: T): (second: T) => boolean
  (first: T, second: T): boolean
}
export function equalsBy<T, U>(
  fn: (value: T) => U,
  first: T
): (second: T) => boolean
export function equalsBy<T, U>(
  fn: (value: T) => U,
  first: T,
  second: T
): boolean

/**
 * Flip the arguments of a binary function.
 *
 * **Note:** The returned function is not curried.
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
 *
 * @see valueOr
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
export function max<T extends Ordered>(first: T): (second: Widen<T>) => Widen<T>
export function max<T extends Ordered>(first: T, second: T): Widen<T>

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
export function maxBy<T, U extends Ordered>(
  fn: (value: T) => U
): {
  (first: T, second: T): Widen<T>
  (first: T): (second: T) => Widen<T>
}
export function maxBy<T, U extends Ordered>(
  fn: (value: T) => U,
  first: T
): (second: Widen<T>) => Widen<T>
export function maxBy<T, U extends Ordered>(
  fn: (value: T) => U,
  first: T,
  second: T
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
export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: readonly T[]) => T | undefined
export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: readonly T[]
): T | undefined

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
export function min<T extends Ordered>(first: T): (second: Widen<T>) => Widen<T>
export function min<T extends Ordered>(first: T, second: T): T

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
export function minBy<T, U extends Ordered>(
  fn: (value: T) => U
): {
  (first: T): (second: T) => Widen<T>
  (first: T, second: T): Widen<T>
}
export function minBy<T, U extends Ordered>(
  fn: (value: T) => U,
  first: T
): (second: Widen<T>) => Widen<T>
export function minBy<T, U extends Ordered>(
  fn: (value: T) => U,
  first: T,
  second: T
): Widen<T>

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
 * Return `maybeValue` if it is not `undefined`, `defaultValue` otherwise.
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
export function valueOr<T>(defaultValue: T): (maybeValue: T | undefined) => T
export function valueOr<T>(defaultValue: T, maybeValue: T | undefined): T
