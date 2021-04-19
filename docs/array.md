# Module `iiris/array`

The `iiris/array` module includes functions for working with Arrays.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as A from 'iiris/array'
```

## Table of contents

- [Basic array operations](#basic-array-operations)
  - [append](#append)
  - [concat](#concat)
  - [forEach](#foreach)
  - [forEachWithIndex](#foreachwithindex)
  - [get](#get)
  - [getOr](#getor)
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

### Basic array operations

#### append

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

#### concat

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

#### forEach

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

#### forEachWithIndex

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

#### get

```typescript
(index: number) => <T>(array: T[]) => T | undefined
```

Return the element at `index` from `array` or `undefined`.

<details><summary>Example</summary>

```typescript
A.get(0, [1, 2, 3])
// => 1

A.get(0, [])
// => undefined
```
</details>

**See also:** [getOr](#getor)

---

#### getOr

```typescript
<T>(defaultValue: T) => (index: number) => (array: T[]) => T
```

Like [get](#get), but if the resolved value is `undefined`, `defaultValue` is
returned instead.

<details><summary>Example</summary>

```typescript
A.getOr(999, 0, [1, 2, 3])
// => 1

A.getOr(999, 0, [])
// => 999

A.getOr(999, 0, [undefined])
// => 999
```
</details>

**See also:** [get](#get)

---

#### head

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

#### init

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

#### isEmpty

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

#### last

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

#### length

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

#### modify

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

#### prepend

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

#### remove

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

#### set

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

#### tail

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

### Building arrays

#### empty

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

#### from

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

#### range

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

#### repeat

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

#### singleton

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

#### times

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

### Grouping arrays by key

#### countBy

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

#### groupBy

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

#### groupMap

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

#### groupMapReduce

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

#### indexBy

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

### Reducing arrays

#### minimum

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

#### minimumBy

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

#### reduce

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

#### reduceRight

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

#### sum

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

#### sumBy

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

### Searching arrays by value

#### includes

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

#### indexOf

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

#### lastIndexOf

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

### Searching arrays with a predicate

#### count

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

#### every

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

#### filter

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

#### filterWithIndex

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

#### find

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

#### findIndex

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

#### findLast

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

#### findLastIndex

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

#### none

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

#### partition

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

#### some

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

### Slicing arrays

#### drop

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

#### dropLast

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

#### dropLastWhile

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

#### dropWhile

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

#### slice

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

#### take

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

#### takeLast

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

#### takeLastWhile

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

#### takeWhile

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

### Sorting arrays

#### sort

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

#### sortBy

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

#### sortWith

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

### Transforming arrays

#### flatMap

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

#### flatten

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

#### intersperse

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

#### join

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

#### map

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

#### mapMaybe

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

#### mapWithIndex

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

#### reverse

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

### Zipping arrays

#### zip

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

#### zipObject

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

#### zipWith

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