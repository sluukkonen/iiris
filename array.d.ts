import { Ordered } from './index.js'

/**
 * Append a new element to the end of an array.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.append(4, [1, 2, 3])
 * // => [1, 2, 3, 4]
 * ```
 *
 * @see prepend
 * @see concat
 */
export function append<T>(value: T): (array: readonly T[]) => T[]
export function append<T>(value: T, array: readonly T[]): T[]

/**
 * Concatenate two arrays together.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.concat([1, 2, 3], [4, 5, 6])
 * // => [1, 2, 3, 4, 5, 6]
 * ```
 *
 * @see append
 * @see prepend
 */
export function concat<T>(array: readonly T[]): (other: readonly T[]) => T[]
export function concat<T>(array: readonly T[], other: readonly T[]): T[]

/**
 * Count the number of elements in the `array` the satisfy the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * A.count((n) => n > 1, [1, 2, 3])
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
 * A.countBy((u) => u.name, users)
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
 * Drop the first `n` elements of an `array`.
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * A.drop(1, [1, 2, 3])
 * // => [2, 3]
 *
 * A.drop(2, [1, 2, 3])
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
 * A.dropLast(1, [1, 2, 3])
 * // => [1, 2]
 *
 * A.dropLast(2, [1, 2, 3])
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
 * A.dropLastWhile((n) => n > 1, [1, 2, 3])
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
 * A.dropWhile((n) => n === 1, [1, 2, 3])
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
 * Create an empty array.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.empty()
 * // => []
 * ```
 * @see from
 * @see singleton
 */
export function empty<T>(): T[]

/**
 * Check if every element in the `array` satisfies the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * A.every((n) => n < 10, [1, 2, 3])
 * // => true
 *
 * A.every((n) => n < 3, [1, 2, 3])
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
 * A.find((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'b'
 *
 * A.find((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.find((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'b'
 *
 * A.find((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.findIndex((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 1
 *
 * A.findIndex((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.findLast((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'c'
 *
 * A.findLast((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.findLast((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 'c'
 *
 * A.findLast((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.findLastIndex((c) => c !== 'a', ['a', 'b', 'c'])
 * // => 2
 *
 * A.findLastIndex((c) => c === 'x', ['a', 'b', 'c'])
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
 * A.filter((n) => n > 1, [1, 2, 3])
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
 * A.filter((n) => n > 1, [1, 2, 3])
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
 * A.filterWithIndex((i, n) => i + n === 3, [1, 2, 3])
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
 * A.flatMap((n) => [n, n], [1, 2, 3])
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
 * A.flatten(1, [1, [2, [3]]])
 * // => [1, 2, [3]]
 *
 * A.flatten(2, [1, [2, [3]]])
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
 * Apply `fn` to each element of the `array` and return the `array`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.forEach(console.log, ['h', 'i', '!'])
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
 * A.forEachWithIndex(console.log, ['h', 'i', '!'])
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
 * Convert an `iterable` into an array.
 *
 * `A.from` is like `Array.from` but without support for mapping the values.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.from(new Set([1, 2, 3))
 * // => [1, 2, 3]
 * ```
 *
 * @see empty
 * @see singleton
 */
export function from<T>(iterable: Iterable<T>): T[]

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

 * A.groupBy((u) => u.name, users)
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
 * const agesByName = A.groupMap((u) => u.age, (u) => u.name, users)
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
 * const sumOfAgesByName = A.groupMapReduce(
 *   (sum, n) => sum + n,
 *   (u) => u.age,
 *   (u) => u.name,
 *   users
 * ) // => { Alice: 40, Bob: 20 }
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
 * Return the first element of the `array` or `undefined`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.head([1, 2, 3])
 * // => 1
 *
 * A.head([])
 * // => undefined
 * ```
 *
 * @see tail
 * @see init
 * @see last
 */
export function head<T>(array: readonly T[]): T | undefined

/**
 * Check if the `array` includes the specified `value`, using {@link equals} for
 * determining equality.
 *
 * @category Searching arrays by value
 * @example
 *
 * ```typescript
 * A.includes(1, [1, 2, 3])
 * // => true
 *
 * A.includes(0, [1, 2, 3])
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
 * A.indexBy((u) => u.id, users)
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
 * A.indexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => 1
 *
 * A.indexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
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
 * A.init([1, 2, 3])
 * // => [1, 2]
 *
 * A.init([])
 * // => []
 * ```
 *
 * @see last
 * @see head
 * @see tail
 */
export function init<T>(array: readonly T[]): T[]

/**
 * Return a copy of `array` with `separator` inserted between each element.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * A.intersperse(',', ['a', 'b', 'c'])
 * // => ['a', ',', 'b', ',', 'c']
 *
 * A.intersperse(',', [])
 * // => []
 * ```
 *
 * @see join
 */
