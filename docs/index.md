# Module `iiris`

The `iiris` module contains the core functionality of Iiris. It contains
various utility functions that work with a wide variety of data types, while
more specialized functions are stored in separate modules. It is designed
to be imported with a wildcard, e.g.

```typescript
import * as I from 'iiris'
```

## Table of contents

- [Function](#function)
  - [binary](#binary)
  - [complement](#complement)
  - [compose](#compose)
  - [constant](#constant)
  - [curry2](#curry2)
  - [curry3](#curry3)
  - [curry4](#curry4)
  - [flip](#flip)
  - [identity](#identity)
  - [noop](#noop)
  - [not](#not)
  - [pipe](#pipe)
  - [tap](#tap)
  - [unary](#unary)
- [Logic](#logic)
  - [maybe](#maybe)
  - [valueOr](#valueor)
- [Math](#math)
  - [add](#add)
  - [dec](#dec)
  - [divideBy](#divideby)
  - [inc](#inc)
  - [multiply](#multiply)
  - [negate](#negate)
  - [subtractBy](#subtractby)
- [Reducing arrays](#reducing-arrays)
  - [maximum](#maximum)
  - [maximumBy](#maximumby)
- [Relation](#relation)
  - [clamp](#clamp)
  - [equals](#equals)
  - [equalsBy](#equalsby)
  - [gt](#gt)
  - [gte](#gte)
  - [lt](#lt)
  - [lte](#lte)
  - [max](#max)
  - [maxBy](#maxby)
  - [min](#min)
  - [minBy](#minby)
- [Sorting](#sorting)
  - [ascend](#ascend)
  - [descend](#descend)
- [Type tests](#type-tests)
  - [isArray](#isarray)
  - [isBigInt](#isbigint)
  - [isBoolean](#isboolean)
  - [isDate](#isdate)
  - [isDefined](#isdefined)
  - [isError](#iserror)
  - [isFunction](#isfunction)
  - [isMap](#ismap)
  - [isNil](#isnil)
  - [isNull](#isnull)
  - [isNumber](#isnumber)
  - [isObject](#isobject)
  - [isRegExp](#isregexp)
  - [isSet](#isset)
  - [isString](#isstring)
  - [isSymbol](#issymbol)
  - [isUndefined](#isundefined)

### Function

#### binary

```typescript
<T1, T2, R>(fn: VariadicFunction2<T1, T2, R>) => Function2<T1, T2, R>
```

Create a version of `fn` that accepts two arguments.

**Note:** The returned function is not curried.

<details><summary>Example</summary>

```typescript
const fn = (...args) => args
const wrapped = I.binary(fn)

fn(1, 2, 3)
// => [1, 2, 3]

wrapped(1, 2, 3)
// => [1, 2]
```
</details>

**See also:** [unary](#unary)

---

#### complement

```typescript
<T extends VariadicFunction0<boolean>>(fn: T) => T
```

Create a version of a predicate `fn` that flips the returned boolean value.

<details><summary>Example</summary>

```typescript
const isZero = (v) => v === 0
const notZero = I.complement(isZero)

notZero(0)
// => false

notZero(1)
// => true
```
</details>

---

#### compose

```typescript
<T extends unknown[], R>(fn: (args: ...T) => R) => (args: ...T) => R
<T extends unknown[], T1, R>(fn1: Function1<T1, R>, fn2: (args: ...T) => T1) => (args: ...T) => R
<T extends unknown[], T1, T2, R>(fn1: Function1<T2, R>, fn2: Function1<T1, T2>, fn3: (args: ...T) => T1) => (args: ...T) => R
```

Right-to-left function composition.

**Note:** This function is not curried.

<details><summary>Example</summary>

```typescript
const composed = I.compose(I.add(10), I.multiply(2))

composed(2)
// => 14
```
</details>

---

#### constant

```typescript
<T>(value: T) => () => T
```

Create a function that always returns `value`.

<details><summary>Example</summary>

```typescript
I.map(I.constant(1), [1, 2, 3])
// => [1, 1, 1]
```
</details>

---

#### curry2

```typescript
<T extends [unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction2<T, R>
```

Create a curried version of a `fn` taking two arguments.

<details><summary>Example</summary>

```typescript
 const add = I.curry2((a, b) => a + b)

 add(1)(2)
 // => 3

 add(1, 2)
 // => 3
```
</details>

**See also:** [curry3](#curry3), [curry4](#curry4)

---

#### curry3

```typescript
<T extends [unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction3<T, R>
```

Create a curried version of a `fn` taking three arguments.

<details><summary>Example</summary>

```typescript
 const add = I.curry3((a, b, c) => a + b + c)

 add(1)(2)(3)
 // => 6

 add(1, 2, 3)
 // => 6
```
</details>

**See also:** [curry2](#curry2), [curry4](#curry4)

---

#### curry4

```typescript
<T extends [unknown, unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction4<T, R>
```

Create a curried version of a `fn` taking four arguments.

<details><summary>Example</summary>

```typescript
 const add = I.curry4((a, b, c, d) => a + b + c + d)

 add(1)(2)(3)(4)
 // => 10

 add(1, 2, 3, 4)
 // => 10
```
</details>

**See also:** [curry2](#curry2), [curry3](#curry3)

---

#### flip

```typescript
<T, U, R>(fn: Function2<T, U, R>) => Function2<U, T, R>
```

Flip the arguments of a binary function.

**Note:** The returned function is not curried.

<details><summary>Example</summary>

```typescript
const fn = (...args) => args
const flipped = I.flip(fn)

flipped(1, 2)
// => [2, 1]
```
</details>

---

#### identity

```typescript
<T>(value: T) => T
```

Identity function. Returns the first argument.

<details><summary>Example</summary>

```typescript
I.identity(5)
// => 5
```
</details>

---

#### noop

```typescript
() => undefined
```

Do nothing an return `undefined`.

<details><summary>Example</summary>

```typescript
I.map(I.noop, [1, 2, 3])
// => [undefined, undefined, undefined]
```
</details>

---

#### not

```typescript
(bool: boolean) => boolean
```

Logical not. Flip the value of a boolean argument

<details><summary>Example</summary>

```typescript
I.not(true)
// => false

I.not(false)
// => true
```
</details>

**See also:** [complement](#complement)

---

#### pipe

```typescript
<T>(initial: T) => T
<T, R>(initial: T, fn1: Function1<T, R>) => R
<T1, T2, R>(initial: T1, fn1: Function1<T1, T2>, fn2: Function1<T2, R>) => R
```

Pipe an `initial` value through one or more functions in left-to-right order,
allowing the programmer to chain operations in a readable manner.

`I.pipe(initial, f1, f2, ...fn)` can be thought as syntax sugar
for `fn(...(f2(f1(initial))))`

**Note:** This function is not curried.

<details><summary>Example</summary>

```typescript
I.pipe(
  [1, 2, 3],
  I.map((n) => n * 2),
  I.sum
)
// => 12
```
</details>

**See also:** [compose](#compose)

---

#### tap

```typescript
<T>(fn: (value: T) => void) => (value: T) => T
```

Create a function that applies `fn` to its argument and returns the
argument.

Useful for executing a side-effect within a pipeline.

<details><summary>Example</summary>

```typescript
I.pipe(
  [1, 2, 3],
  I.map(I.multiply(2)),
  I.filter(I.gt(2)),
  I.tap(console.log),
  I.sum
)
// Prints: [ 4, 6 ]
// => 10
```
</details>

---

#### unary

```typescript
<T, R>(fn: VariadicFunction1<T, R>) => Function1<T, R>
```

Create a version of `fn` that accepts a single argument.

<details><summary>Example</summary>

```typescript
['1', '2', '3'].map(I.unary(parseInt))
// => [1, 2, 3]
```
</details>

**See also:** [binary](#binary)

---

### Logic

#### maybe

```typescript
<R>(defaultValue: R) => <T>(fn: (value: T) => R) => (maybeValue: undefined | T) => R
```

Apply `fn` to `maybeValue` if it is not `undefined`, return `defaultValue`
otherwise.

<details><summary>Example</summary>

```typescript
I.maybe('', (s) => s.toUpperCase(), 'hi')
// => 'HI'

I.maybe('', (s) => s.toUpperCase(), undefined)
// => ''
```
</details>

**See also:** [valueOr](#valueor)

---

#### valueOr

```typescript
<T>(defaultValue: T) => (maybeValue: T | undefined) => T
```

Return `maybeValue` if it is not `undefined`, `defaultValue` otherwise.

<details><summary>Example</summary>

```typescript
I.valueOr(999, 0)
// => 0

I.valueOr(999, undefined)
// => 999
```
</details>

**See also:** [maybe](#maybe)

---

### Math

#### add

```typescript
(n: number) => (m: number) => number
```

Add two numbers together.

<details><summary>Example</summary>

```typescript
I.map(I.add(1), [1, 2, 3])
// => [2, 3, 4]
```
</details>

---

#### dec

```typescript
(n: number) => number
```

Decrement a number by 1.

<details><summary>Example</summary>

```typescript
I.map(I.dec, [1, 2, 3])
// => [0, 1, 2]
```
</details>

**See also:** [inc](#inc)

---

#### divideBy

```typescript
(divisor: number) => (dividend: number) => number
```

Divide `dividend` by the `divisor`.

<details><summary>Example</summary>

```typescript
I.map(I.divideBy(2), [1, 2, 3])
// => [0.5, 1, 1.5]
```
</details>

---

#### inc

```typescript
(n: number) => number
```

Increment a number by 1.

<details><summary>Example</summary>

```typescript
I.map(I.inc, [1, 2, 3])
// => [2, 3, 4]
```
</details>

---

#### multiply

```typescript
(multiplicand: number) => (multiplier: number) => number
```

Multiply two numbers together.

<details><summary>Example</summary>

```typescript
I.map(I.multiply(2), [1, 2, 3])
// => [2, 4, 6]
```
</details>

---

#### negate

```typescript
(n: number) => number
```

Return `n` with its sign reversed.

<details><summary>Example</summary>

```typescript
I.map(I.negate, [1, 2, 3])
// => [-1, -2, -3]
```
</details>

---

#### subtractBy

```typescript
(subtrahend: number) => (minuend: number) => number
```

Subtract the `subtrahend` from the `minuend`.

<details><summary>Example</summary>

```typescript
I.map(I.subtractBy(1), [1, 2, 3])
// => [0, 1, 2]
```
</details>

---

### Reducing arrays

#### maximum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the largest element of an `array` or `undefined`.

<details><summary>Example</summary>

```typescript
I.maximum([1, 2, 3])
// => 3

I.maximum([])
// => undefined
```
</details>

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

---

#### maximumBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (array: T[]) => T | undefined
```

Like [maximum](#maximum), but apply `fn` to each value before determining
their ordering.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

I.maximumBy((u) => u.age, users)
// => { name: 'Carol', age: 30 }
```
</details>

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

---

### Relation

#### clamp

```typescript
<T extends Ordered>(interval: [lower: T, upper: T]) => (value: T) => T
```

Clamp a number within the closed interval `[lower, upper]`.

<details><summary>Example</summary>

```typescript
I.clamp([0, 10], 5)
// => 5

I.clamp([0, 10], 15)
// => 10

I.clamp([0, 10], -5)
// => 0
```
</details>

---

#### equals

```typescript
<T>(first: T) => (second: T) => boolean
```

Check if two values are deeply equal.

- Primitive values are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
- Only the own enumerable keys of objects are considered.
- The order of object keys does not matter.
- Built-in objects (e.g. Arrays, Maps & Sets) are not checked for extra keys.
- Sets and Map keys are compared with [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality).
- Error objects are equal if their `name` and `message` properties are equal.
- Functions are compared with `===`.
- Supports cyclic references.
- Does not support WeakMaps, WeakSets or typed arrays.

<details><summary>Example</summary>

```typescript
I.equals([1, 2, 3], [1, 2, 3])
// => true

I.equals([1, 2, 3], [4, 5, 6])
// => false
```
</details>

---

#### equalsBy

```typescript
<T, U>(fn: (value: T) => U) => (first: T) => (second: T) => boolean
```

Like [equals](#equals), but the function `fn` is applied to both values before
determining equality.

<details><summary>Example</summary>

```typescript
I.equalsBy(Math.floor, 1, 1.5)
// => true
```
</details>

**See also:** [equals](#equals)

---

#### gt

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is greater than the `first`.

Designed to be used as a curried predicate.

<details><summary>Example</summary>

```typescript
I.filter(I.gt(2), [1, 2, 3])
// => [3]
```
</details>

---

#### gte

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is greater than or equal to the `first`.

Designed to be used as a curried predicate.

<details><summary>Example</summary>

```typescript
I.filter(I.gte(2), [1, 2, 3])
// => [2, 3]
```
</details>

---

#### lt

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is less than the `first`.

Designed to be used as a curried predicate.

<details><summary>Example</summary>

```typescript
I.filter(I.lt(2), [1, 2, 3])
// => [1]
```
</details>

---

#### lte

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is less than or equal to the `first`.

Designed to be used as a curried predicate.

<details><summary>Example</summary>

```typescript
I.filter(I.lte(2), [1, 2, 3])
// => [1, 2]
```
</details>

---

#### max

```typescript
<T extends Ordered>(first: T) => (second: T) => T
```

Return the larger of two values.

<details><summary>Example</summary>

```typescript
I.max(1, 2)
// => 2

I.max('a', 'b')
// => 'b'
```
</details>

**See also:** [min](#min), [maxBy](#maxby)

---

#### maxBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T, second: T) => T
```

Like [max](#max), but apply `fn` to both values before determining their
ordering.

<details><summary>Example</summary>

```typescript
I.maxBy(Math.abs, 1, -2)
// => -2
```
</details>

**See also:** [max](#max), [minBy](#minby)

---

#### min

```typescript
<T extends Ordered>(first: T) => (second: T) => T
```

Return the smaller of two values.

<details><summary>Example</summary>

```typescript
I.min(1, 2)
// => 1

I.min('a', 'b')
// => 'a'
```
</details>

**See also:** [max](#max), [minBy](#minby)

---

#### minBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T) => (second: T) => T
```

Like [min](#min), but apply `fn` to both values before determining their
ordering.

<details><summary>Example</summary>

```typescript
I.minBy(Math.abs, -1, 2)
// => -1
```
</details>

**See also:** [min](#min), [maxBy](#maxby)

---

### Sorting

#### ascend

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create an
ascending comparator function.

**Note:** The returned function is not curried.

<details><summary>Example</summary>

```typescript
I.sort(I.ascend(I.prop('age')), [{ name: 'Bob' }, { name: 'Alice' }])
// => [{ name: 'Alice' }, { name: 'Bob' }]
```
</details>

**See also:** [descend](#descend), [sort](#sort), [sortWith](#sortwith)

---

#### descend

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create a
descending comparator function.

**Note:** The returned function is not curried.

<details><summary>Example</summary>

```typescript
I.sort(I.descend(I.prop('name')), [{ name: 'Alice' }, { name: 'Bob' }])
// => [{ name: 'Bob' }, { name: 'Alice' }]
```
</details>

**See also:** [ascend](#ascend), [sort](#sort), [sortWith](#sortwith)

---

### Type tests

#### isArray

```typescript
<T>(value: T | unknown[]) => value is unknown[]
```

Check if the `value` is an
[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

---

#### isBigInt

```typescript
<T>(value: T | bigint) => value is bigint
```

Check if the `value` is a
[`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

---

#### isBoolean

```typescript
<T>(value: T | boolean) => value is boolean
```

Check if the `value` is a
[`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/boolean).

---

#### isDate

```typescript
<T>(value: T | Date) => value is Date
```

Check if the `value` is a
[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

---

#### isDefined

```typescript
<T>(value: T | undefined) => value is T
```

Check if the `value` is not
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---

#### isError

```typescript
<T>(value: T | Error) => value is Error
```

Check if the `value` is an
[`Error`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error).

---

#### isFunction

```typescript
<T>(value: T | Function) => value is Function
```

Check if the `value` is a
[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).

---

#### isMap

```typescript
<T>(value: T | Map<unknown, unknown>) => value is Map<unknown, unknown>
```

Check if the `value` is a
[`Map`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map).

---

#### isNil

```typescript
<T>(value: T | null | undefined) => value is undefined | null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null) or
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---

#### isNull

```typescript
<T>(value: T | null) => value is null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null).

---

#### isNumber

```typescript
<T>(value: T | number) => value is number
```

Check if the `value` is a
[`number`](https://developer.mozilla.org/en-US/docs/Glossary/number).

---

#### isObject

```typescript
<T>(value: T | object) => value is object
```

Check if the `value` is an
[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).

Note that functions and arrays are also objects.

---

#### isRegExp

```typescript
<T>(value: T | RegExp) => value is RegExp
```

Check if the `value` is a
[`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

---

#### isSet

```typescript
<T>(value: T | Set<unknown>) => value is Set<unknown>
```

Check if the `value` is a
[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

---

#### isString

```typescript
<T>(value: T | string) => value is string
```

Check if the `value` is a
[`string`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String).

---

#### isSymbol

```typescript
<T>(value: T | symbol) => value is symbol
```

Check if the `value` is a
[`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

---

#### isUndefined

```typescript
<T>(value: T | undefined) => value is undefined
```

Check if the `value` is
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---