# Module `iiris/map`

The `iiris/map` module includes functions for working with Maps.
It is designed to be imported with a wildcard, e.g.

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

#### entries

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

#### forEach

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

#### fromEntries

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

#### fromObject

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

#### get

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

#### getOr

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

#### has

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

#### isEmpty

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

#### keys

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

#### map

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

#### mapKeys

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

#### modify

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

#### remove

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

#### set

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

#### singleton

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

#### size

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

#### values

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