export function intersperse<T>(separator: T): (array: readonly T[]) => T[]
export function intersperse<T>(separator: T, array: readonly T[]): T[]

/**
 * Check if `array` is empty.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.isEmpty([1, 2, 3])
 * // => false
 *
 * A.isEmpty([])
 * // => true
 * ```
 *
 * @see length
 */
export function isEmpty<T>(array: readonly T[]): boolean

/**
 * Convert the `array` to a string, inserting the `separator` between each
 * element.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * A.join(', ', [1, 2, 3])
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
 * A.last([1, 2, 3])
 * // => 3
 *
 * A.last([])
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
 * A.lastIndexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => 4
 *
 * A.lastIndexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
 * // => -1
 * ```
 *
 * @see indexOf
 * @see includes
 */
export function lastIndexOf<T>(value: T): (array: readonly T[]) => number
export function lastIndexOf<T>(value: T, array: readonly T[]): number

/**
 * Return the length of an `array`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.length([1, 2, 3])
 * // => 3
 *
 * A.length([])
 * // => 0
 * ```
 *
 * @see isEmpty
 */
export function length<T>(array: readonly T[]): number

/**
 * Return an array containing the results of applying `fn` to each element in
 * the original `array`.
 *
 * @category Transforming arrays
 * @example
 *
 * ```typescript
 * A.map((n) => n + 1, [1, 2, 3])
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
 * A.mapWithIndex((i, c) => `${i}-${c}`, ['a', 'b', 'c'])
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
 * A.mapMaybe((u) => u.age, users)
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
 * Return the smallest element of `array` or `undefined`.
 *
 * @category Reducing arrays
 * @example
 *
 * ```typescript
 * A.minimum([1, 2, 3])
 * // => 1
 *
 * A.minimum([])
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
 * A.minimumBy((u) => u.age, users)
 * // => { name: 'Alice', age: 10 }
 * ```
 *
 * @see minimum
 * @see maximumBy
 */
