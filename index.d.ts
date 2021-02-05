// Function type aliases

/** A function that takes no arguments. */
export type Function0<R> = () => R
/** A function that takes one argument. */
export type Function1<T, R> = (value: T) => R
/** A function that takes two arguments. */
export type Function2<T1, T2, R> = (a1: T1, a2: T2) => R
/** A function that takes three arguments. */
export type Function3<T1, T2, T3, R> = (a1: T1, a2: T2, a3: T3) => R
/** A function that takes four arguments. */
export type Function4<T1, T2, T3, T4, R> = (a1: T1, a2: T2, a3: T3, a4: T4) => R

/** A function that returns a boolean. */
export type Predicate<T> = (value: T) => boolean

/** A function that tests if `value` is of type `U`. */
export type Guard<T, U extends T> = (value: T) => value is U

/** A function that takes zero or more arguments. */
export type VariadicFunction0<R> = (...args: unknown[]) => R
/** A function that takes one or more arguments. */
export type VariadicFunction1<T, R> = (a1: T, ...args: unknown[]) => R
/** A function that takes two or more arguments. */
export type VariadicFunction2<T1, T2, R> = (
  a1: T1,
  a2: T2,
  ...args: unknown[]
) => R
/** A function that takes three or more arguments. */
export type VariadicFunction3<T1, T2, T3, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  ...args: unknown[]
) => R
/** A function that takes four or more arguments. */
export type VariadicFunction4<T1, T2, T3, T4, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  ...args: unknown[]
) => R

/** A curried function that takes up to two arguments. */
export type CurriedFunction2<T1, T2, R> = {
  (a1: T1): Function1<T2, R>
  (a1: T1, a2: T2): R
}

/** A curried function that takes up to three arguments. */
export type CurriedFunction3<T1, T2, T3, R> = {
  (a1: T1): CurriedFunction2<T2, T3, R>
  (a1: T1, a2: T2): Function1<T3, R>
  (a1: T1, a2: T2, a3: T3): R
}

/** A curried function that takes up to four arguments. */
export type CurriedFunction4<T1, T2, T3, T4, R> = {
  (a1: T1): CurriedFunction3<T2, T3, T4, R>
  (a1: T1, a2: T2): CurriedFunction2<T3, T4, R>
  (a1: T1, a2: T2, a3: T3): Function1<T4, R>
  (a1: T1, a2: T2, a3: T3, a4: T4): R
}

/** A data type that can be compared with the `<` and `>` operators. */
export type Ordered = number | bigint | string | Date | boolean

/** A helper type that widens primitive literal types. */
export type Widen<T> = T extends number
  ? number
  : T extends bigint
  ? bigint
  : T extends string
  ? string
  : T extends boolean
  ? boolean
  : T

export type LeftReducer<T, R> = (accumulator: T, value: R) => R
export type RightReducer<T, R> = (value: R, accumulator: T) => R

/**
 * A Comparator is a function that determines the ordering between two values.
 *
 * It returns a positive number if the `first` value is larger, a negative
 * number if it is smaller and `0` if both values are equal.
 */
export type Comparator<T> = (first: T, second: T) => number

// Internal helper types

/** Removes undefined from T */
type Defined<T> = T extends undefined ? never : T

type HasKey<K extends string, V = unknown> = { [P in K]?: V }

type Expand<T> = T extends infer U ? U : never

type NullableHasKey<K extends string, V = unknown> =
  | HasKey<K, V>
  | null
  | undefined

type NullableObject = object | null | undefined

type NullableArray<T = unknown> = readonly T[] | null | undefined

/** Return true if T is `undefined` */
type IsUndefined<T> = [T] extends [undefined]
  ? [undefined] extends [T]
    ? true
    : false
  : false

export type Get<T extends HasKey<K>, K extends string> = NonNullable<T>[K]

type Gets<T extends NullableHasKey<K>, K extends string> = Expand<
  T extends null | undefined ? Get<T, K> | undefined : Get<T, K>
>

type Getter<K extends string> = <T extends NullableHasKey<K>>(
  object: T
) => Gets<T, K>

type ArrayGets<T extends NullableArray> = NonNullable<T>[number] | undefined

type ArrayGetter = <T extends NullableArray>(array: T) => ArrayGets<T>

type GetsOr<T extends NullableHasKey<K>, K extends string, D> = Expand<
  T extends null | undefined
    ? Defined<Get<T, K>> | D
    : undefined extends Get<T, K>
    ? Defined<Get<T, K>> | D
    : Get<T, K>
>

/** A helper type that sets the key K to value V in object T. */
type Sets<T extends object, K extends string, V> = K extends keyof T
  ? V extends T[K]
    ? T
    : true extends IsUndefined<V>
    ? Omit<T, K>
    : Omit<T, K> & { [P in K]: V }
  : T & { [P in K]: V }

type Modifiable<K extends string, V> = undefined extends V
  ? { [P in K]?: V }
  : { [P in K]: V }

// Ah shit, here we go again…

/**
 * Add two numbers together.
 *
 * @example
 *
 * ```typescript
 * S.map(S.add(1), [1, 2, 3])
 * // => [2, 3, 4]
 * ```
 */
export function add(n: number, m: number): number
export function add(n: number): (m: number) => number

/**
 * Create a version of `fn` that accepts `n` arguments.
 *
 * @example
 *
 * ```typescript
 * const fn = (...args) => args
 * const wrapped = S.arity(2, fn)
 *
 * fn(1, 2, 3)
 * // => [1, 2, 3]
 *
 * wrapped(1, 2, 3)
 * // => [1, 2]
 * ```
 *
 * @see unary
 * @see binary
 */
export function arity<R>(n: 0, fn: VariadicFunction0<R>): Function0<R>
export function arity<T, R>(n: 1, fn: VariadicFunction1<T, R>): Function1<T, R>
export function arity<T1, T2, R>(
  n: 2,
  fn: VariadicFunction2<T1, T2, R>
): Function2<T1, T2, R>
export function arity<T1, T2, T3, R>(
  n: 3,
  fn: VariadicFunction3<T1, T2, T3, R>
): Function3<T1, T2, T3, R>
export function arity<T1, T2, T3, T4, R>(
  n: 4,
  fn: VariadicFunction4<T1, T2, T3, T4, R>
): Function4<T1, T2, T3, T4, R>
export function arity<R>(
  n: number,
  fn: VariadicFunction0<R>
): VariadicFunction0<R>

/**
 * Append a new element to the end of an array.
 *
 * @example
 *
 * ```typescript
 * S.append(4, [1, 2, 3])
 * // => [1, 2, 3, 4]
 * ```
 *
 * @see prepend
 */
export function append<T>(value: T, array: readonly T[]): T[]
export function append<T>(value: T): (array: readonly T[]) => T[]

/**
 * Given a `fn` that maps a `value` to an {@link Ordered} value, create an
 * ascending {@link Comparator} function.
 *
 * @example
 *
 * ```typescript
 * S.sort(S.ascend(S.get('age')), [{ name: 'Bob' }, { name: 'Alice' }])
 * // => [{ name: 'Alice' }, { name: 'Bob' }]
 * ```
 *
 * @see descend
 * @see sort
 * @see sortWith
 */
export function ascend<T>(fn: (value: T) => Ordered): Comparator<T>

