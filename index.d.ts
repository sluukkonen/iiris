// Function type aliases

export type Fn0<R> = () => R
export type Fn1<T, R> = (a1: T) => R
export type Fn2<T1, T2, R> = (a1: T1, a2: T2) => R
export type Fn3<T1, T2, T3, R> = (a1: T1, a2: T2, a3: T3) => R
export type Fn4<T1, T2, T3, T4, R> = (a1: T1, a2: T2, a3: T3, a4: T4) => R

export type Fn0Rest<R> = (...args: any[]) => R
export type Fn1Rest<T, R> = (a1: T, ...args: any[]) => R
export type Fn2Rest<T1, T2, R> = (a1: T1, a2: T2, ...args: any[]) => R
export type Fn3Rest<T1, T2, T3, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  ...args: any[]
) => R
export type Fn4Rest<T1, T2, T3, T4, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  ...args: any[]
) => R

export type CurriedFn2<T1, T2, R> = {
  (a1: T1): Fn1<T2, R>
  (a1: T1, a2: T2): R
}

export type CurriedFn3<T1, T2, T3, R> = {
  (a1: T1): CurriedFn2<T2, T3, R>
  (a1: T1, a2: T2): Fn1<T3, R>
  (a1: T1, a2: T2, a3: T3): R
}

export type CurriedFn4<T1, T2, T3, T4, R> = {
  (a1: T1): CurriedFn3<T2, T3, T4, R>
  (a1: T1, a2: T2): CurriedFn2<T3, T4, R>
  (a1: T1, a2: T2, a3: T3): Fn1<T4, R>
  (a1: T1, a2: T2, a3: T3, a4: T4): R
}

export type Ordered = number | string | Date
export type ArrayPredicate<T> = (value: T, index: number) => boolean

// Ah shit, here we go again…

export function add(n: number, m: number): number
export function add(n: number): (m: number) => number

export function arity<R>(n: 0, fn: Fn0Rest<R>): Fn0<R>
export function arity<T, R>(n: 1, fn: Fn1Rest<T, R>): Fn1<T, R>
export function arity<T1, T2, R>(n: 2, fn: Fn2Rest<T1, T2, R>): Fn2<T1, T2, R>
export function arity<T1, T2, T3, R>(
  n: 3,
  fn: Fn3Rest<T1, T2, T3, R>
): Fn3<T1, T2, T3, R>
export function arity<T1, T2, T3, T4, R>(
  n: 4,
  fn: Fn4Rest<T1, T2, T3, T4, R>
): Fn4<T1, T2, T3, T4, R>
export function arity<R>(n: number, fn: Fn0Rest<R>): Fn0Rest<R>

export function append<T>(value: T, array: T[]): T[]
export function append<T>(value: T): (array: T[]) => T[]

export function binary<T1, T2, R>(fn: Fn2Rest<T1, T2, R>): Fn2<T1, T2, R>

export function clamp(low: number, high: number, value: number): number
export function clamp(low: string, high: string, value: string): string
export function clamp(low: Date, high: Date, value: Date): Date
export function clamp(low: number, high: number): (value: number) => number
export function clamp(low: string, high: string): (value: string) => string
export function clamp(low: Date, high: Date): (value: Date) => Date
export function clamp(low: number): (high: number, value: number) => number
export function clamp(low: string): (high: string, value: string) => string
export function clamp(low: Date): (high: Date, value: Date) => Date
export function clamp(low: number): (high: number) => (value: number) => number
export function clamp(low: string): (high: string) => (value: string) => number
export function clamp(low: Date): (high: Date) => (value: Date) => number

