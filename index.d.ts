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

/** A function that takes at least zero arguments. */
export type VariadicFunction0<R> = (...args: any[]) => R
/** A function that takes at least one argument. */
export type VariadicFunction1<T, R> = (a1: T, ...args: any[]) => R
/** A function that takes at least two arguments. */
export type VariadicFunction2<T1, T2, R> = (a1: T1, a2: T2, ...args: any[]) => R
/** A function that takes at least three arguments. */
export type VariadicFunction3<T1, T2, T3, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  ...args: any[]
) => R
/** A function that takes at least four arguments. */
export type VariadicFunction4<T1, T2, T3, T4, R> = (
  a1: T1,
  a2: T2,
  a3: T3,
  a4: T4,
  ...args: any[]
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
export type Ordered = number | BigInt | string | Date | boolean

export type ArrayCallback<T, R> = (value: T, index: number, array: T[]) => R
export type ArrayPredicate<T> = ArrayCallback<T, boolean>
export type LeftReducer<T, R> = (
  accumulator: R,
  value: T,
  index: number,
  array: T[]
) => R
export type RightReducer<T, R> = (
  value: T,
  accumulator: R,
  index: number,
  array: T[]
) => R

export type ObjectCallback<T extends object, K extends keyof T, U> = (
  value: T[K],
  key: K,
  object: T
) => U

export type Comparator<T> = (value: T) => number

// Internal helper types

/** Removes undefined from T */
type Defined<T> = T extends undefined ? never : T

type HasKey<K extends string, V = unknown> = { [P in K]?: V }

type Expand<T> = T extends infer U ? U : never

type NullableHasKey<K extends string, V = unknown> =
  | HasKey<K, V>
  | null
  | undefined

type NullableArray<T = unknown> = readonly T[] | null | undefined

type NullableObject = object | null | undefined

type Gets<K extends string, T extends NullableHasKey<K>> = Expand<
  T extends null | undefined ? NonNullable<T>[K] | undefined : NonNullable<T>[K]
>

type Getter<K extends string> = <T extends NullableHasKey<K>>(
  object: T
) => Gets<K, T>

type ArrayGets<T extends NullableArray> = NonNullable<T>[number] | undefined

type ArrayGetter = <T extends NullableArray>(array: T) => ArrayGets<T>

type GetsOr<D, K extends string, T extends NullableHasKey<K>> = Expand<
  T extends null | undefined
    ? Defined<NonNullable<T>[K]> | D
    : undefined extends NonNullable<T>[K]
    ? Defined<NonNullable<T>[K]> | D
    : NonNullable<T>[K]
>

type Sets<T extends NullableObject, K extends string, V> = T extends
  | null
  | undefined
  ? Assign<NonNullable<T>, K, V> | { [P in K]: V }
  : Assign<NonNullable<T>, K, V>

type Assign<T extends object, K extends string, V> = {
  [P in keyof T]: P extends K ? V : T[P]
} &
  { [P in K]: V }

// Ah shit, here we go again…

export function add(n: number, m: number): number
export function add(n: BigInt, m: BigInt): BigInt
export function add(n: number): (m: number) => number
export function add(n: BigInt): (m: BigInt) => BigInt

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

export function append<T>(value: T, array: readonly T[]): T[]
export function append<T>(value: T): (array: readonly T[]) => T[]

export function ascend<T>(fn: (value: T) => Ordered): Comparator<T>

export function binary<T1, T2, R>(
  fn: VariadicFunction2<T1, T2, R>
): Function2<T1, T2, R>

export function clamp<T extends Ordered>(low: T, high: T, value: T): T
export function clamp(low: number, high: number): (value: number) => number
export function clamp(low: BigInt, high: BigInt): (value: BigInt) => BigInt
export function clamp(low: string, high: string): (value: string) => string
export function clamp(low: Date, high: Date): (value: Date) => Date
export function clamp(low: boolean, high: boolean): (value: boolean) => boolean
export function clamp(low: number): (high: number, value: number) => number
export function clamp(low: BigInt): (high: BigInt, value: BigInt) => BigInt
export function clamp(low: string): (high: string, value: string) => string
export function clamp(low: Date): (high: Date, value: Date) => Date
export function clamp(low: boolean): (high: boolean, value: boolean) => boolean
export function clamp(low: number): (high: number) => (value: number) => number
export function clamp(low: BigInt): (high: BigInt) => (value: BigInt) => BigInt
export function clamp(low: string): (high: string) => (value: string) => number
export function clamp(low: Date): (high: Date) => (value: Date) => number
export function clamp(
  low: boolean
): (high: boolean) => (value: boolean) => boolean

export function complement<T extends VariadicFunction0<boolean>>(fn: T): T

export function compose<T extends any[], R>(
  fn: (...args: T) => R
): (...args: T) => R
export function compose<T extends any[], T1, R>(
  fn1: Function1<T1, R>,
  fn2: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, R>(
  fn1: Function1<T2, R>,
  fn2: Function1<T1, T2>,
  fn3: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, R>(
  fn1: Function1<T3, R>,
  fn2: Function1<T2, T3>,
  fn3: Function1<T1, T2>,
  fn4: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, R>(
  fn1: Function1<T4, R>,
  fn2: Function1<T3, T4>,
  fn3: Function1<T2, T3>,
  fn4: Function1<T1, T2>,
  fn5: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, R>(
  fn1: Function1<T5, R>,
  fn2: Function1<T4, T5>,
  fn3: Function1<T3, T4>,
  fn4: Function1<T2, T3>,
  fn5: Function1<T1, T2>,
  fn6: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, R>(
  fn1: Function1<T6, R>,
  fn2: Function1<T5, T6>,
  fn3: Function1<T4, T5>,
  fn4: Function1<T3, T4>,
  fn5: Function1<T2, T3>,
  fn6: Function1<T1, T2>,
  fn7: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, R>(
  fn1: Function1<T7, R>,
  fn2: Function1<T6, T7>,
  fn3: Function1<T5, T6>,
  fn4: Function1<T4, T5>,
  fn5: Function1<T3, T4>,
  fn6: Function1<T2, T3>,
  fn7: Function1<T1, T2>,
  fn8: (...args: T) => T1
): (...args: T) => R
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, T8, R>(
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
export function compose<T extends any[], T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(
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

export function concat<T>(array: readonly T[], other: readonly T[]): T[]
export function concat<T>(array: readonly T[]): (other: readonly T[]) => T[]

export function constant<T>(value: T): () => T

export function countBy<T, K extends PropertyKey>(
  fn: (value: T) => K,
  array: readonly T[]
): Record<K, number>
export function countBy<T, K extends PropertyKey>(
  fn: (value: T) => K
): (array: readonly T[]) => Record<K, number>

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

export function dec(n: number): number
export function dec(n: BigInt): BigInt

export function descend<T>(fn: (value: T) => Ordered): Comparator<T>

export function divideBy(divisor: number, dividend: number): number
export function divideBy(divisor: BigInt, dividend: BigInt): BigInt
export function divideBy(divisor: number): (dividend: number) => number
export function divideBy(divisor: BigInt): (dividend: BigInt) => BigInt

export function drop<T>(n: number, array: readonly T[]): T[]
export function drop(n: number): <T>(array: readonly T[]) => T[]

export function dropLast<T>(n: number, array: readonly T[]): T[]
export function dropLast(n: number): <T>(array: readonly T[]) => T[]

export function dropLastWhile<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T[]
export function dropLastWhile<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T[]

export function dropWhile<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T[]
export function dropWhile<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T[]

export function entries<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<[K, T[K]]>

export function equals<T>(value: T, other: T): boolean
export function equals<T>(value: T): (other: T) => boolean

export function equalsBy<T, U>(fn: Function1<T, U>, value: T, other: T): boolean
export function equalsBy<T, U>(
  fn: Function1<T, U>,
  value: T
): (other: T) => boolean

export function every<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): boolean
export function every<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => boolean

export function find<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T | undefined
export function find<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T | undefined

export function findIndex<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): number
export function findIndex<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => number

export function findLast<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T | undefined
export function findLast<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T | undefined

export function findLastIndex<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): number
export function findLastIndex<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => number

export function filter<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T[]
export function filter<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T[]

export function flatMap<T, U>(
  fn: ArrayCallback<T, U[]>,
  array: readonly T[]
): U[]
export function flatMap<T, U>(
  fn: ArrayCallback<T, U[]>
): (array: readonly T[]) => U[]

export function flatten<T extends readonly unknown[], D extends number>(
  depth: D,
  array: T
): FlatArray<T, D>[]
export function flatten<D extends number>(
  depth: D
): <T extends readonly unknown[]>(array: T) => FlatArray<T, D>[]

export function forEach<T>(fn: ArrayCallback<T, void>, array: readonly T[]): T[]
export function forEach<T>(
  fn: ArrayCallback<T, void>
): (array: readonly T[]) => T[]

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
): {
  <U>(mapFn: (value: T) => U, array: readonly T[]): Record<K, U[]>
  <U>(mapFn: (value: T) => U): (array: readonly T[]) => Record<K, U[]>
}

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
): {
  (reducer: (accumulator: U, value: U) => U, array: readonly T[]): Record<K, U>
  (reducer: (accumulator: U, value: U) => U): (
    array: readonly T[]
  ) => Record<K, U>
}
export function groupMapReduce<T, K extends PropertyKey>(
  keyFn: (value: T) => K
): {
  <U>(
    mapFn: (value: T) => U,
    reducer: (accumulator: U, value: U) => U,
    array: readonly T[]
  ): Record<K, U>
  <U>(mapFn: (value: T) => U, reducer: (accumulator: U, value: U) => U): (
    array: readonly T[]
  ) => Record<K, U>
  <U>(mapFn: (value: T) => U): {
    (reducer: (accumulator: U, value: U) => U, array: readonly T[]): Record<
      K,
      U
    >
    (reducer: (accumulator: U, value: U) => U): (
      array: readonly T[]
    ) => Record<K, U>
  }
}

export function get<K extends string, T extends NullableHasKey<K>>(
  key: K,
  object: T
): Gets<K, T>
export function get<T extends NullableArray>(
  index: number,
  array: T
): ArrayGets<T>
export function get<K extends string>(key: K): Getter<K>
export function get(index: number): ArrayGetter

export function getOr<D, K extends string, T extends NullableHasKey<K>>(
  defaultValue: D,
  key: K,
  object: T
): GetsOr<D, K, T>
export function getOr<D, T>(
  defaultValue: D,
  index: number,
  array: NullableArray<T>
): T | D
export function getOr<D, K extends string>(
  defaultValue: D,
  key: K
): <T extends NullableHasKey<K>>(object: T) => GetsOr<D, K, T>
export function getOr<D>(
  defaultValue: D,
  index: number
): <T>(array: NullableArray<T>) => T | D
export function getOr<D>(
  defaultValue: D
): {
  <K extends string, T extends NullableHasKey<K>>(key: K, object: T): GetsOr<
    D,
    K,
    T
  >
  <T>(index: number, array: NullableArray<T>): T | D
  <K extends string>(key: K): <T extends NullableHasKey<K>>(
    object: T
  ) => GetsOr<D, K, T>
  (index: number): <T>(array: NullableArray<T>) => T | D
}

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

export function has<K extends string>(
  key: K,
  obj: unknown
): obj is { [P in K]: unknown }
export function has<K extends string>(
  key: K
): (obj: unknown) => obj is { [P in K]: unknown }

export function head<T>(array: readonly T[]): T | undefined

export function identity<T>(value: T): T

export function inc(n: number): number
export function inc(n: BigInt): BigInt

export function includes<T>(value: T, array: readonly T[]): boolean
export function includes<T>(value: T): (array: readonly T[]) => boolean

export function indexBy<T, K extends PropertyKey>(
  fn: (value: T) => K,
  array: readonly T[]
): Record<K, T>
export function indexBy<T, K extends PropertyKey>(
  fn: (value: T) => K
): (array: readonly T[]) => Record<K, T>

export function indexOf<T>(value: T, array: readonly T[]): number
export function indexOf<T>(value: T): (array: readonly T[]) => number

export function init<T>(array: readonly T[]): T[]

export function intersperse<T>(separator: T, array: readonly T[]): T[]
export function intersperse<T>(separator: T): (array: readonly T[]) => T[]

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

export function join(separator: string, array: readonly unknown[]): string
export function join(separator: string): (array: readonly unknown[]) => string

export function last<T>(array: readonly T[]): T | undefined

export function lastIndexOf<T>(value: T, array: readonly T[]): number
export function lastIndexOf<T>(value: T): (array: readonly T[]) => number

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

export function max<T extends Ordered>(value: T, other: T): T
export function max(value: number): (other: number) => number
export function max(value: BigInt): (other: BigInt) => BigInt
export function max(value: string): (other: string) => string
export function max(value: Date): (other: Date) => Date
export function max(value: boolean): (other: boolean) => boolean

export function maximum<T extends Ordered>(array: readonly T[]): T | undefined

export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: readonly T[]
): T | undefined
export function maximumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: readonly T[]) => T | undefined

export function map<T, U>(fn: ArrayCallback<T, U>, array: readonly T[]): U[]
export function map<T, U>(fn: ArrayCallback<T, U>): (array: readonly T[]) => U[]

export function mapMaybe<T, U>(
  fn: ArrayCallback<T, U | undefined>,
  array: readonly T[]
): U[]
export function mapMaybe<T, U>(
  fn: ArrayCallback<T, U | undefined>
): (array: readonly T[]) => U[]

export function mapValues<T extends object, K extends keyof T, U>(
  fn: ObjectCallback<T, K, U>,
  object: T
): Record<K, U>
export function mapValues<T extends object, K extends keyof T, U>(
  fn: ObjectCallback<T, K, U>
): (object: T) => Record<K, U>

export function min<T extends Ordered>(value: T, other: T): T
export function min(value: number): (other: number) => number
export function min(value: BigInt): (other: BigInt) => BigInt
export function min(value: string): (other: string) => string
export function min(value: Date): (other: Date) => Date
export function min(value: boolean): (other: boolean) => boolean

export function minimum<T extends Ordered>(array: readonly T[]): T | undefined

export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U,
  array: readonly T[]
): T | undefined
export function minimumBy<T, U extends Ordered>(
  fn: (value: T) => U
): (array: readonly T[]) => T | undefined

export function modify<K extends string, V, T extends NullableHasKey<K>>(
  key: K,
  fn: Function1<NonNullable<T>[K], V>,
  object: T
): Sets<T, K, V>
export function modify<K extends string, V1, V2>(
  key: K,
  fn: Function1<V1, V2>
): <T extends NullableHasKey<K, V1>>(object: T) => Sets<T, K, V2>
export function modify<K extends string>(
  key: K
): {
  <V, T extends NullableHasKey<K>>(
    fn: Function1<NonNullable<T>[K], V>,
    object: T
  ): Sets<T, K, V>
  <V1, V2>(fn: Function1<V1, V2>): <T extends NullableHasKey<K, V1>>(
    object: T
  ) => Sets<T, K, V2>
}

export function modify<T>(
  index: number,
  fn: Function1<T, T>,
  array: NullableArray<T>
): T[]
export function modify<T>(
  index: number,
  fn: Function1<T, T>
): (array: NullableArray<T>) => T[]
export function modify(
  index: number
): {
  <T>(fn: Function1<T, T>, array: NullableArray<T>): T[]
  <T>(fn: Function1<T, T>): (array: NullableArray<T>) => T[]
}

export function multiply(multiplicand: number, multiplier: number): number
export function multiply(multiplicand: BigInt, multiplier: BigInt): BigInt
export function multiply(multiplicand: number): (multiplier: number) => number
export function multiply(multiplicand: BigInt): (multiplier: BigInt) => number

export function negate(n: number): number
export function negate(n: BigInt): BigInt

export function none<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): boolean
export function none<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => boolean

