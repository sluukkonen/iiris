/**
 * The `iiris/map` module includes functions for working with Maps. It is
 * designed to be imported with a wildcard, e.g.
 *
 * ```typescript
 * import * as M from 'iiris/map'
 * ```
 *
 * @module
 */

/**
 * Create an empty map.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.empty()
 * // => Map(0) {}
 * ```
 *
 * @see singleton
 */
export function empty<K, V>(): Map<K, V>

/**
 * Return a new iterator containing the key-value pairs of the map in insertion order.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.entries()
 * // => [Map Entries] { [ 'a', 1 ] }
 * ```
 */
export function entries<K, V>(map: Map<K, V>): IterableIterator<[K, V]>

/**
 * Apply a `fn` to each `key`-`value` pair of the `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.forEach((k, v) => {
 *   conso
 * }, map)
 * ```
 */
export function forEach<K, V>(
  fn: (key: K, value: V) => void
): (map: Map<K, V>) => Map<K, V>
export function forEach<K, V>(
  fn: (key: K, value: V) => void,
  map: Map<K, V>
): Map<K, V>

/**
 * Create a map from an array of `[key, value]` pairs.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.fromEntries([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 3],
 * ])
 * // => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
 * ```
 *
 * @see entries
 */
export function fromEntries<K, V>(entries: Iterable<[K, V]>): Map<K, V>

/**
 * Convert an `object` to a map.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.fromObject({ a: 1, b: 2, c: 3 })
 * // => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
 * ```
 */
export function fromObject<K extends string, V>(object: Record<K, V>): Map<K, V>

/**
 * Retrieve the specified value from the `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.get('a', M.singleton('a', 1))
 * // => 1
 *
 * M.get('b', M.singleton('a', 1))
 * // => undefined
 * ```
 *
 * @see getOr
 */
export function get<K>(key: K): <V>(map: Map<K, V>) => V | undefined
export function get<K, V>(key: K, map: Map<K, V>): V | undefined

/**
 * Retrieve the specified value or `defaultValue` from the `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.getOr(999, 'a', M.singleton('a', 1))
 * // => 1
 *
 * M.getOr(999, 'b', M.singleton('a', 1))
 * // => 999
 * ```
 */
export function getOr<V>(
  defaultValue: V
): {
  <K>(key: K): (map: Map<K, V>) => V
  <K>(key: K, map: Map<K, V>): V
}
export function getOr<V, K>(defaultValue: V, key: K): (map: Map<K, V>) => V
export function getOr<V, K>(defaultValue: V, key: K, map: Map<K, V>): V

/**
 * Check if `map` contains the specified `key`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.has('a', M.singleton('a', 1))
 * // => true
 * ```
 */
export function has<K>(key: K): <V>(map: Map<K, V>) => boolean
export function has<K, V>(key: K, map: Map<K, V>): boolean

/**
 * Check if the `map` is empty.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.isEmpty(M.empty())
 * // => true
 * ```
 */
export function isEmpty<K, V>(map: Map<K, V>): boolean

/**
 * Return a new iterator containing the keys of the `map` in insertion order.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.keys(M.singleton('a', 1))
 * // => [Map Iterator] { 'a' }
 * ```
 */
export function keys<K, V>(map: Map<K, V>): IterableIterator<K>

/**
 * Return a map containing the results of applying `fn` to each `key` of the
 * original `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.mapKeys((k) => k.toUpperCase(), M.fromObject({ a: 1, b: 2, c: 3 }))
 * // => Map(3) { 'A' => 1, 'B' => 2, 'C' => 3 }
 * ```
 *
 * @see mapKeys
 */
export function mapKeys<K1, K2>(
  fn: (key: K1) => K2
): <V>(map: Map<K1, V>) => Map<K1, V>
export function mapKeys<K1, K2, V>(
  fn: (key: K1) => K2,
  map: Map<K1, V>
): Map<K1, V>

/**
 * Return a map containing the results of applying `fn` to each `value` of the
 * original `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.map((n) => n + 1, M.fromObject({ a: 1, b: 2, c: 3 }))
 * // => Map(3) { 'a' => 2, 'b' => 3, 'c' => 4 }
 * ```
 *
 * @see mapKeys
 */
export function map<V1, V2>(
  fn: (value: V1) => V2
): <K>(map: Map<K, V1>) => Map<K, V2>
export function map<V1, V2, K>(
  fn: (value: V1) => V2,
  map: Map<K, V1>
): Map<K, V2>

/**
 * Return a copy of `map` where `key` has been replaced by applying `fn` to its
 * current value.
 *
 * - If the `map` doesn't contain `key`, it is returned unchanged.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.modify('a', (n) => n + 1, M.singleton('a', 1))
 * // => Map(1) { 'a' => 2 }
 * ```
 *
 * @see modify
 * @see remove
 */
export function modify<K>(
  key: K
): {
  <V>(fn: (value: V) => V): (map: Map<K, V>) => Map<K, V>
  <V>(fn: (value: V) => V, map: Map<K, V>): Map<K, V>
}
export function modify<K, V>(
  key: K,
  fn: (value: V) => V
): (map: Map<K, V>) => Map<K, V>
export function modify<K, V>(
  key: K,
  fn: (value: V) => V,
  map: Map<K, V>
): Map<K, V>

/**
 * Return a copy of `map` without the specified `key`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.remove('a', M.singleton('a', 1))
 * // => Map(2) { 'a' => 1, 'b' => 2 }
 * ```
 *
 * @see modify
 * @see remove
 */
export function remove<K>(key: K): <V>(map: Map<K, V>) => Map<K, V>
export function remove<K, V>(key: K, map: Map<K, V>): Map<K, V>

/**
 * Return a copy of `map` with `key` set to `value`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.set('b', 2, M.singleton('a', 1))
 * // => Map(2) { 'a' => 1, 'b' => 2 }
 * ```
 *
 * @see modify
 * @see remove
 */
export function set<K>(
  key: K
): {
  <V>(value: V): (map: Map<K, V>) => Map<K, V>
  <V>(value: V): Map<K, V>
}
export function set<K, V>(key: K, value: V): (map: Map<K, V>) => Map<K, V>
export function set<K, V>(key: K, value: V, map: Map<K, V>): Map<K, V>

/**
 * Create a map with a single element.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.singleton('a', 1)
 * // => Map(1) { 'a' => 1 }
 * ```
 *
 * @see singleton
 */
export function singleton<K>(key: K): <V>(value: V) => Map<K, V>
export function singleton<K, V>(key: K, value: V): Map<K, V>

/**
 * Return the number of entries in the `map`.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.size(M.singleton('a', 1)
 * // => 1
 * ```
 */
export function size<K, V>(map: Map<K, V>): number

/**
 * Return a new iterator containing the values of the `map` in insertion order.
 *
 * @category Map
 * @example
 *
 * ```typescript
 * M.values(M.singleton('a', 1))
 * // => [Map Iterator] { 1 }
 * ```
 */
export function values<K, V>(map: Map<K, V>): IterableIterator<V>
