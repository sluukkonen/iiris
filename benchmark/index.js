/* eslint-disable import/no-commonjs */

const Benchmark = require('benchmark')

const _ = require('lodash')
const R = require('ramda')
const I = require('../dist/core')
const A = require('../dist/array')
const O = require('../dist/object')
const F = require('../dist/function')
const S = require('../dist/string')
const util = require('util')
const fs = require('fs')
const path = require('path')

const fill = (n) => new Array(n).fill()
const snd = (a, b) => b

const createObj = (i) => ({
  k1: i,
  k2: i,
  k3: i,
  k4: i,
  k5: i,
  kConstant: 0,
})

const obj = createObj(1)

const num1 = fill(1).map(snd)
const num10 = fill(10).map(snd)
const num100 = fill(100).map(snd)
const num1000 = fill(1000).map(snd)

const obj1 = num1.map(createObj)
const obj10 = num10.map(createObj)
const obj100 = num100.map(createObj)
const obj1000 = num1000.map(createObj)

const benchmarks = [
  {
    name: 'unary',
    benchmarks: () => {
      const iirisUnary = F.unary((a, b) => b)
      const lodashUnary = _.unary((a, b) => b)
      const ramdaUnary = R.unary((a, b) => b)
      const nativeUnary = ((fn) => (x) => fn(x))((a, b) => b)

      return {
        iiris: () => iirisUnary(1, 2),
        lodash: () => lodashUnary(1, 2),
        ramda: () => ramdaUnary(1, 2),
        native: () => nativeUnary(1, 2),
      }
    },
  },
  {
    name: 'curry.partial',
    benchmarks: () => {
      const iirisAdd = F.curry3((a, b, c) => a + b + c)
      const lodashAdd = _.curry((a, b, c) => a + b + c)
      const ramdaAdd = R.curry((a, b, c) => a + b + c)
      const nativeAdd = (a) => (b) => (c) => a + b + c

      return {
        iiris: () => iirisAdd(1)(2)(3),
        lodash: () => lodashAdd(1)(2)(3),
        ramda: () => ramdaAdd(1)(2)(3),
        native: () => nativeAdd(1)(2)(3),
      }
    },
  },
  {
    name: 'curry.full',
    benchmarks: () => {
      const iirisAdd = F.curry3((a, b, c) => a + b + c)
      const lodashAdd = _.curry((a, b, c) => a + b + c)
      const ramdaAdd = R.curry((a, b, c) => a + b + c)
      const nativeAdd = (a, b, c) => a + b + c

      return {
        iiris: () => iirisAdd(1, 2, 3),
        lodash: () => lodashAdd(1, 2, 3),
        ramda: () => ramdaAdd(1, 2, 3),
        native: () => nativeAdd(1, 2, 3),
      }
    },
  },
  {
    name: 'curry.last',
    benchmarks: () => {
      const iirisAdd = F.curry3((a, b, c) => a + b + c)(1, 2)
      const lodashAdd = _.curry((a, b, c) => a + b + c)(1, 2)
      const ramdaAdd = R.curry((a, b, c) => a + b + c)(1, 2)
      const nativeAdd = ((a, b) => (c) => a + b + c)(1, 2)

      return {
        iiris: () => iirisAdd(3),
        lodash: () => lodashAdd(3),
        ramda: () => ramdaAdd(3),
        native: () => nativeAdd(3),
      }
    },
  },
  {
    name: 'pipe',
    benchmarks: () => {
      const inc = (x) => x + 1
      return {
        iiris: () => F.pipe(1, inc, inc, inc, inc),
        lodash: () => _.flow([inc, inc, inc, inc])(1),
        ramda: () => R.pipe(inc, inc, inc, inc)(1),
        native: () => inc(inc(inc(inc(1)))),
      }
    },
  },
  {
    name: 'compose.specialized',
    benchmarks: () => {
      const inc = (x) => x + 1
      const iirisComposed = F.compose(inc, inc, inc)
      const ramdaComposed = R.compose(inc, inc, inc)
      const nativeComposed = (...args) => inc(inc(inc(...args)))

      return {
        iiris: () => iirisComposed(1),
        ramda: () => ramdaComposed(1),
        native: () => nativeComposed(1),
      }
    },
  },
  {
    name: 'compose.generic',
    benchmarks: () => {
      const inc = (x) => x + 1
      const iirisComposed = F.compose(inc, inc, inc, inc)
      const ramdaComposed = R.compose(inc, inc, inc, inc)
      const nativeComposed = (...args) => inc(inc(inc(inc(...args))))

      return {
        iiris: () => iirisComposed(1),
        ramda: () => ramdaComposed(1),
        native: () => nativeComposed(1),
      }
    },
  },
  {
    name: 'map',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => x + 1
      const lodashCallback = (x) => x + 1
      const ramdaCallback = (x) => x + 1
      const nativeCallback = (x) => x + 1
      return {
        iiris: () => A.map(iirisCallback, array),
        lodash: () => _.map(array, lodashCallback),
        ramda: () => R.map(ramdaCallback, array),
        native: () => array.map(nativeCallback),
      }
    },
  },
  {
    name: 'filter',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => x % 2 === 0
      const lodashCallback = (x) => x % 2 === 0
      const ramdaCallback = (x) => x % 2 === 0
      const nativeCallback = (x) => x % 2 === 0
      return {
        iiris: () => A.filter(iirisCallback, array),
        lodash: () => _.filter(array, lodashCallback),
        ramda: () => R.filter(ramdaCallback, array),
        native: () => array.filter(nativeCallback),
      }
    },
  },
  {
    name: 'reduce',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (a, b) => a + b
      const lodashCallback = (a, b) => a + b
      const ramdaCallback = (a, b) => a + b
      const nativeCallback = (a, b) => a + b
      return {
        iiris: () => A.reduce(iirisCallback, 0, array),
        lodash: () => _.reduce(array, lodashCallback, 0),
        ramda: () => R.reduce(ramdaCallback, 0, array),
        native: () => array.reduce(nativeCallback, 0),
      }
    },
  },
  {
    name: 'reduceRight',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (a, b) => b + a
      const lodashCallback = (a, b) => a + b
      const ramdaCallback = (a, b) => b + a
      const nativeCallback = (a, b) => a + b
      return {
        iiris: () => A.reduceRight(iirisCallback, 0, array),
        lodash: () => _.reduceRight(array, lodashCallback, 0),
        ramda: () => R.reduceRight(ramdaCallback, 0, array),
        native: () => array.reduceRight(nativeCallback, 0),
      }
    },
  },
  {
    name: 'clamp',
    benchmarks: () => ({
      iiris: () => I.clamp([0, 1], 10),
      lodash: () => _.clamp(0, 1, 10),
      ramda: () => R.clamp(0, 1, 10),
      native: () => Math.max(0, Math.min(1, 10)),
    }),
  },
  {
    name: 'sum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const add = (x, y) => x + y
      return {
        iiris: () => A.sum(array),
        lodash: () => _.sum(array),
        ramda: () => R.sum(array),
        native: () => array.reduce(add, 0),
      }
    },
  },
  {
    name: 'concat',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => A.concat(array, array),
      lodash: () => _.concat(array, array),
      ramda: () => R.concat(array, array),
      native: () => [...array, ...array],
    }),
  },
  {
    name: 'maximum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const max = (a, b) => (a > b ? a : b)
      return {
        iiris: () => A.maximum(array),
        lodash: () => _.max(array),
        native: () => array.reduce(max),
      }
    },
  },
  {
    name: 'minimum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const min = (a, b) => (a < b ? a : b)
      return {
        iiris: () => A.minimum(array),
        lodash: () => _.min(array),
        native: () => array.reduce(min),
      }
    },
  },
  {
    name: 'reverse',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      return {
        iiris: () => A.reverse(array),
        ramda: () => R.reverse(array),
        native: () => [...array].reverse(),
      }
    },
  },
  {
    name: 'find',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => x === 10000
      const lodashCallback = (x) => x === 10000
      const ramdaCallback = (x) => x === 10000
      const nativeCallback = (x) => x === 10000
      return {
        iiris: () => A.find(iirisCallback, array),
        lodash: () => _.find(lodashCallback, array),
        ramda: () => R.find(ramdaCallback, array),
        native: () => array.find(nativeCallback),
      }
    },
  },
  {
    name: 'groupBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => String(x % 10)
      const lodashCallback = (x) => String(x % 10)
      const ramdaCallback = (x) => String(x % 10)
      return {
        iiris: () => A.groupBy(iirisCallback, array),
        lodash: () => _.groupBy(array, lodashCallback),
        ramda: () => R.groupBy(ramdaCallback, array),
      }
    },
  },
  {
    name: 'countBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => String(x % 10)
      const lodashCallback = (x) => String(x % 10)
      const ramdaCallback = (x) => String(x % 10)
      return {
        iiris: () => A.countBy(iirisCallback, array),
        lodash: () => _.countBy(array, lodashCallback),
        ramda: () => R.countBy(ramdaCallback, array),
      }
    },
  },
  {
    name: 'indexBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => String(x % 10)
      const lodashCallback = (x) => String(x % 10)
      const ramdaCallback = (x) => String(x % 10)
      return {
        iiris: () => A.indexBy(iirisCallback, array),
        lodash: () => _.keyBy(array, lodashCallback),
        ramda: () => R.indexBy(ramdaCallback, array),
      }
    },
  },
  {
    name: 'zip',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => A.zip(array, array),
      lodash: () => _.zip(array, array),
      ramda: () => R.zip(array, array),
    }),
  },
  {
    name: 'equals.equal-numeric-arrays',
    params: [num1, num10, num100, num1000],
    benchmarks: (obj) => {
      const clone = _.cloneDeep(obj)
      return {
        iiris: () => I.equals(obj, clone),
        lodash: () => _.isEqual(obj, clone),
        ramda: () => R.equals(obj, clone),
        native: () => util.isDeepStrictEqual(obj, clone),
      }
    },
  },
  {
    name: 'equals.equal-object-arrays',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (obj) => {
      const clone = _.cloneDeep(obj)
      return {
        iiris: () => I.equals(obj, clone),
        lodash: () => _.isEqual(obj, clone),
        ramda: () => R.equals(obj, clone),
        native: () => util.isDeepStrictEqual(obj, clone),
      }
    },
  },
  {
    name: 'equals.primitives',
    benchmarks: () => ({
      iiris: () => I.equals(1, 1),
      lodash: () => _.isEqual(1, 1),
      ramda: () => R.equals(1, 1),
      native: () => util.isDeepStrictEqual(1, 1),
    }),
  },
  {
    name: 'equals.empty-object',
    benchmarks: () => {
      const obj = {}
      const clone = {}
      return {
        iiris: () => I.equals(obj, clone),
        lodash: () => _.isEqual(obj, clone),
        ramda: () => R.equals(obj, clone),
        native: () => util.isDeepStrictEqual(obj, clone),
      }
    },
  },
  {
    name: 'equals.object',
    benchmarks: () => {
      const packageJson = fs.readFileSync(
        path.join(__dirname, '..', 'package.json')
      )
      const obj1 = JSON.parse(packageJson)
      const obj2 = JSON.parse(packageJson)
      return {
        iiris: () => I.equals(obj1, obj2),
        lodash: () => _.isEqual(obj1, obj2),
        ramda: () => R.equals(obj1, obj2),
        native: () => util.isDeepStrictEqual(obj1, obj2),
      }
    },
  },
  {
    name: 'flatMap',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (x) => [x, x]
      const lodashCallback = (x) => [x, x]
      const ramdaCallback = (x) => [x, x]
      const nativeCallback = (x) => [x, x]
      return {
        iiris: () => A.flatMap(iirisCallback, array),
        lodash: () => _.flatMap(array, lodashCallback),
        ramda: () => R.chain(ramdaCallback, array),
        native: () => array.flatMap(nativeCallback),
      }
    },
  },
  {
    name: 'includes.primitive',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const last = array.length - 1
      return {
        iiris: () => A.includes(last, array),
        lodash: () => _.includes(array, last),
        ramda: () => R.includes(last, array),
        native: () => array.includes(last),
      }
    },
  },
  {
    name: 'includes.object',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (array) => {
      const last = createObj(array.length - 1)
      return {
        iiris: () => A.includes(last, array),
        ramda: () => R.includes(last, array),
      }
    },
  },
  {
    name: 'indexOf.primitive',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const last = array.length - 1
      return {
        iiris: () => A.indexOf(last, array),
        lodash: () => _.indexOf(array, last),
        ramda: () => R.indexOf(last, array),
        native: () => array.indexOf(last),
      }
    },
  },
  {
    name: 'indexOf.object',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (array) => {
      const last = createObj(array.length - 1)
      return {
        iiris: () => A.indexOf(last, array),
        ramda: () => R.indexOf(last, array),
      }
    },
  },
  {
    name: 'lastIndexOf.primitive',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const first = 1
      return {
        iiris: () => A.lastIndexOf(first, array),
        lodash: () => _.lastIndexOf(array, first),
        ramda: () => R.lastIndexOf(first, array),
        native: () => array.lastIndexOf(first),
      }
    },
  },
  {
    name: 'sortWith.object',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (array) => {
      const shuffled = _.shuffle(array)
      const iirisComparators = [
        F.ascend((obj) => obj.kConstant),
        F.descend((obj) => obj.kConstant),
        F.ascend((obj) => obj.k1),
      ]
      const lodashIteratees = [
        (obj) => obj.kConstant,
        (obj) => obj.kConstant,
        (obj) => obj.k1,
      ]
      const lodashOrders = ['asc', 'desc', 'asc']
      const ramdaComparators = [
        R.ascend((obj) => obj.kConstant),
        R.descend((obj) => obj.kConstant),
        R.ascend((obj) => obj.k1),
      ]
      return {
        iiris: () => A.sortWith(iirisComparators, shuffled),
        lodash: () => _.orderBy(shuffled, lodashIteratees, lodashOrders),
        ramda: () => R.sortWith(ramdaComparators, shuffled),
      }
    },
  },
  {
    name: 'some',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (n) => n > array.length
      const lodashCallback = (n) => n > array.length
      const ramdaCallback = (n) => n > array.length
      const nativeCallback = (n) => n > array.length
      return {
        iiris: () => A.some(iirisCallback, array),
        lodash: () => _.some(array, lodashCallback),
        ramda: () => R.any(ramdaCallback, array),
        native: () => array.some(nativeCallback),
      }
    },
  },
  {
    name: 'every',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (n) => n < array.length
      const lodashCallback = (n) => n < array.length
      const ramdaCallback = (n) => n < array.length
      const nativeCallback = (n) => n < array.length
      return {
        iiris: () => A.every(iirisCallback, array),
        lodash: () => _.every(array, lodashCallback),
        ramda: () => R.all(ramdaCallback, array),
        native: () => array.every(nativeCallback),
      }
    },
  },
  {
    name: 'none',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const iirisCallback = (n) => n > array.length
      const ramdaCallback = (n) => n > array.length
      return {
        iiris: () => A.none(iirisCallback, array),
        ramda: () => R.none(ramdaCallback, array),
      }
    },
  },
  {
    name: 'get',
    benchmarks: () => ({
      iiris: () => O.get('k1', obj),
      ramda: () => R.prop('k1', obj),
      lodash: () => _.get(obj, 'k1'),
      native: () => obj?.k1,
    }),
  },
  {
    name: 'at',
    benchmarks: () => ({
      iiris: () => A.at(0, num100),
      ramda: () => R.nth(0, num100),
      lodash: () => _.nth(num100, 0),
      native: () => num100?.[0],
    }),
  },
  {
    name: 'at.curried',
    benchmarks: () => {
      const iirisHead = A.at(0)
      const ramdaHead = R.nth(0)
      const nativeHead = (array) => array?.[0]

      return {
        iiris: () => iirisHead(num100),
        ramda: () => ramdaHead(num100),
        native: () => nativeHead(num100),
      }
    },
  },
  {
    name: 'getOr',
    benchmarks: () => ({
      iiris: () => O.getOr(0, 'kDoesNotExist', obj),
      ramda: () => R.propOr(0, 'KDoesNotExist', obj),
      lodash: () => _.get(obj, 'kDoesNotExist', 0),
      native: () => obj?.kDoesNotExist ?? 0,
    }),
  },
  {
    name: 'atOr',
    benchmarks: () => ({
      iiris: () => A.atOr(0, 150, num100),
      ramda: () => R.propOr(0, 150, num100),
      native: () => num100?.[150] ?? 0,
    }),
  },
  {
    name: 'object.set',
    benchmarks: () => ({
      iiris: () => O.set('k1', 0, obj),
      ramda: () => R.assoc('k1', 0, obj),
      native: () => ({ ...obj, k1: 0 }),
    }),
  },
  {
    name: 'array.set',
    benchmarks: () => ({
      iiris: () => A.set(0, 0, num1),
      ramda: () => R.update(0, 0, num1),
    }),
  },
  {
    name: 'object.modify',
    benchmarks: () => {
      const iirisCallback = (x) => x + 1
      return {
        iiris: () => O.modify('k1', iirisCallback, obj),
        native: () => ({ ...obj, k1: obj.k1 + 1 }),
      }
    },
  },
  {
    name: 'array.modify',
    benchmarks: () => {
      const iirisCallback = (x) => x + 1
      const ramdaCallback = (x) => x + 1
      return {
        iiris: () => A.modify(0, iirisCallback, num1),
        ramda: () => R.adjust(0, ramdaCallback, num1),
      }
    },
  },
  {
    name: 'uniq.primitive.different',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const nativeUniq = (xs) => Array.from(new Set(xs))
      return {
        iiris: () => A.uniq(array),
        ramda: () => R.uniq(array),
        lodash: () => _.uniq(array),
        native: () => nativeUniq(array),
      }
    },
  },
  {
    name: 'uniq.primitive.similar',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const oneToTen = array.map((n) => n % 10)
      const nativeUniq = (xs) => Array.from(new Set(xs))
      return {
        iiris: () => A.uniq(oneToTen),
        ramda: () => R.uniq(oneToTen),
        lodash: () => _.uniq(oneToTen),
        native: () => nativeUniq(oneToTen),
      }
    },
  },
  {
    name: 'uniq.object',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (array) => ({
      iiris: () => A.uniq(array),
      ramda: () => R.uniq(array),
      lodash: () => _.uniqWith(array, _.isEqual),
    }),
  },
  {
    name: 'mapValues',
    benchmarks: () => {
      const iirisCallback = (x) => x + 1
      const ramdaCallback = (x) => x + 1
      const lodashCallback = (x) => x + 1
      return {
        iiris: () => O.mapValues(iirisCallback, obj),
        ramda: () => R.map(ramdaCallback, obj),
        lodash: () => _.mapValues(obj, lodashCallback),
      }
    },
  },
  {
    name: 'union.primitive',
    params: [num10, num100, num1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      const nativeUnion = (xs, ys) => Array.from(new Set([...xs, ...ys]))
      return {
        iiris: () => A.union(arr, clone),
        ramda: () => R.union(arr, clone),
        lodash: () => _.union(arr, clone),
        native: () => nativeUnion(arr, clone),
      }
    },
  },
  {
    name: 'union.object',
    params: [obj10, obj100],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      return {
        iiris: () => A.union(arr, clone),
        ramda: () => R.union(arr, clone),
        lodash: () => _.unionWith(arr, clone, _.isEqual),
      }
    },
  },
  {
    name: 'intersection.primitive',
    params: [num10, num100, num1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      const nativeIntersection = (xs, ys) => {
        const ysSet = new Set(ys)
        return xs.filter((x) => ysSet.has(x))
      }
      return {
        iiris: () => A.intersection(arr, clone),
        ramda: () => R.intersection(arr, clone),
        lodash: () => _.intersection(arr, clone),
        native: () => nativeIntersection(arr, clone),
      }
    },
  },
  {
    name: 'intersection.object',
    params: [obj10, obj100, obj1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      return {
        iiris: () => A.intersection(arr, clone),
        ramda: () => R.intersection(arr, clone),
        lodash: () => _.intersectionWith(arr, clone, _.isEqual),
      }
    },
  },
  {
    name: 'difference.primitive',
    params: [num10, num100, num1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      const nativeDifference = (xs, ys) => {
        const ysSet = new Set(ys)
        return xs.filter((x) => !ysSet.has(x))
      }
      return {
        iiris: () => A.difference(arr, clone),
        ramda: () => R.difference(arr, clone),
        lodash: () => _.difference(arr, clone),
        native: () => nativeDifference(arr, clone),
      }
    },
  },
  {
    name: 'difference.object',
    params: [obj10, obj100, obj1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      return {
        iiris: () => A.difference(arr, clone),
        ramda: () => R.difference(arr, clone),
        lodash: () => _.differenceWith(arr, clone, _.isEqual),
      }
    },
  },
  {
    name: 'capitalize',
    params: ['', 'a', 'a'.repeat(10), 'a'.repeat(100), 'a'.repeat(1000)],
    benchmarks: (str) => {
      const nativeCapitalize = (str) => {
        if (str === '') return ''
        const [first, ...rest] = str.toLowerCase()
        return first.toUpperCase() + rest.join('')
      }
      return {
        iiris: () => S.capitalize(str),
        lodash: () => _.capitalize(str),
        native: () => nativeCapitalize(str),
      }
    },
  },
]

