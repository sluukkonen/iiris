# Module `iiris/set`

The `iiris/set` module includes functions for working with Sets.
It is designed to be imported with a wildcard, e.g.

```typescript
import * as S from 'iiris/array'
```

## Table of contents

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

### Basic set operations

#### add

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

#### remove

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

### Creating sets

#### empty

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

#### from

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

#### singleton

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

### Other

#### has

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

#### isEmpty

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

### Set operations

#### difference

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

#### intersection

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

#### union

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