export function compose<T extends any[], R>(
  fn: (...args: T) => R
): (...args: T) => R
export function compose<T extends any[], T1, R>(
  fn1: Fn1<T1, R>,
  fn2: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, R>(
  fn1: Fn1<T2, R>,
  fn2: Fn1<T1, T2>,
  fn3: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, R>(
  fn1: Fn1<T3, R>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T1, T2>,
  fn4: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, R>(
  fn1: Fn1<T4, R>,
  fn2: Fn1<T3, T4>,
  fn3: Fn1<T2, T3>,
  fn4: Fn1<T1, T2>,
  fn5: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, R>(
  fn1: Fn1<T5, R>,
  fn2: Fn1<T4, T5>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T2, T3>,
  fn5: Fn1<T1, T2>,
  fn6: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, R>(
  fn1: Fn1<T6, R>,
  fn2: Fn1<T5, T6>,
  fn3: Fn1<T4, T5>,
  fn4: Fn1<T3, T4>,
  fn5: Fn1<T2, T3>,
  fn6: Fn1<T1, T2>,
  fn7: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, R>(
  fn1: Fn1<T7, R>,
  fn2: Fn1<T6, T7>,
  fn3: Fn1<T5, T6>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T3, T4>,
  fn6: Fn1<T2, T3>,
  fn7: Fn1<T1, T2>,
  fn8: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, T8, R>(
  fn1: Fn1<T8, R>,
  fn2: Fn1<T7, T8>,
  fn3: Fn1<T6, T7>,
  fn4: Fn1<T5, T6>,
  fn5: Fn1<T4, T5>,
  fn6: Fn1<T3, T4>,
  fn7: Fn1<T2, T3>,
  fn8: Fn1<T1, T2>,
  fn9: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
  fn1: Fn1<T9, R>,
  fn2: Fn1<T8, T9>,
  fn3: Fn1<T7, T8>,
  fn4: Fn1<T6, T7>,
  fn5: Fn1<T5, T6>,
  fn6: Fn1<T4, T5>,
  fn7: Fn1<T3, T4>,
  fn8: Fn1<T2, T3>,
  fn9: Fn1<T1, T2>,
  fn10: (...args: T) => T1
): (...args: T) => R

export function concat<T>(array: T[], other: T[]): T[]
export function concat<T>(array: T[]): (other: T[]) => T[]

export function constant<T>(value: T): () => T

export function countBy<T, K extends PropertyKey>(
  fn: (value: T) => K,
  array: readonly T[]
): Record<K, number>
export function countBy<T, K extends PropertyKey>(
  fn: (value: T) => K
): (array: readonly T[]) => Record<K, number>

export function curry<R>(fn: Fn0<R>): Fn0<R>
export function curry<T, R>(fn: Fn1<T, R>): Fn1<T, R>
export function curry<T1, T2, R>(fn: Fn2<T1, T2, R>): CurriedFn2<T1, T2, R>
export function curry<T1, T2, T3, R>(
  fn: Fn3<T1, T2, T3, R>
): CurriedFn3<T1, T2, T3, R>
export function curry<T1, T2, T3, T4, R>(
  fn: Fn4<T1, T2, T3, T4, R>
): CurriedFn4<T1, T2, T3, T4, R>

export function curryN<F extends CallableFunction>(n: 0, fn: F): F
export function curryN<F extends CallableFunction>(n: 1, fn: F): F
export function curryN<T1, T2, R>(
  n: 2,
  fn: Fn2Rest<T1, T2, R>
): CurriedFn2<T1, T2, R>
export function curryN<T1, T2, T3, R>(
  n: 3,
  fn: Fn3Rest<T1, T2, T3, R>
): CurriedFn3<T1, T2, T3, R>
export function curryN<T1, T2, T3, T4, R>(
  n: 4,
  fn: Fn4Rest<T1, T2, T3, T4, R>
): CurriedFn4<T1, T2, T3, T4, R>

export function dec(n: number): number

export function drop<T>(n: number, array: T[]): T[]
export function drop(n: number): <T>(array: T[]) => T[]

export function dropWhile<T>(predicate: ArrayPredicate<T>, array: T[]): T[]
export function dropWhile<T>(predicate: ArrayPredicate<T>): (array: T[]) => T[]

export function entries<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<[K, T[K]]>

export function find<T>(fn: ArrayPredicate<T>, array: T[]): T | undefined
export function find<T>(fn: ArrayPredicate<T>): (array: T[]) => T | undefined

export function findIndex<T>(fn: ArrayPredicate<T>, array: T[]): number
export function findIndex<T>(fn: ArrayPredicate<T>): (array: T[]) => number

export function findLast<T>(fn: ArrayPredicate<T>, array: T[]): T | undefined
export function findLast<T>(
  fn: ArrayPredicate<T>
): (array: T[]) => T | undefined

export function findLastIndex<T>(fn: ArrayPredicate<T>, array: T[]): number
export function findLastIndex<T>(fn: ArrayPredicate<T>): (array: T[]) => number

export function filter<T>(
  predicate: (value: T, index: number) => boolean,
  array: T[]
): T[]
export function filter<T>(
  predicate: (value: T, index: number) => boolean
): (array: T[]) => T[]

export function fromEntries<T>(
  entries: Iterable<[PropertyKey, T]>
): { [k: string]: T }

export function groupBy<T, K extends PropertyKey>(
  fn: (value: T) => K,
  array: readonly T[]
): Record<K, T[]>
export function groupBy<T, K extends PropertyKey>(
  fn: (value: T) => K
): (array: readonly T[]) => Record<K, T[]>

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
): <U>(mapFn: (value: T) => U, array: readonly T[]) => Record<K, U[]>
export function groupMap<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): <U>(mapFn: (value: T) => U) => (array: readonly T[]) => Record<K, U[]>

export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U,
  reducer: (accumulator: U, value: U) => U,
  array: readonly T[]
): Record<K, U>
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U,
  reducer: (accumulator: U, value: U) => U
): (array: readonly T[]) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U
): (
  reducer: (accumulator: U, value: U) => U,
  array: readonly T[]
) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey, U>(
  keyFn: (value: T) => K,
  mapFn: (value: T) => U
): (
  reducer: (accumulator: U, value: U) => U
) => (array: readonly T[]) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): <U>(
  mapFn: (value: T) => U,
  reducer: (accumulator: U, value: U) => U,
  array: readonly T[]
) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): <U>(
  mapFn: (value: T) => U,
  reducer: (accumulator: U, value: U) => U
) => (array: readonly T[]) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): <U>(
  mapFn: (value: T) => U
) => (
  reducer: (accumulator: U, value: U) => U,
  array: readonly T[]
) => Record<K, U>
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): <U>(
  mapFn: (value: T) => U
) => (
  reducer: (accumulator: U, value: U) => U
) => (array: readonly T[]) => Record<K, U>

