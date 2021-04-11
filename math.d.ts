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