/**
 * Create a version of `fn` that accepts two arguments.
 *
 * @example
 *
 * ```typescript
 * const fn = (...args) => args
 * const wrapped = S.binary(fn)
 *
 * fn(1, 2, 3)
 * // => [1, 2, 3]
 *
 * wrapped(1, 2, 3)
 * // => [1, 2]
 * ```
 *
 * @see unary
 * @see arity
 */
export function binary<T1, T2, R>(
  fn: VariadicFunction2<T1, T2, R>
): Function2<T1, T2, R>

/**
 * Clamp a number within the closed interval `[lower, upper]`.
 *
 * @example
 *
 * ```typescript
 * S.clamp([0, 10], 5)
 * // => 5
 *
 * S.clamp([0, 10], 15)
 * // => 10
 *
 * S.clamp([0, 10], -5)
 * // => 0
 * ```
 */
export function clamp<T extends Ordered>(
  interval: [lower: T, upper: T],
  value: T
): Widen<T>
export function clamp<T extends Ordered>(
  interval: [T, T]
): (value: Widen<T>) => Widen<T>

export function complement<T extends VariadicFunction0<boolean>>(fn: T): T

/**
 * Right-to-left function composition.
 *
 * @example
 *
 * ```typescript
 * const composed = S.compose(S.add(10), S.multiply(2))
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
 * @example
 *
 * ```typescript
 * S.concat([1, 2, 3], [4, 5, 6])
 * // => [1, 2, 3, 4, 5, 6]
 * ```
 */
export function concat<T>(array: readonly T[], other: readonly T[]): T[]
export function concat<T>(array: readonly T[]): (other: readonly T[]) => T[]

/**
 * Create a function that always returns `value`.
 *
 * @example
 *
 * ```typescript
 * S.map(S.constant(1), [1, 2, 3])
 * // => [1, 1, 1]
 * ```
 */
export function constant<T>(value: T): () => T

/**
 * Count the number of elements in the `array` the satisfy the `predicate`.
 *
 * @example
 *
 * ```typescript
 * S.count((n) => n > 1, [1, 2, 3])
 * // => 2
 * ```
 */
export function count<T>(predicate: Predicate<T>, array: readonly T[]): number
export function count<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => number

/**
 * Apply `keyFn` to each element in the `array` and return an object of counts
 * by key.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice' },
 *   { name: 'Bob' }
 *   { name: 'Alice' }
 * ]
 *
 * S.countBy(S.get('name'), users)
 * // => { Alice: 2, Bob: 1 }
 * ```
 */
export function countBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, number>
export function countBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, number>

/**
 * Create a curried version of `fn`. The arity of the curried function is
 * determined by the original function's `length` attribute.
 *
 * @example
 *
 * ```typescript
 *  const add = S.curry((a, b) => a + b)
 *
 *  add(1)(2)
 *  // => 3
 *
 *  add(1, 2)
 *  // => 6
 * ```
 *
 * @see curryN
 */
export function curry<R>(fn: Function0<R>): Function0<R>
export function curry<T, R>(fn: Function1<T, R>): Function1<T, R>
export function curry<T1, T2, R>(
  fn: Function2<T1, T2, R>
): CurriedFunction2<T1, T2, R>
export function curry<T1, T2, T3, R>(
  fn: Function3<T1, T2, T3, R>
): CurriedFunction3<T1, T2, T3, R>
export function curry<T1, T2, T3, T4, R>(
  fn: Function4<T1, T2, T3, T4, R>
): CurriedFunction4<T1, T2, T3, T4, R>

/**
 * Create a curried version of `fn` with arity of `n`.
 *
 * @example
 *
 * ```typescript
 *  const add = S.curryN(2, (a, b) => a + b)
 *
 *  add(1)(2)
 *  // => 3
 *
 *  add(1, 2)
 *  // => 3
 * ```
 *
 * @see curry
 */
export function curryN<F extends CallableFunction>(n: 0, fn: F): F
export function curryN<F extends CallableFunction>(n: 1, fn: F): F
export function curryN<T1, T2, R>(
  n: 2,
  fn: VariadicFunction2<T1, T2, R>
): CurriedFunction2<T1, T2, R>
export function curryN<T1, T2, T3, R>(
  n: 3,
  fn: VariadicFunction3<T1, T2, T3, R>
): CurriedFunction3<T1, T2, T3, R>
export function curryN<T1, T2, T3, T4, R>(
  n: 4,
  fn: VariadicFunction4<T1, T2, T3, T4, R>
): CurriedFunction4<T1, T2, T3, T4, R>

/**
 * Decrement a number by 1.
 *
 * @example
 *
 * ```typescript
 * S.dec(1)
 * // => 0
 * ```
 *
 * @see inc
 */
export function dec(n: number): number

/**
 * Given a `fn` that maps a `value` to an {@link Ordered} value, create a
 * descending {@link Comparator} function.
 *
 * @example
 *
 * ```typescript
 * S.sort(S.descend(S.get('name')), [{ name: 'Alice' }, { name: 'Bob' }])
 * // => [{ name: 'Bob' }, { name: 'Alice' }]
 * ```
 *
 * @see ascend
 * @see sort
 * @see sortWith
 */
export function descend<T>(fn: (value: T) => Ordered): Comparator<T>

/**
 * Divide `dividend` by the `divisor`.
 *
 * @example
 *
 * ```typescript
 * S.map(S.divideBy(2), [1, 2, 3])
 * // => [0.1, 1, 1.5]
 * ```
 */
export function divideBy(divisor: number, dividend: number): number
export function divideBy(divisor: number): (dividend: number) => number

/**
 * Drop the first `n` elements of an `array`.
 *
 * @example
 *
 * ```typescript
 * S.drop(1, [1, 2, 3])
 * // => [2, 3]
 *
 * S.drop(2, [1, 2, 3])
 * // => [3]
 * ```
 */
export function drop<T>(n: number, array: readonly T[]): T[]
export function drop(n: number): <T>(array: readonly T[]) => T[]

/**
 * Drop the last `n` elements of an `array`.
 *
 * @example
 *
 * ```typescript
 * S.dropLast(1, [1, 2, 3])
 * // => [1, 2]
 *
 * S.dropLast(2, [1, 2, 3])
 * // => [1]
 * ```
 */
export function dropLast<T>(n: number, array: readonly T[]): T[]
export function dropLast(n: number): <T>(array: readonly T[]) => T[]

/**
 * Drop elements from the end of an `array` while `predicate` holds.
 *
 * @example
 *
 * ```typescript
 * S.dropLastWhile((n) => n > 1, [1, 2, 3])
 * // => [1]
 * ```
 */
export function dropLastWhile<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): T[]
export function dropLastWhile<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T[]

/**
 * Drop elements from the beginning of an `array` while `predicate` holds.
 *
 * @example
 *
 * ```typescript
 * S.dropWhile((n) => n === 1, [1, 2, 3])
 * // => [2, 3]
 * ```
 */
export function dropWhile<T>(predicate: Predicate<T>, array: readonly T[]): T[]
export function dropWhile<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T[]

/**
 * Return an array of the own enumerable property key-value pairs of `object`
 *
 * @example
 *
 * ```typescript
 * S.entries({a: 1, b: 2, c: 3})
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see fromEntries
 * @see keys
 * @see values
 */
export function entries<T extends NullableObject, K extends keyof T>(
  object: T
): Array<[K, T[K]]>

