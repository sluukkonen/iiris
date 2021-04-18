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

```typescript
(string: string) => string
```

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

```typescript
(separator: RegExp | string) => (string: string) => string
```

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

```typescript
(regexp: RegExp) => (string: string) => boolean
```

Check if `string` matches the `regexp`.

<details><summary>Example</summary>

```typescript
S.test(/abc/, 'abc')
// => true
```
</details>

---

#### toLowerCase

```typescript
(string: string) => string
```

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

```typescript
(string: string) => string
```

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

```typescript
(string: string) => string
```

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

```typescript
(string: string) => string
```

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

```typescript
(string: string) => string
```

Remove whitespace from the beginning of a `string`.

<details><summary>Example</summary>

```typescript
S.trimStart('  abc  ')
// => 'abc  '
```
</details>

**See also:** [trimEnd](#trimend), [trim](#trim)

---