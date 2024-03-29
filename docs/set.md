# Module `iiris/set`

The `iiris/set` module includes functions for working with Sets. It is
designed to be imported with a wildcard, e.g.

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

<!-- prettier-ignore-start -->
```typescript
<T>(value: T) => (set: Set<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Return a copy of `set` with `value`.

- If `set` already contains `value`, it is returned unchanged.

##### Example

```typescript
S.add(4, S.from([1, 2, 3]))
// => Set(4) { 1, 2, 3, 4 }
```

**See also:** [add](#add), [has](#has)

---

#### remove

<!-- prettier-ignore-start -->
```typescript
<T>(value: T) => (set: Set<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Return a copy of `set` without `value`.

- If `set` doesn't contain `value`, it is returned unchanged.

##### Example

```typescript
S.remove(1, S.from([1, 2, 3]))
// => Set(2) { 2, 3 }
```

**See also:** [add](#add), [has](#has)

---

### Creating sets

#### empty

<!-- prettier-ignore-start -->
```typescript
<T>() => Set<T>
```
<!-- prettier-ignore-end -->

Create an empty set.

##### Example

```typescript
S.empty()
// => Set(0) {}
```

**See also:** [from](#from), [singleton](#singleton)

---

#### from

<!-- prettier-ignore-start -->
```typescript
<T>(iterable: Iterable<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Convert an `iterable` into a set.

##### Example

```typescript
S.from([1, 2, 3])
// => Set(3) { 1, 2, 3 }
```

**See also:** [empty](#empty), [singleton](#singleton)

---

#### singleton

<!-- prettier-ignore-start -->
```typescript
<T>(value: T) => Set<T>
```
<!-- prettier-ignore-end -->

Create a singleton set containing `value`.

##### Example

```typescript
S.singleton(1)
// => Set(1) { 1 }
```

**See also:** [empty](#empty), [from](#from)

---

### Other

#### has

<!-- prettier-ignore-start -->
```typescript
<T>(value: T) => (set: Set<T>) => boolean
```
<!-- prettier-ignore-end -->

Check if `set` contains `value`.

##### Example

```typescript
S.has(1, S.from([1, 2, 3]))
// => true
```

---

#### isEmpty

<!-- prettier-ignore-start -->
```typescript
<T>(set: Set<T>) => boolean
```
<!-- prettier-ignore-end -->

Check if the `set` is empty.

##### Example

```typescript
S.isEmpty(S.empty())
// => true
```

---

### Set operations

#### difference

<!-- prettier-ignore-start -->
```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Calculate the
[difference](<https://en.wikipedia.org/wiki/Complement_(set_theory)#Relative_complement>)
between two sets.

##### Example

```typescript
S.difference(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 1 }
```

**See also:** [intersection](#intersection), [union](#union)

---

#### intersection

<!-- prettier-ignore-start -->
```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Calculate the
[intersection](<https://en.wikipedia.org/wiki/Intersection_(set_theory)>)
between two sets.

##### Example

```typescript
S.intersection(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 2, 3 }
```

**See also:** [intersection](#intersection), [union](#union)

---

#### union

<!-- prettier-ignore-start -->
```typescript
<T>(first: Set<T>) => (second: Set<T>) => Set<T>
```
<!-- prettier-ignore-end -->

Calculate the [union](<https://en.wikipedia.org/wiki/Union_(set_theory)>)
between two sets.

##### Example

```typescript
S.union(S.from([1, 2, 3]), S.from([2, 3, 4]))
// => Set(4) { 1, 2, 3, 4 }
```

**See also:** [difference](#difference), [intersection](#intersection)

---