export function noop(): void

export function of<T>(value: T): [T]

export function omit<T extends object, K extends keyof T>(
  keys: readonly K[],
  object: T
): Omit<T, K>
export function omit<K extends string>(
  keys: readonly K[]
): <T>(object: T) => Omit<T, Extract<keyof T, K>>

export function omitBy<T extends U, U extends object>(
  predicate: (value: T[keyof T], key: keyof T) => boolean,
  object: T
): U
export function omitBy<K extends string, V>(
  predicate: (value: V, key: K) => boolean
): <T extends Record<K, V>>(object: T) => T

export function pair<T, U>(first: T, second: U): [T, U]
export function pair<T>(first: T): <U>(second: U) => [T, U]

export function prepend<T>(value: T, array: readonly T[]): T[]
export function prepend<T>(value: T): (array: readonly T[]) => T[]

export function range(start: number, end: number): number[]
export function range(start: number): (end: number) => number[]

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

export function reverse<T>(array: readonly T[]): T[]

export function second<T>(first: unknown, second: T): T

export function pick<T extends object, K extends keyof T>(
  keys: readonly K[],
  object: T
): Pick<T, K>
export function pick<K extends string>(
  keys: readonly K[]
): <T>(object: T) => Pick<T, Extract<keyof T, K>>

