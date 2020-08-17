// Function type aliases

export type Fn0<R> = () => R
export type Fn1<A, R> = (a1: A) => R
export type Fn2<A, B, R> = (a1: A, a2: B) => R
export type Fn3<A, B, C, R> = (a1: A, a2: B, a3: C) => R
export type Fn4<A, B, C, D, R> = (a1: A, a2: B, a3: C, a4: D) => R

export type FnRest0<R> = (...args: any[]) => R
export type FnRest1<A, R> = (a1: A, ...args: any[]) => R
export type FnRest2<A, B, R> = (a1: A, a2: B, ...args: any[]) => R
export type FnRest3<A, B, C, R> = (a1: A, a2: B, a3: C, ...args: any[]) => R
export type FnRest4<A, B, C, D, R> = (
  a1: A,
  a2: B,
  a3: C,
  a4: D,
  ...args: any[]
) => R

export type CurriedFn2<A, B, R> = {
  (a1: A): Fn1<B, R>
  (a1: A, a2: B): R
}

export type CurriedFn3<A, B, C, R> = {
  (a1: A): CurriedFn2<B, C, R>
  (a1: A, a2: B): Fn1<C, R>
  (a1: A, a2: B, a3: C): R
}

export type CurriedFn4<A, B, C, D, R> = {
  (a1: A): CurriedFn3<B, C, D, R>
  (a1: A, a2: B): CurriedFn2<C, D, R>
  (a1: A, a2: B, a3: C): Fn1<D, R>
  (a1: A, a2: B, a3: C, a4: D): R
}

// Ah shit, here we go again…

export function arity<R>(n: 0, fn: FnRest0<R>): Fn0<R>
export function arity<A, R>(n: 1, fn: FnRest1<A, R>): Fn1<A, R>
export function arity<A, B, R>(n: 2, fn: FnRest2<A, B, R>): Fn2<A, B, R>
export function arity<A, B, C, R>(
  n: 3,
  fn: FnRest3<A, B, C, R>
): Fn3<A, B, C, R>
export function arity<A, B, C, D, R>(
  n: 4,
  fn: FnRest4<A, B, C, D, R>
): Fn4<A, B, C, D, R>
export function arity<R>(n: number, fn: FnRest0<R>): FnRest0<R>

export function binary<A, B, R>(fn: FnRest2<A, B, R>): Fn2<A, B, R>

export function constant<T>(value: T): () => T

export function curry<A, R>(fn: Fn0<R>): Fn0<R>
export function curry<A, R>(fn: Fn1<A, R>): Fn1<A, R>
export function curry<A, B, R>(fn: Fn2<A, B, R>): CurriedFn2<A, B, R>
export function curry<A, B, C, R>(fn: Fn3<A, B, C, R>): CurriedFn3<A, B, C, R>
export function curry<A, B, C, D, R>(
  fn: Fn4<A, B, C, D, R>
): CurriedFn4<A, B, C, D, R>

export function curryN<F extends (...args: any[]) => any>(n: 0, fn: F): F
export function curryN<F extends (...args: any[]) => any>(n: 1, fn: F): F
export function curryN<A, B, R>(n: 2, fn: FnRest2<A, B, R>): CurriedFn2<A, B, R>
export function curryN<A, B, C, R>(
  n: 3,
  fn: FnRest3<A, B, C, R>
): CurriedFn3<A, B, C, R>
export function curryN<A, B, C, D, R>(
  n: 4,
  fn: FnRest4<A, B, C, D, R>
): CurriedFn4<A, B, C, D, R>
export function arity<R>(n: number, fn: FnRest0<R>): FnRest0<R>

export function identity<A>(value: A): A

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

export function unary<A, R>(fn: FnRest1<A, R>): Fn1<A, R>
