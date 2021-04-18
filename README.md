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
- [Why Iiris?](#why-iiris)
- [API Reference](#api-reference) <!-- BEGIN TOC -->
  - [Core (iiris)](#core-iiris))
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
  - [Array (iiris/array)](#array-iiris/array))
    - [Basic array operations](#basic-array-operations)
      - [append](#append)
      - [at](#at)
      - [atOr](#ator)
      - [concat](#concat)
      - [forEach](#foreach)
      - [forEachWithIndex](#foreachwithindex)
      - [head](#head)
      - [init](#init)
      - [isEmpty](#isempty)
      - [last](#last)
      - [length](#length)
      - [modify](#modify)
      - [prepend](#prepend)
      - [remove](#remove)
      - [set](#set)
      - [tail](#tail)
    - [Building arrays](#building-arrays)
      - [empty](#empty)
      - [from](#from)
      - [range](#range)
      - [repeat](#repeat)
      - [singleton](#singleton)
      - [times](#times)
    - [Grouping arrays by key](#grouping-arrays-by-key)
      - [countBy](#countby)
      - [groupBy](#groupby)
      - [groupMap](#groupmap)
      - [groupMapReduce](#groupmapreduce)
      - [indexBy](#indexby)
    - [Reducing arrays](#reducing-arrays)
      - [minimum](#minimum)
      - [minimumBy](#minimumby)
      - [reduce](#reduce)
      - [reduceRight](#reduceright)
      - [sum](#sum)
      - [sumBy](#sumby)
    - [Searching arrays by value](#searching-arrays-by-value)
      - [includes](#includes)
      - [indexOf](#indexof)
      - [lastIndexOf](#lastindexof)
    - [Searching arrays with a predicate](#searching-arrays-with-a-predicate)
      - [count](#count)
      - [every](#every)
      - [filter](#filter)
      - [filterWithIndex](#filterwithindex)
      - [find](#find)
      - [findIndex](#findindex)
      - [findLast](#findlast)
      - [findLastIndex](#findlastindex)
      - [none](#none)
      - [partition](#partition)
      - [some](#some)
    - [Slicing arrays](#slicing-arrays)
      - [drop](#drop)
      - [dropLast](#droplast)
      - [dropLastWhile](#droplastwhile)
      - [dropWhile](#dropwhile)
      - [slice](#slice)
      - [take](#take)
      - [takeLast](#takelast)
      - [takeLastWhile](#takelastwhile)
      - [takeWhile](#takewhile)
    - [Sorting arrays](#sorting-arrays)
      - [sort](#sort)
      - [sortBy](#sortby)
      - [sortWith](#sortwith)
    - [Transforming arrays](#transforming-arrays)
      - [flatMap](#flatmap)
      - [flatten](#flatten)
      - [intersperse](#intersperse)
      - [join](#join)
      - [map](#map)
      - [mapMaybe](#mapmaybe)
      - [mapWithIndex](#mapwithindex)
      - [reverse](#reverse)
    - [Zipping arrays](#zipping-arrays)
      - [zip](#zip)
      - [zipObject](#zipobject)
      - [zipWith](#zipwith)
  - [Object (iiris/object)](#object-iiris/object))
    - [Object](#object)
      - [entries](#entries)
      - [fromEntries](#fromentries)
      - [fromMap](#frommap)
      - [get](#get)
      - [getOr](#getor)
      - [has](#has)
      - [keys](#keys)
      - [mapKeys](#mapkeys)
      - [mapValues](#mapvalues)
      - [merge](#merge)
      - [modify](#modify)
      - [omit](#omit)
      - [pick](#pick)
      - [remove](#remove)
      - [set](#set)
      - [values](#values)
  - [Map (iiris/map)](#map-iiris/map))
    - [Map](#map)
      - [empty](#empty)
      - [entries](#entries)
      - [forEach](#foreach)
      - [fromEntries](#fromentries)
      - [fromObject](#fromobject)
      - [get](#get)
      - [getOr](#getor)
      - [has](#has)
      - [isEmpty](#isempty)
      - [keys](#keys)
      - [map](#map)
      - [mapKeys](#mapkeys)
      - [modify](#modify)
      - [remove](#remove)
      - [set](#set)
      - [singleton](#singleton)
      - [size](#size)
      - [values](#values)
  - [Set (iiris/set)](#set-iiris/set))
    - [Basic set operations](#basic-set-operations)
      - [add](#add)
      - [remove](#remove)
    - [Creating sets](#creating-sets)
      - [empty](#empty)
      - [from](#from)
      - [singleton](#singleton)
    - [Other](#other)
      - [has](#has)
      - [isEmpty](#isempty)
    - [Set operations](#set-operations)
      - [difference](#difference)
      - [intersection](#intersection)
      - [union](#union)
  - [String (iiris/string)](#string-iiris/string))
    - [String](#string)
      - [capitalize](#capitalize)
      - [split](#split)
      - [test](#test)
      - [toLowerCase](#tolowercase)
      - [toUpperCase](#touppercase)
      - [trim](#trim)
      - [trimEnd](#trimend)
      - [trimStart](#trimstart)
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
### Core (iiris)

The `iiris` module contains the core functionality of Iiris. It contains
various utility functions that work with a wide variety of data types, while
more specialized functions are stored in separate modules. It is designed
to be imported with a wildcard, e.g.

```typescript
import * as I from 'iiris'
```

#### Function

##### binary

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

##### complement

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

##### compose

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

##### constant

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

##### curry2

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

##### curry3

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

##### curry4

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

##### flip

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

##### identity

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

##### noop

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

##### not

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

##### pipe

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

##### tap

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

##### unary

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

#### Logic

##### maybe

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

##### valueOr

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

#### Math

##### add

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

##### dec

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

##### divideBy

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

##### inc

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

##### multiply

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

##### negate

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

##### subtractBy

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

#### Reducing arrays

##### maximum

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

##### maximumBy

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

#### Relation

##### clamp

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

##### equals

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

##### equalsBy

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

##### gt

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

##### gte

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

##### lt

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

##### lte

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

##### max

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

##### maxBy

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

##### min

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

##### minBy

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

#### Sorting

##### ascend

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

##### descend

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

#### Type tests

##### isArray

```typescript
<T>(value: T | unknown[]) => value is unknown[]
```

Check if the `value` is an
[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

---

##### isBigInt

```typescript
<T>(value: T | bigint) => value is bigint
```

Check if the `value` is a
[`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

---

##### isBoolean

```typescript
<T>(value: T | boolean) => value is boolean
```

Check if the `value` is a
[`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/boolean).

---

##### isDate

```typescript
<T>(value: T | Date) => value is Date
```

Check if the `value` is a
[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

---

##### isDefined

```typescript
<T>(value: T | undefined) => value is T
```

Check if the `value` is not
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---

##### isError

```typescript
<T>(value: T | Error) => value is Error
```

Check if the `value` is an
[`Error`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Error).

---

##### isFunction

```typescript
<T>(value: T | Function) => value is Function
```

Check if the `value` is a
[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions).

---

##### isMap

```typescript
<T>(value: T | Map<unknown, unknown>) => value is Map<unknown, unknown>
```

Check if the `value` is a
[`Map`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map).

---

##### isNil

```typescript
<T>(value: T | null | undefined) => value is undefined | null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null) or
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---

##### isNull

```typescript
<T>(value: T | null) => value is null
```

Check if the `value` is
[`null`](https://developer.mozilla.org/en-US/docs/Glossary/null).

---

##### isNumber

```typescript
<T>(value: T | number) => value is number
```

Check if the `value` is a
[`number`](https://developer.mozilla.org/en-US/docs/Glossary/number).

---

##### isObject

```typescript
<T>(value: T | object) => value is object
```

Check if the `value` is an
[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects).

Note that functions and arrays are also objects.

---

##### isRegExp

```typescript
<T>(value: T | RegExp) => value is RegExp
```

Check if the `value` is a
[`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

---

##### isSet

```typescript
<T>(value: T | Set<unknown>) => value is Set<unknown>
```

Check if the `value` is a
[`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

---

##### isString

```typescript
<T>(value: T | string) => value is string
```

Check if the `value` is a
[`string`](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/String).

---

##### isSymbol

```typescript
<T>(value: T | symbol) => value is symbol
```

Check if the `value` is a
[`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

---

##### isUndefined

```typescript
<T>(value: T | undefined) => value is undefined
```

Check if the `value` is
[`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined).

---

### Array (iiris/array)

The `iiris/array` module includes functions for working with Arrays.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as A from 'iiris/array'
```

#### Basic array operations

##### append

```typescript
<T>(value: T) => (array: T[]) => T[]
```

Append a new element to the end of an array.

<details><summary>Example</summary>

```typescript
A.append(4, [1, 2, 3])
// => [1, 2, 3, 4]
```
</details>

**See also:** [prepend](#prepend), [concat](#concat)

---

##### at

```typescript
(index: number) => <T>(array: T[]) => T | undefined
```

Return the element at `index` from `array` or `undefined`.

<details><summary>Example</summary>

```typescript
A.at(0, [1, 2, 3])
// => 1

A.at(0, [])
// => undefined
```
</details>

**See also:** [atOr](#ator)

---

##### atOr

```typescript
<T>(defaultValue: T) => (index: number) => (array: T[]) => T
```

Like [at](#at), but if the resolved value is `undefined`, `defaultValue` is
returned instead.

<details><summary>Example</summary>

```typescript
A.atOr(999, 0, [1, 2, 3])
// => 1

A.atOr(999, 0, [])
// => 999

A.atOr(999, 0, [undefined])
// => 999
```
</details>

**See also:** [at](#at)

---

##### concat

```typescript
<T>(array: T[]) => (other: T[]) => T[]
```

Concatenate two arrays together.

<details><summary>Example</summary>

```typescript
A.concat([1, 2, 3], [4, 5, 6])
// => [1, 2, 3, 4, 5, 6]
```
</details>

**See also:** [append](#append), [prepend](#prepend)

---

##### forEach

```typescript
<T>(fn: (value: T) => void) => (array: T[]) => T[]
```

Apply `fn` to each element of the `array` and return the `array`.

<details><summary>Example</summary>

```typescript
A.forEach(console.log, ['h', 'i', '!'])
h
i
!
// => ['h', 'i', '!']
```
</details>

**See also:** [forEachWithIndex](#foreachwithindex)

---

##### forEachWithIndex

```typescript
<T>(fn: (index: number, value: T) => void) => (array: T[]) => T[]
```

Like [forEach](#foreach), but `fn` also receives the element index as the first
argument.

<details><summary>Example</summary>

```typescript
A.forEachWithIndex(console.log, ['h', 'i', '!'])
0 h
1 i
2 !
// => ['h', 'i', '!']
```
</details>

**See also:** [forEach](#foreach)

---

##### head

```typescript
<T>(array: T[]) => T | undefined
```

Return the first element of the `array` or `undefined`.

<details><summary>Example</summary>

```typescript
A.head([1, 2, 3])
// => 1

A.head([])
// => undefined
```
</details>

**See also:** [tail](#tail), [init](#init), [last](#last)

---

##### init

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the last.

<details><summary>Example</summary>

```typescript
A.init([1, 2, 3])
// => [1, 2]

A.init([])
// => []
```
</details>

**See also:** [last](#last), [head](#head), [tail](#tail)

---

##### isEmpty

```typescript
<T>(array: T[]) => boolean
```

Check if `array` is empty.

<details><summary>Example</summary>

```typescript
A.isEmpty([1, 2, 3])
// => false

A.isEmpty([])
// => true
```
</details>

**See also:** [length](#length)

---

##### last

```typescript
<T>(array: T[]) => T | undefined
```

Return the last element of the `array` or `undefined`.

<details><summary>Example</summary>

```typescript
A.last([1, 2, 3])
// => 3

A.last([])
// => undefined
```
</details>

**See also:** [init](#init), [head](#head), [tail](#tail)

---

##### length

```typescript
<T>(array: T[]) => number
```

Return the length of an `array`.

<details><summary>Example</summary>

```typescript
A.length([1, 2, 3])
// => 3

A.length([])
// => 0
```
</details>

**See also:** [isEmpty](#isempty)

---

##### modify

```typescript
(index: number) => <T>(fn: (value: T) => T) => (array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been replaced by
applying `fn` to its current value.

- If `index` is not within `array` bounds, the `array` is returned
  unchanged.
- Removes the element if `fn` returns `undefined`.

<details><summary>Example</summary>

```typescript
A.modify(0, (n) => n + 1, [1, 2, 3])
// => [2, 2, 3]

A.modify(-1, (n) => n + 1, [1, 2, 3])
// => [1, 2, 4]

A.modify(0, () => undefined, [1, 2, 3])
// => [2, 3]

A.modify(999, (n) => n + 1, [1, 2, 3])
// => [1, 2, 3]
```
</details>

**See also:** [set](#set), [remove](#remove)

---

##### prepend

```typescript
<T>(value: T) => (array: T[]) => T[]
```

Prepend a new element to the beginning of an array.

<details><summary>Example</summary>

```typescript
A.prepend(0, [1, 2, 3])
// => [0, 1, 2, 3]
```
</details>

**See also:** [append](#append), [concat](#concat)

---

##### remove

```typescript
(index: number) => <T>(array: T[]) => T[]
```

Return a copy of `array` without the element at `index`.

- If `index` is not within the `array` bounds, the `array` is returned
  unchanged.

<details><summary>Example</summary>

```typescript
A.remove(0, [1, 2, 3])
// => [2, 3]

A.remove(-1, [1, 2, 3])
// => [1, 2]

A.remove(999, [1, 2, 3])
// => [1, 2, 3]
```
</details>

**See also:** [modify](#modify), [set](#set)

---

##### set

```typescript
(index: number) => <T>(value: undefined | T) => (array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been replaced with
`value`.

- If `index` is not within the `array` bounds, the `array` is returned
  unchanged.
- Removes the element if `value` is `undefined`.

<details><summary>Example</summary>

```typescript
A.set(0, 999, [1, 2, 3])
// => [999, 2, 3]

A.set(-1, 999, [1, 2, 3])
// => [1, 2, 999]

A.set(999, 999, [1, 2, 3])
// => [1, 2, 3]

A.set(0, undefined, [1, 2, 3])
// => [2, 3]
```
</details>

**See also:** [modify](#modify), [remove](#remove)

---

##### tail

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the first.

<details><summary>Example</summary>

```typescript
A.tail([1, 2, 3])
// => [2, 3]

A.tail([])
// => []
```
</details>

**See also:** [head](#head), [init](#init), [last](#last)

---

#### Building arrays

##### empty

```typescript
<T>() => T[]
```

Create an empty array.

<details><summary>Example</summary>

```typescript
A.empty()
// => []
```
</details>

**See also:** [from](#from), [singleton](#singleton)

---

##### from

```typescript
<T>(iterable: Iterable<T>) => T[]
```

Convert an `iterable` into an array.

`A.from` is like `Array.from` but without support for mapping the values.

<details><summary>Example</summary>

```typescript
A.from(new Set([1, 2, 3))
// => [1, 2, 3]
```
</details>

**See also:** [empty](#empty), [singleton](#singleton)

---

##### range

```typescript
(start: number) => (end: number) => number[]
```

Create an array of numbers between `start` (inclusive) and `end`
(exclusive).

<details><summary>Example</summary>

```typescript
A.range(0, 10)
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

A.range(0, 0)
// => []
```
</details>

**See also:** [times](#times), [repeat](#repeat)

---

##### repeat

```typescript
<T>(value: T) => (n: number) => T[]
```

Repeat the given `value` `n` times.

<details><summary>Example</summary>

```typescript
A.repeat('a', 5)
// => ['a', 'a', 'a', 'a', 'a']
```
</details>

**See also:** [range](#range), [times](#times)

---

##### singleton

```typescript
<T>(values: T) => [T]
```

Create a singleton array containing `value`

<details><summary>Example</summary>

```typescript
A.of(1)
// => [1]

A.of(1, 2, 3)
// => [1, 2, 3]
```
</details>

**See also:** [from](#from), [empty](#empty)

---

##### times

```typescript
<T>(fn: (index: number) => T) => (n: number) => T[]
```

Create an array of length `n` by applying `fn` to the index of each element.

<details><summary>Example</summary>

```typescript
A.times((n) => n * 10, 3)
// => [0, 10, 20]
```
</details>

**See also:** [range](#range), [repeat](#repeat)

---

#### Grouping arrays by key

##### countBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, number>
```

Apply `keyFn` to each element in the `array` and return an object of counts
by key.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' }
]

A.countBy((u) => u.name, users)
// => { Alice: 2, Bob: 1 }
```
</details>

**See also:** [groupBy](#groupby)

---

##### groupBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, T[]>
```

Partition the `array` into an object of arrays according to `keyFn`.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' },
]

A.groupBy((u) => u.name, users)
// => { Alice: [{ name: 'Alice' }, { name: 'Alice' }], Bob: [{ name: 'Bob' }] }
```
</details>

**See also:** [indexBy](#indexby), [countBy](#countby), [groupMap](#groupmap), [groupMapReduce](#groupmapreduce)

---

##### groupMap

```typescript
<T, U>(mapFn: (value: T) => U) => <K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, U[]>
```

Like [groupBy](#groupby), but also apply `mapFn` to each element before adding
it to the corresponding array.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const agesByName = A.groupMap((u) => u.age, (u) => u.name, users)
// => { Alice: [10, 30], Bob: [20] }
```
</details>

**See also:** [groupBy](#groupby), [groupMapReduce](#groupmapreduce)

---

##### groupMapReduce

```typescript
<U>(reducer: (accumulator: U, value: U) => U) => <T>(mapFn: (value: T) => U) => <K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, U>
```

Like [groupMap](#groupmap), but instead of returning an object of arrays, combine
elements mapping to the same key with `reducer`.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const sumOfAgesByName = A.groupMapReduce(
  (sum, n) => sum + n,
  (u) => u.age,
  (u) => u.name,
  users
) // => { Alice: 40, Bob: 20 }
```
</details>

**See also:** [groupBy](#groupby), [groupMap](#groupmap)

---

##### indexBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, T>
```

Apply `keyFn` to each element in the `array` and return an object of
elements indexed by each key.

If multiple elements map to the same key, the last one is selected.

<details><summary>Example</summary>

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Carol' }
]
A.indexBy((u) => u.id, users)
// => { '1': { id: 1, name: 'Carol' }, '2': { id: 2, name: 'Bob' } }
```
</details>

**See also:** [groupBy](#groupby)

---

#### Reducing arrays

##### minimum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the smallest element of `array` or `undefined`.

<details><summary>Example</summary>

```typescript
A.minimum([1, 2, 3])
// => 1

A.minimum([])
// => undefined
```
</details>

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

---

##### minimumBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (array: T[]) => T | undefined
```

Like [minimum](#minimum), but `fn` is applied to each value before determining
their ordering.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

A.minimumBy((u) => u.age, users)
// => { name: 'Alice', age: 10 }
```
</details>

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

---

##### reduce

```typescript
<T, R>(reducer: (accumulator: R, value: T) => R) => (initial: R) => (array: T[]) => R
```

Left-associative fold.

Combine the elements of an `array` in to a single value by calling `reducer`
with the accumulated value so far and the current element. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

<details><summary>Example</summary>

```typescript
A.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
// => 10
```
</details>

**See also:** [reduceRight](#reduceright)

---

##### reduceRight

```typescript
<T, R>(reducer: (value: T, accumulator: R) => R) => (initial: R) => (array: T[]) => R
```

Right-associative fold.

Combine the elements of an `array` in to a single value by calling `reducer`
with the current element and the accumulated value so far. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

<details><summary>Example</summary>

```typescript
A.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
// => 10
```
</details>

**See also:** [reduce](#reduce)

---

##### sum

```typescript
(numbers: number[]) => number
```

Sum an `array` of numbers together. Returns `0` if the array is empty.

Uses the [Kahan summation
algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
minimizing numerical error.

<details><summary>Example</summary>

```typescript
const numbers = A.repeat(0.1, 10)
// => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]

A.sum(numbers)
// => 1

numbers.reduce((sum, n) => sum + n, 0)
// => 0.9999999999999999
```
</details>

**See also:** [sumBy](#sumby)

---

##### sumBy

```typescript
<T>(fn: (value: T) => number) => (array: T[]) => number
```

Like [sum](#sum), but each element of the `array` is converted to a number
by applying `fn`.

<details><summary>Example</summary>

```typescript
A.sumBy((u) => u.age, [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
// => 30
```
</details>

**See also:** [sum](#sum)

---

#### Searching arrays by value

##### includes

```typescript
<T>(value: T) => (array: T[]) => boolean
```

Check if the `array` includes the specified `value`, using [equals](#equals) for
determining equality.

<details><summary>Example</summary>

```typescript
A.includes(1, [1, 2, 3])
// => true

A.includes(0, [1, 2, 3])
// => false
```
</details>

---

##### indexOf

```typescript
<T>(value: T) => (array: T[]) => number
```

Return the index of the first element equaling `value`, using [equals](#equals)
for determining equality. Returns `-1` if no match can be found.

<details><summary>Example</summary>

```typescript
A.indexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 1

A.indexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```
</details>

**See also:** [lastIndexOf](#lastindexof), [includes](#includes)

---

##### lastIndexOf

```typescript
<T>(value: T) => (array: T[]) => number
```

Return the index of the last element equaling `value`, using [equals](#equals)
for determining equality. Returns `-1` if no match can be found.

<details><summary>Example</summary>

```typescript
A.lastIndexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 4

A.lastIndexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```
</details>

**See also:** [indexOf](#indexof), [includes](#includes)

---

#### Searching arrays with a predicate

##### count

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Count the number of elements in the `array` the satisfy the `predicate`.

<details><summary>Example</summary>

```typescript
A.count((n) => n > 1, [1, 2, 3])
// => 2
```
</details>

**See also:** [filter](#filter)

---

##### every

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if every element in the `array` satisfies the `predicate`.

<details><summary>Example</summary>

```typescript
A.every((n) => n < 10, [1, 2, 3])
// => true

A.every((n) => n < 3, [1, 2, 3])
// => false
```
</details>

**See also:** [none](#none), [some](#some)

---

##### filter

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U[]
```

Return the elements of the `array` that satisfy the `predicate`.

<details><summary>Example</summary>

```typescript
A.filter((n) => n > 1, [1, 2, 3])
// => [2, 3]
```
</details>

**See also:** [filterWithIndex](#filterwithindex), [count](#count), [partition](#partition)

---

##### filterWithIndex

```typescript
<T>(predicate: (index: number, value: T) => boolean) => (array: T[]) => T[]
```

Like [filter](#filter), but `predicate` also receives the element index as the
first argument.

<details><summary>Example</summary>

```typescript
A.filterWithIndex((i, n) => i + n === 3, [1, 2, 3])
// => [2]
```
</details>

**See also:** [filter](#filter)

---

##### find

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T | undefined
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U | undefined
```

Find the first element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

<details><summary>Example</summary>

```typescript
A.find((c) => c !== 'a', ['a', 'b', 'c'])
// => 'b'

A.find((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```
</details>

**See also:** [findLast](#findlast), [findIndex](#findindex)

---

##### findIndex

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Find the index of the first element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements satisfy the predicate.

<details><summary>Example</summary>

```typescript
A.findIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 1

A.findIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```
</details>

**See also:** [findLastIndex](#findlastindex), [find](#find)

---

##### findLast

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T | undefined
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U | undefined
```

Find the last element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

<details><summary>Example</summary>

```typescript
A.findLast((c) => c !== 'a', ['a', 'b', 'c'])
// => 'c'

A.findLast((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```
</details>

**See also:** [find](#find), [findLastIndex](#findlastindex)

---

##### findLastIndex

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Find the index of the last element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements match.

<details><summary>Example</summary>

```typescript
A.findLastIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 2

A.findLastIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```
</details>

**See also:** [findIndex](#findindex), [findLast](#findlast)

---

##### none

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if none of the elements in the `array` satisfy the `predicate`.

<details><summary>Example</summary>

```typescript
A.none((n) => n > 5, [1, 2, 3])
// => true

A.none((n) => n > 5, [1, 2, 3])
// => false
```
</details>

**See also:** [every](#every), [some](#some)

---

##### partition

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => [T[], T[]]
<T, U>(guard: (value: T) => value is U) => (array: T[]) => [U[], Array<Exclude<T, U>>]
```

Partition the `array` into two arrays, the first containing the elements
that satisfy the `predicate` and the second containing the elements that do
not.

<details><summary>Example</summary>

```typescript
const [evens, odds] = A.partition((n) => n % 2 === 0, [1, 2, 3])
// => [[2], [1, 3]]
```
</details>

**See also:** [filter](#filter)

---

##### some

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if some elements in the `array` satisfies the `predicate`.

<details><summary>Example</summary>

```typescript
A.some((n) => n > 2, [1, 2, 3])
// true

A.some((n) => n > 5, [1, 2, 3])
// false
```
</details>

**See also:** [every](#every), [none](#none)

---

#### Slicing arrays

##### drop

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Drop the first `n` elements of an `array`.

<details><summary>Example</summary>

```typescript
A.drop(1, [1, 2, 3])
// => [2, 3]

A.drop(2, [1, 2, 3])
// => [3]
```
</details>

**See also:** [dropLast](#droplast), [take](#take)

---

##### dropLast

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Drop the last `n` elements of an `array`.

<details><summary>Example</summary>

```typescript
A.dropLast(1, [1, 2, 3])
// => [1, 2]

A.dropLast(2, [1, 2, 3])
// => [1]
```
</details>

**See also:** [drop](#drop), [takeLast](#takelast)

---

##### dropLastWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Drop elements from the end of an `array` while `predicate` is satisfied.

<details><summary>Example</summary>

```typescript
A.dropLastWhile((n) => n > 1, [1, 2, 3])
// => [1]
```
</details>

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

---

##### dropWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Drop elements from the beginning of an `array` while `predicate` is
satisfied.

<details><summary>Example</summary>

```typescript
A.dropWhile((n) => n === 1, [1, 2, 3])
// => [2, 3]
```
</details>

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

---

##### slice

```typescript
(start: number) => (end: number) => <T>(array: T[]) => T[]
```

Create a copy of `array` containing the elements from `start` (inclusive)
to `end` (exclusive).

<details><summary>Example</summary>

```typescript
A.slice(0, 2, [1, 2, 3])
// => [1, 2]

A.slice(1, 2, [1, 2, 3])
// => [2]
```
</details>

---

##### take

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Take the first `n` elements of an `array`.

<details><summary>Example</summary>

```typescript
A.take(2, [1, 2, 3])
// => [1, 2]
```
</details>

**See also:** [drop](#drop), [takeLast](#takelast)

---

##### takeLast

```typescript
<T>(n: number) => (array: T[]) => T[]
```

Take the last `n` elements of an `array`.

<details><summary>Example</summary>

```typescript
A.takeLast(2, [1, 2, 3])
// => [2, 3]
```
</details>

**See also:** [dropLast](#droplast), [take](#take)

---

##### takeLastWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Take elements from the end of an `array` while `predicate` is satisfied.

<details><summary>Example</summary>

```typescript
A.takeLastWhile((n) => n >= 2, [1, 2, 3])
// => [2, 3]
```
</details>

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

---

##### takeWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Take elements from the beginning of an `array` while `predicate` is
satisfied.

<details><summary>Example</summary>

```typescript
A.takeWhile((n) => n <= 2, [1, 2, 3])
// => [1, 2]
```
</details>

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

---

#### Sorting arrays

##### sort

```typescript
<T>(comparator: (first: T, second: T) => number) => (array: T[]) => T[]
```

Sort an `array` according to the comparator function.

<details><summary>Example</summary>

```typescript
A.sort((a, b) => a - b, [3, 2, 1])
// => [1, 2, 3]
```
</details>

**See also:** [sortBy](#sortby), [sortWith](#sortwith), [ascend](#ascend), [descend](#descend)

---

##### sortBy

```typescript
<T, U extends Ordered>(fn: (value: T) => U) => (array: T[]) => T[]
```

Sort an `array` into ascending order by mapping each element of the array
with `fn`.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Bob', age: 10 },
  { name: 'Alice', age: 20 }
]

A.sortBy((u) => u.name, users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]

A.sortBy((u) => u.age, users)
// => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
```
</details>

**See also:** [sort](#sort), [sortWith](#sortwith)

---

##### sortWith

```typescript
<T>(comparators: Array<(first: T, second: T) => number>) => (array: T[]) => T[]
```

Sort an `array` according to an array of comparator functions.

The comparators are tried in order until an ordering has been found.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 20 },
]

A.sortWith([F.descend((u) => u.age), F.ascend((u) => u.name)], users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Alice', age: 10 }]
```
</details>

**See also:** [sort](#sort), [sortBy](#sortby), [ascend](#ascend), [descend](#descend)

---

#### Transforming arrays

##### flatMap

```typescript
<T, U>(fn: (value: T) => U[]) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array` and then flattening the result by one level.

<details><summary>Example</summary>

```typescript
A.flatMap((n) => [n, n], [1, 2, 3])
// => [1, 1, 2, 2, 3, 3]
```
</details>

**See also:** [map](#map), [flatten](#flatten)

---

##### flatten

```typescript
<D extends number>(depth: D) => <T extends unknown[]>(array: T) => Array<FlatArray<T, D>>
```

Flatten a nested `array` by `n` levels.

<details><summary>Example</summary>

```typescript
A.flatten(1, [1, [2, [3]]])
// => [1, 2, [3]]

A.flatten(2, [1, [2, [3]]])
// => [1, 2, 3]
```
</details>

**See also:** [flatMap](#flatmap)

---

##### intersperse

```typescript
<T>(separator: T) => (array: T[]) => T[]
```

Return a copy of `array` with `separator` inserted between each element.

<details><summary>Example</summary>

```typescript
A.intersperse(',', ['a', 'b', 'c'])
// => ['a', ',', 'b', ',', 'c']

A.intersperse(',', [])
// => []
```
</details>

**See also:** [join](#join)

---

##### join

```typescript
(separator: string) => <T>(array: T[]) => string
```

Convert the `array` to a string, inserting the `separator` between each
element.

<details><summary>Example</summary>

```typescript
A.join(', ', [1, 2, 3])
// => '1, 2, 3'
```
</details>

**See also:** [split](#split), [intersperse](#intersperse)

---

##### map

```typescript
<T, U>(fn: (value: T) => U) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`.

<details><summary>Example</summary>

```typescript
A.map((n) => n + 1, [1, 2, 3])
// => [2, 3, 4]
```
</details>

**See also:** [mapWithIndex](#mapwithindex), [mapMaybe](#mapmaybe), [flatMap](#flatmap)

---

##### mapMaybe

```typescript
<T, U>(fn: (value: T) => U | undefined) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`, discarding any `undefined` values.

<details><summary>Example</summary>

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: undefined },
  { name: 'Carol', age: 20 }
]

A.mapMaybe((u) => u.age, users)
// => [10, 20]
```
</details>

**See also:** [map](#map)

---

##### mapWithIndex

```typescript
<T, U>(fn: (index: number, value: T) => U) => (array: T[]) => U[]
```

Like [map](#map), but `fn` also receives the element index as the first
argument.

<details><summary>Example</summary>

```typescript
A.mapWithIndex((i, c) => `${i}-${c}`, ['a', 'b', 'c'])
// => ['0-a', '1-b', '2-c']
```
</details>

**See also:** [map](#map)

---

##### reverse

```typescript
<T>(array: T[]) => T[]
```

Reverse an `array`.

<details><summary>Example</summary>

```typescript
A.reverse([1, 2, 3])
// => [3, 2, 1]
```
</details>

---

#### Zipping arrays

##### zip

```typescript
<T>(first: T[]) => <U>(second: U[]) => Array<[T, U]>
```

Combine the corresponding elements of two arrays into an array of pairs.

If one of the arrays is longer than the other, the extra elements are
ignored.

<details><summary>Example</summary>

```typescript
A.zip(['a', 'b', 'c'], [1, 2, 3])
// => [['a', 1], ['b', 2], ['c', 3]]
```
</details>

**See also:** [zipWith](#zipwith), [zipObject](#zipobject)

---

##### zipObject

```typescript
<K extends string>(keys: K[]) => <T>(values: T[]) => Record<K, T>
```

Combine an array of `keys` and `values` into an object.

If one of the arrays is longer than the other, its extra elements are
ignored.

<details><summary>Example</summary>

```typescript
A.zipObject(['a', 'b', 'c'], [1, 2, 3])
// => { a: 1, b: 2, c: 3 }
```
</details>

**See also:** [zip](#zip), [fromEntries](#fromentries)

---

##### zipWith

```typescript
<T, U, R>(fn: (value: T, other: U) => R) => (first: T[]) => (second: U[]) => R[]
```

Like [zip](#zip), but the elements are combined with `fn` instead of
constructing a pair.

<details><summary>Example</summary>

```typescript
A.zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6])
// => [5, 7, 9]
```
</details>

**See also:** [zip](#zip)

---

### Object (iiris/object)

The `iiris/set` module includes functions for working with Objects.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as O from 'iiris/object'
```

#### Object

##### entries

```typescript
<T extends object>(object: T) => Array<[keyof T & string, T[keyof T & string]]>
```

Return an array of the own enumerable property key-value pairs of `object`

<details><summary>Example</summary>

```typescript
O.entries({ a: 1, b: 2, c: 3 })
// => [['a', 1], ['b', 2], ['c', 3]]
```
</details>

**See also:** [fromEntries](#fromentries), [keys](#keys), [values](#values)

---

##### fromEntries

```typescript
<K extends string, V>(entries: Array<[K, V]>) => Record<K, V>
```

Create an object from an array of `[key, value]` pairs.

<details><summary>Example</summary>

```typescript
O.fromEntries([['a', 1], ['b', 2], ['c', 3]])
// => { a: 1, b: 2, c: 3 }
```
</details>

**See also:** [entries](#entries)

---

##### fromMap

```typescript
<K extends string, V>(map: Map<K, V>) => Record<K, V>
```

Convert a `map` with string keys to an object.

<details><summary>Example</summary>

```typescript
O.fromMap(new Map([['a', 1], ['b', 2], ['c', 3]]))
// => { a: 1, b: 2, c: 3 }
```
</details>

---

##### get

```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => T[K]
```

Retrieves the property `key` from `object` or `undefined`.

<details><summary>Example</summary>

```typescript
O.get('a', { a: 1, b: 2, c: 3 })
// => 1

O.get('a', {})
// => undefined
```
</details>

**See also:** [getOr](#getor)

---

##### getOr

```typescript
<V>(defaultValue: V) => <K extends string>(key: K) => <T extends HasKey<K, V>>(object: T) => V | Defined<T[K]>
```

Like [get](#get), but if the resolved value is `undefined`, `defaultValue`
is returned instead.

<details><summary>Example</summary>

```typescript
O.getOr(999, 'a', { a: 1, b: 2, c: 3 })
// => 1

O.getOr(999, 'a', {})
// => 999

O.getOr(999, 'a', { a: undefined })
// => 999
```
</details>

**See also:** [get](#get)

---

##### has

```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => boolean
```

Check if `key` is an own property of `object`.

<details><summary>Example</summary>

```typescript
O.has('a', { a: 1 })
// => true

O.has('toString', { a: 1 })
// => false
```
</details>

---

##### keys

```typescript
<T extends object>(object: T) => Array<keyof T & string>
```

Return an array of the own enumerable property keys of `object`.

<details><summary>Example</summary>

```typescript
O.keys({ a: 1, b: 2, c: 3 })
// => ['a', 'b', 'c']
```
</details>

**See also:** [entries](#entries), [values](#values)

---

##### mapKeys

```typescript
<K1 extends string, K2 extends string>(fn: (value: K1) => K2) => <V>(object: Record<K1, V>) => Record<K2, V>
```

Return an object containing the results of applying `fn` to each key of
the original `object`.

If multiple keys map to the same new key, the latest value is selected.

<details><summary>Example</summary>

```typescript
O.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
// => { A: 1, B: 2, C: 3 }
```
</details>

---

##### mapValues

```typescript
<V1, V2>(fn: (value: V1) => V2) => <K extends string>(object: Record<K, V1>) => Record<K, V2>
```

Return an object containing the results of applying `fn` to each value of
the original `object`.

<details><summary>Example</summary>

```typescript
O.mapValues((n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 3, c: 4 }
```
</details>

---

##### merge

```typescript
<T extends object>(first: T) => <U extends object>(second: U) => T & U
```

Copy the own enumerable properties of two objects, preferring the values from
`second` in case of duplicate keys.

<details><summary>Example</summary>

```typescript
O.merge({ a: 1, b: 1 }, { b: 2, c: 2 })
// => { a: 1, b: 2, c: 2 }
```
</details>

---

##### modify

```typescript
<K extends string>(key: K) => <V>(fn: (value: V) => V) => <T extends HasKey<K, V>>(object: T) => T
```

Return a copy of `object` where the property `key` has replaced by applying
`fn` to its current value.

- If `key` is not an own property of `object`, the `object` is returned
  unchanged.
- If `fn` returns `undefined`, the property is removed.

<details><summary>Example</summary>

```typescript
O.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 2, c: 3 }

O.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }

O.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2, c: 3, d: 4 }
```
</details>

**See also:** [set](#set), [remove](#remove)

---

##### omit

```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Omit<T, Extract<keyof T, K>>
```

Return a copy of `object` without the specified `keys`.

<details><summary>Example</summary>

```typescript
O.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { c: 3 }
```
</details>

**See also:** [pick](#pick)

---

##### pick

```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Pick<T, Extract<keyof T, K>>
```

Return a copy of `object` with only the specified `keys`.

<details><summary>Example</summary>

```typescript
O.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2 }
```
</details>

**See also:** [omit](#omit)

---

##### remove

```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => Omit<T, K>
```

Return a copy of `object` without the property `key`.

- If `key` is not an own property of `object`, the `object` is returned
  unchanged.

<details><summary>Example</summary>

```typescript
O.remove('a', { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```
</details>

---

##### set

```typescript
<K extends string>(key: K) => <V>(value: V) => <T extends HasKey<K, V>>(object: T) => T
```

Return a copy of `object` with property `key` set to `value`.

- If `value` is `undefined`, the property is removed.

<details><summary>Example</summary>

```typescript
O.setProp('a', 999, { a: 1, b: 2, c: 3 })
// => { a: 999, b: 2, c: 3 }

O.setProp('a', undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```
</details>

**See also:** [modify](#modify), [remove](#remove)

---

##### values

```typescript
<T extends object>(object: T) => Array<T[keyof T & string]>
```

Return an array of the own enumerable property values of `object`

<details><summary>Example</summary>

```
O.keys({ a: 1, b: 2, c: 3 })
// => [1, 2, 3]
```
</details>

**See also:** [keys](#keys), [entries](#entries)

---

### Map (iiris/map)

The `iiris/map` module includes functions for working with Maps.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as M from 'iiris/map'
```

#### Map

##### empty

```typescript
<K, V>() => Map<K, V>
```

Create an empty map.

<details><summary>Example</summary>

```typescript
M.empty()
// => Map(0) {}
```
</details>

**See also:** [singleton](#singleton)

---

##### entries

```typescript
<K, V>(map: Map<K, V>) => IterableIterator<[K, V]>
```

Return a new iterator containing the key-value pairs of the map in insertion order.

<details><summary>Example</summary>

```typescript
M.entries()
// => [Map Entries] { [ 'a', 1 ] }
```
</details>

---

##### forEach

```typescript
<K, V>(fn: (key: K, value: V) => void) => (map: Map<K, V>) => Map<K, V>
```

Apply a `fn` to each `key`-`value` pair of the `map`.

<details><summary>Example</summary>

```typescript
M.forEach((k, v) => {
  conso
}, map)
```
</details>

---

##### fromEntries

```typescript
<K, V>(entries: Iterable<[K, V]>) => Map<K, V>
```

Create a map from an array of `[key, value]` pairs.

<details><summary>Example</summary>

```typescript
M.fromEntries([['a', 1], ['b', 2], ['c', 3]])
// => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```
</details>

**See also:** [entries](#entries)

---

##### fromObject

```typescript
<K extends string, V>(object: Record<K, V>) => Map<K, V>
```

Convert an `object` to a map.

<details><summary>Example</summary>

```typescript
M.fromObject({ a: 1, b: 2, c: 3 })
// => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```
</details>

---

##### get

```typescript
<K>(key: K) => <V>(map: Map<K, V>) => V | undefined
```

Retrieve the specified value from the `map`.

<details><summary>Example</summary>

```typescript
M.get('a', M.singleton('a', 1))
// => 1

M.get('b', M.singleton('a', 1))
// => undefined
```
</details>

**See also:** [getOr](#getor)

---

##### getOr

```typescript
<V>(defaultValue: V) => <K>(key: K) => (map: Map<K, V>) => V
```

Retrieve the specified value or `defaultValue` from the `map`.

<details><summary>Example</summary>

```typescript
M.getOr(999, 'a', M.singleton('a', 1))
// => 1

M.getOr(999, 'b', M.singleton('a', 1))
// => 999
```
</details>

---

##### has

```typescript
<K>(key: K) => <V>(map: Map<K, V>) => boolean
```

Check if `map` contains the specified `key`.

<details><summary>Example</summary>

```typescript
M.has('a', M.singleton('a', 1))
// => true
```
</details>

---

##### isEmpty

```typescript
<K, V>(map: Map<K, V>) => boolean
```

Check if the `map` is empty.

<details><summary>Example</summary>

```typescript
M.isEmpty(M.empty())
// => true
```
</details>

---

##### keys

```typescript
<K, V>(map: Map<K, V>) => IterableIterator<K>
```

Return a new iterator containing the keys of the `map` in insertion order.

<details><summary>Example</summary>

```typescript
M.keys(M.singleton('a', 1))
// => [Map Iterator] { 'a' }
```
</details>

---

##### map

```typescript
<V1, V2>(fn: (value: V1) => V2) => <K>(map: Map<K, V1>) => Map<K, V2>
```

Return a map containing the results of applying `fn` to each `value` of
the original `map`.

<details><summary>Example</summary>

```typescript
M.map((n) => n + 1, M.fromObject({ a: 1, b: 2, c: 3 }))
// => Map(3) { 'a' => 2, 'b' => 3, 'c' => 4 }
```
</details>

**See also:** [mapKeys](#mapkeys)

---

##### mapKeys

```typescript
<K1, K2>(fn: (key: K1) => K2) => <V>(map: Map<K1, V>) => Map<K1, V>
```

Return a map containing the results of applying `fn` to each `key` of
the original `map`.

<details><summary>Example</summary>

```typescript
M.mapKeys((k) => k.toUpperCase(), M.fromObject({ a: 1, b: 2, c: 3 }))
// => Map(3) { 'A' => 1, 'B' => 2, 'C' => 3 }
```
</details>

**See also:** [mapKeys](#mapkeys)

---

##### modify

```typescript
<K>(key: K) => <V>(fn: (value: V) => V) => (map: Map<K, V>) => Map<K, V>
```

Return a copy of `map` where `key` has been replaced by applying `fn` to its
current value.

- If the `map` doesn't contain `key`, it is returned unchanged.

<details><summary>Example</summary>

```typescript
M.modify('a', (n) => n + 1, M.singleton('a', 1))
// => Map(1) { 'a' => 2 }
```
</details>

**See also:** [modify](#modify), [remove](#remove)

---

##### remove

```typescript
<K>(key: K) => <V>(map: Map<K, V>) => Map<K, V>
```

Return a copy of `map` without the specified `key`.

<details><summary>Example</summary>

```typescript
M.remove('a', M.singleton('a', 1))
// => Map(2) { 'a' => 1, 'b' => 2 }
```
</details>

**See also:** [modify](#modify), [remove](#remove)

---

##### set

```typescript
<K>(key: K) => <V>(value: V) => (map: Map<K, V>) => Map<K, V>
```

Return a copy of `map` with `key` set to `value`.

<details><summary>Example</summary>

```typescript
M.set('b', 2, M.singleton('a', 1))
// => Map(2) { 'a' => 1, 'b' => 2 }
```
</details>

**See also:** [modify](#modify), [remove](#remove)

---

##### singleton

```typescript
<K>(key: K) => <V>(value: V) => Map<K, V>
```

Create a map with a single element.

<details><summary>Example</summary>

```typescript
M.singleton('a', 1)
// => Map(1) { 'a' => 1 }
```
</details>

**See also:** [singleton](#singleton)

---

##### size

```typescript
<K, V>(map: Map<K, V>) => number
```

Return the number of entries in the `map`.

<details><summary>Example</summary>

```typescript
M.size(M.singleton('a', 1)
// => 1
```
</details>

---

##### values

```typescript
<K, V>(map: Map<K, V>) => IterableIterator<V>
```

Return a new iterator containing the values of the `map` in insertion order.

<details><summary>Example</summary>

```typescript
M.values(M.singleton('a', 1))
// => [Map Iterator] { 1 }
```
</details>

---

### Set (iiris/set)

The `iiris/set` module includes functions for working with Sets.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as S from 'iiris/array'
```

#### Basic set operations

##### add

```typescript
<T>(value: T) => (set: Set<T>) => Set<T>
```

Return a copy of `set` with `value`.

- If `set` already contains `value`, it is returned unchanged.

<details><summary>Example</summary>

```typescript
S.add(4, S.from([1, 2, 3]))
// => Set(4) { 1, 2, 3, 4 }
```
</details>

**See also:** [add](#add), [has](#has)

---

##### remove

```typescript
<T>(value: T) => (set: Set<T>) => Set<T>
```

Return a copy of `set` without `value`.

- If `set` doesn't contain `value`, it is returned unchanged.

<details><summary>Example</summary>

```typescript
S.remove(1, S.from([1, 2, 3]))
// => Set(2) { 2, 3 }
```
</details>

**See also:** [add](#add), [has](#has)

---

#### Creating sets

##### empty

```typescript
<T>() => Set<T>
```

Create an empty set.

<details><summary>Example</summary>

```typescript
S.empty()
// => Set(0) {}
```
</details>

**See also:** [from](#from), [singleton](#singleton)

---

##### from

```typescript
<T>(iterable: Iterable<T>) => Set<T>
```

Convert an `iterable` into a set.

<details><summary>Example</summary>

```typescript
S.from([1, 2, 3])
// => Set(3) { 1, 2, 3 }
```
</details>

**See also:** [empty](#empty), [singleton](#singleton)

---

##### singleton

```typescript
<T>(value: T) => Set<T>
```

Create a singleton set containing `value`.

<details><summary>Example</summary>

```typescript
S.singleton(1)
// => Set(1) { 1 }
```
</details>

**See also:** [empty](#empty), [from](#from)

---

#### Other

##### has

```typescript
<T>(value: T) => (set: Set<T>) => boolean
```

Check if `set` contains `value`.

<details><summary>Example</summary>

```typescript
S.has(1, S.from([1, 2, 3]))
// => true
```
</details>

---

##### isEmpty

```typescript
<T>(set: Set<T>) => boolean
```

Check if the `set` is empty.

<details><summary>Example</summary>

```typescript
S.isEmpty(S.empty())
// => true
```
</details>

---

#### Set operations

##### difference

```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```

Calculate the
[https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement difference](#httpsen.wikipedia.org/wiki/complement_(set_theory)#relative_complement-difference)
between two sets.

<details><summary>Example</summary>

```typescript
S.difference(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 1 }
```
</details>

**See also:** [intersection](#intersection), [union](#union)

---

##### intersection

```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```

Calculate the
[https://en.wikipedia.org/wiki/Intersection_(set_theory) intersection](#httpsen.wikipedia.org/wiki/intersection_(set_theory)-intersection)
between two sets.

<details><summary>Example</summary>

```typescript
S.intersection(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 2, 3 }
```
</details>

**See also:** [intersection](#intersection), [union](#union)

---

##### union

```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```

Calculate the [https://en.wikipedia.org/wiki/Union_(set_theory) union](#httpsen.wikipedia.org/wiki/union_(set_theory)-union)
between two sets.

<details><summary>Example</summary>

```typescript
S.union(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 1, 2, 3, 4 }
```
</details>

**See also:** [difference](#difference), [intersection](#intersection)

---

### String (iiris/string)

The `iiris/string` module includes functions for working with Strings.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as S from 'iiris/string'
```

#### String

##### capitalize

```typescript
(string: string) => string
```

Convert the first code point of `string` to uppercase and the rest to
lowercase.

<details><summary>Example</summary>

```typescript
S.capitalize('aBc')
// => 'Abc'
```
</details>

**See also:** [toLowerCase](#tolowercase), [toUpperCase](#touppercase)

---

##### split

```typescript
(separator: RegExp | string) => (string: string) => string
```

Split the `string` into an array of substrings between each `separator`.

<details><summary>Example</summary>

```typescript
S.split(', ', 'a, b, c')
// => ['a', 'b', 'c']
```
</details>

**See also:** [join](#join)

---

##### test

```typescript
(regexp: RegExp) => (string: string) => boolean
```

Check if `string` matches the `regexp`.

<details><summary>Example</summary>

```typescript
S.test(/abc/, 'abc')
// => true
```
</details>

---

##### toLowerCase

```typescript
(string: string) => string
```

Convert `string` to lowercase.

<details><summary>Example</summary>

```typescript
S.toLowerCase('ABC')
// => 'abc'
```
</details>

**See also:** [toUpperCase](#touppercase), [capitalize](#capitalize)

---

##### toUpperCase

```typescript
(string: string) => string
```

Convert `string` to uppercase.

<details><summary>Example</summary>

```typescript
S.toUpperCase('abc')
// => 'ABC'
```
</details>

**See also:** [toLowerCase](#tolowercase), [capitalize](#capitalize)

---

##### trim

```typescript
(string: string) => string
```

Remove whitespace from both ends of a `string`.

<details><summary>Example</summary>

```typescript
S.trim('  abc  ')
// => 'abc'
```
</details>

**See also:** [trimStart](#trimstart), [trimEnd](#trimend)

---

##### trimEnd

```typescript
(string: string) => string
```

Remove whitespace from the end of a `string`.

<details><summary>Example</summary>

```typescript
S.trimEnd('  abc  ')
// => '  abc'
```
</details>

**See also:** [trimStart](#trimstart), [trim](#trim)

---

##### trimStart

```typescript
(string: string) => string
```

Remove whitespace from the beginning of a `string`.

<details><summary>Example</summary>

```typescript
S.trimStart('  abc  ')
// => 'abc  '
```
</details>

**See also:** [trimEnd](#trimend), [trim](#trim)

---
<!-- END API -->
<!-- prettier-ignore-end -->