export function pickBy<T extends U, U extends object>(
  predicate: (value: T[keyof T], key: keyof T) => boolean,
  object: T
): U
export function pickBy<K extends string, V>(
  predicate: (value: V, key: K) => boolean
): <T extends Record<K, V>>(object: T) => T

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

export function set<K extends string, V, T extends NullableObject>(
  key: K,
  value: V,
  object: T
): Sets<T, K, V>
export function set<T>(index: number, value: T, array: NullableArray<T>): T[]
export function set<K extends string, V>(
  key: K,
  value: V
): <T extends NullableObject>(object: T) => Sets<T, K, V>
export function set<T>(
  index: number,
  value: T
): (array: NullableArray<T>) => T[]
export function set<K extends string>(
  key: K
): {
  <V, T extends NullableObject>(value: V, object: T): Sets<T, K, V>
  <V>(value: V): <T extends NullableObject>(object: T) => Sets<T, K, V>
}
export function set(
  index: number
): {
  <T>(value: T, array: NullableArray<T>): T[]
  <T>(value: T): (array: NullableArray<T>) => T[]
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

export function some<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): boolean
export function some<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => boolean

export function sort<T>(comparator: Comparator<T>, array: readonly T[]): T[]
export function sort<T>(comparator: Comparator<T>): (array: readonly T[]) => T[]

