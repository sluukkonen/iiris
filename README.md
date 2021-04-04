# Iiris 👁️

[![CI](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml/badge.svg)](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml)
![MIT License](https://img.shields.io/github/license/sluukkonen/iiris)

Iiris is a general purpose utility library, designed to make it easier to manipulate built-in JavaScript data types in a
functional manner. It is heavily inspired by projects like
[Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash).

## Features & Goals

- No mutation of input data.
- Automatically curried, data-last API.
- Performance on par with native JavaScript methods.
- Good out-of-the-box TypeScript typings.
- Small footprint (4 kB gzipped) and excellent tree-shaking support.
- Support only native JavaScript data types.
- Target reasonably current JavaScript environments (Node 10+)

Iiris is still alpha-quality software, so bugs and heavy changes to the API should be expected.

## Table of Contents

<!-- prettier-ignore-start -->
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Why Iiris?](#why-iiris)
- [API Reference](#api-reference) <!-- BEGIN TOC -->
  - [Basic array operations](#basic-array-operations)
    - [append](#append)
    - [concat](#concat)
    - [forEach](#foreach)
    - [forEachWithIndex](#foreachwithindex)
    - [head](#head)
    - [init](#init)
    - [last](#last)
    - [prepend](#prepend)
    - [tail](#tail)
  - [Transforming arrays](#transforming-arrays)
    - [flatMap](#flatmap)
    - [flatten](#flatten)
    - [intersperse](#intersperse)
    - [join](#join)
    - [map](#map)
    - [mapMaybe](#mapmaybe)
    - [mapWithIndex](#mapwithindex)
    - [reverse](#reverse)
  - [Reducing arrays](#reducing-arrays)
    - [maximum](#maximum)
    - [maximumBy](#maximumby)
    - [minimum](#minimum)
    - [minimumBy](#minimumby)
    - [reduce](#reduce)
    - [reduceRight](#reduceright)
    - [sum](#sum)
    - [sumBy](#sumby)
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
  - [Searching arrays by value](#searching-arrays-by-value)
    - [includes](#includes)
    - [indexOf](#indexof)
    - [lastIndexOf](#lastindexof)
  - [Grouping arrays by key](#grouping-arrays-by-key)
    - [countBy](#countby)
    - [groupBy](#groupby)
    - [groupMap](#groupmap)
    - [groupMapReduce](#groupmapreduce)
    - [indexBy](#indexby)
  - [Building arrays](#building-arrays)
    - [of](#of)
    - [pair](#pair)
    - [range](#range)
    - [repeat](#repeat)
    - [times](#times)
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
    - [ascend](#ascend)
    - [descend](#descend)
    - [sort](#sort)
    - [sortBy](#sortby)
    - [sortWith](#sortwith)
  - [Zipping arrays](#zipping-arrays)
    - [zip](#zip)
    - [zipObject](#zipobject)
    - [zipWith](#zipwith)
  - [Set operations](#set-operations)
    - [difference](#difference)
    - [differenceWith](#differencewith)
    - [intersection](#intersection)
    - [intersectionWith](#intersectionwith)
    - [union](#union)
    - [unionWith](#unionwith)
    - [uniq](#uniq)
    - [uniqWith](#uniqwith)
  - [Object](#object)
    - [entries](#entries)
    - [fromEntries](#fromentries)
    - [has](#has)
    - [keys](#keys)
    - [mapKeys](#mapkeys)
    - [mapValues](#mapvalues)
    - [merge](#merge)
    - [omit](#omit)
    - [pick](#pick)
    - [values](#values)
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
    - [second](#second)
    - [tap](#tap)
    - [unary](#unary)
  - [Getters and setters](#getters-and-setters)
    - [at](#at)
    - [atOr](#ator)
    - [modifyAt](#modifyat)
    - [modifyProp](#modifyprop)
    - [prop](#prop)
    - [propOr](#propor)
    - [removeAt](#removeat)
    - [removeProp](#removeprop)
    - [setAt](#setat)
    - [setProp](#setprop)
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
  - [Math](#math)
    - [add](#add)
    - [dec](#dec)
    - [divideBy](#divideby)
    - [inc](#inc)
    - [multiply](#multiply)
    - [negate](#negate)
    - [subtractBy](#subtractby)
  - [Logic](#logic)
    - [maybe](#maybe)
    - [valueOr](#valueor)
  - [String](#string)
    - [capitalize](#capitalize)
    - [split](#split)
    - [test](#test)
    - [toLowerCase](#tolowercase)
    - [toUpperCase](#touppercase)
    - [trim](#trim)
    - [trimEnd](#trimend)
    - [trimStart](#trimstart)
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
  TypeScript type inference and makes tree-shaking more effective.
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
### Basic array operations

#### append

```typescript
<T>(value: T) => (array: T[]) => T[]
```

Append a new element to the end of an array.

**Example:**

```typescript
I.append(4, [1, 2, 3])
// => [1, 2, 3, 4]
```

**See also:** [prepend](#prepend), [concat](#concat)

---

#### concat

```typescript
<T>(array: T[]) => (other: T[]) => T[]
```

Concatenate two arrays together.

**Example:**

```typescript
I.concat([1, 2, 3], [4, 5, 6])
// => [1, 2, 3, 4, 5, 6]
```

**See also:** [append](#append), [prepend](#prepend)

---

#### forEach

```typescript
<T>(fn: (value: T) => void) => (array: T[]) => T[]
```

Apply `fn` to each element of the `array` and return the `array`.

**Example:**

```typescript
I.forEach(console.log, ['h', 'i', '!'])
h
i
!
// => ['h', 'i', '!']
```

**See also:** [forEachWithIndex](#foreachwithindex)

---

#### forEachWithIndex

```typescript
<T>(fn: (index: number, value: T) => void) => (array: T[]) => T[]
```

Like [forEach](#foreach), but `fn` also receives the element index as the first
argument.

**Example:**

```typescript
I.forEachWithIndex(console.log, ['h', 'i', '!'])
0 h
1 i
2 !
// => ['h', 'i', '!']
```

**See also:** [forEach](#foreach)

---

#### head

```typescript
<T>(array: T[]) => T | undefined
```

Return the first element of the `array` or `undefined`.

**Example:**

```typescript
I.head([1, 2, 3])
// => 1

I.head([])
// => undefined
```

**See also:** [tail](#tail), [init](#init), [last](#last)

---

#### init

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the last.

**Example:**

```typescript
I.init([1, 2, 3])
// => [1, 2]

I.init([])
// => []
```

**See also:** [last](#last), [head](#head), [tail](#tail)

---

#### last

```typescript
<T>(array: T[]) => T | undefined
```

Return the last element of the `array` or `undefined`.

**Example:**

```typescript
I.last([1, 2, 3])
// => 3

I.last([])
// => undefined
```

**See also:** [init](#init), [head](#head), [tail](#tail)

---

#### prepend

```typescript
<T>(value: T) => (array: T[]) => T[]
```

Prepend a new element to the beginning of an array.

**Example:**

```typescript
I.prepend(0, [1, 2, 3])
// => [0, 1, 2, 3]
```

**See also:** [append](#append), [concat](#concat)

---

#### tail

```typescript
<T>(array: T[]) => T[]
```

Return all elements of the `array` except the first.

**Example:**

```typescript
I.tail([1, 2, 3])
// => [2, 3]

I.tail([])
// => []
```

**See also:** [head](#head), [init](#init), [last](#last)

---

### Transforming arrays

#### flatMap

```typescript
<T, U>(fn: (value: T) => U[]) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array` and then flattening the result by one level.

**Example:**

```typescript
I.flatMap((n) => [n, n], [1, 2, 3])
// => [1, 1, 2, 2, 3, 3]
```

**See also:** [map](#map), [flatten](#flatten)

---

#### flatten

```typescript
<D extends number>(depth: D) => <T extends unknown[]>(array: T) => Array<FlatArray<T, D>>
```

Flatten a nested `array` by `n` levels.

**Example:**

```typescript
I.flatten(1, [1, [2, [3]]])
// => [1, 2, [3]]

I.flatten(2, [1, [2, [3]]])
// => [1, 2, 3]
```

**See also:** [flatMap](#flatmap)

---

#### intersperse

```typescript
<T>(separator: T) => (array: T[]) => T[]
```

Return a copy of `array` with `separator` inserted between each element.

**Example:**

```typescript
I.intersperse(',', ['a', 'b', 'c'])
// => ['a', ',', 'b', ',', 'c']

I.intersperse(',', [])
// => []
```

**See also:** [join](#join)

---

#### join

```typescript
(separator: string) => <T>(array: T[]) => string
```

Convert the `array` to a string, inserting the `separator` between each
element.

**Example:**

```typescript
I.join(', ', [1, 2, 3])
// => '1, 2, 3'
```

**See also:** [split](#split), [intersperse](#intersperse)

---

#### map

```typescript
<T, U>(fn: (value: T) => U) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`.

**Example:**

```typescript
I.map(I.inc, [1, 2, 3])
// => [2, 3, 4]
```

**See also:** [mapWithIndex](#mapwithindex), [mapMaybe](#mapmaybe), [flatMap](#flatmap)

---

#### mapMaybe

```typescript
<T, U>(fn: (value: T) => U | undefined) => (array: T[]) => U[]
```

Return an array containing the results of applying `fn` to each element in
the original `array`, discarding any `undefined` values.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: undefined },
  { name: 'Carol', age: 20 }
]

I.mapMaybe(I.prop('age'), users)
// => [10, 20]
```

**See also:** [map](#map)

---

#### mapWithIndex

```typescript
<T, U>(fn: (index: number, value: T) => U) => (array: T[]) => U[]
```

Like [map](#map), but `fn` also receives the element index as the first
argument.

**Example:**

```typescript
I.mapWithIndex((i, c) => `${i}-${c}`, ['a', 'b', 'c'])
// => ['0-a', '1-b', '2-c']
```

**See also:** [map](#map)

---

#### reverse

```typescript
<T>(array: T[]) => T[]
```

Reverse an `array`.

**Example:**

```typescript
I.reverse([1, 2, 3])
// => [3, 2, 1]
```

---

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
<T>(fn: (value: T) => Ordered) => (array: T[]) => T | undefined
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

#### minimum

```typescript
<T extends Ordered>(array: T[]) => T | undefined
```

Return the smallest element of `array` or `undefined`.

**Example:**

```typescript
I.minimum([1, 2, 3])
// => 1

I.minimum([])
// => undefined
```

**See also:** [maximum](#maximum), [minimumBy](#minimumby)

---

#### minimumBy

```typescript
<T>(fn: (value: T) => Ordered) => (array: T[]) => T | undefined
```

Like [minimum](#minimum), but `fn` is applied to each value before determining
their ordering.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 },
]

I.minimumBy((u) => u.age, users)
// => { name: 'Alice', age: 10 }
```

**See also:** [minimum](#minimum), [maximumBy](#maximumby)

---

#### reduce

```typescript
<T, R>(reducer: (accumulator: R, value: T) => R) => (initial: R) => (array: T[]) => R
```

Left-associative fold.

Combine the elements of an `array` in to a single value by calling `reducer`
with the accumulated value so far and the current element. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

**Example:**

```typescript
I.reduce((sum, n) => sum + n, 1, [2, 3, 4]) // equal to ((1 + 2) + 3) + 4
// => 10
```

**See also:** [reduceRight](#reduceright)

---

#### reduceRight

```typescript
<T, R>(reducer: (value: T, accumulator: R) => R) => (initial: R) => (array: T[]) => R
```

Right-associative fold.

Combine the elements of an `array` in to a single value by calling `reducer`
with the current element and the accumulated value so far. The first call to
`reducer` receives `initial` as the accumulator.

If the array is empty, `initial` is returned.

**Example:**

```typescript
I.reduceRight((n, sum) => n + sum, 4, [1, 2, 3]) // equal to 1 + (2 + (3 + 4))
// => 10
```

**See also:** [reduce](#reduce)

---

#### sum

```typescript
(numbers: number[]) => number
```

Sum an `array` of numbers together. Returns `0` if the array is empty.

Uses the [Kahan summation
algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) for
minimizing numerical error.

**Example:**

```typescript
const numbers = I.repeat(0.1, 10)
// => [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]

I.sum(numbers)
// => 1

numbers.reduce((sum, n) => sum + n, 0)
// => 0.9999999999999999
```

**See also:** [sumBy](#sumby)

---

#### sumBy

```typescript
<T>(fn: (value: T) => number) => (array: T[]) => number
```

Like [sum](#sum), but each element of the `array` is converted to a number
by applying `fn`.

**Example:**

```typescript
I.sumBy(I.prop('age'), [{ name: 'Alice', age: 10 }, { name: 'Bob', age: 20 }])
// => 30
```

**See also:** [sum](#sum)

---

### Searching arrays with a predicate

#### count

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Count the number of elements in the `array` the satisfy the `predicate`.

**Example:**

```typescript
I.count((n) => n > 1, [1, 2, 3])
// => 2
```

**See also:** [filter](#filter)

---

#### every

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if every element in the `array` satisfies the `predicate`.

**Example:**

```typescript
I.every((n) => n < 10, [1, 2, 3])
// => true

I.every((n) => n < 3, [1, 2, 3])
// => false
```

**See also:** [none](#none), [some](#some)

---

#### filter

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U[]
```

Return the elements of the `array` that satisfy the `predicate`.

**Example:**

```typescript
I.filter((n) => n > 1, [1, 2, 3])
// => [2, 3]
```

**See also:** [filterWithIndex](#filterwithindex), [count](#count), [partition](#partition)

---

#### filterWithIndex

```typescript
<T>(predicate: (index: number, value: T) => boolean) => (array: T[]) => T[]
```

Like [filter](#filter), but `predicate` also receives the element index as the
first argument.

**Example:**

```typescript
I.filterWithIndex((i, n) => i + n === 3, [1, 2, 3])
// => [2]
```

**See also:** [filter](#filter)

---

#### find

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T | undefined
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U | undefined
```

Find the first element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

**Example:**

```typescript
I.find((c) => c !== 'a', ['a', 'b', 'c'])
// => 'b'

I.find((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```

**See also:** [findLast](#findlast), [findIndex](#findindex)

---

#### findIndex

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Find the index of the first element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements satisfy the predicate.

**Example:**

```typescript
I.findIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 1

I.findIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```

**See also:** [findLastIndex](#findlastindex), [find](#find)

---

#### findLast

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T | undefined
<T, U>(guard: (value: T) => value is U) => (array: T[]) => U | undefined
```

Find the last element in the `array` that satisfies the `predicate`.

Returns `undefined` if none of the elements match.

**Example:**

```typescript
I.findLast((c) => c !== 'a', ['a', 'b', 'c'])
// => 'c'

I.findLast((c) => c === 'x', ['a', 'b', 'c'])
// => undefined
```

**See also:** [find](#find), [findLastIndex](#findlastindex)

---

#### findLastIndex

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => number
```

Find the index of the last element in the `array` that satisfies the
`predicate`.

Returns `-1` if none of the elements match.

**Example:**

```typescript
I.findLastIndex((c) => c !== 'a', ['a', 'b', 'c'])
// => 2

I.findLastIndex((c) => c === 'x', ['a', 'b', 'c'])
// => -1
```

**See also:** [findIndex](#findindex), [findLast](#findlast)

---

#### none

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if none of the elements in the `array` satisfy the `predicate`.

**Example:**

```typescript
I.none((n) => n > 5, [1, 2, 3])
// => true

I.none((n) => n > 5, [1, 2, 3])
// => false
```

**See also:** [every](#every), [some](#some)

---

#### partition

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => [T[], T[]]
<T, U>(guard: (value: T) => value is U) => (array: T[]) => [U[], Array<Exclude<T, U>>]
```

Partition the `array` into two arrays, the first containing the elements
that satisfy the `predicate` and the second containing the elements that do
not.

**Example:**

```typescript
const [evens, odds] = I.partition((n) => n % 2 === 0, [1, 2, 3])
// => [[2], [1, 3]]
```

**See also:** [filter](#filter)

---

#### some

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => boolean
```

Check if some elements in the `array` satisfies the `predicate`.

**Example:**

```typescript
I.some((n) => n > 2, [1, 2, 3])
// true

I.some((n) => n > 5, [1, 2, 3])
// false
```

**See also:** [every](#every), [none](#none)

---

### Searching arrays by value

#### includes

```typescript
<T>(value: T) => (array: T[]) => boolean
```

Check if the `array` includes the specified `value`, using [equals](#equals) for
determining equality.

**Example:**

```typescript
I.includes(1, [1, 2, 3])
// => true

I.includes(0, [1, 2, 3])
// => false
```

---

#### indexOf

```typescript
<T>(value: T) => (array: T[]) => number
```

Return the index of the first element equaling `value`, using [equals](#equals)
for determining equality. Returns `-1` if no match can be found.

**Example:**

```typescript
I.indexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 1

I.indexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```

**See also:** [lastIndexOf](#lastindexof), [includes](#includes)

---

#### lastIndexOf

```typescript
<T>(value: T) => (array: T[]) => number
```

Return the index of the last element equaling `value`, using [equals](#equals)
for determining equality. Returns `-1` if no match can be found.

**Example:**

```typescript
I.lastIndexOf('b', ['a', 'b', 'c', 'a', 'b', 'c'])
// => 4

I.lastIndexOf('x', ['a', 'b', 'c', 'a', 'b', 'c'])
// => -1
```

**See also:** [indexOf](#indexof), [includes](#includes)

---

### Grouping arrays by key

#### countBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, number>
```

Apply `keyFn` to each element in the `array` and return an object of counts
by key.

**Example:**

```typescript
const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' }
]

I.countBy(I.prop('name'), users)
// => { Alice: 2, Bob: 1 }
```

**See also:** [groupBy](#groupby)

---

#### groupBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, T[]>
```

Partition the `array` into an object of arrays according to `keyFn`.

**Example:**

```typescript
const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Alice' },
]

I.groupBy(I.prop('name'), users)
// => { Alice: [{ name: 'Alice' }, { name: 'Alice' }], Bob: [{ name: 'Bob' }] }
```

**See also:** [indexBy](#indexby), [countBy](#countby), [groupMap](#groupmap), [groupMapReduce](#groupmapreduce)

---

#### groupMap

```typescript
<T, U>(mapFn: (value: T) => U) => <K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, U[]>
```

Like [groupBy](#groupby), but also apply `mapFn` to each element before adding
it to the corresponding array.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const agesByName = I.groupMap(I.prop('age'), I.prop('name'), users)
// => { Alice: [10, 30], Bob: [20] }
```

**See also:** [groupBy](#groupby), [groupMapReduce](#groupmapreduce)

---

#### groupMapReduce

```typescript
<U>(reducer: (accumulator: U, value: U) => U) => <T>(mapFn: (value: T) => U) => <K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, U>
```

Like [groupMap](#groupmap), but instead of returning an object of arrays, combine
elements mapping to the same key with `reducer`.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 30 }
]
const sumOfAgesByName = I.groupMapReduce(I.add, I.prop('age'), I.prop('name'), users)
// => { Alice: 40, Bob: 20 }
```

**See also:** [groupBy](#groupby), [groupMap](#groupmap)

---

#### indexBy

```typescript
<T, K extends string>(keyFn: (value: T) => K) => (array: T[]) => Record<K, T>
```

Apply `keyFn` to each element in the `array` and return an object of
elements indexed by each key.

If multiple elements map to the same key, the last one is selected.

**Example:**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Carol' }
]
I.indexBy(I.prop('id'), users)
// => { '1': { id: 1, name: 'Carol' }, '2': { id: 2, name: 'Bob' } }
```

**See also:** [groupBy](#groupby)

---

### Building arrays

#### of

```typescript
<T>(value: T) => [T]
```

Create a singleton array containing `value`

**Example:**

```typescript
I.of(1)
// => [1]
```

**See also:** [pair](#pair)

---

#### pair

```typescript
<T>(first: T) => <U>(second: U) => [T, U]
```

Create two element array containing `first` and `second`.

**Example:**

```typescript
I.pair(1, 2)
// => [1, 2]
```

**See also:** [of](#of)

---

#### range

```typescript
(start: number) => (end: number) => number[]
```

Create an array of numbers between `start` (inclusive) and `end`
(exclusive).

**Example:**

```typescript
I.range(0, 10)
// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// I.range(0, 0)
// => []
```

**See also:** [times](#times), [repeat](#repeat)

---

#### repeat

```typescript
<T>(value: T) => (n: number) => T[]
```

Repeat the given `value` `n` times.

**Example:**

```typescript
I.repeat('a', 5)
// => ['a', 'a', 'a', 'a', 'a']
```

**See also:** [range](#range), [times](#times)

---

#### times

```typescript
<T>(fn: (index: number) => T) => (n: number) => T[]
```

Create an array of length `n` by applying `fn` to the index of each element.

**Example:**

```typescript
I.times((n) => n * 10, 3)
// => [0, 10, 20]
```

**See also:** [range](#range), [repeat](#repeat)

---

### Slicing arrays

#### drop

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Drop the first `n` elements of an `array`.

**Example:**

```typescript
I.drop(1, [1, 2, 3])
// => [2, 3]

I.drop(2, [1, 2, 3])
// => [3]
```

**See also:** [dropLast](#droplast), [take](#take)

---

#### dropLast

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Drop the last `n` elements of an `array`.

**Example:**

```typescript
I.dropLast(1, [1, 2, 3])
// => [1, 2]

I.dropLast(2, [1, 2, 3])
// => [1]
```

**See also:** [drop](#drop), [takeLast](#takelast)

---

#### dropLastWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Drop elements from the end of an `array` while `predicate` is satisfied.

**Example:**

```typescript
I.dropLastWhile((n) => n > 1, [1, 2, 3])
// => [1]
```

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

---

#### dropWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Drop elements from the beginning of an `array` while `predicate` is
satisfied.

**Example:**

```typescript
I.dropWhile((n) => n === 1, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

---

#### slice

```typescript
(start: number) => (end: number) => <T>(array: T[]) => T[]
```

Create a copy of `array` containing the elements from `start` (inclusive)
to `end` (exclusive).

**Example:**

```typescript
I.slice(0, 2, [1, 2, 3])
// => [1, 2]

I.slice(1, 2, [1, 2, 3])
// => [2]
```

---

#### take

```typescript
(n: number) => <T>(array: T[]) => T[]
```

Take the first `n` elements of an `array`.

**Example:**

```typescript
I.take(2, [1, 2, 3])
// => [1, 2]
```

**See also:** [drop](#drop), [takeLast](#takelast)

---

#### takeLast

```typescript
<T>(n: number) => (array: T[]) => T[]
```

Take the last `n` elements of an `array`.

**Example:**

```typescript
I.takeLast(2, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLast](#droplast), [take](#take)

---

#### takeLastWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Take elements from the end of an `array` while `predicate` is satisfied.

**Example:**

```typescript
I.takeLastWhile((n) => n >= 2, [1, 2, 3])
// => [2, 3]
```

**See also:** [dropLastWhile](#droplastwhile), [takeWhile](#takewhile)

---

#### takeWhile

```typescript
<T>(predicate: (value: T) => boolean) => (array: T[]) => T[]
```

Take elements from the beginning of an `array` while `predicate` is
satisfied.

**Example:**

```typescript
I.takeWhile((n) => n <= 2, [1, 2, 3])
// => [1, 2]
```

**See also:** [dropWhile](#dropwhile), [takeLastWhile](#takelastwhile)

---

### Sorting arrays

#### ascend

```typescript
<T>(fn: (value: T) => Ordered) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create an
ascending comparator function.

**Note:** This function is not curried.

**Example:**

```typescript
I.sort(I.ascend(I.prop('age')), [{ name: 'Bob' }, { name: 'Alice' }])
// => [{ name: 'Alice' }, { name: 'Bob' }]
```

**See also:** [descend](#descend), [sort](#sort), [sortWith](#sortwith)

---

#### descend

```typescript
<T>(fn: (value: T) => Ordered) => (first: T, second: T) => number
```

Given a `fn` that maps a `value` to an Ordered value, create a
descending comparator function.

**Note:** This function is not curried.

**Example:**

```typescript
I.sort(I.descend(I.prop('name')), [{ name: 'Alice' }, { name: 'Bob' }])
// => [{ name: 'Bob' }, { name: 'Alice' }]
```

**See also:** [ascend](#ascend), [sort](#sort), [sortWith](#sortwith)

---

#### sort

```typescript
<T>(comparator: (first: T, second: T) => number) => (array: T[]) => T[]
```

Sort an `array` according to the comparator function.

**Example:**

```typescript
I.sort((a, b) => a - b, [3, 2, 1])
// => [1, 2, 3]
```

**See also:** [sortBy](#sortby), [sortWith](#sortwith), [ascend](#ascend), [descend](#descend)

---

#### sortBy

```typescript
<T>(fn: (value: T) => Ordered) => (array: T[]) => T[]
```

Sort an `array` into ascending order by mapping each element of the array
with `fn`.

**Example:**

```typescript
const users = [
  { name: 'Bob', age: 10 },
  { name: 'Alice', age: 20 }
]

I.sortBy(I.prop('name'), users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 10 }]

I.sortBy(I.prop('age'), users)
// => [{ name: 'Bob', age: 10 }, { name: 'Alice', age: 20 }]
```

**See also:** [sort](#sort), [sortWith](#sortwith)

---

#### sortWith

```typescript
<T>(comparators: Array<(first: T, second: T) => number>) => (array: T[]) => T[]
```

Sort an `array` according to an array of comparator functions.

The comparators are tried in order until an ordering has been found.

**Example:**

```typescript
const users = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Alice', age: 20 },
]

I.sortWith([I.descend(I.prop('age')), I.ascend(I.prop('name'))], users)
// => [{ name: 'Alice', age: 20 }, { name: 'Bob', age: 20 }, { name: 'Alice', age: 10 }]
```

**See also:** [sort](#sort), [sortBy](#sortby), [ascend](#ascend), [descend](#descend)

---

### Zipping arrays

#### zip

```typescript
<T>(first: T[]) => <U>(second: U[]) => Array<[T, U]>
```

Combine the corresponding elements of two arrays into an array of pairs.

If one of the arrays is longer than the other, the extra elements are
ignored.

**Example:**

```typescript
I.zip(['a', 'b', 'c'], [1, 2, 3])
// => [['a', 1], ['b', 2], ['c', 3]]
```

**See also:** [zipWith](#zipwith), [zipObject](#zipobject)

---

#### zipObject

```typescript
<K extends string>(keys: K[]) => <T>(values: T[]) => Record<K, T>
```

Combine an array of `keys` and `values` into an object.

If one of the arrays is longer than the other, its extra elements are
ignored.

**Example:**

```typescript
I.zipObject(['a', 'b', 'c'], [1, 2, 3])
// => { a: 1, b: 2, c: 3 }
```

**See also:** [zip](#zip), [fromEntries](#fromentries)

---

#### zipWith

```typescript
<T, U, R>(fn: (value: T, other: U) => R) => (first: T[]) => (second: U[]) => R[]
```

Like [zip](#zip), but the elements are combined with `fn` instead of
constructing a pair.

**Example:**

```typescript
I.zipWith(I.add, [1, 2, 3], [4, 5, 6])
// => [5, 7, 9]
```

**See also:** [zip](#zip)

---

### Set operations

#### difference

```typescript
<T>(first: T[], second: T[]) => T[]
```

Calculate the [set
difference](https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement)
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the `first` array.

**Example:**

```typescript
I.difference([1, 2, 3], [2, 3, 4])
// => [1]
```

**See also:** [differenceWith](#differencewith), [union](#union), [intersection](#intersection)

---

#### differenceWith

```typescript
<T>(equals: (value: T, other: T) => boolean) => (array: T[]) => (other: T[]) => T[]
```

Like [difference](#difference), but using a custom equality function.

**Example:**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

I.differenceWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 1, name: 'Alice' } ]
```

**See also:** [difference](#difference), [unionWith](#unionwith), [intersectionWith](#intersectionwith)

---

#### intersection

```typescript
<T>(first: T[]) => (second: T[]) => T[]
```

Calculate the [set
intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory))
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the first array.

**Example:**

```typescript
I.intersection([1, 2, 3], [2, 3, 4])
// => [2, 3]
```

**See also:** [intersectionWith](#intersectionwith), [union](#union), [difference](#difference)

---

#### intersectionWith

```typescript
<T>(equals: (value: T, other: T) => boolean) => (array: T[]) => (other: T[]) => T[]
```

Like [intersection](#intersection), but using a custom equality function.

**Example:**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

I.intersectionWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' } ]
```

**See also:** [intersection](#intersection), [unionWith](#unionwith), [differenceWith](#differencewith)

---

#### union

```typescript
<T>(first: T[]) => (second: T[]) => T[]
```

Calculate the [set union](https://en.wikipedia.org/wiki/Union_(set_theory))
between the `first` array and the `second` array, using [equals](#equals) for
determining equality.

Will not remove duplicates from the first array.

**Example:**

```typescript
I.union([1, 2, 3], [2, 3, 4])
// => [1, 2, 3, 4]
```

**See also:** [unionWith](#unionwith), [intersection](#intersection), [difference](#difference)

---

#### unionWith

```typescript
<T>(equals: (value: T, other: T) => boolean) => (array: T[]) => (other: T[]) => T[]
```

Like [union](#union), but using a custom equality function.

**Example:**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]
const otherUsers = [
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
  { id: 4, name: 'Dan' }
]

I.unionWith((a, b) => a.id === b.id, users, otherUsers)
// => [ { id: 1, name: 'Alice' },  { id: 2, name: 'Bob' }, { id: 3, name: 'Carol' }, { id: 4, name: 'Dan' } ]
```

**See also:** [union](#union), [intersectionWith](#intersectionwith), [differenceWith](#differencewith)

---

#### uniq

```typescript
<T>(array: T[]) => T[]
```

Remove duplicate values from `array`, using [equals](#equals) for determining
equality.

**Example:**

```typescript
I.uniq([1, 2, 3, 1, 2, 3])
// => [1, 2, 3]
```

**See also:** [uniqWith](#uniqwith)

---

#### uniqWith

```typescript
<T>(equals: (value: T, other: T) => boolean) => (array: T[]) => T[]
```

Like [uniq](#uniq), but using a custom equality function.

**Example:**

```typescript
const users = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
I.uniqWith((a, b) => a.id === b.id, users)
// => [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

**See also:** [uniq](#uniq)

---

### Object

#### entries

```typescript
<T extends object, K extends string>(object: T) => Array<[K, T[K]]>
```

Return an array of the own enumerable property key-value pairs of `object`

**Example:**

```typescript
I.entries({ a: 1, b: 2, c: 3 })
// => [['a', 1], ['b', 2], ['c', 3]]
```

**See also:** [fromEntries](#fromentries), [keys](#keys), [values](#values)

---

#### fromEntries

```typescript
<K extends string, T>(entries: Array<[K, T]>) => Record<K, T>
```

Create an object from an array of `[key, value]` pairs.

**Example:**

```typescript
I.fromEntries([['a', 1], ['b', 2], ['c', 3]])
// => { a: 1, b: 2, c: 3 }
```

**See also:** [entries](#entries)

---

#### has

```typescript
<K extends string>(key: K) => (object: unknown) => object is Record<K, unknown>
```

Check if `key` is an own property of `object`.

**Example:**

```typescript
I.has('a', { a: 1 })
// => true

I.has('toString', { a: 1 })
// => false
```

---

#### keys

```typescript
<T extends object>(object: T) => Array<keyof T & string>
```

Return an array of the own enumerable property keys of `object`.

**Example:**

```typescript
I.keys({ a: 1, b: 2, c: 3 })
// => ['a', 'b', 'c']
```

**See also:** [entries](#entries), [values](#values)

---

#### mapKeys

```typescript
<K1 extends string, K2 extends string>(fn: (value: K1) => K2) => <V>(object: Record<K1, V>) => Record<K2, V>
```

Return an object containing the results of applying `fn` to each key of
the original `object`.

If multiple keys map to the same new key, the latest value is selected.

**Example:**

```typescript
I.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
// => { A: 1, B: 2, C: 3 }
```

---

#### mapValues

```typescript
<V1, V2>(fn: (value: V1) => V2) => <K extends string>(object: Record<K, V1>) => Record<K, V2>
```

Return an object containing the results of applying `fn` to each value of
the original `object`.

**Example:**

```typescript
I.mapValues(I.inc, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 3, c: 4 }
```

---

#### merge

```typescript
<T extends object>(first: T) => <U extends object>(second: U) => T & U
```

Copy the own enumerable properties of two objects, preferring the values from
`second` in case of duplicate keys.

**Example:**

```typescript
I.merge({ a: 1, b: 1 }, { b: 2, c: 2 })
// => { a: 1, b: 2, c: 2 }
```

---

#### omit

```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Omit<T, Extract<keyof T, K>>
```

Return a copy of `object` without the specified `keys`.

**Example:**

```typescript
I.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { c: 3 }
```

**See also:** [pick](#pick)

---

#### pick

```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Pick<T, Extract<keyof T, K>>
```

Return a copy of `object` with only the specified `keys`.

**Example:**

```typescript
I.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2 }
```

**See also:** [omit](#omit)

---

#### values

```typescript
<T extends object>(object: T) => Array<T[keyof T & string]>
```

Return an array of the own enumerable property values of `object`

**Example:**
```
I.keys({ a: 1, b: 2, c: 3 })
// => [1, 2, 3]
```

**See also:** [keys](#keys), [entries](#entries)

---

### Function

#### binary

```typescript
<T1, T2, R>(fn: VariadicFunction2<T1, T2, R>) => Function2<T1, T2, R>
```

Create a version of `fn` that accepts two arguments.

**Example:**

```typescript
const fn = (...args) => args
const wrapped = I.binary(fn)

fn(1, 2, 3)
// => [1, 2, 3]

wrapped(1, 2, 3)
// => [1, 2]
```

**See also:** [unary](#unary)

---

#### complement

```typescript
<T extends VariadicFunction0<boolean>>(fn: T) => T
```

Create a version of a predicate `fn` that flips the returned boolean value.

**Example:**

```typescript
const isZero = (v) => v === 0
const notZero = I.complement(isZero)

notZero(0)
// => false

notZero(1)
// => true
```

---

#### compose

```typescript
<T extends unknown[], R>(fn: (args: ...T) => R) => (args: ...T) => R
<T extends unknown[], T1, R>(fn1: Function1<T1, R>, fn2: (args: ...T) => T1) => (args: ...T) => R
<T extends unknown[], T1, T2, R>(fn1: Function1<T2, R>, fn2: Function1<T1, T2>, fn3: (args: ...T) => T1) => (args: ...T) => R
```

Right-to-left function composition.

**Note:** This function is not curried.

**Example:**

```typescript
const composed = I.compose(I.add(10), I.multiply(2))

composed(2)
// => 14
```

---

#### constant

```typescript
<T>(value: T) => () => T
```

Create a function that always returns `value`.

**Example:**

```typescript
I.map(I.constant(1), [1, 2, 3])
// => [1, 1, 1]
```

---

#### curry2

```typescript
<T extends [unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction2<T, R>
```

Create a curried version of a `fn` taking two arguments.

**Example:**

```typescript
 const add = I.curry2((a, b) => a + b)

 add(1)(2)
 // => 3

 add(1, 2)
 // => 3
```

**See also:** [curry3](#curry3), [curry4](#curry4)

---

#### curry3

```typescript
<T extends [unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction3<T, R>
```

Create a curried version of a `fn` taking three arguments.

**Example:**

```typescript
 const add = I.curry3((a, b, c) => a + b + c)

 add(1)(2)(3)
 // => 6

 add(1, 2, 3)
 // => 6
```

**See also:** [curry2](#curry2), [curry4](#curry4)

---

#### curry4

```typescript
<T extends [unknown, unknown, unknown, unknown], R>(fn: (args: ...T) => R) => CurriedFunction4<T, R>
```

Create a curried version of a `fn` taking four arguments.

**Example:**

```typescript
 const add = I.curry4((a, b, c, d) => a + b + c + d)

 add(1)(2)(3)(4)
 // => 10

 add(1, 2, 3, 4)
 // => 10
```

**See also:** [curry2](#curry2), [curry3](#curry3)

---

#### flip

```typescript
<T, U, R>(fn: Function2<T, U, R>) => Function2<U, T, R>
```

Flip the arguments of a binary function.

**Example:**

```typescript
const fn = (...args) => args
const flipped = I.flip(fn)

flipped(1, 2)
// => [2, 1]
```

---

#### identity

```typescript
<T>(value: T) => T
```

Identity function. Returns the first argument.

**Example:**

```typescript
I.identity(5)
// => 5
```

---

#### noop

```typescript
() => undefined
```

Do nothing an return `undefined`.

**Example:**

```typescript
I.map(I.noop, [1, 2, 3])
// => [undefined, undefined, undefined]
```

---

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

**Example:**

```typescript
I.pipe(
  [1, 2, 3],
  I.map((n) => n * 2),
  I.sum
)
// => 12
```

**See also:** [compose](#compose)

---

#### second

```typescript
<T>(first: unknown, second: T) => T
```

Return the `second` argument.

**Example:**

```typescript
I.second(1, 2)
// => 2
```

---

#### tap

```typescript
<T>(fn: (value: T) => void) => (value: T) => T
```

Create a function that applies `fn` to its argument and returns the
argument.

Useful for executing a side-effect within a pipeline.

**Example:**

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

---

#### unary

```typescript
<T, R>(fn: VariadicFunction1<T, R>) => Function1<T, R>
```

Create a version of `fn` that accepts a single argument.

**Example:**

```typescript
['1', '2', '3'].map(I.unary(parseInt))
// => [1, 2, 3]
```

**See also:** [binary](#binary)

---

### Getters and setters

#### at

```typescript
(index: number) => <T>(array: T[]) => T | undefined
```

Retrieves the element at `index` from `array` or `undefined`.

**Example:**

```typescript
I.at(0, [1, 2, 3])
// => 1

I.at(0, [])
// => undefined
```

**See also:** [atOr](#ator), [prop](#prop)

---

#### atOr

```typescript
<T>(defaultValue: T) => (index: number) => (array: T[]) => T
```

Like [at](#at), but if the resolved value is `undefined`, `defaultValue` is
returned instead.

**Example:**

```typescript
I.atOr(999, 0, [1, 2, 3])
// => 1

I.atOr(999, 0, [])
// => 999

I.atOr(999, 0, [undefined])
// => 999
```

**See also:** [at](#at), [propOr](#propor)

---

#### modifyAt

```typescript
(index: number) => <T>(fn: (value: T) => T) => (array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been replaced by
applying `fn` to its current value.

- If `index` is not within `array` bounds, the `array` is returned
  unchanged.
- Removes the element if `fn` returns `undefined`.

**Example:**

```typescript
I.modifyAt(0, I.inc, [1, 2, 3])
// => [2, 2, 3]

I.modifyAt(-1, I.inc, [1, 2, 3])
// => [1, 2, 4]

I.modifyAt(0, I.noop, [1, 2, 3])
// => [2, 3]

I.modifyAt(999, I.inc, [1, 2, 3])
// => [1, 2, 3]
```

**See also:** [setAt](#setat), [removeAt](#removeat)

---

#### modifyProp

```typescript
<K extends string>(key: K) => <V>(fn: (value: V) => V) => <T extends HasKey<K, V>>(object: T) => T
```

Return a copy of `object` where the property `key` has replaced by applying
`fn` to its current value.

- If `key` is not an own property of `object`, the `object` is returned
  unchanged.
- If `fn` returns `undefined`, the property is removed.

**Example:**

```typescript
I.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 2, c: 3 }

I.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }

I.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2, c: 3, d: 4 }
```

**See also:** [setProp](#setprop), [removeProp](#removeprop)

---

#### prop

```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => T[K]
```

Retrieves the property `key` from `object` or `undefined`.

**Example:**

```typescript
I.prop('a', { a: 1, b: 2, c: 3 })
// => 1

I.prop('a', {})
// => undefined
```

**See also:** [propOr](#propor), [at](#at)

---

#### propOr

```typescript
<V>(defaultValue: V) => <K extends string>(key: K) => <T extends HasKey<K, V>>(object: T) => V | Defined<T[K]>
```

Like [prop](#prop), but if the resolved value is `undefined`, `defaultValue`
is returned instead.

**Example:**

```typescript
I.propOr(999, 'a', { a: 1, b: 2, c: 3 })
// => 1

I.propOr(999, 'a', {})
// => 999

I.propOr(999, 'a', { a: undefined })
// => 999
```

**See also:** [prop](#prop), [atOr](#ator)

---

#### removeAt

```typescript
(index: number) => <T>(array: T[]) => T[]
```

Returns a copy of `array` without the element at `index`.

- If `index` is not within the `array` bounds, the `array` is returned
  unchanged.

**Example:**

```typescript
I.removeAt(0, [1, 2, 3])
// => [2, 3]

I.removeAt(-1, [1, 2, 3])
// => [1, 2]

I.removeAt(999, [1, 2, 3])
// => [1, 2, 3]
```

**See also:** [modifyAt](#modifyat), [setAt](#setat)

---

#### removeProp

```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => Omit<T, K>
```

Return a copy of `object` without the property `key`.

- If `key` is not an own property of `object`, the `object` is returned
  unchanged.

**Example:**

```typescript
I.removeProp('a', { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

---

#### setAt

```typescript
(index: number) => <T>(value: undefined | T) => (array: T[]) => T[]
```

Returns a copy of `array` where the element at `index` has been replaced with `value`.

- If `index` is not within the `array` bounds, the `array` is returned
  unchanged.
- Removes the element if `value` is `undefined`.

**Example:**

```typescript
I.setAt(0, 999, [1, 2, 3])
// => [999, 2, 3]

I.setAt(-1, 999, [1, 2, 3])
// => [1, 2, 999]

I.setAt(999, 999, [1, 2, 3])
// => [1, 2, 3]

I.setAt(0, undefined, [1, 2, 3])
// => [2, 3]
```

**See also:** [modifyAt](#modifyat), [removeAt](#removeat)

---

#### setProp

```typescript
<K extends string>(key: K) => <V>(value: V) => <T extends HasKey<K, V>>(object: T) => T
```

Return a copy of `object` with property `key` set to `value`.

- If `value` is `undefined`, the property is removed.

**Example:**

```typescript
I.setProp('a', 999, { a: 1, b: 2, c: 3 })
// => { a: 999, b: 2, c: 3 }

I.setProp('a', undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

**See also:** [modifyProp](#modifyprop), [removeProp](#removeprop)

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
<T>(fn: (value: T) => Ordered) => (first: T, second: T) => T
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
<T>(fn: (value: T) => Ordered) => (first: T) => (second: T) => T
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

### Math

#### add

```typescript
(n: number) => (m: number) => number
```

Add two numbers together.

**Example:**

```typescript
I.map(I.add(1), [1, 2, 3])
// => [2, 3, 4]
```

---

#### dec

```typescript
(n: number) => number
```

Decrement a number by 1.

**Example:**

```typescript
I.map(I.dec, [1, 2, 3])
// => [0, 1, 2]
```

**See also:** [inc](#inc)

---

#### divideBy

```typescript
(divisor: number) => (dividend: number) => number
```

Divide `dividend` by the `divisor`.

**Example:**

```typescript
I.map(I.divideBy(2), [1, 2, 3])
// => [0.5, 1, 1.5]
```

---

#### inc

```typescript
(n: number) => number
```

Increment a number by 1.

**Example:**

```typescript
I.map(I.inc, [1, 2, 3])
// => [2, 3, 4]
```

---

#### multiply

```typescript
(multiplicand: number) => (multiplier: number) => number
```

Multiply two numbers together.

**Example:**

```typescript
I.map(I.multiply(2), [1, 2, 3])
// => [2, 4, 6]
```

---

#### negate

```typescript
(n: number) => number
```

Return `n` with its sign reversed.

**Example:**

```typescript
I.map(I.negate, [1, 2, 3])
// => [-1, -2, -3]
```

---

#### subtractBy

```typescript
(subtrahend: number) => (minuend: number) => number
```

Subtract the `subtrahend` from the `minuend`.

**Example:**

```typescript
I.map(I.subtractBy(1), [1, 2, 3])
// => [0, 1, 2]
```

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

Return `value` if it is not `undefined`, `defaultValue` otherwise.

**Example:**

```typescript
I.valueOr(999, 0)
// => 0

I.valueOr(999, undefined)
// => 999
```

**See also:** [maybe](#maybe)

---

### String

#### capitalize

```typescript
(string: string) => string
```

Convert the first code point of `string` to uppercase and the rest to
lowercase.

**Example:**

```typescript
I.capitalize('aBc')
// => 'Abc'
```

**See also:** [toLowerCase](#tolowercase), [toUpperCase](#touppercase)

---

#### split

```typescript
(separator: RegExp | string) => (string: string) => string
```

Split the `string` into an array of substrings between each `separator`.

**Example:**

```typescript
I.split(', ', 'a, b, c')
// => ['a', 'b', 'c']
```

**See also:** [join](#join)

---

#### test

```typescript
(regexp: RegExp) => (string: string) => boolean
```

Check if `string` matches the `regexp`.

**Example:**

```typescript
I.test(/abc/, 'abc')
// => true
```

---

#### toLowerCase

```typescript
(string: string) => string
```

Convert `string` to lowercase.

**Example:**

```typescript
I.toLowerCase('ABC')
// => 'abc'
```

**See also:** [toUpperCase](#touppercase), [capitalize](#capitalize)

---

#### toUpperCase

```typescript
(string: string) => string
```

Convert `string` to uppercase.

**Example:**

```typescript
I.toUpperCase('abc')
// => 'ABC'
```

**See also:** [toLowerCase](#tolowercase), [capitalize](#capitalize)

---

#### trim

```typescript
(string: string) => string
```

Remove whitespace from both ends of a `string`.

**Example:**

```typescript
I.trim('  abc  ')
// => 'abc'
```

**See also:** [trimStart](#trimstart), [trimEnd](#trimend)

---

#### trimEnd

```typescript
(string: string) => string
```

Remove whitespace from the end of a `string`.

**Example:**

```typescript
I.trimEnd('  abc  ')
// => '  abc'
```

**See also:** [trimStart](#trimstart), [trim](#trim)

---

#### trimStart

```typescript
(string: string) => string
```

Remove whitespace from the beginning of a `string`.

**Example:**

```typescript
I.trimStart('  abc  ')
// => 'abc  '
```

**See also:** [trimEnd](#trimend), [trim](#trim)

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
