/**
 * The `iiris/text` module includes functions for working with text. It is
 * designed to be imported with a wildcard, e.g.
 *
 * ```typescript
 * import * as T from 'iiris/text'
 * ```
 *
 * @module
 */

/**
 * Convert the first code point of `string` to uppercase and the rest to lowercase.
 *
 * @category String
 * @example
 *
 * ```typescript
 * T.capitalize('aBc')
 * // => 'Abc'
 * ```
 *
 * @see toLowerCase
 * @see toUpperCase
 */
export function capitalize(string: string): string

/**
 * Split the `string` into an array of substrings between each `separator`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * T.split(', ', 'a, b, c')
 * // => ['a', 'b', 'c']
 * ```
 *
 * @see join
 */
export function split(separator: RegExp | string): (string: string) => string
export function split(separator: RegExp | string, string: string): string

/**
 * Check if `string` matches the `regexp`.
 *
 * @category String
 * @example
 *
 * ```typescript
 * T.test(/abc/, 'abc')
 * // => true
 * ```
 */
export function test(regexp: RegExp): (string: string) => boolean
export function test(regexp: RegExp, string: string): boolean

/**
 * Convert `string` to lowercase.
 *
 * @category String
 * @example
 *
 * ```typescript
 * T.toLowerCase('ABC')
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
 * T.toUpperCase('abc')
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
 * T.trim('  abc  ')
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
 * T.trimEnd('  abc  ')
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
 * T.trimStart('  abc  ')
 * // => 'abc  '
 * ```
 *
 * @see trimEnd
 * @see trim
 */
export function trimStart(string: string): string