/**
 * Check if two values are deeply equal.
 *
 * - Primitive values are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
 * - Objects with different prototypes are not equal.
 * - Only the own enumerable keys of objects are considered.
 * - The order of object keys does not matter.
 * - Sets and Map keys are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
 * - Error objects are equal if their `name` and `error` properties are equal.
 * - Functions and are compared with `===`.
 * - Supports cyclic references.
 * - Does not support WeakMaps, WeakSets or typed arrays.
 */
export function equals<T>(value: T, other: T): boolean
export function equals<T>(value: T): (other: T) => boolean

/**
 * Like {@link equals}, but the function `fn` is applied to both values before
 * determining equality.
 *
 * @example
 *
 * ```typescript
 * S.equalsBy(Math.floor, 1, 1.5)
 * // => true
 * ```
 *
 * @see equals
 */
export function equalsBy<T, U>(fn: Function1<T, U>, value: T, other: T): boolean
export function equalsBy<T, U>(
  fn: Function1<T, U>,
  value: T
): (other: T) => boolean
export function equalsBy<T, U>(
  fn: Function1<T, U>
): {
  (value: T, other: T): boolean
  (value: T): (other: T) => boolean
}

/**
 * Check if every element in the `array` satisfies the `predicate`.
 *
 * @example
 *
 * ```typescript
 * S.every((n) => n < 10, [1, 2, 3])
 * // => true
 *
 * S.every((n) => n < 3, [1, 2, 3])
 * // => false
 * ```
 */
export function every<T>(predicate: Predicate<T>, array: readonly T[]): boolean
export function every<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => boolean

/**
 * Find the first element in the `array` that satisfies the `predicate`.
 *
 * Returns `undefined` if none of the elements match.
 *
 * @example
 *
 * ```typescript
 * S.find((n) => n >= 2, [1, 2, 3])
 * // => 2
 *
 * S.find((n) => n >= 5, [1, 2, 3])
 * // => undefined
 * ```
 */
export function find<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): T | undefined
export function find<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T | undefined

/**
 * Find the index of the first element in the `array` that satisfies the
 * `predicate`.
 *
 * Returns `-1` if none of the elements satisfy the predicate.
 *
 * @example
 *
 * ```typescript
 * S.findIndex((n) => n >= 2, [1, 2, 3])
 * // => 1
 *
 * S.find((n) => n >= 5, [1, 2, 3])
 * // => -1
 * ```
 */
export function findIndex<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): number
export function findIndex<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => number

/**
 * Find the last element in the `array` that the `predicate` satisfies.
 *
 * Returns `-1` if none of the elements satisfy the predicate.
 *
 * @example
 *
 * ```typescript
 * S.findLastIndex((n) => n >= 2, [1, 2, 3])
 * // => 2
 *
 * S.find((n) => n >= 5, [1, 2, 3])
 * // => -1
 * ```
 */
export function findLast<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): T | undefined
export function findLast<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T | undefined

/**
 * Find the index of the last element in the `array` that satisfies the
 * `predicate`.
 *
 * Returns `-1` if none of the elements match.
 *
 * @example
 *
 * ```typescript
 * S.findLastIndex((n) => n >= 2, [1, 2, 3])
 * // => 2
 *
 * S.find((n) => n >= 5, [1, 2, 3])
 * // => -1
 * ```
 */
export function findLastIndex<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): number
export function findLastIndex<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => number

/**
 * Return the elements of the `array` satisfying the `predicate`.
 *
 * Supports TypeScript's type guards.
 *
 * @example
 *
 * ```typescript
 * S.filter((n) => n % 2 === 0, [1, 2, 3])
 * // => [2]
 *
 * S.filter(S.isString, [1, 'hi', true])
 * // => ['hi']
 * ```
 */
export function filter<T, U extends T>(
  guard: Guard<T, U>,
  array: readonly T[]
): U[]
export function filter<T, U extends T>(
  guard: Guard<T, U>
): (array: readonly T[]) => U[]

export function filter<T>(predicate: Predicate<T>, array: readonly T[]): T[]
export function filter<T>(predicate: Predicate<T>): (array: readonly T[]) => T[]

/**
 * Monadic bind.
 *
 * Return an array containing the results of applying `fn` to each element in
 * the original `array` and then flattening the result by one level.
 *
 * @example
 *
 * ```typescript
 * S.flatMap((n) => [n, n], [1, 2, 3])
 * // => [1, 1, 2, 2, 3, 3]
 * ```
 */
export function flatMap<T, U>(fn: (value: T) => U[], array: readonly T[]): U[]
export function flatMap<T, U>(
  fn: (value: T) => U[]
): (array: readonly T[]) => U[]

/**
 * Flatten a nested `array` by `n` levels.
 *
 * @example
 *
 * ```typescript
 * S.flatten(1, [1, [2, [3]]])
 * // => [1, 2, [3]]
 *
 * S.flatten(2, [1, [2, [3]]])
 * // => [1, 2, 3]
 * ```
 */
export function flatten<T extends readonly unknown[], D extends number>(
  depth: D,
  array: T
): FlatArray<T, D>[]
export function flatten<D extends number>(
  depth: D
): <T extends readonly unknown[]>(array: T) => FlatArray<T, D>[]

/**
 * Flip first two arguments of a function.
 *
 * @example
 *
 * ```typescript
 * const fn = (...args) => args
 * const flipped = S.flip(fn)
 *
 * flipped(1, 2, 3)
 * // => [2, 1, 3]
 * ```
 */
export function flip<T, U, R>(fn: Function2<T, U, R>): Function2<U, T, R>

/**
 * Apply the callback `fn` for each element in the `array` and return the
 * `array`.
 *
 * @example
 *
 * ```typescript
 * S.forEach(x => console.log(x), [1, 2, 3])
 * 1
 * 2
 * 3
 * // => [1, 2, 3]
 * ```
 */
export function forEach<T>(fn: (value: T) => void, array: readonly T[]): T[]
export function forEach<T>(fn: (value: T) => void): (array: readonly T[]) => T[]

/**
 * Create an object from an array of `[key, value]` pairs.
 *
 * @example
 *
 * ```typescript
 * S.fromEntries([['a', 1], ['b', 2], ['c', 3]])
 * // => {a: 1, b: 2, c: 3}
 * ```
 *
 * @see entries
 */
export function fromEntries<T>(entries: [PropertyKey, T][]): { [k: string]: T }

/**
 * Partition the `array` into an object of arrays according to `keyFn`.
 *
 * @example
 *
 * ```typescript
 * S.groupBy((n) => n % 2, [1, 2, 3])
 * // => {'0': [2], '1': [1, 3] }
 * ```
 *
 * @see groupMap
 * @see groupMapReduce
 */
export function groupBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, T[]>
export function groupBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, T[]>

/**
 * Like {@link groupBy}, but also apply `mapFn` to each element before adding
 * it to the corresponding array.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 30 }
 * ]
 * const agesByName = S.groupMap(S.get('name'), S.get('age'), users)
 * // => { Alice: [10, 30], Bob: [20] }
 * ```
 *
 * @see groupBy
 * @see groupMapReduce
 */
export function groupMap<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U,
  array: readonly T[]
): Record<K, U[]>
export function groupMap<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U
): (array: readonly T[]) => Record<K, U[]>
export function groupMap<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): {
  <U>(mapFn: (value: T) => U, array: readonly T[]): Record<K, U[]>
  <U>(mapFn: (value: T) => U): (array: readonly T[]) => Record<K, U[]>
}

