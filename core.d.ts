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
