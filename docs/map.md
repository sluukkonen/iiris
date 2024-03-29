# Module `iiris/map`

The `iiris/map` module includes functions for working with Maps. It is
designed to be imported with a wildcard, e.g.

```typescript
import * as M from 'iiris/map'
```

## Table of contents

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

### Map

#### empty

<!-- prettier-ignore-start -->
```typescript
<K, V>() => Map<K, V>
```
<!-- prettier-ignore-end -->

Create an empty map.

##### Example

```typescript
M.empty()
// => Map(0) {}
```

**See also:** [singleton](#singleton)

---

#### entries

<!-- prettier-ignore-start -->
```typescript
<K, V>(map: Map<K, V>) => IterableIterator<[K, V]>
```
<!-- prettier-ignore-end -->

Return a new iterator containing the key-value pairs of the map in insertion order.

##### Example

```typescript
M.entries()
// => [Map Entries] { [ 'a', 1 ] }
```

---

#### forEach

<!-- prettier-ignore-start -->
```typescript
<K, V>(fn: (key: K, value: V) => void) => (map: Map<K, V>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Apply a `fn` to each `key`-`value` pair of the `map`.

##### Example

```typescript
M.forEach((k, v) => {
  conso
}, map)
```

---

#### fromEntries

<!-- prettier-ignore-start -->
```typescript
<K, V>(entries: Iterable<[K, V]>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Create a map from an array of `[key, value]` pairs.

##### Example

```typescript
M.fromEntries([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])
// => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```

**See also:** [entries](#entries)

---

#### fromObject

<!-- prettier-ignore-start -->
```typescript
<K extends string, V>(object: Record<K, V>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Convert an `object` to a map.

##### Example

```typescript
M.fromObject({ a: 1, b: 2, c: 3 })
// => Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
```

---

#### get

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(map: Map<K, V>) => V | undefined
```
<!-- prettier-ignore-end -->

Retrieve the specified value from the `map`.

##### Example

```typescript
M.get('a', M.singleton('a', 1))
// => 1

M.get('b', M.singleton('a', 1))
// => undefined
```

**See also:** [getOr](#getor)

---

#### getOr

<!-- prettier-ignore-start -->
```typescript
<V>(defaultValue: V) => <K>(key: K) => (map: Map<K, V>) => V
```
<!-- prettier-ignore-end -->

Retrieve the specified value or `defaultValue` from the `map`.

##### Example

```typescript
M.getOr(999, 'a', M.singleton('a', 1))
// => 1

M.getOr(999, 'b', M.singleton('a', 1))
// => 999
```

---

#### has

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(map: Map<K, V>) => boolean
```
<!-- prettier-ignore-end -->

Check if `map` contains the specified `key`.

##### Example

```typescript
M.has('a', M.singleton('a', 1))
// => true
```

---

#### isEmpty

<!-- prettier-ignore-start -->
```typescript
<K, V>(map: Map<K, V>) => boolean
```
<!-- prettier-ignore-end -->

Check if the `map` is empty.

##### Example

```typescript
M.isEmpty(M.empty())
// => true
```

---

#### keys

<!-- prettier-ignore-start -->
```typescript
<K, V>(map: Map<K, V>) => IterableIterator<K>
```
<!-- prettier-ignore-end -->

Return a new iterator containing the keys of the `map` in insertion order.

##### Example

```typescript
M.keys(M.singleton('a', 1))
// => [Map Iterator] { 'a' }
```

---

#### map

<!-- prettier-ignore-start -->
```typescript
<V1, V2>(fn: (value: V1) => V2) => <K>(map: Map<K, V1>) => Map<K, V2>
```
<!-- prettier-ignore-end -->

Return a map containing the results of applying `fn` to each `value` of the
original `map`.

##### Example

```typescript
M.map((n) => n + 1, M.fromObject({ a: 1, b: 2, c: 3 }))
// => Map(3) { 'a' => 2, 'b' => 3, 'c' => 4 }
```

**See also:** [mapKeys](#mapkeys)

---

#### mapKeys

<!-- prettier-ignore-start -->
```typescript
<K1, K2>(fn: (key: K1) => K2) => <V>(map: Map<K1, V>) => Map<K1, V>
```
<!-- prettier-ignore-end -->

Return a map containing the results of applying `fn` to each `key` of the
original `map`.

##### Example

```typescript
M.mapKeys((k) => k.toUpperCase(), M.fromObject({ a: 1, b: 2, c: 3 }))
// => Map(3) { 'A' => 1, 'B' => 2, 'C' => 3 }
```

**See also:** [mapKeys](#mapkeys)

---

#### modify

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(fn: (value: V) => V) => (map: Map<K, V>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Return a copy of `map` where `key` has been replaced by applying `fn` to its
current value.

- If the `map` doesn't contain `key`, it is returned unchanged.

##### Example

```typescript
M.modify('a', (n) => n + 1, M.singleton('a', 1))
// => Map(1) { 'a' => 2 }
```

**See also:** [modify](#modify), [remove](#remove)

---

#### remove

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(map: Map<K, V>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Return a copy of `map` without the specified `key`.

##### Example

```typescript
M.remove('a', M.singleton('a', 1))
// => Map(2) { 'a' => 1, 'b' => 2 }
```

**See also:** [modify](#modify), [remove](#remove)

---

#### set

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(value: V) => (map: Map<K, V>) => Map<K, V>
```
<!-- prettier-ignore-end -->

Return a copy of `map` with `key` set to `value`.

##### Example

```typescript
M.set('b', 2, M.singleton('a', 1))
// => Map(2) { 'a' => 1, 'b' => 2 }
```

**See also:** [modify](#modify), [remove](#remove)

---

#### singleton

<!-- prettier-ignore-start -->
```typescript
<K>(key: K) => <V>(value: V) => Map<K, V>
```
<!-- prettier-ignore-end -->

Create a map with a single element.

##### Example

```typescript
M.singleton('a', 1)
// => Map(1) { 'a' => 1 }
```

**See also:** [singleton](#singleton)

---

#### size

<!-- prettier-ignore-start -->
```typescript
<K, V>(map: Map<K, V>) => number
```
<!-- prettier-ignore-end -->

Return the number of entries in the `map`.

##### Example

```typescript
M.size(M.singleton('a', 1)
// => 1
```

---

#### values

<!-- prettier-ignore-start -->
```typescript
<K, V>(map: Map<K, V>) => IterableIterator<V>
```
<!-- prettier-ignore-end -->

Return a new iterator containing the values of the `map` in insertion order.

##### Example

```typescript
M.values(M.singleton('a', 1))
// => [Map Iterator] { 1 }
```

---