/**
 * Like {@link groupMap}, but instead of returning an object of arrays, combine
 * elements mapping to the same key with `reducer`.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 30 }
 * ]
 * const sumOfAgesByName = S.groupMapReduce(S.get('name'), S.get('age'), S.add, users)
 * // => { Alice: 40, Bob: 20 }
 * ```
 *
 * @see groupBy
 * @see groupMap
 */
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U,
  reducer: LeftReducer<U, U>,
  array: readonly T[]
): Record<K, U>
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U,
  reducer: LeftReducer<U, U>
): (array: readonly T[]) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U
): {
  (reducer: LeftReducer<U, U>, array: readonly T[]): Record<K, U>
  (reducer: LeftReducer<U, U>): (array: readonly T[]) => Record<K, U>
}
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): {
  <U>(
    mapFn: (value: T) => U,
    reducer: LeftReducer<U, U>,
    array: readonly T[]
  ): Record<K, U>
  <U>(mapFn: (value: T) => U, reducer: LeftReducer<U, U>): (
    array: readonly T[]
  ) => Record<K, U>
  <U>(mapFn: (value: T) => U): {
    (reducer: LeftReducer<U, U>, array: readonly T[]): Record<K, U>
    (reducer: LeftReducer<U, U>): (array: readonly T[]) => Record<K, U>
  }
}

export function get<
  K extends keyof NonNullable<T> & string,
  T extends NullableObject
>(key: K, object: T): Gets<T, K>
export function get<T extends NullableArray>(
  index: number,
  array: T
): ArrayGets<T>
export function get<K extends string>(key: K): Getter<K>
export function get(index: number): ArrayGetter

export function getOr<
  D,
  K extends keyof NonNullable<T> & string,
  T extends NullableObject
>(defaultValue: D, key: K, object: T): GetsOr<T, K, D>
export function getOr<D, T>(
  defaultValue: D,
  index: number,
  array: NullableArray<T>
): T | D
export function getOr<D, K extends string>(
  defaultValue: D,
  key: K
): <T extends NullableHasKey<K>>(object: T) => GetsOr<T, K, D>
export function getOr<D>(
  defaultValue: D,
  index: number
): <T>(array: NullableArray<T>) => T | D
export function getOr<D>(
  defaultValue: D
): {
  <K extends string, T extends NullableHasKey<K>>(key: K, object: T): GetsOr<
    T,
    K,
    D
  >
  <T>(index: number, array: NullableArray<T>): T | D
  <K extends string>(key: K): <T extends NullableHasKey<K>>(
    object: T
  ) => GetsOr<T, K, D>
  (index: number): <T>(array: NullableArray<T>) => T | D
}

/**
 * Check if the `second` argument is greater than the `first`.
 *
 * @example
 *
 * ```typescript
 * S.filter(S.gt(2), [1, 2, 3])
 * // => [3]
 * ```
 */
export function gt<T extends Ordered>(first: T, second: T): boolean
export function gt<T extends Ordered>(first: T): (second: Widen<T>) => boolean

/**
 * Check if the `second` argument is greater than or equal to the `first`.
 *
 * @example
 * ```typescript
 * S.filter(S.gte(2), [1, 2, 3])
 * // => [2, 3]
 * ```
 */
export function gte<T extends Ordered>(first: T, second: T): boolean
export function gte<T extends Ordered>(first: T): (second: Widen<T>) => boolean

/**
 * Check if `key` is an own property of `object`.
 *
 * @example
 *
 * ```typescript
 * S.has('a', {a: 1})
 * // => true
 *
 * S.has('toString', {a: 1})
 * // => false
 * ```
 */
export function has<K extends string>(
  key: K,
  object: unknown
): object is { [P in K]: unknown }
export function has<K extends string>(
  key: K
): (object: unknown) => object is { [P in K]: unknown }

/**
 * Return the first element of the `array` or `undefined` if the array is empty.
 *
 * @example
 *
 * ```typescript
 * S.head([1, 2, 3])
 * // => 1
 *
 * S.head([])
 * // => undefined
 * ```
 */
export function head<T>(array: readonly T[]): T | undefined

/**
 * Identity function. Returns the first argument.
 *
 * @example
 *
 * ```typescript
 * S.identity(5)
 * // => 5
 * ```
 */
export function identity<T>(value: T): T

export function ifElse<T, U extends T, R1, R2>(
  guard: Guard<T, U>,
  ifTrue: (value: U) => R1,
  ifFalse: (value: Exclude<T, U>) => R2,
  value: T
): R1 | R2
export function ifElse<T, U extends T, R1, R2>(
  guard: Guard<T, U>,
  ifTrue: (value: U) => R1,
  ifFalse: (value: Exclude<T, U>) => R2
): (value: T) => R1 | R2
export function ifElse<T, U extends T, R1>(
  guard: Guard<T, U>,
  ifTrue: (value: U) => R1
): {
  <R2>(ifFalse: (value: T) => R2, value: T): R1 | R2
  <R2>(ifFalse: (value: Exclude<T, U>) => R2): (value: T) => R1 | R2
}
export function ifElse<T, U extends T>(
  guard: Guard<T, U>
): {
  <R1, R2>(ifTrue: (value: U) => R1, ifFalse: (value: T) => R2, value: T):
    | R1
    | R2
  <R1, R2>(ifTrue: (value: U) => R1, ifFalse: (value: T) => R2): (
    value: T
  ) => R1 | R2
  <R1>(ifTrue: (value: U) => R1): {
    <R2>(ifFalse: (value: T) => R2, value: T): R1 | R2
    <R2>(ifFalse: (value: T) => R2): (value: T) => R1 | R2
  }
}

export function ifElse<T, R1, R2>(
  predicate: (value: T) => boolean,
  ifTrue: (value: T) => R1,
  ifFalse: (value: T) => R2,
  value: T
): R1 | R2
export function ifElse<T, R1, R2>(
  predicate: (value: T) => boolean,
  ifTrue: (value: T) => R1,
  ifFalse: (value: T) => R2
): (value: T) => R1 | R2
export function ifElse<T, R1>(
  predicate: (value: T) => boolean,
  ifTrue: (value: T) => R1
): {
  <R2>(ifFalse: (value: T) => R2, value: T): R1 | R2
  <R2>(ifFalse: (value: T) => R2): (value: T) => R1 | R2
}
export function ifElse<T>(
  predicate: (value: T) => boolean
): {
  <R1, R2>(ifTrue: (value: T) => R1, ifFalse: (value: T) => R2, value: T):
    | R1
    | R2
  <R1, R2>(ifTrue: (value: T) => R1, ifFalse: (value: T) => R2): (
    value: T
  ) => R1 | R2
  <R1>(ifTrue: (value: T) => R1): {
    <R2>(ifFalse: (value: T) => R2, value: T): R1 | R2
    <R2>(ifFalse: (value: T) => R2): (value: T) => R1 | R2
  }
}

/**
 * Increment a number by 1.
 *
 * @example
 *
 * ```typescript
 * S.inc(1)
 * // => 2
 * ```
 */
export function inc(n: number): number

/**
 * Check if the `array` includes the specified `value`. Uses {@link equals} for
 * determining equality.
 *
 * @example
 *
 * ```typescript
 * S.includes(1, [1, 2, 3])
 * // => true
 *
 * S.includes(0, [1, 2, 3])
 * // => false
 * ```
 */
export function includes<T>(value: T, array: readonly T[]): boolean
export function includes<T>(value: T): (array: readonly T[]) => boolean

