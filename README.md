# Soles

![CI](https://github.com/sluukkonen/soles/workflows/Node.js%20CI/badge.svg)

## Goals

- A functional JavaScript utility library, inspired by projects like [Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash).
- No mutation of input data
- Automatically curried, data-last API
- Good performance. Ramda is sometimes 10 or even 100 times slower than
  equivalent JavaScript methods.
- Safer API. Predicates like propEq or propSatisfies should not throw.
- Small footprint. Only support native JavaScript data types (at least for now).
- Support tree shaking.
- Practical TypeScript typings. This kind of curried functional style is not
  supported very well in TypeScript, but let's try to include best-effort type
  declarations out-of-the-box.
