# Soles

![CI](https://github.com/sluukkonen/soles/workflows/Node.js%20CI/badge.svg)

## Goals

- A functional JavaScript utility library, inspired by projects like [Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash).
- Only target reasonably current JavaScript environments (Node 10+)
- No mutation of input data
- Automatically curried, data-last API
- Performance should on par with native JavaScript methods, if possible. Libraries like Ramda or Lodash are sometimes 10 or even 100 times slower than
  equivalent native JavaScript methods. 
- Safer API. Predicates like propEq or propSatisfies should not throw.
- Small footprint. Only support native JavaScript data types. No support for transducers or Fantasy Land data types.
- Support tree shaking.
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

## Benchmark results

```
arity.specialized ....

native x 957,838,730 ops/sec ±0.13% (97 runs sampled)
soles  x 955,758,223 ops/sec ±0.17% (97 runs sampled)
ramda  x 929,296,349 ops/sec ±0.68% (91 runs sampled)
lodash x 11,581,114 ops/sec ±0.37% (95 runs sampled)

arity.generic ....

native x 960,832,403 ops/sec ±0.10% (96 runs sampled)
ramda  x 945,936,419 ops/sec ±0.10% (96 runs sampled)
soles  x 36,200,884 ops/sec ±0.45% (96 runs sampled)
lodash x 10,148,067 ops/sec ±0.22% (94 runs sampled)

curry.specialized.partial ....

native x 958,868,388 ops/sec ±0.14% (99 runs sampled)
soles  x 25,508,077 ops/sec ±0.13% (96 runs sampled)
ramda  x 4,929,342 ops/sec ±0.15% (96 runs sampled)
lodash x 387,581 ops/sec ±0.41% (99 runs sampled)

curry.specialized.full ....

native x 961,990,275 ops/sec ±0.20% (94 runs sampled)
soles  x 198,145,950 ops/sec ±0.16% (93 runs sampled)
ramda  x 21,712,634 ops/sec ±0.19% (96 runs sampled)
lodash x 20,964,658 ops/sec ±0.24% (96 runs sampled)

curry.specialized.last ....

native x 966,033,226 ops/sec ±0.13% (95 runs sampled)
soles  x 963,900,752 ops/sec ±0.16% (97 runs sampled)
ramda  x 24,962,074 ops/sec ±0.95% (91 runs sampled)
lodash x 15,508,378 ops/sec ±0.94% (93 runs sampled)

curry.generic.full ....

native x 966,326,438 ops/sec ±0.14% (99 runs sampled)
soles  x 200,534,093 ops/sec ±0.27% (93 runs sampled)
ramda  x 19,491,401 ops/sec ±0.26% (97 runs sampled)
lodash x 14,194,988 ops/sec ±1.31% (92 runs sampled)

curry.generic.partial ....

native x 957,301,490 ops/sec ±0.18% (95 runs sampled)
soles  x 16,551,649 ops/sec ±0.17% (97 runs sampled)
ramda  x 3,417,442 ops/sec ±0.57% (95 runs sampled)
lodash x 253,964 ops/sec ±0.27% (97 runs sampled)

curry.generic.last ....

native x 967,993,245 ops/sec ±0.15% (98 runs sampled)
soles  x 961,204,052 ops/sec ±0.17% (94 runs sampled)
ramda  x 21,296,982 ops/sec ±0.40% (92 runs sampled)
lodash x 15,381,649 ops/sec ±0.63% (95 runs sampled)

pipe ....

native x 966,198,938 ops/sec ±0.12% (93 runs sampled)
soles  x 142,487,005 ops/sec ±0.25% (96 runs sampled)
lodash x 38,431,375 ops/sec ±0.26% (98 runs sampled)
ramda  x 30,019,271 ops/sec ±0.15% (96 runs sampled)

compose.specialized ....

native x 956,766,438 ops/sec ±0.16% (93 runs sampled)
soles  x 948,519,060 ops/sec ±0.12% (95 runs sampled)
ramda  x 54,645,057 ops/sec ±0.23% (96 runs sampled)
lodash x 48,832,362 ops/sec ±0.30% (85 runs sampled)

compose.generic ....

native x 958,582,567 ops/sec ±0.17% (98 runs sampled)
soles  x 86,008,469 ops/sec ±0.19% (94 runs sampled)
lodash x 38,304,221 ops/sec ±0.26% (96 runs sampled)
ramda  x 29,953,327 ops/sec ±0.19% (96 runs sampled)

map (n=1) ....

soles  x 164,356,453 ops/sec ±0.49% (98 runs sampled)
native x 97,053,890 ops/sec ±0.23% (95 runs sampled)
ramda  x 10,777,345 ops/sec ±0.46% (95 runs sampled)
lodash x 5,657,904 ops/sec ±0.21% (96 runs sampled)

map (n=10) ....

soles  x 53,848,236 ops/sec ±0.09% (99 runs sampled)
native x 36,545,678 ops/sec ±0.57% (94 runs sampled)
ramda  x 5,936,394 ops/sec ±0.28% (93 runs sampled)
lodash x 3,302,178 ops/sec ±0.59% (96 runs sampled)

map (n=100) ....

soles  x 6,629,639 ops/sec ±0.26% (96 runs sampled)
native x 4,557,271 ops/sec ±0.09% (97 runs sampled)
ramda  x 1,087,697 ops/sec ±0.63% (97 runs sampled)
lodash x 697,563 ops/sec ±0.89% (95 runs sampled)

filter (n=1) ....

soles  x 40,352,203 ops/sec ±0.59% (96 runs sampled)
native x 39,742,973 ops/sec ±0.16% (96 runs sampled)
ramda  x 8,858,239 ops/sec ±0.69% (92 runs sampled)
lodash x 4,760,924 ops/sec ±0.24% (92 runs sampled)

filter (n=10) ....

soles  x 34,182,336 ops/sec ±0.12% (99 runs sampled)
native x 28,497,313 ops/sec ±0.72% (96 runs sampled)
ramda  x 5,176,835 ops/sec ±0.17% (93 runs sampled)
lodash x 2,878,168 ops/sec ±0.96% (96 runs sampled)

filter (n=100) ....

soles  x 3,815,166 ops/sec ±0.30% (94 runs sampled)
native x 3,580,301 ops/sec ±0.34% (92 runs sampled)
ramda  x 959,594 ops/sec ±0.57% (94 runs sampled)
lodash x 586,466 ops/sec ±0.90% (96 runs sampled)

reduce (n=1) ....

native x 197,259,817 ops/sec ±0.73% (98 runs sampled)
soles  x 192,576,780 ops/sec ±1.05% (94 runs sampled)
ramda  x 5,656,421 ops/sec ±0.40% (97 runs sampled)
lodash x 4,706,926 ops/sec ±0.32% (88 runs sampled)

reduce (n=10) ....

native x 112,429,493 ops/sec ±0.07% (96 runs sampled)
soles  x 111,486,049 ops/sec ±0.11% (94 runs sampled)
ramda  x 3,981,388 ops/sec ±0.12% (97 runs sampled)
lodash x 3,055,090 ops/sec ±0.56% (95 runs sampled)

reduce (n=100) ....

native x 13,726,794 ops/sec ±0.11% (96 runs sampled)
soles  x 13,499,942 ops/sec ±0.54% (94 runs sampled)
ramda  x 1,170,283 ops/sec ±0.61% (98 runs sampled)
lodash x 694,711 ops/sec ±0.20% (97 runs sampled)

reduceRight (n=1) ....

native x 197,987,251 ops/sec ±0.20% (98 runs sampled)
soles  x 195,587,414 ops/sec ±0.12% (93 runs sampled)
ramda  x 20,697,726 ops/sec ±0.45% (88 runs sampled)
lodash x 532,424 ops/sec ±0.54% (95 runs sampled)

reduceRight (n=10) ....

native x 100,607,422 ops/sec ±0.58% (95 runs sampled)
soles  x 94,872,599 ops/sec ±0.17% (97 runs sampled)
ramda  x 9,436,890 ops/sec ±0.28% (96 runs sampled)
lodash x 365,440 ops/sec ±0.68% (96 runs sampled)

reduceRight (n=100) ....

native x 11,808,160 ops/sec ±1.22% (92 runs sampled)
soles  x 11,502,079 ops/sec ±0.15% (97 runs sampled)
ramda  x 1,520,929 ops/sec ±0.17% (96 runs sampled)
lodash x 81,289 ops/sec ±0.18% (98 runs sampled)

clamp ....

native x 966,825,090 ops/sec ±0.13% (98 runs sampled)
soles  x 199,643,913 ops/sec ±0.99% (93 runs sampled)
ramda  x 33,244,426 ops/sec ±0.51% (97 runs sampled)
lodash x 6,170,288 ops/sec ±0.84% (93 runs sampled)

sum (n=1) ....

native x 198,306,055 ops/sec ±0.55% (95 runs sampled)
soles  x 197,806,181 ops/sec ±0.10% (93 runs sampled)
lodash x 77,445,778 ops/sec ±0.25% (92 runs sampled)
ramda  x 3,516,258 ops/sec ±0.14% (99 runs sampled)

sum (n=10) ....

native x 113,419,419 ops/sec ±0.13% (99 runs sampled)
soles  x 76,516,943 ops/sec ±0.15% (98 runs sampled)
lodash x 17,130,192 ops/sec ±0.23% (94 runs sampled)
ramda  x 1,827,234 ops/sec ±0.42% (92 runs sampled)

sum (n=100) ....

native x 13,799,621 ops/sec ±0.13% (98 runs sampled)
soles  x 7,196,643 ops/sec ±0.12% (98 runs sampled)
lodash x 1,959,278 ops/sec ±0.60% (98 runs sampled)
ramda  x 366,790 ops/sec ±0.10% (95 runs sampled)

sum (n=1000) ....

native x 1,514,255 ops/sec ±0.17% (98 runs sampled)
soles  x 731,050 ops/sec ±0.17% (95 runs sampled)
lodash x 216,596 ops/sec ±0.13% (93 runs sampled)
ramda  x 40,995 ops/sec ±1.20% (94 runs sampled)

concat (n=1) ....

soles  x 128,269,508 ops/sec ±0.63% (95 runs sampled)
native x 25,943,655 ops/sec ±0.59% (98 runs sampled)
ramda  x 5,914,910 ops/sec ±0.99% (93 runs sampled)
lodash x 2,035,121 ops/sec ±0.36% (95 runs sampled)

concat (n=10) ....

soles  x 30,350,136 ops/sec ±0.40% (93 runs sampled)
native x 15,302,319 ops/sec ±2.72% (96 runs sampled)
ramda  x 5,714,643 ops/sec ±0.46% (98 runs sampled)
lodash x 1,616,083 ops/sec ±0.17% (94 runs sampled)

concat (n=100) ....

soles  x 3,740,644 ops/sec ±1.01% (93 runs sampled)
ramda  x 2,841,872 ops/sec ±1.57% (94 runs sampled)
native x 1,591,354 ops/sec ±0.19% (95 runs sampled)
lodash x 458,389 ops/sec ±0.58% (91 runs sampled)

concat (n=1000) ....

ramda  x 637,085 ops/sec ±0.91% (97 runs sampled)
soles  x 397,322 ops/sec ±0.36% (95 runs sampled)
native x 189,685 ops/sec ±0.12% (97 runs sampled)
lodash x 70,277 ops/sec ±0.21% (95 runs sampled)

maximum (n=1) ...

soles  x 196,463,369 ops/sec ±0.13% (96 runs sampled)
native x 125,727,350 ops/sec ±0.10% (95 runs sampled)
lodash x 103,881,998 ops/sec ±1.16% (91 runs sampled)

maximum (n=10) ...

soles  x 129,207,224 ops/sec ±0.51% (94 runs sampled)
native x 115,900,561 ops/sec ±0.92% (96 runs sampled)
lodash x 21,149,090 ops/sec ±1.07% (89 runs sampled)

maximum (n=100) ...

soles  x 15,619,499 ops/sec ±0.38% (94 runs sampled)
native x 10,275,333 ops/sec ±0.50% (96 runs sampled)
lodash x 2,736,318 ops/sec ±0.51% (89 runs sampled)

maximum (n=1000) ...

soles  x 1,861,420 ops/sec ±0.16% (95 runs sampled)
lodash x 295,674 ops/sec ±0.16% (96 runs sampled)
native x 103,245 ops/sec ±0.68% (95 runs sampled)

minimum (n=1) ...

soles  x 197,693,928 ops/sec ±0.15% (99 runs sampled)
native x 125,883,403 ops/sec ±0.46% (97 runs sampled)
lodash x 74,944,961 ops/sec ±2.63% (90 runs sampled)

minimum (n=10) ...

native x 152,393,812 ops/sec ±0.61% (92 runs sampled)
soles  x 127,821,220 ops/sec ±0.43% (95 runs sampled)
lodash x 21,917,651 ops/sec ±0.66% (94 runs sampled)

minimum (n=100) ...

soles  x 16,654,476 ops/sec ±0.50% (98 runs sampled)
native x 13,320,583 ops/sec ±0.22% (95 runs sampled)
lodash x 2,515,012 ops/sec ±0.92% (89 runs sampled)

minimum (n=1000) ...

soles  x 1,875,468 ops/sec ±0.17% (94 runs sampled)
lodash x 161,256 ops/sec ±0.08% (100 runs sampled)
native x 101,046 ops/sec ±0.11% (97 runs sampled)

reverse (n=1) ....

soles  x 67,439,114 ops/sec ±0.70% (96 runs sampled)
native x 66,740,609 ops/sec ±0.70% (96 runs sampled)
lodash x 7,341,556 ops/sec ±0.38% (93 runs sampled)
ramda  x 5,983,296 ops/sec ±0.62% (96 runs sampled)

reverse (n=10) ....

native x 38,236,609 ops/sec ±0.80% (96 runs sampled)
soles  x 37,801,824 ops/sec ±0.76% (95 runs sampled)
ramda  x 5,650,309 ops/sec ±0.15% (98 runs sampled)
lodash x 1,397,782 ops/sec ±0.62% (96 runs sampled)

reverse (n=100) ....

soles  x 6,784,723 ops/sec ±0.24% (96 runs sampled)
native x 6,601,641 ops/sec ±0.80% (95 runs sampled)
ramda  x 3,240,634 ops/sec ±0.73% (93 runs sampled)
lodash x 198,366 ops/sec ±0.41% (95 runs sampled)

reverse (n=1000) ....

native x 682,473 ops/sec ±0.57% (97 runs sampled)
soles  x 673,524 ops/sec ±0.74% (98 runs sampled)
ramda  x 591,886 ops/sec ±0.47% (90 runs sampled)
lodash x 20,499 ops/sec ±0.69% (92 runs sampled)

find (n=1) ....

soles  x 199,586,098 ops/sec ±0.17% (98 runs sampled)
native x 193,958,883 ops/sec ±0.72% (96 runs sampled)
ramda  x 12,875,255 ops/sec ±2.38% (88 runs sampled)
lodash x 3,263,776 ops/sec ±1.49% (92 runs sampled)

find (n=10) ....

native x 167,643,010 ops/sec ±1.56% (97 runs sampled)
soles  x 99,328,434 ops/sec ±2.18% (87 runs sampled)
ramda  x 7,339,275 ops/sec ±1.09% (93 runs sampled)
lodash x 2,270,175 ops/sec ±2.45% (89 runs sampled)

find (n=100) ....

native x 21,459,785 ops/sec ±1.15% (89 runs sampled)
soles  x 16,567,516 ops/sec ±0.55% (95 runs sampled)
ramda  x 1,386,506 ops/sec ±2.64% (95 runs sampled)
lodash x 713,582 ops/sec ±0.24% (95 runs sampled)

find (n=1000) ....

native x 2,686,055 ops/sec ±0.38% (93 runs sampled)
soles  x 1,829,618 ops/sec ±0.26% (94 runs sampled)
ramda  x 164,192 ops/sec ±2.97% (92 runs sampled)
lodash x 102,740 ops/sec ±0.78% (94 runs sampled)

groupBy (n=1) ...

soles  x 5,943,626 ops/sec ±0.68% (95 runs sampled)
lodash x 2,336,671 ops/sec ±1.13% (92 runs sampled)
ramda  x 931,132 ops/sec ±2.51% (89 runs sampled)

groupBy (n=10) ...

soles  x 2,203,533 ops/sec ±0.23% (92 runs sampled)
lodash x 1,067,232 ops/sec ±1.15% (93 runs sampled)
ramda  x 333,819 ops/sec ±2.23% (91 runs sampled)

groupBy (n=100) ...

soles  x 447,733 ops/sec ±1.24% (93 runs sampled)
lodash x 250,584 ops/sec ±0.93% (95 runs sampled)
ramda  x 121,248 ops/sec ±0.81% (96 runs sampled)

groupBy (n=1000) ...

soles  x 56,179 ops/sec ±0.75% (97 runs sampled)
lodash x 28,854 ops/sec ±0.51% (96 runs sampled)
ramda  x 15,515 ops/sec ±2.67% (90 runs sampled)

countBy (n=1) ...

soles  x 5,854,312 ops/sec ±0.87% (92 runs sampled)
lodash x 2,272,591 ops/sec ±0.30% (97 runs sampled)
ramda  x 1,183,574 ops/sec ±0.87% (91 runs sampled)

countBy (n=10) ...

soles  x 2,064,135 ops/sec ±0.73% (94 runs sampled)
lodash x 938,916 ops/sec ±0.20% (95 runs sampled)
ramda  x 356,636 ops/sec ±0.53% (95 runs sampled)

countBy (n=100) ...

soles  x 397,686 ops/sec ±2.58% (93 runs sampled)
lodash x 178,976 ops/sec ±0.73% (91 runs sampled)
ramda  x 121,516 ops/sec ±0.15% (96 runs sampled)

countBy (n=1000) ...

soles  x 42,989 ops/sec ±4.46% (92 runs sampled)
lodash x 18,166 ops/sec ±5.60% (88 runs sampled)
ramda  x 16,792 ops/sec ±0.76% (92 runs sampled)

indexBy (n=1) ...

soles  x 5,750,978 ops/sec ±0.86% (95 runs sampled)
lodash x 2,252,983 ops/sec ±0.91% (94 runs sampled)
ramda  x 1,252,119 ops/sec ±0.40% (95 runs sampled)

indexBy (n=10) ...

soles  x 2,039,933 ops/sec ±0.93% (93 runs sampled)
lodash x 1,053,666 ops/sec ±0.22% (97 runs sampled)
ramda  x 392,540 ops/sec ±0.71% (98 runs sampled)

indexBy (n=100) ...

soles  x 368,861 ops/sec ±0.70% (96 runs sampled)
lodash x 212,203 ops/sec ±2.31% (92 runs sampled)
ramda  x 126,865 ops/sec ±0.63% (95 runs sampled)

indexBy (n=1000) ...

soles  x 41,484 ops/sec ±0.11% (95 runs sampled)
lodash x 25,064 ops/sec ±0.99% (95 runs sampled)
ramda  x 16,530 ops/sec ±1.90% (93 runs sampled)

zip (n=1) ...

soles  x 85,924,564 ops/sec ±1.32% (90 runs sampled)
ramda  x 18,531,237 ops/sec ±1.69% (93 runs sampled)
lodash x 2,457,964 ops/sec ±1.01% (91 runs sampled)

zip (n=10) ...

soles  x 8,242,067 ops/sec ±1.37% (90 runs sampled)
ramda  x 6,986,002 ops/sec ±0.69% (95 runs sampled)
lodash x 1,553,806 ops/sec ±3.45% (89 runs sampled)

zip (n=100) ...

soles  x 936,082 ops/sec ±2.60% (91 runs sampled)
ramda  x 735,254 ops/sec ±1.29% (93 runs sampled)
lodash x 477,149 ops/sec ±0.45% (90 runs sampled)

zip (n=1000) ...

soles  x 99,892 ops/sec ±1.98% (93 runs sampled)
ramda  x 77,863 ops/sec ±1.11% (94 runs sampled)
lodash x 65,376 ops/sec ±1.06% (92 runs sampled)

equals.equal-numeric-arrays (n=1) ....

soles  x 5,402,059 ops/sec ±1.91% (91 runs sampled)
lodash x 3,096,426 ops/sec ±1.21% (93 runs sampled)
native x 1,707,491 ops/sec ±1.36% (94 runs sampled)
ramda  x 499,508 ops/sec ±0.37% (98 runs sampled)

equals.equal-numeric-arrays (n=10) ....

soles  x 4,712,023 ops/sec ±0.87% (95 runs sampled)
lodash x 2,651,893 ops/sec ±1.38% (90 runs sampled)
native x 1,295,598 ops/sec ±0.60% (95 runs sampled)
ramda  x 397,403 ops/sec ±0.93% (91 runs sampled)

equals.equal-numeric-arrays (n=100) ....

soles  x 2,253,560 ops/sec ±1.34% (91 runs sampled)
lodash x 1,356,050 ops/sec ±0.81% (95 runs sampled)
native x 425,698 ops/sec ±0.19% (98 runs sampled)
ramda  x 154,923 ops/sec ±1.31% (94 runs sampled)

equals.equal-numeric-arrays (n=1000) ....

soles  x 395,869 ops/sec ±0.90% (93 runs sampled)
lodash x 272,061 ops/sec ±0.18% (95 runs sampled)
native x 57,267 ops/sec ±0.66% (98 runs sampled)
ramda  x 21,803 ops/sec ±0.18% (94 runs sampled)

equals.equal-object-arrays (n=1) ....

soles  x 5,573,353 ops/sec ±0.13% (96 runs sampled)
lodash x 3,142,246 ops/sec ±0.64% (94 runs sampled)
native x 1,738,083 ops/sec ±0.55% (97 runs sampled)
ramda  x 511,700 ops/sec ±0.19% (98 runs sampled)

equals.equal-object-arrays (n=10) ....

soles  x 4,142,087 ops/sec ±0.20% (97 runs sampled)
lodash x 2,561,991 ops/sec ±0.91% (96 runs sampled)
native x 1,293,882 ops/sec ±0.81% (97 runs sampled)
ramda  x 407,409 ops/sec ±0.18% (96 runs sampled)

equals.equal-object-arrays (n=100) ....

soles  x 1,304,158 ops/sec ±0.86% (96 runs sampled)
lodash x 1,107,717 ops/sec ±0.94% (92 runs sampled)
native x 409,659 ops/sec ±0.28% (95 runs sampled)
ramda  x 153,672 ops/sec ±0.77% (94 runs sampled)

equals.equal-object-arrays (n=1000) ....

lodash x 187,251 ops/sec ±0.85% (97 runs sampled)
soles  x 186,571 ops/sec ±0.19% (94 runs sampled)
native x 54,048 ops/sec ±0.62% (91 runs sampled)
ramda  x 21,543 ops/sec ±0.21% (95 runs sampled)

equals.primitives ....

soles  x 199,236,756 ops/sec ±0.15% (95 runs sampled)
native x 99,864,390 ops/sec ±0.64% (95 runs sampled)
ramda  x 54,939,818 ops/sec ±0.19% (93 runs sampled)
lodash x 15,521,025 ops/sec ±0.82% (92 runs sampled)

equals.object ....

soles  x 294,496 ops/sec ±1.13% (91 runs sampled)
native x 224,885 ops/sec ±0.80% (91 runs sampled)
lodash x 170,239 ops/sec ±0.48% (91 runs sampled)
ramda  x 104,590 ops/sec ±0.29% (89 runs sampled)

flatMap (n=1) ....

soles  x 37,912,552 ops/sec ±0.29% (97 runs sampled)
lodash x 3,990,958 ops/sec ±0.84% (95 runs sampled)
ramda  x 2,516,690 ops/sec ±0.14% (93 runs sampled)
native x 2,053,819 ops/sec ±0.75% (94 runs sampled)

flatMap (n=10) ....

soles  x 9,298,298 ops/sec ±0.22% (96 runs sampled)
lodash x 1,574,041 ops/sec ±0.15% (95 runs sampled)
ramda  x 561,004 ops/sec ±0.80% (94 runs sampled)
native x 281,947 ops/sec ±0.18% (97 runs sampled)

flatMap (n=100) ....

soles  x 1,192,899 ops/sec ±0.69% (97 runs sampled)
lodash x 293,616 ops/sec ±0.11% (97 runs sampled)
ramda  x 72,852 ops/sec ±0.16% (96 runs sampled)
native x 31,656 ops/sec ±0.50% (96 runs sampled)

flatMap (n=1000) ....

soles  x 100,318 ops/sec ±0.13% (98 runs sampled)
lodash x 27,817 ops/sec ±2.80% (92 runs sampled)
ramda  x 7,102 ops/sec ±0.87% (97 runs sampled)
native x 3,220 ops/sec ±0.41% (96 runs sampled)

includes.primitive (n=1) ....

native x 952,915,480 ops/sec ±0.86% (97 runs sampled)
soles  x 198,578,154 ops/sec ±0.16% (95 runs sampled)
ramda  x 50,372,513 ops/sec ±0.94% (94 runs sampled)
lodash x 4,299,217 ops/sec ±0.20% (95 runs sampled)

includes.primitive (n=10) ....

native x 958,879,148 ops/sec ±0.17% (96 runs sampled)
soles  x 197,171,584 ops/sec ±0.15% (93 runs sampled)
ramda  x 26,952,901 ops/sec ±0.76% (95 runs sampled)
lodash x 3,738,645 ops/sec ±0.84% (95 runs sampled)

includes.primitive (n=100) ....

native x 918,204,371 ops/sec ±0.16% (98 runs sampled)
soles  x 189,551,380 ops/sec ±0.16% (92 runs sampled)
ramda  x 6,544,742 ops/sec ±0.71% (93 runs sampled)
lodash x 1,907,838 ops/sec ±1.11% (89 runs sampled)

includes.primitive (n=1000) ....

native x 540,538,473 ops/sec ±0.57% (98 runs sampled)
soles  x 113,473,271 ops/sec ±0.63% (95 runs sampled)
ramda  x 848,345 ops/sec ±0.13% (93 runs sampled)
lodash x 389,857 ops/sec ±0.18% (95 runs sampled)

includes.object (n=1) ...

soles  x 2,276,248 ops/sec ±0.47% (91 runs sampled)
lodash x 656,431 ops/sec ±0.82% (91 runs sampled)
ramda  x 413,594 ops/sec ±0.30% (89 runs sampled)

includes.object (n=10) ...

soles  x 435,052 ops/sec ±0.18% (95 runs sampled)
lodash x 110,739 ops/sec ±0.69% (96 runs sampled)
ramda  x 35,810 ops/sec ±1.16% (96 runs sampled)

includes.object (n=100) ...

soles  x 53,424 ops/sec ±0.13% (99 runs sampled)
lodash x 10,872 ops/sec ±0.64% (94 runs sampled)
ramda  x 3,499 ops/sec ±1.15% (95 runs sampled)

includes.object (n=1000) ...

soles  x 5,400 ops/sec ±0.66% (95 runs sampled)
lodash x 1,096 ops/sec ±0.18% (94 runs sampled)
ramda  x 351 ops/sec ±0.79% (93 runs sampled)

indexOf.primitive (n=1) ....

native x 960,049,892 ops/sec ±0.13% (98 runs sampled)
soles  x 199,056,761 ops/sec ±0.07% (93 runs sampled)
ramda  x 47,376,897 ops/sec ±3.19% (92 runs sampled)
lodash x 8,017,405 ops/sec ±0.76% (97 runs sampled)

indexOf.primitive (n=10) ....

native x 961,093,898 ops/sec ±0.20% (98 runs sampled)
soles  x 197,474,367 ops/sec ±0.17% (96 runs sampled)
ramda  x 52,443,965 ops/sec ±3.14% (88 runs sampled)
lodash x 6,462,258 ops/sec ±0.61% (95 runs sampled)

indexOf.primitive (n=100) ....

native x 922,388,082 ops/sec ±0.15% (95 runs sampled)
soles  x 188,622,028 ops/sec ±0.14% (92 runs sampled)
ramda  x 51,941,105 ops/sec ±2.68% (96 runs sampled)
lodash x 2,339,196 ops/sec ±0.99% (91 runs sampled)

indexOf.primitive (n=1000) ....

native x 543,925,329 ops/sec ±0.28% (90 runs sampled)
soles  x 111,675,689 ops/sec ±0.65% (89 runs sampled)
ramda  x 27,800,647 ops/sec ±0.65% (91 runs sampled)
lodash x 370,268 ops/sec ±0.19% (98 runs sampled)

indexOf.object (n=1) ...

soles  x 2,254,830 ops/sec ±0.98% (94 runs sampled)
lodash x 615,075 ops/sec ±1.29% (92 runs sampled)
ramda  x 404,948 ops/sec ±0.22% (95 runs sampled)

indexOf.object (n=10) ...

soles  x 433,181 ops/sec ±0.92% (97 runs sampled)
lodash x 104,117 ops/sec ±0.20% (95 runs sampled)
ramda  x 35,854 ops/sec ±1.45% (94 runs sampled)

indexOf.object (n=100) ...

soles  x 52,584 ops/sec ±0.13% (95 runs sampled)
lodash x 10,830 ops/sec ±0.92% (97 runs sampled)
ramda  x 3,492 ops/sec ±1.04% (96 runs sampled)

indexOf.object (n=1000) ...

soles  x 5,277 ops/sec ±1.03% (95 runs sampled)
lodash x 1,092 ops/sec ±0.54% (95 runs sampled)
ramda  x 350 ops/sec ±0.88% (93 runs sampled)

lastIndexOf.primitive (n=1) ....

native x 87,066,758 ops/sec ±0.25% (95 runs sampled)
soles  x 78,606,126 ops/sec ±0.44% (92 runs sampled)
lodash x 7,495,614 ops/sec ±0.68% (96 runs sampled)
ramda  x 906,173 ops/sec ±1.49% (92 runs sampled)

lastIndexOf.primitive (n=10) ....

native x 37,103,688 ops/sec ±1.00% (86 runs sampled)
soles  x 34,655,139 ops/sec ±0.76% (90 runs sampled)
lodash x 6,128,790 ops/sec ±0.96% (96 runs sampled)
ramda  x 125,619 ops/sec ±1.52% (88 runs sampled)

lastIndexOf.primitive (n=100) ....

native x 5,133,331 ops/sec ±0.15% (95 runs sampled)
soles  x 5,028,485 ops/sec ±0.19% (97 runs sampled)
lodash x 2,287,561 ops/sec ±0.19% (93 runs sampled)
ramda  x 10,637 ops/sec ±1.45% (94 runs sampled)

lastIndexOf.primitive (n=1000) ....

native x 544,289 ops/sec ±0.18% (97 runs sampled)
soles  x 541,609 ops/sec ±0.15% (95 runs sampled)
lodash x 367,123 ops/sec ±0.20% (98 runs sampled)
ramda  x 1,073 ops/sec ±1.47% (89 runs sampled)

sortWith.object (n=1000) ...

lodash x 2,921 ops/sec ±0.33% (93 runs sampled)
soles  x 1,643 ops/sec ±0.41% (92 runs sampled)
ramda  x 609 ops/sec ±0.17% (93 runs sampled)

sortWith.object (n=10000) ...

lodash x 214 ops/sec ±0.27% (90 runs sampled)
soles  x 123 ops/sec ±0.53% (79 runs sampled)
ramda  x 44.62 ops/sec ±0.24% (59 runs sampled)

sortWith.object (n=100000) ...

lodash x 12.20 ops/sec ±2.09% (35 runs sampled)
soles  x 8.95 ops/sec ±1.20% (26 runs sampled)
ramda  x 3.17 ops/sec ±1.76% (12 runs sampled)

some (n=1) ....

native x 198,819,923 ops/sec ±0.13% (92 runs sampled)
soles  x 198,793,740 ops/sec ±0.16% (94 runs sampled)
ramda  x 13,672,418 ops/sec ±1.39% (93 runs sampled)
lodash x 5,501,220 ops/sec ±0.55% (96 runs sampled)

some (n=10) ....

native x 169,720,702 ops/sec ±0.28% (97 runs sampled)
soles  x 121,127,748 ops/sec ±0.17% (97 runs sampled)
ramda  x 7,115,725 ops/sec ±0.27% (96 runs sampled)
lodash x 3,395,092 ops/sec ±0.83% (93 runs sampled)

some (n=100) ....

native x 22,064,394 ops/sec ±0.63% (95 runs sampled)
soles  x 16,184,048 ops/sec ±0.21% (96 runs sampled)
ramda  x 1,270,148 ops/sec ±0.77% (97 runs sampled)
lodash x 769,520 ops/sec ±0.24% (97 runs sampled)

some (n=1000) ....

native x 2,721,959 ops/sec ±0.62% (97 runs sampled)
soles  x 1,858,271 ops/sec ±0.67% (97 runs sampled)
ramda  x 155,259 ops/sec ±0.19% (98 runs sampled)
lodash x 102,170 ops/sec ±0.13% (96 runs sampled)

every (n=1) ....

native x 199,708,486 ops/sec ±0.17% (97 runs sampled)
soles  x 199,469,548 ops/sec ±0.15% (93 runs sampled)
ramda  x 13,394,353 ops/sec ±1.30% (94 runs sampled)
lodash x 5,375,459 ops/sec ±1.45% (90 runs sampled)

every (n=10) ....

native x 169,920,164 ops/sec ±0.30% (96 runs sampled)
soles  x 122,700,291 ops/sec ±0.21% (98 runs sampled)
ramda  x 6,824,872 ops/sec ±0.88% (95 runs sampled)
lodash x 3,158,412 ops/sec ±0.61% (95 runs sampled)

every (n=100) ....

native x 22,161,028 ops/sec ±0.35% (96 runs sampled)
soles  x 16,352,753 ops/sec ±0.15% (98 runs sampled)
ramda  x 1,240,161 ops/sec ±0.27% (94 runs sampled)
lodash x 746,176 ops/sec ±0.70% (95 runs sampled)

every (n=1000) ....

native x 2,830,218 ops/sec ±1.95% (92 runs sampled)
soles  x 1,872,627 ops/sec ±0.16% (96 runs sampled)
ramda  x 141,305 ops/sec ±1.29% (94 runs sampled)
lodash x 99,339 ops/sec ±0.81% (94 runs sampled)

none (n=1) ..

soles x 199,449,139 ops/sec ±0.19% (96 runs sampled)
ramda x 8,446,637 ops/sec ±1.02% (95 runs sampled)

none (n=10) ..

soles x 121,645,796 ops/sec ±0.17% (98 runs sampled)
ramda x 3,521,425 ops/sec ±0.87% (92 runs sampled)

none (n=100) ..

soles x 16,193,540 ops/sec ±0.16% (92 runs sampled)
ramda x 531,996 ops/sec ±2.41% (89 runs sampled)

none (n=1000) ..

soles x 1,779,875 ops/sec ±1.66% (92 runs sampled)
ramda x 63,486 ops/sec ±1.07% (93 runs sampled)

get.object ....

native x 955,869,901 ops/sec ±0.16% (97 runs sampled)
soles  x 200,488,127 ops/sec ±0.27% (95 runs sampled)
ramda  x 8,924,223 ops/sec ±0.42% (93 runs sampled)
lodash x 5,533,892 ops/sec ±1.19% (95 runs sampled)

get.array ....

native x 964,794,309 ops/sec ±0.17% (94 runs sampled)
soles  x 197,498,841 ops/sec ±0.11% (96 runs sampled)
ramda  x 6,711,837 ops/sec ±1.23% (95 runs sampled)
lodash x 6,050,558 ops/sec ±0.44% (95 runs sampled)

get.curried ....

native x 962,174,936 ops/sec ±0.12% (99 runs sampled)
soles  x 958,775,737 ops/sec ±0.09% (91 runs sampled)
lodash x 6,406,000 ops/sec ±0.40% (96 runs sampled)
ramda  x 4,607,283 ops/sec ±0.73% (95 runs sampled)

getOr.object ....

native x 963,246,969 ops/sec ±0.12% (97 runs sampled)
soles  x 74,205,110 ops/sec ±0.50% (96 runs sampled)
ramda  x 4,393,933 ops/sec ±0.55% (92 runs sampled)
lodash x 4,144,427 ops/sec ±1.10% (96 runs sampled)

getOr.array ....

native x 957,872,125 ops/sec ±0.11% (94 runs sampled)
soles  x 196,707,678 ops/sec ±0.15% (93 runs sampled)
lodash x 5,280,554 ops/sec ±0.81% (95 runs sampled)
ramda  x 4,194,296 ops/sec ±0.90% (97 runs sampled)

set.object ....

native x 54,582,216 ops/sec ±0.22% (96 runs sampled)
soles  x 47,781,819 ops/sec ±0.46% (95 runs sampled)
ramda  x 5,920,637 ops/sec ±0.39% (94 runs sampled)
lodash x 631,487 ops/sec ±1.02% (91 runs sampled)

set.array ...

soles  x 78,897,209 ops/sec ±1.06% (93 runs sampled)
ramda  x 4,144,615 ops/sec ±0.60% (97 runs sampled)
lodash x 1,719,855 ops/sec ±2.01% (92 runs sampled)

modify.object ...

native x 53,899,596 ops/sec ±1.03% (94 runs sampled)
soles  x 43,321,415 ops/sec ±2.12% (90 runs sampled)
lodash x 515,119 ops/sec ±2.03% (90 runs sampled)

modify.array ...

soles  x 76,003,548 ops/sec ±1.03% (97 runs sampled)
ramda  x 13,258,361 ops/sec ±1.58% (96 runs sampled)
lodash x 1,156,852 ops/sec ±1.71% (93 runs sampled)

uniq.primitive.different (n=1) ...

soles  x 34,789,936 ops/sec ±0.22% (97 runs sampled)
lodash x 34,703,977 ops/sec ±1.30% (92 runs sampled)
ramda  x 2,832,188 ops/sec ±0.91% (94 runs sampled)

uniq.primitive.different (n=10) ...

lodash x 10,211,844 ops/sec ±0.40% (92 runs sampled)
soles  x 9,152,954 ops/sec ±1.19% (94 runs sampled)
ramda  x 558,346 ops/sec ±0.23% (97 runs sampled)

uniq.primitive.different (n=100) ...

lodash x 193,666 ops/sec ±0.22% (98 runs sampled)
soles  x 157,578 ops/sec ±1.26% (94 runs sampled)
ramda  x 66,622 ops/sec ±0.21% (95 runs sampled)

uniq.primitive.different (n=1000) ...

lodash x 24,611 ops/sec ±0.14% (94 runs sampled)
soles  x 24,463 ops/sec ±0.71% (94 runs sampled)
ramda  x 6,821 ops/sec ±0.11% (97 runs sampled)

uniq.primitive.similar (n=1) ...

soles  x 33,642,027 ops/sec ±0.37% (91 runs sampled)
lodash x 32,523,766 ops/sec ±0.95% (95 runs sampled)
ramda  x 2,878,179 ops/sec ±0.17% (97 runs sampled)

uniq.primitive.similar (n=10) ...

lodash x 10,123,024 ops/sec ±1.07% (91 runs sampled)
soles  x 6,844,639 ops/sec ±0.67% (91 runs sampled)
ramda  x 555,156 ops/sec ±0.27% (95 runs sampled)

uniq.primitive.similar (n=100) ...

lodash x 1,480,043 ops/sec ±0.66% (92 runs sampled)
soles  x 660,444 ops/sec ±1.11% (82 runs sampled)
ramda  x 76,735 ops/sec ±0.80% (94 runs sampled)

uniq.primitive.similar (n=1000) ...

soles  x 109,277 ops/sec ±0.82% (91 runs sampled)
lodash x 92,409 ops/sec ±1.15% (80 runs sampled)
ramda  x 8,043 ops/sec ±0.78% (96 runs sampled)

uniq.object (n=1) ...

soles  x 33,191,912 ops/sec ±0.37% (95 runs sampled)
lodash x 5,959,851 ops/sec ±0.69% (95 runs sampled)
ramda  x 2,886,680 ops/sec ±0.97% (95 runs sampled)

uniq.object (n=10) ...

soles  x 117,060 ops/sec ±1.47% (89 runs sampled)
lodash x 25,327 ops/sec ±0.21% (95 runs sampled)
ramda  x 7,484 ops/sec ±1.06% (90 runs sampled)

uniq.object (n=100) ...

soles  x 1,112 ops/sec ±0.15% (95 runs sampled)
lodash x 232 ops/sec ±1.03% (90 runs sampled)
ramda  x 69.90 ops/sec ±1.21% (72 runs sampled)

uniq.object (n=1000) ...

soles  x 10.88 ops/sec ±0.64% (31 runs sampled)
lodash x 2.28 ops/sec ±1.42% (10 runs sampled)
ramda  x 0.69 ops/sec ±1.86% (6 runs sampled)

mapValues ...

soles  x 8,637,054 ops/sec ±0.54% (97 runs sampled)
lodash x 1,636,687 ops/sec ±0.75% (90 runs sampled)
ramda  x 1,160,984 ops/sec ±0.27% (96 runs sampled)
```