/**
 * Apply `keyFn` to each element in the `array` and return an object of
 * elements indexed by each key.
 *
 * If multiple elements map to the same key, the last one is selected.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Carol' }
 * ]
 * S.indexBy(S.get('id'), users)
 * // => { '1': { id: 1, name: 'Carol' }, '2': { id: 2, name: 'Bob' } }
 * ```
 */
export function indexBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K,
  array: readonly T[]
): Record<K, T>
export function indexBy<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): (array: readonly T[]) => Record<K, T>

export function indexOf<T>(value: T, array: readonly T[]): number
export function indexOf<T>(value: T): (array: readonly T[]) => number

/**
 * Return all elements of the `array` except the last.
 *
 * @example
 *
 * ```typescript
 * S.tail([1, 2, 3])
 * // => [1, 2]
 * ```
 */
export function init<T>(array: readonly T[]): T[]

export function intersperse<T>(separator: T, array: readonly T[]): T[]
export function intersperse<T>(separator: T): (array: readonly T[]) => T[]

/**
 * Check if the `value` is an
 * [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
 */
export function isArray<T>(
  value: T | readonly unknown[]
): value is readonly unknown[]

/**
 * Check if the `value` is a
 * [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
 */
export function isBigInt<T>(value: T | bigint): value is bigint

/**
 * Check if the `value` is a
 * [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/boolean).
 */
export function isBoolean<T>(value: T | boolean): value is boolean

/**
 * Check if the `value` is a
 * [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).
 */
export function isDate<T>(value: T | Date): value is Date

/**
 * Check if the `value` is not
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 */
export function isDefined<T>(value: T | undefined): value is T

/**
 * Check if the `value` is an
 * [`Error`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error).
 */
export function isError<T>(value: T | Error): value is Error

/**
 * Check if the `value` is a
 * [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).
 */
export function isFunction<T>(value: T | Function): value is Function

/**
 * Check if the `value` is
 * [`null`](https://developer.mozilla.org/en-US/docs/Glossary/null) or
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 */
export function isNil<T>(value: T | null | undefined): value is null | undefined

/**
 * Check if the `value` is
 * [`null`](https://developer.mozilla.org/en-US/docs/Glossary/null).
 */
export function isNull<T>(value: T | null): value is null

/**
 * Check if the `value` is a
 * [`number`](https://developer.mozilla.org/en-US/docs/Glossary/number).
 */
export function isNumber<T>(value: T | number): value is number

/**
 * Check if the `value` is a
 * [`Map`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map).
 */
export function isMap<T>(
  value: T | Map<unknown, unknown>
): value is Map<unknown, unknown>

/**
 * Check if the `value` is an
 * [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).
 *
 * Note that functions and arrays are also objects.
 */
export function isObject<T>(value: T | object): value is object

/**
 * Check if the `value` is a
 * [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).
 */
export function isRegExp<T>(value: T | RegExp): value is RegExp

/**
 * Check if the `value` is a
 * [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
 */
export function isSet<T>(value: T | Set<unknown>): value is Set<unknown>

/**
 * Check if the `value` is a
 * [`string`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String).
 */
export function isString<T>(value: T | string): value is string

/**
 * Check if the `value` is a
 * [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
 */
export function isSymbol<T>(value: T | Symbol): value is Symbol

/**
 * Check if the `value` is
 * [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).
 */
export function isUndefined<T>(value: T | undefined): value is undefined

/**
 * Convert the `array` to a string, inserting the `separator` between each
 * element.
 *
 * @example
 *
 * ```typescript
 * S.join(', ', [1, 2, 3])
 * // => '1, 2, 3'
 * ```
 */
export function join<T>(separator: string, array: readonly T[]): string
export function join(separator: string): <T>(array: readonly T[]) => string

/**
 * Return the last element of the `array` or `undefined` if the array is empty.
 *
 * @example
 *
 * ```typescript
 * S.last([1, 2, 3])
 * // => 3
 *
 * S.last([])
 * // => undefined
 * ```
 */
export function last<T>(array: readonly T[]): T | undefined

export function lastIndexOf<T>(value: T, array: readonly T[]): number
export function lastIndexOf<T>(value: T): (array: readonly T[]) => number

/**
 * Check if the `second` argument is less than the `first`.
 *
 * @example
 *
 * ```typescript
 * S.filter(S.lt(2), [1, 2, 3])
 * // => [1]
 * ```
 */
export function lt<T extends Ordered>(first: T, second: T): boolean
export function lt<T extends Ordered>(first: T): (second: Widen<T>) => boolean

/**
 * Check if the `second` argument is less than or equal to the `first`.
 *
 * @example
 *
 * ```typescript
 * S.filter(S.lte(2), [1, 2, 3])
 * // => [1, 2]
 * ```
 */
export function lte<T extends Ordered>(first: T, second: T): boolean
export function lte<T extends Ordered>(first: T): (second: Widen<T>) => boolean

/**
 * Return an array of the own enumerable property keys of `object`.
 *
 * @example
 *
 * ```typescript
 * S.keys({a: 1, b: 2, c: 3})
 * // => ['a', 'b', 'c']
 * ```
 *
 * @see entries
 * @see values
 */
export function keys<T extends NullableObject>(object: T): Array<keyof T>

/**
 * Apply `fn` to `maybeValue` if it is not `undefined`, return `defaultValue`
 * otherwise.
 *
 * @example
 *
 * ```typescript
 * S.maybe('', (s) => s.toUpperCase(), 'hi')
 * // => 'HI'
 *
 * S.maybe('', (s) => s.toUpperCase(), undefined)
 * // => ''
 * ```
 */
export function maybe<T, R>(
  defaultValue: R,
  fn: (value: T) => R,
  maybeValue: T | undefined
): R
export function maybe<T, R>(
  defaultValue: R,
  fn: (value: T) => R
): (maybeValue: T | undefined) => R
export function maybe<R>(
  defaultValue: R
): {
  <T>(fn: (value: T) => R, maybeValue: T | undefined): R
  <T>(fn: (value: T) => R): (maybeValue: T | undefined) => R
}

/**
 * Return the larger of two values.
 *
 * @example
 *
 * ```typescript
 * S.max(1, 2)
 * // => 2
 *
 * S.max('a', 'b')
 * // => 'b'
 * ```
 */
export function max<T extends Ordered>(value: T, other: T): Widen<T>
export function max<T extends Ordered>(value: T): (other: Widen<T>) => Widen<T>

/**
 * Return the largest element of an `array` or `undefined` if the array is
 * empty.
 *
 * @example
 *
 * ```typescript
 * S.maximum([1, 2, 3])
 * // => 3
 *
 * S.maximum([])
 * // => undefined
 * ```
 */
export function maximum<T extends Ordered>(array: readonly T[]): T | undefined

