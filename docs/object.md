# Module `iiris/object`

The `iiris/set` module includes functions for working with Objects. It is
designed to be imported with a wildcard, e.g.

```typescript
import * as O from 'iiris/object'
```

## Table of contents

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

### Object

#### entries

<!-- prettier-ignore-start -->
```typescript
<T extends object>(object: T) => Array<[keyof T & string, T[keyof T & string]]>
```
<!-- prettier-ignore-end -->

Return an array of the own enumerable property key-value pairs of `object`

##### Example

```typescript
O.entries({ a: 1, b: 2, c: 3 })
// => [['a', 1], ['b', 2], ['c', 3]]
```

**See also:** [fromEntries](#fromentries), [keys](#keys), [values](#values)

---

#### fromEntries

<!-- prettier-ignore-start -->
```typescript
<K extends string, V>(entries: Array<[K, V]>) => Record<K, V>
```
<!-- prettier-ignore-end -->

Create an object from an array of `[key, value]` pairs.

##### Example

```typescript
O.fromEntries([
  ['a', 1],
  ['b', 2],
  ['c', 3],
])
// => { a: 1, b: 2, c: 3 }
```

**See also:** [entries](#entries)

---

#### fromMap

<!-- prettier-ignore-start -->
```typescript
<K extends string, V>(map: Map<K, V>) => Record<K, V>
```
<!-- prettier-ignore-end -->

Convert a `map` with string keys to an object.

##### Example

```typescript
O.fromMap(
  new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
)
// => { a: 1, b: 2, c: 3 }
```

---

#### get

<!-- prettier-ignore-start -->
```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => T[K]
```
<!-- prettier-ignore-end -->

Retrieves the property `key` from `object` or `undefined`.

##### Example

```typescript
O.get('a', { a: 1, b: 2, c: 3 })
// => 1

O.get('a', {})
// => undefined
```

**See also:** [getOr](#getor)

---

#### getOr

<!-- prettier-ignore-start -->
```typescript
<V>(defaultValue: V) => <K extends string>(key: K) => <T extends HasKey<K, V>>(object: T) => Defined<T[K]> | V
```
<!-- prettier-ignore-end -->

Like [get](#get), but if the resolved value is `undefined`, `defaultValue` is
returned instead.

##### Example

```typescript
O.getOr(999, 'a', { a: 1, b: 2, c: 3 })
// => 1

O.getOr(999, 'a', {})
// => 999

O.getOr(999, 'a', { a: undefined })
// => 999
```

**See also:** [get](#get)

---

#### has

<!-- prettier-ignore-start -->
```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => boolean
```
<!-- prettier-ignore-end -->

Check if `key` is an own property of `object`.

##### Example

```typescript
O.has('a', { a: 1 })
// => true

O.has('toString', { a: 1 })
// => false
```

---

#### keys

<!-- prettier-ignore-start -->
```typescript
<T extends object>(object: T) => Array<keyof T & string>
```
<!-- prettier-ignore-end -->

Return an array of the own enumerable property keys of `object`.

##### Example

```typescript
O.keys({ a: 1, b: 2, c: 3 })
// => ['a', 'b', 'c']
```

**See also:** [entries](#entries), [values](#values)

---

#### mapKeys

<!-- prettier-ignore-start -->
```typescript
<K1 extends string, K2 extends string>(fn: (value: K1) => K2) => <V>(object: Record<K1, V>) => Record<K2, V>
```
<!-- prettier-ignore-end -->

Return an object containing the results of applying `fn` to each key of the
original `object`.

If multiple keys map to the same new key, the latest value is selected.

##### Example

```typescript
O.mapKeys((k) => k.toUpperCase(), { a: 1, b: 2, c: 3 })
// => { A: 1, B: 2, C: 3 }
```

---

#### mapValues

<!-- prettier-ignore-start -->
```typescript
<V1, V2>(fn: (value: V1) => V2) => <K extends string>(object: Record<K, V1>) => Record<K, V2>
```
<!-- prettier-ignore-end -->

Return an object containing the results of applying `fn` to each value of the
original `object`.

##### Example

```typescript
O.mapValues((n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 3, c: 4 }
```

---

#### merge

<!-- prettier-ignore-start -->
```typescript
<T extends object>(first: T) => <U extends object>(second: U) => T & U
```
<!-- prettier-ignore-end -->

Copy the own enumerable properties of two objects, preferring the values from
`second` in case of duplicate keys.

##### Example

```typescript
O.merge({ a: 1, b: 1 }, { b: 2, c: 2 })
// => { a: 1, b: 2, c: 2 }
```

---

#### modify

<!-- prettier-ignore-start -->
```typescript
<K extends string>(key: K) => <V>(fn: (value: V) => V) => <T extends HasKey<K, V>>(object: T) => T
```
<!-- prettier-ignore-end -->

Return a copy of `object` where the property `key` has replaced by applying
`fn` to its current value.

- If `key` is not an own property of `object`, the `object` is returned unchanged.
- If `fn` returns `undefined`, the property is removed.

##### Example

```typescript
O.modifyProp('a', (n) => n + 1, { a: 1, b: 2, c: 3 })
// => { a: 2, b: 2, c: 3 }

O.modifyProp('a', () => undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }

O.modifyProp('d', () => 4, { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2, c: 3, d: 4 }
```

**See also:** [set](#set), [remove](#remove)

---

#### omit

<!-- prettier-ignore-start -->
```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Omit<T, Extract<keyof T, K>>
```
<!-- prettier-ignore-end -->

Return a copy of `object` without the specified `keys`.

##### Example

```typescript
O.omit(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { c: 3 }
```

**See also:** [pick](#pick)

---

#### pick

<!-- prettier-ignore-start -->
```typescript
<K extends string>(keys: K[]) => <T extends HasKey<K>>(object: T) => Pick<T, Extract<keyof T, K>>
```
<!-- prettier-ignore-end -->

Return a copy of `object` with only the specified `keys`.

##### Example

```typescript
O.pick(['a', 'b'], { a: 1, b: 2, c: 3 })
// => { a: 1, b: 2 }
```

**See also:** [omit](#omit)

---

#### remove

<!-- prettier-ignore-start -->
```typescript
<K extends string>(key: K) => <T extends HasKey<K>>(object: T) => Omit<T, K>
```
<!-- prettier-ignore-end -->

Return a copy of `object` without the property `key`.

- If `key` is not an own property of `object`, the `object` is returned unchanged.

##### Example

```typescript
O.remove('a', { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

---

#### set

<!-- prettier-ignore-start -->
```typescript
<K extends string>(key: K) => <V>(value: V) => <T extends HasKey<K, V>>(object: T) => T
```
<!-- prettier-ignore-end -->

Return a copy of `object` with property `key` set to `value`.

- If `value` is `undefined`, the property is removed.

##### Example

```typescript
O.setProp('a', 999, { a: 1, b: 2, c: 3 })
// => { a: 999, b: 2, c: 3 }

O.setProp('a', undefined, { a: 1, b: 2, c: 3 })
// => { b: 2, c: 3 }
```

**See also:** [modify](#modify), [remove](#remove)

---

#### values

<!-- prettier-ignore-start -->
```typescript
<T extends object>(object: T) => Array<T[keyof T & string]>
```
<!-- prettier-ignore-end -->

Return an array of the own enumerable property values of `object`

##### Example

```typescript
> O.values({ a: 1, b: 2, c: 3 })
[1, 2, 3]
```

**See also:** [keys](#keys), [entries](#entries)

---