const argv = require('yargs')
  .option('suites', {
    alias: 's',
    describe: 'Include only matching suites',
  })
  .option('libraries', {
    alias: 'l',
    type: 'array',
    description: 'List of libraries to benchmark',
    choices: ['iiris', 'lodash', 'ramda', 'native'],
  })
  .option('sizes', {
    alias: 'n',
    description: 'List of benchmark sizes to run',
    type: 'array',
    default: [],
    coerce: (s) => s.map(Number),
  }).argv

const suites = benchmarks
  .filter((suite) => suite.name.startsWith(argv.suites || ''))
  .flatMap(({ name, params = [undefined], benchmarks: mkBenchmarks }) => {
    return params
      .map((param) => ({ param, size: _.size(param) }))
      .filter(({ size }) => !argv.sizes.length || argv.sizes.includes(size))
      .map(({ param, size }) => {
        const suiteName = param != null ? `${name} (n=${size})` : name
        const suite = new Benchmark.Suite(suiteName)

        const benchmarks = Object.entries(mkBenchmarks(param))
          .filter(([name]) => !argv.libraries || argv.libraries.includes(name))
          .map(([name, fn]) => ({ name, fn }))

        const maxLength = benchmarks
          .map(({ name }) => name.length)
          .reduce((a, b) => Math.max(a, b))
        const padName = (name) => name.padEnd(maxLength, ' ')

        const serialize = (x) =>
          x !== null && typeof x === 'object' ? JSON.stringify(x) : x
        const expectedResult = serialize(benchmarks[0].fn())
        const mismatch = benchmarks.find(
          ({ fn }) => !Object.is(serialize(fn()), expectedResult)
        )
        if (mismatch) {
          throw new Error(
            `the result of ${mismatch.name} in ${name} doesn't match the expected result!`
          )
        }

        benchmarks.forEach(({ name, fn }) => {
          // As a side-effect, write the result of each run into a variable, so v8
          // doesn't optimize the benchmark into the ether.
          let blackhole
          suite.add(padName(name), () => {
            // eslint-disable-next-line no-unused-vars
            blackhole = fn()
          })
        })

        return suite
      })
  })

const write = process.stdout.write.bind(process.stdout)

for (const suite of suites) {
  suite
    .on('start', () => write('\n' + suite.name + ' '))
    .on('cycle', () => write('.'))
    .on('complete', function () {
      write('\n\n')
      Object.values(this)
        .filter((v) => v instanceof Benchmark)
        .sort((a, b) => b.hz - a.hz)
        .forEach((result) => console.log(result.toString()))
    })
    .run()
}