export function maximumBy<T>(
  fn: (value: T) => Ordered,
  array: readonly T[]
): T | undefined
export function maximumBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T | undefined

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array`.
 *
 * @example
 *
 * ```typescript
 * S.map(S.inc, [1, 2, 3])
 * // => [2, 3, 4]
 * ```
 */
export function map<T, U>(fn: (value: T) => U, array: readonly T[]): U[]
export function map<T, U>(fn: (value: T) => U): (array: readonly T[]) => U[]

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array`, discarding any `undefined` values.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: undefined },
 *   { name: 'Carol', age: 20 }
 * ]
 *
 * S.mapMaybe(S.get('age'), users)
 * // => [10, 20]
 * ```
 */
export function mapMaybe<T, U>(
  fn: (value: T) => U | undefined,
  array: readonly T[]
): U[]
export function mapMaybe<T, U>(
  fn: (value: T) => U | undefined
): (array: readonly T[]) => U[]

/**
 * Return an object containing the results of applying `fn` to each value of
 * the original `object`.
 *
 * @example
 *
 * ```typescript
 * S.mapValues(S.inc, {a: 1, b: 2, c: 3})
 * // => {a: 2, b: 3, c: 4}
 * ```
 */
export function mapValues<T extends object, U>(
  fn: (value: T[keyof T]) => U,
  object: T
): Record<keyof T, U>
export function mapValues<V, U>(
  fn: (value: V) => U
): <T extends Record<string, V>>(object: T) => Record<keyof T, U>

/**
 * Return the smaller of two values.
 *
 * @example
 *
 * ```typescript
 * S.min(1, 2)
 * // => 1
 *
 * S.min('a', 'b')
 * // => 'a'
 * ```
 */
export function min<T extends Ordered>(value: T, other: T): Widen<T>
export function min<T extends Ordered>(value: T): (other: Widen<T>) => Widen<T>

/**
 * Return the smallest element of `array` or `undefined` if the array is empty.
 *
 * @example
 *
 * ```typescript
 * S.minimum([1, 2, 3])
 * // => 1
 *
 * S.minimum([])
 * // => undefined
 * ```
 */
export function minimum<T extends Ordered>(array: readonly T[]): T | undefined

/**
 * Return the smallest element of an `array` or `undefined` if the array is
 * empty.
 *
 * @example
 *
 * ```typescript
 * S.minimumBy(S.get('a'), [{a: 1}, {a: 2}, {a: 3}])
 * // => {a: 1}
 *
 * S.minimumBy([])
 * // => undefined
 * ```
 */
export function minimumBy<T>(
  fn: (value: T) => Ordered,
  array: readonly T[]
): T | undefined
export function minimumBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T | undefined

export function modify<K extends keyof T & string, V, T extends object>(
  key: K,
  fn: (value: T[K]) => V,
  object: T
): Sets<T, K, V>
export function modify<K extends string, V1, V2>(
  key: K,
  fn: (value: V1) => V2
): <T extends Modifiable<K, V1>>(object: T) => Sets<T, K, V2>
export function modify<K extends string>(
  key: K
): {
  <V, T extends { [P in K]?: unknown }>(
    fn: (value: T[K]) => V,
    object: T
  ): Sets<T, K, V>
  <V1, V2>(fn: (value: V1) => V2): <T extends Modifiable<K, V1>>(
    object: T
  ) => Sets<T, K, V2>
}

export function modify<T>(
  index: number,
  fn: Function1<T, T>,
  array: readonly T[]
): T[]
export function modify<T>(
  index: number,
  fn: Function1<T, T>
): (array: readonly T[]) => T[]
export function modify(
  index: number
): {
  <T>(fn: Function1<T, T>, array: readonly T[]): T[]
  <T>(fn: Function1<T, T>): (array: readonly T[]) => T[]
}

/**
 * Multiply two numbers together.
 *
 * @example
 *
 * ```typescript
 * S.map(S.multiply(2), [1, 2, 3])
 * // => [2, 4, 6]
 * ```
 */
export function multiply(multiplicand: number, multiplier: number): number
export function multiply(multiplicand: number): (multiplier: number) => number

/**
 * Return `n` with its sign reversed.
 *
 * @example
 *
 * ```typescript
 * S.negate(1)
 * // => -1
 * ```
 */
export function negate(n: number): number

/**
 * Check if none of the elements in the `array` satisfy the `predicate`.
 *
 * @example
 *
 * ```typescript
 * S.none((n) => n > 5, [1, 2, 3])
 * // true
 *
 * S.none((n) => n > 5, [1, 2, 3])
 * // false
 * ```
 */
export function none<T>(predicate: Predicate<T>, array: readonly T[]): boolean
export function none<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => boolean

/** Flip the value of a boolean. */
export function not(bool: boolean): boolean

/**
 * Do nothing an return `undefined`.
 *
 * @example
 *
 * ```typescript
 *  launchMissiles().then(noop).catch(noop) // Ignore the promise return value
 * ```
 */
export function noop(): undefined

/**
 * Create a singleton array containing `value`
 *
 * @example
 *
 * ```typescript
 * S.of(1)
 * // => [1]
 * ```
 */
export function of<T>(value: T): [T]

/**
 * Return a copy of `object` without the specified `keys`.
 *
 * @example
 *
 * ```typescript
 * S.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
 * // => { c: 3 }
 * ```
 */
export function omit<T extends object, K extends keyof T>(
  keys: readonly K[],
  object: T
): Omit<T, K>
export function omit<K extends string>(
  keys: readonly K[]
): <T extends HasKey<K>>(object: T) => Omit<T, Extract<keyof T, K>>

export function omitBy<T extends object>(
  predicate: (value: T[keyof T], key: keyof T) => boolean,
  object: T
): Partial<T>
export function omitBy<K extends string, V>(
  predicate: (value: V, key: K) => boolean
): <T extends HasKey<K, V>>(object: T) => Partial<T>

export function pair<T, U>(first: T, second: U): [T, U]
export function pair<T>(first: T): <U>(second: U) => [T, U]

/**
 * Partition the `array` into two arrays, the first containing the elements
 * that satisfy the `predicate` and the second containing the elements that do
 * not.
 *
 * @example
 *
 * ```typescript
 * const [evens, odds] = S.partition((n) => n % 2 === 0, [1, 2, 3])
 * // => [[2], [1, 3]]
 * ```
 */
export function partition<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): [T[], T[]]
export function partition<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => [T[], T[]]

/**
 * Prepend a new element to the beginning of an array.
 *
 * @example
 *
 * ```typescript
 * S.prepend(0, [1, 2, 3])
 * // => [0, 1, 2, 3]
 * ```
 *
 * @see append
 */
export function prepend<T>(value: T, array: readonly T[]): T[]
export function prepend<T>(value: T): (array: readonly T[]) => T[]

export function range(start: number, end: number): number[]
export function range(start: number): (end: number) => number[]

/**
 * Left-associative fold.
 *
 * Combine the elements of an array in to a single value by calling `reducer`
 * with the accumulated value so far and the current element. The first call to
 * `reducer` receives `initial` as the accumulator.
 *
 * If the array is empty, `initial` is returned.
 *
 * @example
 *
 * ```typescript
 * S.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
 * // => 6
 * ```
 */
export function reduce<T, R>(
  reducer: LeftReducer<T, R>,
  initial: R,
  array: readonly T[]
): R
export function reduce<T, R>(
  reducer: LeftReducer<T, R>,
  initial: R
): (array: readonly T[]) => R
export function reduce<T, R>(
  reducer: LeftReducer<T, R>
): {
  (initial: R, array: readonly T[]): R
  (initial: R): (array: readonly T[]) => R
}

/**
 * Right-associative fold.
 *
 * Combine the elements of an array in to a single value by calling `reducer`
 * with the current element and the accumulated value so far. The first call to
 * `reducer` receives `initial` as the accumulator.
 *
 * If the array is empty, `initial` is returned.
 *
 * @example
 *
 * ```typescript
 * S.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
 * // => [1, 2, 3]
 * ```
 */
export function reduceRight<T, R>(
  reducer: RightReducer<T, R>,
  initial: R,
  array: readonly T[]
): R
export function reduceRight<T, R>(
  reducer: RightReducer<T, R>,
  initial: R
): (array: readonly T[]) => R
export function reduceRight<T, R>(
  reducer: RightReducer<T, R>
): {
  (initial: R, array: readonly T[]): R
  (initial: R): (array: readonly T[]) => R
}

export function remove<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): Omit<T, K>
export function remove<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => Omit<T, K>

export function remove<T>(index: number, array: readonly T[]): T[]
export function remove(index: number): <T>(array: readonly T[]) => T[]

/**
 * Repeat the given `value` `n` times.
 *
 * @example
 *
 * ```typescript
 * S.repeat('a', 5)
 * // => ['a', 'a', 'a', 'a', 'a']
 * ```
 */
export function repeat<T>(value: T, n: number): T[]
export function repeat<T>(value: T): (n: number) => T[]

/**
 * Reverse an `array`.
 *
 * @example
 *
 * ```typescript
 * S.reverse([1, 2, 3])
 * // => [3, 2, 1]
 * ```
 */
export function reverse<T>(array: readonly T[]): T[]

/**
 * Return the `second` argument.
 *
 * @example
 *
 * ```typescript
 * S.second(1, 2)
 * // => 2
 * ```
 */
export function second<T>(first: unknown, second: T): T

/**
 * Return a copy of `object` with only the specified `keys`.
 *
 * @example
 *
 * ```typescript
 * S.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
 * // => { a: 1, b: 2 }
 * ```
 */
export function pick<T extends object, K extends keyof T>(
  keys: readonly K[],
  object: T
): Pick<T, K>
export function pick<K extends string>(
  keys: readonly K[]
): <T extends HasKey<K>>(object: T) => Pick<T, Extract<keyof T, K>>

export function pickBy<T extends object>(
  predicate: (value: T[keyof T], key: keyof T) => boolean,
  object: T
): Partial<T>
export function pickBy<K extends string, V>(
  predicate: (value: V, key: K) => boolean
): <T extends HasKey<K, V>>(object: T) => Partial<T>

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

export function set<K extends string, V, T extends object>(
  key: K,
  value: V,
  object: T
): Sets<T, K, V>
export function set<K extends string, V>(
  key: K,
  value: V
): <T extends object>(object: T) => Sets<T, K, V>
export function set<K extends string>(
  key: K
): {
  <V, T extends object>(value: V, object: T): Sets<T, K, V>
  <V>(value: V): <T extends object>(object: T) => Sets<T, K, V>
}

export function set<T>(index: number, value: T, array: readonly T[]): T[]
export function set<T>(index: number, value: T): (array: readonly T[]) => T[]
export function set(
  index: number
): {
  <T>(value: T, array: readonly T[]): T[]
  <T>(value: T): (array: readonly T[]) => T[]
}

export function slice<T>(start: number, end: number, array: readonly T[]): T[]
export function slice(
  start: number,
  end: number
): <T>(array: readonly T[]) => T[]
export function slice(
  start: number
): {
  <T>(end: number, array: readonly T[]): T[]
  (end: number): <T>(array: readonly T[]) => T[]
}

/**
 * Check if some elements in the `array` satisfies the `predicate`.
 *
 * @example
 *
 * ```typescript
 * S.some((n) => n > 2, [1, 2, 3])
 * // true
 *
 * S.some((n) => n > 5, [1, 2, 3])
 * // false
 * ```
 */
export function some<T>(predicate: Predicate<T>, array: readonly T[]): boolean
export function some<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => boolean

/**
 * Sort an `array` according to the {@link Comparator} function.
 *
 * @example
 *
 * ```typescript
 * S.sort((a, b) => a - b, [3, 2, 1])
 * // => [1, 2, 3]
 * ```
 *
 * @see sortBy
 * @see sortWith
 * @see ascend
 * @see descend
 */
export function sort<T>(comparator: Comparator<T>, array: readonly T[]): T[]
export function sort<T>(comparator: Comparator<T>): (array: readonly T[]) => T[]

/**
 * Sort an `array` into ascending order by mapping each element of the array
 * with `fn`.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Bob', age: 10 },
 *   { name: 'Alice', age: 20 }
 * ]
 *
 * S.sortBy(S.get('name'), users)
 * // => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]
 *
 * S.sortBy(S.get('age'), users)
 * // => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
 * ```
 *
 * @see sort
 * @see sortWith
 */