export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: readonly T[]) => T | undefined
export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U,
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
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.modify(0, (n) => n + 1, [1, 2, 3])
 * // => [2, 2, 3]
 *
 * A.modify(-1, (n) => n + 1, [1, 2, 3])
 * // => [1, 2, 4]
 *
 * A.modify(0, () => undefined, [1, 2, 3])
 * // => [2, 3]
 *
 * A.modify(999, (n) => n + 1, [1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see set
 * @see remove
 */
export function modify(
  index: number
): {
  <T>(fn: (value: T) => T): (array: readonly T[]) => T[]
  <T>(fn: (value: T) => T, array: readonly T[]): T[]
}
export function modify<T>(
  index: number,
  fn: (value: T) => T
): (array: readonly T[]) => T[]
export function modify<T>(
  index: number,
  fn: (value: T) => T,
  array: readonly T[]
): T[]

/**
 * Return the element at `index` from `array` or `undefined`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.at(0, [1, 2, 3])
 * // => 1
 *
 * A.at(0, [])
 * // => undefined
 * ```
 *
 * @see atOr
 */
export function at(index: number): <T>(array: readonly T[]) => T | undefined
export function at<T>(index: number, array: readonly T[]): T | undefined

/**
 * Like {@link at}, but if the resolved value is `undefined`, `defaultValue` is
 * returned instead.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.atOr(999, 0, [1, 2, 3])
 * // => 1
 *
 * A.atOr(999, 0, [])
 * // => 999
 *
 * A.atOr(999, 0, [undefined])
 * // => 999
 * ```
 *
 * @see at
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
 * Check if none of the elements in the `array` satisfy the `predicate`.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * A.none((n) => n > 5, [1, 2, 3])
 * // => true
 *
 * A.none((n) => n > 5, [1, 2, 3])
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
 * Partition the `array` into two arrays, the first containing the elements
 * that satisfy the `guard` and the second containing the elements that do not.
 *
 * @category Searching arrays with a predicate
 * @example
 *
 * ```typescript
 * const [evens, odds] = A.partition((n) => n % 2 === 0, [1, 2, 3])
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
 * const [evens, odds] = A.partition((n) => n % 2 === 0, [1, 2, 3])
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
 * A.prepend(0, [1, 2, 3])
 * // => [0, 1, 2, 3]
 * ```
 *
 * @see append
 * @see concat
 */
export function prepend<T>(value: T): (array: readonly T[]) => T[]
export function prepend<T>(value: T, array: readonly T[]): T[]

/**
 * Create an array of numbers between `start` (inclusive) and `end`
 * (exclusive).
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.range(0, 10)
 * // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * A.range(0, 0)
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
 * A.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
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
 * A.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
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
 * Return a copy of `array` without the element at `index`.
 *
 * - If `index` is not within the `array` bounds, the `array` is returned
 *   unchanged.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.remove(0, [1, 2, 3])
 * // => [2, 3]
 *
 * A.remove(-1, [1, 2, 3])
 * // => [1, 2]
 *
 * A.remove(999, [1, 2, 3])
 * // => [1, 2, 3]
 * ```
 *
 * @see modify
 * @see set
 */
export function remove(index: number): <T>(array: readonly T[]) => T[]
export function remove<T>(index: number, array: readonly T[]): T[]

/**
 * Repeat the given `value` `n` times.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.repeat('a', 5)
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
 * A.reverse([1, 2, 3])
 * // => [3, 2, 1]
 * ```
 */
export function reverse<T>(array: readonly T[]): T[]

/**
 * Returns a copy of `array` where the element at `index` has been replaced with
 * `value`.
 *
 * - If `index` is not within the `array` bounds, the `array` is returned
 *   unchanged.
 * - Removes the element if `value` is `undefined`.
 *
 * @category Basic array operations
 * @example
 *
 * ```typescript
 * A.set(0, 999, [1, 2, 3])
 * // => [999, 2, 3]
 *
 * A.set(-1, 999, [1, 2, 3])
 * // => [1, 2, 999]
 *
 * A.set(999, 999, [1, 2, 3])
 * // => [1, 2, 3]
 *
 * A.set(0, undefined, [1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @see modify
 * @see remove
 */
export function set(
  index: number
): {
  <T>(value: T | undefined): (array: readonly T[]) => T[]
  <T>(value: T | undefined, array: readonly T[]): T[]
}
export function set<T>(
  index: number,
  value: T | undefined
): (array: readonly T[]) => T[]
export function set<T>(
  index: number,
  value: T | undefined,
  array: readonly T[]
): T[]

/**
 * Create a singleton array containing `value`
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.of(1)
 * // => [1]
 *
 * A.of(1, 2, 3)
 * // => [1, 2, 3]
 * ```
 *
 * @see from
 * @see empty
 */
export function singleton<T>(values: T): [T]

/**
 * Create a copy of `array` containing the elements from `start` (inclusive)
 * to `end` (exclusive).
 *
 * @category Slicing arrays
 * @example
 *
 * ```typescript
 * A.slice(0, 2, [1, 2, 3])
 * // => [1, 2]
 *
 * A.slice(1, 2, [1, 2, 3])
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
 * A.some((n) => n > 2, [1, 2, 3])
 * // true
 *
 * A.some((n) => n > 5, [1, 2, 3])
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
 * A.sort((a, b) => a - b, [3, 2, 1])
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
 * A.sortBy((u) => u.name, users)
 * // => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]
 *
 * A.sortBy((u) => u.age, users)
 * // => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
 * ```
 *
 * @see sort
 * @see sortWith
 */
export function sortBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: readonly T[]) => T[]
export function sortBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: readonly T[]
): T[]

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
 * A.sortWith([F.descend((u) => u.age), F.ascend((u) => u.name)], users)
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
 * const numbers = A.repeat(0.1, 10)
 * // => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
 *
 * A.sum(numbers)
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
 * A.sumBy((u) => u.age, [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
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
 * A.tail([1, 2, 3])
 * // => [2, 3]
 *
 * A.tail([])
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
 * A.take(2, [1, 2, 3])
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
 * A.takeLast(2, [1, 2, 3])
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
 * A.takeLastWhile((n) => n >= 2, [1, 2, 3])
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
 * A.takeWhile((n) => n <= 2, [1, 2, 3])
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
 * Create an array of length `n` by applying `fn` to the index of each element.
 *
 * @category Building arrays
 * @example
 *
 * ```typescript
 * A.times((n) => n * 10, 3)
 * // => [0, 10, 20]
 * ```
 *
 * @see range
 * @see repeat
 */
export function times<T>(fn: (index: number) => T): (n: number) => T[]
export function times<T>(fn: (index: number) => T, n: number): T[]

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
 * A.zip(['a', 'b', 'c'], [1, 2, 3])
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see zipWith
 * @see zipObject
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
 * A.zipObject(['a', 'b', 'c'], [1, 2, 3])
 * // => { a: 1, b: 2, c: 3 }
 * ```
 *
 * @see zip
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
 * A.zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6])
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
