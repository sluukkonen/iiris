# Iiris 👁️

[![CI](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml/badge.svg)](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml)
![MIT License](https://img.shields.io/github/license/sluukkonen/iiris)
[![NPM](https://img.shields.io/npm/v/iiris)](https://www.npmjs.com/package/iiris)

Iiris is an experimental utility library, designed to make it easier to manipulate built-in JavaScript data types like
arrays, objects and strings in a functional manner. It is heavily inspired by projects like
[Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash).

## Features & Goals

- No mutation of input data.
- Automatically curried, data-last API.
- Performance on par with native JavaScript methods.
- Good out-of-the-box TypeScript typings.
- Small footprint (4 kB gzipped) and excellent tree-shaking support.
- Support only native JavaScript data types.
- Target reasonably current JavaScript environments (Node 10+)

Iiris is still alpha-quality software, so bugs and changes to the API should be expected.

If you've tried Iiris and something doesn't seem to be working as expected, [let me know](https://github.com/sluukkonen/iiris/issues/new/choose)!

## Table of Contents

<!-- prettier-ignore-start -->
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Why Iiris?](#why-iiris)
- [API Reference](#api-reference) <!-- BEGIN TOC -->
  - [Reducing arrays](#reducing-arrays)
    - [maximum](#maximum)
    - [maximumBy](#maximumby)
  - [Function](#function)
    - [not](#not)
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
  - [Logic](#logic)
    - [maybe](#maybe)
    - [valueOr](#valueor)
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
<!-- END TOC -->
<!-- prettier-ignore-end -->

## Installation

Run either

```shell
$ npm install iiris
```

or

```shell
$ yarn add iiris
```

depending on your favourite package manager.

## Getting started

```typescript
import * as I from 'iiris'
```

By convention, Iiris is imported to a single-letter variable `I`. Here's a small showcase of its main features:

```typescript
// Problem: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// See https://projecteuler.net/problem=1 for more information
const sumOfMultiples = I.pipe(
  I.range(1, 1000),
  I.filter((n) => n % 3 === 0 || n % 5 === 0),
  I.sum
) // => 233168
```

## Why Iiris?

Iiris is heavily inspired by libraries like Ramda and Lodash. However, there are a few things that make it different:

Compared to [lodash](https://github.com/lodash/lodash):

- Each function is automatically curried and input data is always the last argument.
- Input data is never mutated.
- Chaining is achieved with function composition instead of special constructs like `_.chain`. 
- Iiris doesn't support any kind of iteratee shorthands.
  
Compared to [Ramda](https://github.com/ramda/ramda):

- Much better TypeScript support. Typically, you don't have to add any extra type annotations when using Iiris, even
  when writing code in point-free style.
- Iiris functions are less polymorphic. For example, `I.map` operates only on arrays, while `R.map` supports arrays,
  objects and arbitrary fantasy-land functors. TypeScript doesn't have native support for higher-kinded types
  ([although some people have tried to work around that](https://github.com/gcanti/fp-ts)), so I made an intentional
  decision to limit the polymorphism of Iiris functions. This makes code less general but dramatically improves the
  TypeScript experience and makes tree-shaking more effective.
- No support for placeholders. Placeholders add some overhead to each curried function call and make writing TypeScript
  typings much harder.
- A bigger focus on performance.

Compared to both:

- Iiris requires a fairly modern JavaScript engine (Node 10+) to run.

## API Reference

Note that we display only the fully curried type signature for all curried
functions. Unless otherwise specified, each function is curried and you may
pass the desired number of arguments, depending on the context.

For example, [`I.add`](#add) has an arity of 2, so the following are equivalent.

```typescript
I.add(x, y) === I.add(x)(y)
```

[`I.equalsBy`](#equalsby) has an arity of 3, so all the following are equivalent.

```typescript
I.equalsBy(fn, a, b)
I.equalsBy(fn, a)(b)
I.equalsBy(fn)(a, b)
I.equalsBy(fn)(a)(b)
```

Many of the type signatures are also simplified. As an example, we don't show the
`readonly` modifier for each array argument.

<!-- prettier-ignore-start -->
<!-- BEGIN API -->
### Reducing arrays

#### maximum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the largest element of an `array` or `undefined`.

**Example:**

```typescript
I.maximum([1, 2, 3])
// => 3

I.maximum([])
// => undefined
```

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

---

#### maximumBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (array: T[]) => T | undefined
```

Like [maximum](#maximum), but apply `fn` to each value before determining
their ordering.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

I.maximumBy((u) => u.age, users)
// => { name: 'Carol', age: 30 }
```

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

---

### Function

#### not

```typescript
(bool: boolean) => boolean
```

Logical not. Flip the value of a boolean argument

**Example:**

```typescript
I.not(true)
// => false

I.not(false)
// => true
```

**See also:** [complement](#complement)

---

### Relation

#### clamp

```typescript
<T extends Ordered>(interval: [lower: T, upper: T]) => (value: T) => T
```

Clamp a number within the closed interval `[lower, upper]`.

**Example:**

```typescript
I.clamp([0, 10], 5)
// => 5

I.clamp([0, 10], 15)
// => 10

I.clamp([0, 10], -5)
// => 0
```

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

**Example:**

```typescript
I.equals([1, 2, 3], [1, 2, 3])
// => true

I.equals([1, 2, 3], [4, 5, 6])
// => false
```

---

#### equalsBy

```typescript
<T, U>(fn: (value: T) => U) => (first: T) => (second: T) => boolean
```

Like [equals](#equals), but the function `fn` is applied to both values before
determining equality.

**Example:**

```typescript
I.equalsBy(Math.floor, 1, 1.5)
// => true
```

**See also:** [equals](#equals)

---

#### gt

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is greater than the `first`.

Designed to be used as a curried predicate.

**Example:**

```typescript
I.filter(I.gt(2), [1, 2, 3])
// => [3]
```

---

#### gte

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is greater than or equal to the `first`.

Designed to be used as a curried predicate.

**Example:**
```typescript
I.filter(I.gte(2), [1, 2, 3])
// => [2, 3]
```

---

#### lt

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is less than the `first`.

Designed to be used as a curried predicate.

**Example:**

```typescript
I.filter(I.lt(2), [1, 2, 3])
// => [1]
```

---

#### lte

```typescript
<T extends Ordered>(first: T) => (second: T) => boolean
```

Check if the `second` argument is less than or equal to the `first`.

Designed to be used as a curried predicate.

**Example:**

```typescript
I.filter(I.lte(2), [1, 2, 3])
// => [1, 2]
```

---

#### max

```typescript
<T extends Ordered>(first: T) => (second: T) => T
```

Return the larger of two values.

**Example:**

```typescript
I.max(1, 2)
// => 2

I.max('a', 'b')
// => 'b'
```

**See also:** [min](#min), [maxBy](#maxby)

---

#### maxBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T, second: T) => T
```

Like [max](#max), but apply `fn` to both values before determining their
ordering.

**Example:**

```typescript
I.maxBy(Math.abs, 1, -2)
// => -2
```

**See also:** [max](#max), [minBy](#minby)

---

#### min

```typescript
<T extends Ordered>(first: T) => (second: T) => T
```

Return the smaller of two values.

**Example:**

```typescript
I.min(1, 2)
// => 1

I.min('a', 'b')
// => 'a'
```

**See also:** [max](#max), [minBy](#minby)

---

#### minBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (first: T) => (second: T) => T
```

Like [min](#min), but apply `fn` to both values before determining their
ordering.

**Example:**

```typescript
I.minBy(Math.abs, -1, 2)
// => -1
```

**See also:** [min](#min), [maxBy](#maxby)

---

### Logic

#### maybe

```typescript
<R>(defaultValue: R) => <T>(fn: (value: T) => R) => (maybeValue: undefined | T) => R
```

Apply `fn` to `maybeValue` if it is not `undefined`, return `defaultValue`
otherwise.

**Example:**

```typescript
I.maybe('', (s) => s.toUpperCase(), 'hi')
// => 'HI'

I.maybe('', (s) => s.toUpperCase(), undefined)
// => ''
```

**See also:** [valueOr](#valueor)

---

#### valueOr

```typescript
<T>(defaultValue: T) => (maybeValue: T | undefined) => T
```

Return `maybeValue` if it is not `undefined`, `defaultValue` otherwise.

**Example:**

```typescript
I.valueOr(999, 0)
// => 0

I.valueOr(999, undefined)
// => 999
```

**See also:** [maybe](#maybe)

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
<!-- END API -->
<!-- prettier-ignore-end -->