export function sortBy<T>(fn: (value: T) => Ordered, array: readonly T[]): T[]
export function sortBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T[]

/**
 * Sort an `array` according to an array of {@link Comparator} functions.
 *
 * The comparators are tried in order until an ordering has been found.
 *
 * @example
 *
 * ```typescript
 * const users = [
 *   { name: 'Alice', age: 10 },
 *   { name: 'Bob', age: 20 },
 *   { name: 'Alice', age: 20 },
 * ]
 *
 * S.sortWith([S.descend(S.get('age')), S.ascend(S.get('name'))], users)
 * // => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Alice', age: 10 }]
 * ```
 *
 * @see sort
 * @see sortBy
 * @see ascend
 * @see descend
 */
export function sortWith<T>(
  comparators: readonly Comparator<T>[],
  array: readonly T[]
): T[]
export function sortWith<T>(
  comparators: readonly Comparator<T>[]
): (array: readonly T[]) => T[]

/**
 * Subtract the `subtrahend` from the `minuend`.
 *
 * @example
 *
 * ```typescript
 * S.map(S.subtractBy(1), [1, 2, 3])
 * // => [0, 1, 2]
 * ```
 */
export function subtractBy(subtrahend: number, minuend: number): number
export function subtractBy(subtrahend: number): (minuend: number) => number

/**
 * Sum an `array` of numbers together. Returns `0` if the array is empty.
 *
 * Uses the [Kahan summation
 * algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
 * minimizing numerical error.
 *
 * @example
 *
 * ```typescript
 * const numbers = S.repeat(0.1, 10)
 * // => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
 *
 * S.sum(numbers)
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
 * Sum an `array` together by mapping each element to a number with `fn`.
 *
 * @example
 *
 * ```typescript
 * S.sumBy(S.get('age'), [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
 * // => 30
 * ```
 *
 * @see sum
 */
export function sumBy<T>(fn: (value: T) => number, array: readonly T[]): number
export function sumBy<T>(
  fn: (value: T) => number
): (array: readonly T[]) => number

/**
 * Return all elements of the `array` except the first.
 *
 * @example
 *
 * ```typescript
 * S.tail([1, 2, 3])
 * // => [2, 3]
 * ```
 */
export function tail<T>(array: readonly T[]): T[]

/**
 * Take the first `n` elements of an `array`.
 *
 * @example
 *
 * ```typescript
 * S.take(2, [1, 2, 3])
 * // => [1, 2]
 * ```
 */
export function take<T>(n: number, array: readonly T[]): T[]
export function take(n: number): <T>(array: readonly T[]) => T[]

/**
 * Take the last `n` elements of an `array`.
 *
 * @example
 *
 * ```typescript
 * S.takeLast(2, [1, 2, 3])
 * // => [2, 3]
 * ```
 */
export function takeLast<T>(n: number, array: readonly T[]): T[]
export function takeLast<T>(n: number): (array: readonly T[]) => T[]