export function sortBy<T>(fn: (value: T) => Ordered, array: readonly T[]): T[]
export function sortBy<T>(
  fn: (value: T) => Ordered
): (array: readonly T[]) => T[]

export function sortWith<T>(
  comparators: readonly Comparator<T>[],
  array: readonly T[]
): T[]
export function sortWith<T>(
  comparators: readonly Comparator<T>[]
): (array: readonly T[]) => T[]

export function subtractBy(subtrahend: number, minuend: number): number
export function subtractBy(subtrahend: BigInt, minuend: BigInt): BigInt
export function subtractBy(subtrahend: number): (minuend: number) => number
export function subtractBy(subtrahend: BigInt): (minuend: BigInt) => BigInt

export function sum(numbers: readonly number[]): number

export function sumBy<T>(fn: (value: T) => number, array: readonly T[]): number
export function sumBy<T>(
  fn: (value: T) => number
): (array: readonly T[]) => number

export function tail<T>(array: readonly T[]): T[]

export function take<T>(n: number, array: readonly T[]): T[]
export function take(n: number): <T>(array: readonly T[]) => T[]

export function takeLast<T>(n: number, array: readonly T[]): T[]
export function takeLast<T>(n: number): (array: readonly T[]) => T[]

export function takeLastWhile<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T[]
export function takeLastWhile<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T[]

