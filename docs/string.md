# Module `iiris/string`

The `iiris/string` module includes functions for working with Strings.
It is designed to be imported with a wildcard, e.g.

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

#### split

<!-- prettier-ignore-start -->
```typescript
(separator: RegExp | string) => (string: string) => string
```
<!-- prettier-ignore-end -->

Split the `string` into an array of substrings between each `separator`.

<details><summary>Example</summary>

```typescript
S.split(', ', 'a, b, c')
// => ['a', 'b', 'c']
```

</details>

**See also:** [join](#join)

---

#### test

<!-- prettier-ignore-start -->
```typescript
(regexp: RegExp) => (string: string) => boolean
```
<!-- prettier-ignore-end -->

Check if `string` matches the `regexp`.

<details><summary>Example</summary>

```typescript
S.test(/abc/, 'abc')
// => true
```

</details>

---

#### toLowerCase

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Convert `string` to lowercase.

<details><summary>Example</summary>

```typescript
S.toLowerCase('ABC')
// => 'abc'
```

</details>

**See also:** [toUpperCase](#touppercase), [capitalize](#capitalize)

---

#### toUpperCase

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Convert `string` to uppercase.

<details><summary>Example</summary>

```typescript
S.toUpperCase('abc')
// => 'ABC'
```

</details>

**See also:** [toLowerCase](#tolowercase), [capitalize](#capitalize)

---

#### trim

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from both ends of a `string`.

<details><summary>Example</summary>

```typescript
S.trim('  abc  ')
// => 'abc'
```

</details>

**See also:** [trimStart](#trimstart), [trimEnd](#trimend)

---

#### trimEnd

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from the end of a `string`.

<details><summary>Example</summary>

```typescript
S.trimEnd('  abc  ')
// => '  abc'
```

</details>

**See also:** [trimStart](#trimstart), [trim](#trim)

---

#### trimStart

<!-- prettier-ignore-start -->
```typescript
(string: string) => string
```
<!-- prettier-ignore-end -->

Remove whitespace from the beginning of a `string`.

<details><summary>Example</summary>

```typescript
S.trimStart('  abc  ')
// => 'abc  '
```

</details>

**See also:** [trimEnd](#trimend), [trim](#trim)

---
