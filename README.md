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

Practically speaking though, the TypeScript experience can be quite good. We
provide a function that mimics the semantics of the [Pipeline Operator
Proposal](https://github.com/tc39/proposal-pipeline-operator). This way the
TypeScript compiler can infer types more easily.

```typescript
const result = S.seq(
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

## Benchmark results

```
arity.specialized ....

ramda  x 200,477,365 ops/sec ±0.25% (96 runs sampled)
soles  x 199,522,238 ops/sec ±0.24% (98 runs sampled)
native x 199,437,042 ops/sec ±0.28% (94 runs sampled)
lodash x 12,178,883 ops/sec ±0.31% (92 runs sampled)

arity.generic ....

native x 197,369,202 ops/sec ±0.14% (97 runs sampled)
ramda  x 196,213,867 ops/sec ±0.17% (95 runs sampled)
soles  x 34,089,567 ops/sec ±0.32% (93 runs sampled)
lodash x 10,408,126 ops/sec ±0.40% (95 runs sampled)

curry.specialized.partial ....

native x 200,138,619 ops/sec ±0.24% (95 runs sampled)
soles  x 24,451,400 ops/sec ±0.39% (98 runs sampled)
ramda  x 5,442,217 ops/sec ±0.19% (96 runs sampled)
lodash x 379,327 ops/sec ±0.37% (90 runs sampled)

curry.specialized.full ....

native x 201,318,149 ops/sec ±0.26% (97 runs sampled)
soles  x 197,224,475 ops/sec ±0.28% (94 runs sampled)
lodash x 21,430,633 ops/sec ±0.42% (96 runs sampled)
ramda  x 21,408,925 ops/sec ±2.12% (90 runs sampled)

curry.specialized.last ....

native x 199,346,314 ops/sec ±0.29% (94 runs sampled)
soles  x 197,276,000 ops/sec ±0.15% (94 runs sampled)
ramda  x 22,759,865 ops/sec ±0.47% (94 runs sampled)
lodash x 19,331,236 ops/sec ±0.34% (96 runs sampled)

curry.generic.full ....

native x 202,924,828 ops/sec ±0.23% (93 runs sampled)
soles  x 41,358,632 ops/sec ±3.09% (95 runs sampled)
ramda  x 19,967,852 ops/sec ±0.30% (95 runs sampled)
lodash x 14,663,822 ops/sec ±0.44% (95 runs sampled)

curry.generic.partial ....

native x 204,512,130 ops/sec ±0.20% (96 runs sampled)
soles  x 11,321,675 ops/sec ±0.28% (92 runs sampled)
ramda  x 3,311,135 ops/sec ±0.44% (94 runs sampled)
lodash x 255,287 ops/sec ±0.18% (95 runs sampled)

curry.generic.last ....

native x 206,068,264 ops/sec ±0.16% (95 runs sampled)
soles  x 62,018,029 ops/sec ±1.31% (96 runs sampled)
ramda  x 21,417,888 ops/sec ±0.22% (96 runs sampled)
lodash x 19,201,791 ops/sec ±0.27% (97 runs sampled)

seq ....

native x 203,768,688 ops/sec ±0.26% (92 runs sampled)
soles  x 132,584,595 ops/sec ±0.29% (95 runs sampled)
lodash x 37,551,790 ops/sec ±0.20% (96 runs sampled)
ramda  x 29,818,312 ops/sec ±0.22% (95 runs sampled)

compose.specialized ....

native x 201,877,072 ops/sec ±0.22% (89 runs sampled)
soles  x 198,011,943 ops/sec ±0.61% (96 runs sampled)
ramda  x 52,197,987 ops/sec ±0.34% (90 runs sampled)
lodash x 46,260,099 ops/sec ±0.40% (91 runs sampled)

compose.generic ....

native x 202,706,385 ops/sec ±0.25% (96 runs sampled)
soles  x 86,473,740 ops/sec ±0.33% (94 runs sampled)
lodash x 37,265,798 ops/sec ±0.24% (94 runs sampled)
ramda  x 29,526,846 ops/sec ±0.21% (94 runs sampled)

map (n=1) ....

soles  x 81,193,001 ops/sec ±0.37% (93 runs sampled)
native x 79,149,957 ops/sec ±0.43% (96 runs sampled)
ramda  x 13,076,703 ops/sec ±1.51% (92 runs sampled)
lodash x 5,864,503 ops/sec ±0.64% (96 runs sampled)

map (n=10) ....

soles  x 39,555,562 ops/sec ±0.44% (93 runs sampled)
native x 34,933,715 ops/sec ±0.56% (96 runs sampled)
ramda  x 6,436,497 ops/sec ±0.34% (96 runs sampled)
lodash x 3,487,951 ops/sec ±0.36% (95 runs sampled)

map (n=100) ....

soles  x 6,324,099 ops/sec ±1.25% (90 runs sampled)
native x 5,420,189 ops/sec ±0.16% (93 runs sampled)
ramda  x 1,120,250 ops/sec ±0.36% (99 runs sampled)
lodash x 705,106 ops/sec ±0.19% (95 runs sampled)

filter (n=1) ....

soles  x 37,421,609 ops/sec ±0.38% (92 runs sampled)
native x 35,831,196 ops/sec ±0.56% (93 runs sampled)
ramda  x 10,308,206 ops/sec ±1.14% (95 runs sampled)
lodash x 5,212,587 ops/sec ±0.65% (96 runs sampled)

filter (n=10) ....

soles  x 26,330,025 ops/sec ±1.47% (95 runs sampled)
native x 25,060,280 ops/sec ±0.26% (93 runs sampled)
ramda  x 5,719,730 ops/sec ±0.82% (91 runs sampled)
lodash x 3,119,780 ops/sec ±0.40% (95 runs sampled)

filter (n=100) ....

soles  x 4,326,143 ops/sec ±0.29% (96 runs sampled)
native x 3,689,848 ops/sec ±0.53% (92 runs sampled)
ramda  x 1,004,398 ops/sec ±0.28% (93 runs sampled)
lodash x 637,628 ops/sec ±0.30% (96 runs sampled)

reduce (n=1) ....

soles  x 198,984,710 ops/sec ±0.23% (94 runs sampled)
native x 198,712,899 ops/sec ±0.47% (92 runs sampled)
ramda  x 6,618,581 ops/sec ±0.54% (95 runs sampled)
lodash x 5,316,556 ops/sec ±0.31% (99 runs sampled)

reduce (n=10) ....

native x 109,489,489 ops/sec ±0.74% (93 runs sampled)
soles  x 102,616,360 ops/sec ±0.27% (96 runs sampled)
ramda  x 4,550,037 ops/sec ±0.26% (99 runs sampled)
lodash x 3,208,322 ops/sec ±0.26% (92 runs sampled)

reduce (n=100) ....

native x 13,768,685 ops/sec ±0.32% (96 runs sampled)
soles  x 12,450,783 ops/sec ±0.17% (92 runs sampled)
ramda  x 1,193,443 ops/sec ±0.21% (93 runs sampled)
lodash x 724,602 ops/sec ±0.33% (96 runs sampled)
```
