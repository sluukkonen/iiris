# Module `iiris/object`

The `iiris/set` module includes functions for working with Objects.
It is designed to be imported with a wildcard, e.g.

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

#### fromEntries

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

#### fromMap

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

#### get

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

#### getOr

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

#### has

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

#### keys

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

#### mapKeys

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

#### mapValues

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

#### merge

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

#### modify

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

#### omit

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

#### pick

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

#### remove

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

#### set

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

#### values

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