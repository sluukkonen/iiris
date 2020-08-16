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
arity.specialized ....

soles  x 146,052,517 ops/sec ±2.38% (91 runs sampled)
native x 141,131,970 ops/sec ±1.77% (90 runs sampled)
ramda  x 10,822,736 ops/sec ±1.51% (90 runs sampled)
lodash x 10,761,727 ops/sec ±1.55% (93 runs sampled)

arity.generic ....

native x 192,230,693 ops/sec ±0.32% (97 runs sampled)
soles  x 23,385,948 ops/sec ±1.61% (90 runs sampled)
ramda  x 8,313,093 ops/sec ±2.21% (88 runs sampled)
lodash x 8,185,315 ops/sec ±1.74% (86 runs sampled)

curry.specialized.partial ....

native x 190,532,830 ops/sec ±0.34% (96 runs sampled)
soles  x 22,478,197 ops/sec ±1.38% (89 runs sampled)
ramda  x 4,576,504 ops/sec ±1.38% (90 runs sampled)
lodash x 368,495 ops/sec ±1.23% (93 runs sampled)

curry.specialized.full ....

native x 194,900,407 ops/sec ±0.44% (95 runs sampled)
soles  x 190,917,445 ops/sec ±0.29% (96 runs sampled)
ramda  x 18,230,022 ops/sec ±1.32% (88 runs sampled)
lodash x 17,977,553 ops/sec ±1.72% (87 runs sampled)

curry.specialized.last ....

native x 194,505,118 ops/sec ±0.59% (91 runs sampled)
soles  x 194,456,836 ops/sec ±0.32% (93 runs sampled)
ramda  x 18,917,073 ops/sec ±1.91% (86 runs sampled)
lodash x 15,911,928 ops/sec ±2.09% (87 runs sampled)

curry.generic.full ....

native x 193,206,617 ops/sec ±0.57% (89 runs sampled)
soles  x 34,361,582 ops/sec ±1.79% (91 runs sampled)
ramda  x 17,427,891 ops/sec ±1.10% (90 runs sampled)
lodash x 12,259,046 ops/sec ±2.29% (85 runs sampled)

curry.generic.partial ....

native x 185,223,610 ops/sec ±2.39% (90 runs sampled)
soles  x 8,290,455 ops/sec ±1.60% (88 runs sampled)
ramda  x 3,117,177 ops/sec ±0.71% (96 runs sampled)
lodash x 230,985 ops/sec ±1.27% (91 runs sampled)

curry.generic.last ....

native x 191,472,620 ops/sec ±1.14% (94 runs sampled)
soles  x 56,790,067 ops/sec ±2.04% (92 runs sampled)
ramda  x 20,033,994 ops/sec ±1.00% (93 runs sampled)
lodash x 17,579,942 ops/sec ±0.91% (94 runs sampled)
```
