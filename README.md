# Iiris 👁️

[![CI](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml/badge.svg)](https://github.com/sluukkonen/iiris/actions/workflows/ci.yml)
![MIT License](https://img.shields.io/github/license/sluukkonen/iiris)
[![NPM](https://img.shields.io/npm/v/iiris)](https://www.npmjs.com/package/iiris)

Iiris is an experimental utility library, designed to make it easier to manipulate built-in JavaScript data types like
arrays, objects and strings in a functional manner. It is heavily inspired by projects like
[Ramda](https://github.com/ramda/ramda) and [Lodash](https://github.com/lodash/lodash).

## Features & Goals

- No mutation of input data.
- Automatically curried, data-last API.
- Performance on par with native JavaScript methods.
- Good out-of-the-box TypeScript typings.
- Small footprint (4 kB gzipped) and excellent tree-shaking support.
- Support only native JavaScript data types.
- Target reasonably current JavaScript environments (Node 10+)

Iiris is still alpha-quality software, so bugs and changes to the API should be expected.

If you've tried Iiris and something doesn't seem to be working as expected, [let me know](https://github.com/sluukkonen/iiris/issues/new/choose)!

## Table of Contents

- [Installation](#installation)
- [Why Iiris?](#why-iiris)
- [API Reference](#documentation)
  - [Module `iiris`](docs/index.md)
  - [Module `iiris/array`](docs/array.md)
  - [Module `iiris/object`](docs/object.md)
  - [Module `iiris/set`](docs/set.md)
  - [Module `iiris/map`](docs/map.md)
  - [Module `iiris/string`](docs/string.md)

## Installation

Run either

```shell
$ npm install iiris
```

or

```shell
$ yarn add iiris
```

depending on your favourite package manager.

## Why Iiris?

Iiris is heavily inspired by libraries like Ramda and Lodash. However, there are a few things that make it different:

Compared to [lodash](https://github.com/lodash/lodash):

- Each function is automatically curried and input data is always the last argument.
- Input data is never mutated.
- Chaining is achieved with function composition instead of special constructs like `_.chain`. 
- Iiris doesn't support any kind of iteratee shorthands.
  
Compared to [Ramda](https://github.com/ramda/ramda):

- Much better TypeScript support. Typically, you don't have to add any extra type annotations when using Iiris, even
  when writing code in point-free style.
- Iiris functions are less polymorphic. For example, `I.map` operates only on arrays, while `R.map` supports arrays,
  objects and arbitrary fantasy-land functors. TypeScript doesn't have native support for higher-kinded types
  ([although some people have tried to work around that](https://github.com/gcanti/fp-ts)), so I made an intentional
  decision to limit the polymorphism of Iiris functions. This makes code less general but dramatically improves the
  TypeScript experience and makes tree-shaking more effective.
- No support for placeholders. Placeholders add some overhead to each curried function call and make writing TypeScript
  typings much harder.
- A bigger focus on performance.

Compared to both:

- Iiris requires a fairly modern JavaScript engine (Node 10+) to run.
