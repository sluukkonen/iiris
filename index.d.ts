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

// Ah shit, here we go again…

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

export function binary<T1, T2, R>(fn: Fn2Rest<T1, T2, R>): Fn2<T1, T2, R>

export function constant<T>(value: T): () => T

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

export function entries<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<[K, T[K]]>

export function fromEntries<T>(
  entries: readonly [PropertyKey, T][]
): { [k: string]: T }

export function has(key: PropertyKey, obj: unknown): boolean
export function has(key: PropertyKey): (obj: unknown) => boolean

export function identity<T>(value: T): T

export function isArray(value: unknown): value is unknown[]

export function isBigInt(value: unknown): value is BigInt

export function isBoolean(value: unknown): value is boolean

export function isNil(value: unknown): value is null | undefined

export function isNull(value: unknown): value is null

export function isNumber(value: unknown): value is number

export function isObject(value: unknown): value is object

export function isString(value: unknown): value is string

export function isSymbol(value: unknown): value is Symbol

export function isUndefined(value: unknown): value is undefined

export function keys<T extends object>(
  obj: T | null | undefined
): Array<keyof T>

export function values<T extends object, K extends keyof T>(
  obj: T | null | undefined
): Array<T[K]>

export function unary<T, R>(fn: Fn1Rest<T, R>): Fn1<T, R>
