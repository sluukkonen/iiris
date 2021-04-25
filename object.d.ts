/**
 * The `iiris/set` module includes functions for working with Objects. It is
 * designed to be imported with a wildcard, e.g.
 *
 * ```typescript
 * import * as O from 'iiris/object'
 * ```
 *
 * @module
 */

/** An object that has a property `K` of type `V`. */

type HasKey<K extends string, V = unknown> = { [P in K]?: V }

/** Remove `undefined` from `T` */
type Defined<T> = T extends undefined ? never : T
/**
 * Return an array of the own enumerable property key-value pairs of `object`
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.entries({ a: 1, b: 2, c: 3 })
 * // => [['a', 1], ['b', 2], ['c', 3]]
 * ```
 *
 * @see fromEntries
 * @see keys
 * @see values
 */
export function entries<T extends object>(
  object: T
): Array<[keyof T & string, T[keyof T & string]]>

/**
 * Create an object from an array of `[key, value]` pairs.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.fromEntries([
 *   ['a', 1],
 *   ['b', 2],
 *   ['c', 3],
 * ])
 * // => { a: 1, b: 2, c: 3 }
 * ```
 *
 * @see entries
 */
export function fromEntries<K extends string, V>(
  entries: [K, V][]
): Record<K, V>

/**
 * Convert a `map` with string keys to an object.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.fromMap(
 *   new Map([
 *     ['a', 1],
 *     ['b', 2],
 *     ['c', 3],
 *   ])
 * )
 * // => { a: 1, b: 2, c: 3 }
 * ```
 */
export function fromMap<K extends string, V>(map: Map<K, V>): Record<K, V>

/**
 * Check if `key` is an own property of `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.has('a', { a: 1 })
 * // => true
 *
 * O.has('toString', { a: 1 })
 * // => false
 * ```
 */
export function has<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => boolean
export function has<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): boolean

/**
 * Return an array of the own enumerable property keys of `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.keys({ a: 1, b: 2, c: 3 })
 * // => ['a', 'b', 'c']
 * ```
 *
 * @see entries
 * @see values
 */
export function keys<T extends object>(object: T): Array<keyof T & string>

/**
 * Return an object containing the results of applying `fn` to each key of the
 * original `object`.
 *
 * If multiple keys map to the same new key, the latest value is selected.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
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
 * Return an object containing the results of applying `fn` to each value of the
 * original `object`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.mapValues((n) => n + 1, { a: 1, b: 2, c: 3 })
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
 * O.merge({ a: 1, b: 1 }, { b: 2, c: 2 })
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
 * Return a copy of `object` where the property `key` has replaced by applying
 * `fn` to its current value.
 *
 * - If `key` is not an own property of `object`, the `object` is returned unchanged.
 * - If `fn` returns `undefined`, the property is removed.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
 * // => { a: 2, b: 2, c: 3 }
 *
 * O.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 *
 * O.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
 * // => { a: 1, b: 2, c: 3, d: 4 }
 * ```
 *
 * @see set
 * @see remove
 */
export function modify<K extends string>(
  key: K
): {
  <V>(fn: (value: V) => V): <T extends HasKey<K, V>>(object: T) => T
  <T extends HasKey<K>>(fn: (value: Defined<T[K]>) => T[K], object: T): T
}
export function modify<K extends string, V>(
  key: K,
  fn: (value: V) => V
): <T extends HasKey<K, V>>(object: T) => T
export function modify<K extends keyof T & string, T extends object>(
  key: K,
  fn: (value: Defined<T[K]>) => T[K],
  object: T
): T

/**
 * Return a copy of `object` without the specified `keys`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
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
 * Retrieves the property `key` from `object` or `undefined`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.get('a', { a: 1, b: 2, c: 3 })
 * // => 1
 *
 * O.get('a', {})
 * // => undefined
 * ```
 *
 * @see getOr
 */
export function get<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => T[K]
export function get<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): T[K]

/**
 * Like {@link get}, but if the resolved value is `undefined`, `defaultValue` is
 * returned instead.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.getOr(999, 'a', { a: 1, b: 2, c: 3 })
 * // => 1
 *
 * O.getOr(999, 'a', {})
 * // => 999
 *
 * O.getOr(999, 'a', { a: undefined })
 * // => 999
 * ```
 *
 * @see get
 */
export function getOr<V>(
  defaultValue: V
): {
  <K extends string>(key: K): <T extends HasKey<K, V>>(
    object: T
  ) => Defined<T[K]> | V
  <K extends string, T extends HasKey<K, V>>(key: K, object: T):
    | Defined<T[K]>
    | V
}
export function getOr<V, K extends string>(
  defaultValue: V,
  key: K
): <T extends HasKey<K, V>>(object: T) => Defined<T[K]> | V
export function getOr<V extends T[K], K extends keyof T & string, T>(
  defaultValue: V,
  key: K,
  object: T
): Defined<T[K]> | V

/**
 * Return a copy of `object` without the property `key`.
 *
 * - If `key` is not an own property of `object`, the `object` is returned unchanged.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.remove('a', { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 * ```
 */
export function remove<K extends string>(
  key: K
): <T extends HasKey<K>>(object: T) => Omit<T, K>
export function remove<K extends keyof T & string, T extends object>(
  key: K,
  object: T
): Omit<T, K>

/**
 * Return a copy of `object` with only the specified `keys`.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
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
 * Return a copy of `object` with property `key` set to `value`.
 *
 * - If `value` is `undefined`, the property is removed.
 *
 * @category Object
 * @example
 *
 * ```typescript
 * O.setProp('a', 999, { a: 1, b: 2, c: 3 })
 * // => { a: 999, b: 2, c: 3 }
 *
 * O.setProp('a', undefined, { a: 1, b: 2, c: 3 })
 * // => { b: 2, c: 3 }
 * ```
 *
 * @see modify
 * @see remove
 */
export function set<K extends string>(
  key: K
): {
  <V>(value: V): <T extends HasKey<K, V>>(object: T) => T
  <T extends HasKey<K>>(value: T[K], object: T): T
}
export function set<K extends string, V>(
  key: K,
  value: V
): <T extends HasKey<K, V>>(object: T) => T
export function set<K extends keyof T & string, T extends object>(
  key: K,
  value: T[K],
  object: T
): T

/**
 * Return an array of the own enumerable property values of `object`
 *
 * @category Object
 * @example
 *
 * ```typescript
 * > O.values({ a: 1, b: 2, c: 3 })
 * [1, 2, 3]
 * ```
 *
 * @see keys
 * @see entries
 */
export function values<T extends object>(object: T): T[keyof T & string][]
