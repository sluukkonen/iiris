# Module `iiris/string`

The `iiris/string` module includes functions for working with Strings. It is
designed to be imported with a wildcard, e.g.

```typescript
import * as S from 'iiris/string'
```

## Table of contents

- [String](#string)
  - [capitalize](#capitalize)
  - [split](#split)
  - [test](#test)
  - [toLowerCase](#tolowercase)
  - [toUpperCase](#touppercase)
  - [trim](#trim)
  - [trimEnd](#trimend)
  - [trimStart](#trimstart)

### String

#### capitalize

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Convert the first code point of `string` to uppercase and the rest to lowercase.

##### Example

```typescript
S.capitalize('aBc')
// => 'Abc'
```

**See also:** [toLowerCase](#tolowercase), [toUpperCase](#touppercase)

---

#### split

<!-- prettier-ignore-start -->
```typescript
(separator: RegExp | string) => (string: string) => string
```
<!-- prettier-ignore-end -->

Split the `string` into an array of substrings between each `separator`.

##### Example

```typescript
S.split(', ', 'a, b, c')
// => ['a', 'b', 'c']
```

**See also:** [join](#join)

---

#### test

<!-- prettier-ignore-start -->
```typescript
(regexp: RegExp) => (string: string) => boolean
```
<!-- prettier-ignore-end -->

Check if `string` matches the `regexp`.

##### Example

```typescript
S.test(/abc/, 'abc')
// => true
```

---

#### toLowerCase

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Convert `string` to lowercase.

##### Example

```typescript
S.toLowerCase('ABC')
// => 'abc'
```

**See also:** [toUpperCase](#touppercase), [capitalize](#capitalize)

---

#### toUpperCase

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Convert `string` to uppercase.

##### Example

```typescript
S.toUpperCase('abc')
// => 'ABC'
```

**See also:** [toLowerCase](#tolowercase), [capitalize](#capitalize)

---

#### trim

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from both ends of a `string`.

##### Example

```typescript
S.trim('  abc  ')
// => 'abc'
```

**See also:** [trimStart](#trimstart), [trimEnd](#trimend)

---

#### trimEnd

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from the end of a `string`.

##### Example

```typescript
S.trimEnd('  abc  ')
// => '  abc'
```

**See also:** [trimStart](#trimstart), [trim](#trim)

---

#### trimStart

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from the beginning of a `string`.

##### Example

```typescript
S.trimStart('  abc  ')
// => 'abc  '
```

**See also:** [trimEnd](#trimend), [trim](#trim)

---
