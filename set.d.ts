/**
 * The `iiris/set` module includes functions for working with Sets. It is
 * designed to be imported with a wildcard, e.g.
 *
 * ```typescript
 * import * as S from 'iiris/array'
 * ```
 *
 * @module
 */

/**
 * Return a copy of `set` with `value`.
 *
 * - If `set` already contains `value`, it is returned unchanged.
 *
 * @category Basic set operations
 * @example
 *
 * ```typescript
 * S.add(4, S.from([1, 2, 3]))
 * // => Set(4) { 1, 2, 3, 4 }
 * ```
 *
 * @see add
 * @see has
 */
export function add<T>(value: T): (set: Set<T>) => Set<T>
export function add<T>(value: T, set: Set<T>): Set<T>

/**
 * Calculate the
 * {@link https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement difference}
 * between two sets.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * S.difference(S.from([1, 2, 3]), S.from([2, 3, 4]))
 * // => Set(4) { 1 }
 * ```
 *
 * @see intersection
 * @see union
 */
export function difference<T>(first: Set<T>): (second: Set<T>) => Set<T>
export function difference<T>(first: Set<T>, second: Set<T>): Set<T>

/**
 * Create an empty set.
 *
 * @category Creating sets
 * @example
 *
 * ```typescript
 * S.empty()
 * // => Set(0) {}
 * ```
 *
 * @see from
 * @see singleton
 */
export function empty<T>(): Set<T>

/**
 * Convert an `iterable` into a set.
 *
 * @category Creating sets
 * @example
 *
 * ```typescript
 * S.from([1, 2, 3])
 * // => Set(3) { 1, 2, 3 }
 * ```
 *
 * @see empty
 * @see singleton
 */
export function from<T>(iterable: Iterable<T>): Set<T>

/**
 * Check if `set` contains `value`.
 *
 * @example
 *
 * ```typescript
 * S.has(1, S.from([1, 2, 3]))
 * // => true
 * ```
 */
export function has<T>(value: T): (set: Set<T>) => boolean
export function has<T>(value: T, set: Set<T>): boolean

/**
 * Calculate the
 * {@link https://en.wikipedia.org/wiki/Intersection_(set_theory) intersection}
 * between two sets.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * S.intersection(S.from([1, 2, 3]), S.from([2, 3, 4]))
 * // => Set(4) { 2, 3 }
 * ```
 *
 * @see intersection
 * @see union
 */
export function intersection<T>(first: Set<T>): (second: Set<T>) => Set<T>
export function intersection<T>(first: Set<T>, second: Set<T>): Set<T>

/**
 * Check if the `set` is empty.
 *
 * @example
 *
 * ```typescript
 * S.isEmpty(S.empty())
 * // => true
 * ```
 */
export function isEmpty<T>(set: Set<T>): boolean

/**
 * Return a copy of `set` without `value`.
 *
 * - If `set` doesn't contain `value`, it is returned unchanged.
 *
 * @category Basic set operations
 * @example
 *
 * ```typescript
 * S.remove(1, S.from([1, 2, 3]))
 * // => Set(2) { 2, 3 }
 * ```
 *
 * @see add
 * @see has
 */
export function remove<T>(value: T): (set: Set<T>) => Set<T>
export function remove<T>(value: T, set: Set<T>): Set<T>

/**
 * Create a singleton set containing `value`.
 *
 * @category Creating sets
 * @example
 *
 * ```typescript
 * S.singleton(1)
 * // => Set(1) { 1 }
 * ```
 *
 * @see empty
 * @see from
 */
export function singleton<T>(value: T): Set<T>

/**
 * Calculate the {@link https://en.wikipedia.org/wiki/Union_(set_theory) union}
 * between two sets.
 *
 * @category Set operations
 * @example
 *
 * ```typescript
 * S.union(S.from([1, 2, 3]), S.from([2, 3, 4]))
 * // => Set(4) { 1, 2, 3, 4 }
 * ```
 *
 * @see difference
 * @see intersection
 */
export function union<T>(first: Set<T>): (second: Set<T>) => Set<T>
export function union<T>(first: Set<T>, second: Set<T>): Set<T>
