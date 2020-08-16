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

## Benchmark results

```
curry.partial ....

native x 195,879,333 ops/sec ±0.36% (94 runs sampled)
soles  x 26,882,923 ops/sec ±1.83% (93 runs sampled)
ramda  x 5,440,996 ops/sec ±0.25% (94 runs sampled)
lodash x 389,321 ops/sec ±0.26% (97 runs sampled)

curry.full ....

soles  x 196,639,072 ops/sec ±0.13% (97 runs sampled)
native x 196,099,273 ops/sec ±0.31% (90 runs sampled)
ramda  x 21,525,126 ops/sec ±0.77% (93 runs sampled)
lodash x 18,174,979 ops/sec ±0.34% (94 runs sampled)

curry.last ....

soles  x 197,405,552 ops/sec ±0.48% (97 runs sampled)
native x 195,637,115 ops/sec ±0.28% (91 runs sampled)
ramda  x 22,400,661 ops/sec ±1.25% (92 runs sampled)
lodash x 15,666,401 ops/sec ±0.73% (95 runs sampled)
```