export function takeWhile<T>(
  predicate: ArrayPredicate<T>,
  array: readonly T[]
): T[]
export function takeWhile<T>(
  predicate: ArrayPredicate<T>
): (array: readonly T[]) => T[]

export function tap<T>(fn: (value: T) => void): (value: T) => T

export function times<T>(fn: (index: number) => T, n: number): T[]
export function times<T>(fn: (index: number) => T): (n: number) => T[]

export function toMap<K, T>(entries: Iterable<[K, T]>): Map<K, T>

export function toSet<T>(values: Iterable<T>): Set<T>

export function values<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<T[K]>

export function unary<T, R>(fn: VariadicFunction1<T, R>): Function1<T, R>

export function uniq<T>(array: readonly T[]): T[]

export function uniqBy<T, U>(fn: (value: T) => U, array: T[]): T[]
export function uniqBy<T, U>(fn: (value: T) => U): (array: T[]) => T[]

export function zip<T, U>(array1: readonly T[], array2: readonly U[]): [T, U][]
export function zip<T>(
  array1: readonly T[]
): <U>(array2: readonly U[]) => [T, U][]

export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V,
  array1: readonly T[],
  array2: readonly U[]
): V[]
export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V,
  array1: readonly T[]
): (array2: readonly U[]) => V[]
export function zipWith<T, U, V>(
  fn: (value: T, other: U) => V
): {
  (array1: readonly T[], array2: readonly U[]): V[]
  (array1: readonly T[]): (array2: readonly U[]) => V[]
}