export function gt(value: number, other: number): boolean
export function gt(value: string, other: string): boolean
export function gt(value: Date, other: Date): boolean
export function gt(value: number): (other: number) => boolean
export function gt(value: string): (other: string) => boolean
export function gt(value: Date): (other: Date) => boolean

export function gte(value: number, other: number): boolean
export function gte(value: string, other: string): boolean
export function gte(value: Date, other: Date): boolean
export function gte(value: number): (other: number) => boolean
export function gte(value: string): (other: string) => boolean
export function gte(value: Date): (other: Date) => boolean

export function has<P extends PropertyKey>(
  key: P,
  obj: unknown
): obj is { [K in P]: unknown }
export function has<P extends PropertyKey>(
  key: P
): (obj: unknown) => obj is { [K in P]: unknown }

export function head<T>(array: T[]): T | undefined

export function identity<T>(value: T): T

export function inc(n: number): number

export function indexBy<T, K extends PropertyKey>(
  fn: (value: T) => K,
  array: readonly T[]
): Record<K, T>
export function indexBy<T, K extends PropertyKey>(
  fn: (value: T) => K
): (array: readonly T[]) => Record<K, T>

export function init<T>(array: T[]): T[]

export function isArray(value: unknown): value is unknown[]

export function isBigInt(value: unknown): value is BigInt

export function isBoolean(value: unknown): value is boolean

export function isDate(value: unknown): value is Date

export function isError(value: unknown): value is Error

export function isFunction(value: unknown): value is Function

export function isNil(value: unknown): value is null | undefined

export function isNull(value: unknown): value is null

export function isNumber(value: unknown): value is number

export function isMap(value: unknown): value is Map<unknown, unknown>

export function isObject(value: unknown): value is object

export function isRegExp(value: unknown): value is RegExp

export function isSet(value: unknown): value is Set<unknown>

export function isString(value: unknown): value is string

export function isSymbol(value: unknown): value is Symbol

export function isUndefined(value: unknown): value is undefined

export function join(separator: string, array: unknown[]): string
export function join(separator: string): (array: unknown[]) => string

export function last<T>(array: T[]): T | undefined

export function lt(value: number, other: number): boolean
export function lt(value: string, other: string): boolean
export function lt(value: Date, other: Date): boolean
export function lt(value: number): (other: number) => boolean
export function lt(value: string): (other: string) => boolean
export function lt(value: Date): (other: Date) => boolean

export function lte(value: number, other: number): boolean
export function lte(value: string, other: string): boolean
export function lte(value: Date, other: Date): boolean
export function lte(value: number): (other: number) => boolean
export function lte(value: string): (other: string) => boolean
export function lte(value: Date): (other: Date) => boolean

export function keys<T extends object>(
  obj: T | null | undefined
): Array<keyof T>

export function max(value: number, other: number): number
export function max(value: string, other: string): string
export function max(value: Date, other: Date): Date
export function max(value: number): (other: number) => number
export function max(value: string): (other: string) => string
export function max(value: Date): (other: Date) => Date

export function maximum<T extends Ordered>(array: T[]): T | undefined

export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: T[]
): U | undefined
export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: T[]) => U | undefined

export function map<T, U>(fn: (value: T, index: number) => U, array: T[]): U[]
export function map<T, U = unknown>(
  fn: (value: T, index: number) => U
): (array: T[]) => U[]

export function min(value: number, other: number): number
export function min(value: string, other: string): string
export function min(value: Date, other: Date): Date
export function min(value: number): (other: number) => number
export function min(value: string): (other: string) => string
export function min(value: Date): (other: Date) => Date