export function takeLastWhile<T>(
  predicate: Predicate<T>,
  array: readonly T[]
): T[]
export function takeLastWhile<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T[]

export function takeWhile<T>(predicate: Predicate<T>, array: readonly T[]): T[]
export function takeWhile<T>(
  predicate: Predicate<T>
): (array: readonly T[]) => T[]

/**
 * Create a function that applies `fn` to its argument and returns the
 * argument.
 *
 * Useful for executing a side-effect within a pipeline.
 *
 * @example
 *
 * ```typescript
 * S.pipe(
 *   [1, 2, 3],
 *   S.map(S.multiply(2)),
 *   S.filter(S.gt(2)),
 *   S.tap(console.log),
 *   S.sum
 * )
 * // Prints: [ 4, 6 ]
 * // => 10
 * ```
 */
export function tap<T>(fn: (value: T) => void): (value: T) => T

export function times<T>(fn: (index: number) => T, n: number): T[]
export function times<T>(fn: (index: number) => T): (n: number) => T[]

export function toMap<K, T>(entries: Iterable<[K, T]>): Map<K, T>

export function toSet<T>(values: Iterable<T>): Set<T>

/**
 * Return an array of the own enumerable property values of `object`
 *
 * @example
 * ```
 * S.keys({a: 1, b: 2, c: 3})
 * // => [1, 2, 3]
 * ```
 *
 * @see keys
 * @see entries
 */
export function values<T extends NullableObject, K extends keyof T>(
  object: T
): Array<T[K]>

/**
 * Create a version of `fn` that accepts a single argument.
 *
 * @example
 *
 * ```typescript
 * ['1', '2', '3'].map(S.unary(parseInt))
 * // => [1, 2, 3]
 * ```
 *
 * @see binary
 * @see arity
 */
export function unary<T, R>(fn: VariadicFunction1<T, R>): Function1<T, R>

/**
 * Remove duplicate values from `array`. Uses {@link equals}. for determining
 * equality.
 *
 * Preserves the original order of elements.
 *
 * @example
 *
 * ```typescript
 * S.uniq([1, 2, 3, 1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see uniqBy
 */
export function uniq<T>(array: readonly T[]): T[]

/**
 * Like {@link uniq}, but `fn` is applied to each element before determining
 * their equality.
 *
 * Preserves the original order of elements.
 *
 * @example
 *
 * ```typescript
 * S.uniqBy(Math.floor, [1, 1.5, 2, 2.5, 3, 3.5])
 * // => [1, 2, 3]
 * ```
 *
 * @see uniq
 */
export function uniqBy<T, U>(fn: (value: T) => U, array: readonly T[]): T[]
export function uniqBy<T, U>(fn: (value: T) => U): (array: readonly T[]) => T[]

/**
 * Apply `ifFalse` to `value` if the `predicate` is not satisfied. Otherwise, return
 * `value`.
 *
 * @example
 *
 * ```typescript
 * const increasePowerLevel = S.unless(S.gte(9000), S.inc)
 *
 * increasePowerLevel(8000)
 * // => 8001
 *
 * increasePowerLevel(9000)
 * // => 9000
 * ```
 */
export function unless<T, U extends T, R>(
  guard: Guard<T, U>,
  ifElse: (value: Exclude<T, U>) => R,
  value: T
): U | R
export function unless<T, U extends T, R>(
  guard: Guard<T, U>,
  ifFalse: (value: Exclude<T, U>) => R
): (value: T) => U | R
export function unless<T, U extends T>(
  guard: Guard<T, U>
): {
  <R>(ifFalse: (value: Exclude<T, U>) => R, value: T): U | R
  <R>(ifFalse: (value: Exclude<T, U>) => R): (value: T) => U | R
}

export function unless<T, R>(
  predicate: (value: T) => boolean,
  ifFalse: (value: T) => R,
  value: T
): T | R
export function unless<T, R>(
  predicate: (value: T) => boolean,
  ifFalse: (value: T) => R
): (value: T) => T | R
export function unless<T>(
  predicate: (value: T) => boolean
): {
  <R>(ifFalse: (value: T) => R, value: T): T | R
  <R>(ifFalse: (value: T) => R): (value: T) => T | R
}

/**
 * Apply `ifTrue` to `value` if the `predicate` is satisfied. Otherwise, return
 * `value`.
 *
 * @example
 *
 * ```typescript
 * const safeInc = S.when(S.isNumber, S.inc)
 *
 * safeInc(1)
 * // => 2
 *
 * safeInc(undefined)
 * // => undefined
 * ```
 */
export function when<T, U extends T, R>(
  guard: Guard<T, U>,
  ifTrue: (value: U) => R,
  value: T
): Exclude<T, U> | R
export function when<T, U extends T, R>(
  guard: Guard<T, U>,
  ifTrue: (value: U) => R
): (value: T) => Exclude<T, U> | R
export function when<T, U extends T>(
  guard: Guard<T, U>
): {
  <R>(ifTrue: (value: U) => R, value: T): Exclude<T, U> | R
  <R>(ifTrue: (value: T) => R): (value: T) => Exclude<T, U> | R
}

export function when<T, R>(
  predicate: (value: T) => boolean,
  ifTrue: (value: T) => R,
  value: T
): T | R
export function when<T, R>(
  predicate: (value: T) => boolean,
  ifTrue: (value: T) => R
): (value: T) => T | R
export function when<T>(
  predicate: (value: T) => boolean
): {
  <R>(ifTrue: (value: T) => R, value: T): T | R
  <R>(ifTrue: (value: T) => R): (value: T) => T | R
}

/**
 * Combine the corresponding elements of two arrays into an array of pairs.
 *
 * If one of the arrays is longer than the other, the extra elements are
 * ignored.
 *
 * @example
 *
 * ```typescript
 * S.zip(['a', 'b', 'c'], [1, 2, 3])
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see zipWith
 */
export function zip<T, U>(array1: readonly T[], array2: readonly U[]): [T, U][]
export function zip<T>(
  array1: readonly T[]
): <U>(array2: readonly U[]) => [T, U][]

/**
 * Combine an array of `keys` and `values` into an object.
 *
 * If one of the arrays is longer than the other, its extra elements are
 * ignored.
 *
 * @example
 *
 * ```typescript
 * S.zipObject(['a', 'b', 'c'], [1, 2, 3])
 * // => {a: 1, b: 2, c: 3}
 * ```
 *
 * @see fromEntries
 */
export function zipObject<K extends PropertyKey, T>(
  keys: readonly K[],
  values: readonly T[]
): Record<K, T>
export function zipObject<K extends PropertyKey>(
  keys: readonly K[]
): <T>(values: readonly T[]) => Record<K, T>

/**
 * Like {@link zip}, but the elements are combined with `fn` instead of
 * constructing a pair.
 *
 * @example
 *
 * ```typescript
 * S.zipWith(S.add, [1, 2, 3], [4, 5, 6])
 * // => [5, 7, 9]
 * ```
 *
 * @see zip
 */
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R,
  array1: readonly T[],
  array2: readonly U[]
): R[]
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R,
  array1: readonly T[]
): (array2: readonly U[]) => R[]
export function zipWith<T, U, R>(
  fn: (value: T, other: U) => R
): {
  (array1: readonly T[], array2: readonly U[]): R[]
  (array1: readonly T[]): (array2: readonly U[]) => R[]
}
