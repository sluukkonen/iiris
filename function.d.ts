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
import { Ordered } from './core'

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