export function minimum<T extends Ordered>(array: T[]): T | undefined

export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: T[]
): U | undefined
export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: T[]) => U | undefined

export function multiply(multiplicand: number, multiplier: number): number
export function multiply(multiplicand: number): (multiplier: number) => number

export function noop(): void

export function of<T>(value: T): [T]

export function pair<T, U>(first: T, second: U): [T, U]
export function pair<T>(first: T): <U>(second: U) => [T, U]

export function prepend<T>(value: T, array: T[]): T[]
export function prepend<T>(value: T): (array: T[]) => T[]

export function range(start: number, end: number): number[]
export function range(start: number): (end: number) => number[]

export function reduce<T, U>(
  fn: (accumulator: U, value: T, index: number) => U,
  initial: U,
  array: T[]
): U
export function reduce<T, U>(
  fn: (accumulator: U, value: T, index: number) => U,
  initial: U
): (array: T[]) => U
export function reduce<T, U>(
  fn: (accumulator: U, value: T, index: number) => U
): (initial: U, array: T[]) => U
export function reduce<T, U>(
  fn: (accumulator: U, value: T, index: number) => U
): (initial: U) => (array: T[]) => U

export function reduceRight<T, U>(
  fn: (value: T, accumulator: U, index: number) => U,
  initial: U,
  array: T[]
): U
export function reduceRight<T, U>(
  fn: (value: T, accumulator: U, index: number) => U,
  initial: U
): (array: T[]) => U
export function reduceRight<T, U>(
  fn: (value: T, accumulator: U, index: number) => U
): (initial: U, array: T[]) => U
export function reduceRight<T, U>(
  fn: (value: T, accumulator: U, index: number) => U
): (initial: U) => (array: T[]) => U

export function reverse<T>(array: T[]): T[]

export function second<T>(first: unknown, second: T): T

export function seq<T>(initial: T): T
export function seq<T, R>(initial: T, fn1: Fn1<T, R>): R
export function seq<T1, T2, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, R>
): R
export function seq<T1, T2, T3, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, R>
): R
export function seq<T1, T2, T3, T4, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, R>
): R
export function seq<T1, T2, T3, T4, T5, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T5, R>
): R
export function seq<T1, T2, T3, T4, T5, T6, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T5, T6>,
  fn6: Fn1<T6, R>
): R
export function seq<T1, T2, T3, T4, T5, T6, T7, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T5, T6>,
  fn6: Fn1<T6, T7>,
  fn7: Fn1<T7, R>
): R
export function seq<T1, T2, T3, T4, T5, T6, T7, T8, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T5, T6>,
  fn6: Fn1<T6, T7>,
  fn7: Fn1<T7, T8>,
  fn8: Fn1<T8, R>
): R
export function seq<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
  initial: T1,
  fn1: Fn1<T1, T2>,
  fn2: Fn1<T2, T3>,
  fn3: Fn1<T3, T4>,
  fn4: Fn1<T4, T5>,
  fn5: Fn1<T5, T6>,
  fn6: Fn1<T6, T7>,
  fn7: Fn1<T7, T8>,
  fn8: Fn1<T8, T9>,
  fn9: Fn1<T9, R>
): R

export function slice<T>(start: number, end: number, array: T[]): T[]
export function slice(start: number, end: number): <T>(array: T) => T[]
export function slice(start: number): <T>(end: number, array: T) => T[]
export function slice(start: number): (end: number) => <T>(array: T) => T[]

export function sum(numbers: number[]): number

export function sumBy<T>(fn: (value: T) => number, array: T[]): number
export function sumBy<T>(fn: (value: T) => number): (array: T[]) => number

export function tail<T>(array: T[]): T[]

export function take<T>(n: number, array: T[]): T[]
export function take(n: number): <T>(array: T[]) => T[]

export function takeWhile<T>(predicate: ArrayPredicate<T>, array: T[]): T[]
export function takeWhile<T>(predicate: ArrayPredicate<T>): (array: T[]) => T[]

export function times<T>(fn: (index: number) => T, n: number): T[]
export function times<T>(fn: (index: number) => T): (n: number) => T[]

export function values<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<T[K]>

export function unary<T, R>(fn: Fn1Rest<T, R>): Fn1<T, R>

export function zip<T, U>(array1: T[], array2: U[]): [T, U][]
export function zip<T>(array1: T[]): <U>(array2: U[]) => [T, U][]

export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V,
  array1: T[],
  array2: U[]
): V[]
export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V,
  array1: T[]
): (array2: U[]) => V[]
export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V
): (array1: T[], array2: U[]) => V[]
export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V
): (array1: T[]) => (array2: U[]) => V[]
