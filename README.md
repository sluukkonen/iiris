# Soles

![CI](https://github.com/sluukkonen/soles/workflows/Node.js%20CI/badge.svg)

## Goals

- A functional JavaScript utility library, inspired by projects like [Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash)
- No mutation of input data
- Automatically curried, data-last API
- Target reasonably current JavaScript environments (Node 10+)
- Performance on par with native JavaScript methods
- Small footprint. Only support native JavaScript data types. No support for transducers, lenses or Fantasy Land data types.
- Good tree shaking support
- Unified API for manipulating arrays and objects
- Practical TypeScript typings. This kind of curried functional style is not
  supported perfectly in TypeScript, but let's try to include best-effort type
  declarations out-of-the-box.

Practically speaking though, the TypeScript experience can be quite good. We
provide a function that mimics the semantics of the [Pipeline Operator
Proposal](https://github.com/tc39/proposal-pipeline-operator). This way the
TypeScript compiler can infer types more easily.

```typescript
const result = S.pipe(
  [1, 2, 3, 4, 5],
  S.map((x) => x + 1),         // Here `x` is inferred to be a `number`
  S.filter((x) => x % 2 === 0) // Here as well.
  S.reduce((x, y) => x + y, 0) // And here!
)
```

which is equivalent to

```typescript
const result = [1, 2, 3, 4, 5]
  |> S.map((x) => x + 1),
  |> S.filter((x) => x % 2 === 0)
  |> S.reduce((x, y) => x + y, 0)
```
