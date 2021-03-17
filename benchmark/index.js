/* eslint-disable import/no-commonjs */

const Benchmark = require('benchmark')

const _ = require('lodash')
const R = require('ramda')
const I = require('../')
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
const num10000 = fill(10000).map(snd)
const num100000 = fill(100000).map(snd)

const obj1 = num1.map(createObj)
const obj10 = num10.map(createObj)
const obj100 = num100.map(createObj)
const obj1000 = num1000.map(createObj)
const obj10000 = num10000.map(createObj)
const obj100000 = num100000.map(createObj)

const benchmarks = [
  {
    name: 'unary',
    benchmarks: () => {
      const Iunary = I.unary((a, b) => b)
      const _unary = _.unary((a, b) => b)
      const Runary = R.unary((a, b) => b)
      const unary = ((fn) => (x) => fn(x))((a, b) => b)

      return {
        iiris: () => Iunary(1, 2),
        lodash: () => _unary(1, 2),
        ramda: () => Runary(1, 2),
        native: () => unary(1, 2),
      }
    },
  },
  {
    name: 'curry.partial',
    benchmarks: () => {
      const Iadd = I.curry3((a, b, c) => a + b + c)
      const _add = _.curry((a, b, c) => a + b + c)
      const Radd = R.curry((a, b, c) => a + b + c)
      const add = (a) => (b) => (c) => a + b + c

      return {
        iiris: () => Iadd(1)(2)(3),
        lodash: () => _add(1)(2)(3),
        ramda: () => Radd(1)(2)(3),
        native: () => add(1)(2)(3),
      }
    },
  },
  {
    name: 'curry.full',
    benchmarks: () => {
      const Iadd = I.curry3((a, b, c) => a + b + c)
      const _add = _.curry((a, b, c) => a + b + c)
      const Radd = R.curry((a, b, c) => a + b + c)
      const add = (a, b, c) => a + b + c

      return {
        iiris: () => Iadd(1, 2, 3),
        lodash: () => _add(1, 2, 3),
        ramda: () => Radd(1, 2, 3),
        native: () => add(1, 2, 3),
      }
    },
  },
  {
    name: 'curry.last',
    benchmarks: () => {
      const Iadd = I.curry3((a, b, c) => a + b + c)(1, 2)
      const _add = _.curry((a, b, c) => a + b + c)(1, 2)
      const Radd = R.curry((a, b, c) => a + b + c)(1, 2)
      const add = ((a, b) => (c) => a + b + c)(1, 2)

      return {
        iiris: () => Iadd(3),
        lodash: () => _add(3),
        ramda: () => Radd(3),
        native: () => add(3),
      }
    },
  },
  {
    name: 'pipe',
    benchmarks: () => {
      const inc = (x) => x + 1
      const _flow = _.flow([inc, inc, inc, inc])
      const Rpipe = R.pipe(inc, inc, inc, inc)

      return {
        iiris: () => I.pipe(1, inc, inc, inc, inc),
        lodash: () => _flow(1),
        ramda: () => Rpipe(1),
        native: () => inc(inc(inc(inc(1)))),
      }
    },
  },
  {
    name: 'compose.specialized',
    benchmarks: () => {
      const inc = (x) => x + 1
      const Icomposed = I.compose(inc, inc, inc)
      const RCompose = R.compose(inc, inc, inc)
      const composed = (...args) => inc(inc(inc(...args)))

      return {
        iiris: () => Icomposed(1),
        ramda: () => RCompose(1),
        native: () => composed(1),
      }
    },
  },
  {
    name: 'compose.generic',
    benchmarks: () => {
      const inc = (x) => x + 1
      const IComposed = I.compose(inc, inc, inc, inc)
      const Rcomposed = R.compose(inc, inc, inc, inc)
      const composed = (...args) => inc(inc(inc(inc(...args))))

      return {
        iiris: () => IComposed(1),
        ramda: () => Rcomposed(1),
        native: () => composed(1),
      }
    },
  },
  {
    name: 'map',
    params: [num1, num10, num100],
    benchmarks: (array) => {
      return {
        iiris: () => I.map((x) => x + 1, array),
        lodash: () => _.map(array, (x) => x + 1),
        ramda: () => R.map((x) => x + 1, array),
        native: () => array.map((x) => x + 1),
      }
    },
  },
  {
    name: 'filter',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      iiris: () => I.filter((x) => x % 2 === 0, array),
      lodash: () => _.filter(array, (x) => x % 2 === 0),
      ramda: () => R.filter((x) => x % 2 === 0, array),
      native: () => array.filter((x) => x % 2 === 0),
    }),
  },
  {
    name: 'reduce',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      iiris: () => I.reduce((a, b) => a + b, 0, array),
      lodash: () => _.reduce(array, (a, b) => a + b, 0),
      ramda: () => R.reduce((a, b) => a + b, 0, array),
      native: () => array.reduce((a, b) => a + b, 0),
    }),
  },
  {
    name: 'reduceRight',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      iiris: () => I.reduceRight((a, b) => a + b, 0, array),
      lodash: () => _.reduceRight(array, (a, b) => a + b, 0),
      ramda: () => R.reduceRight((a, b) => a + b, 0, array),
      native: () => array.reduceRight((a, b) => a + b, 0),
    }),
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
    benchmarks: (array) => ({
      iiris: () => I.sum(array),
      lodash: () => _.sum(array),
      ramda: () => R.sum(array),
      native: () => array.reduce((x, y) => x + y, 0),
    }),
  },
  {
    name: 'concat',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.concat(array, array),
      lodash: () => _.concat(array, array),
      ramda: () => R.concat(array, array),
      native: () => [...array, ...array],
    }),
  },
  {
    name: 'maximum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.maximum(array),
      lodash: () => _.max(array),
      native: () => array.reduce((a, b) => (a > b ? a : b)),
    }),
  },
  {
    name: 'minimum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.minimum(array),
      lodash: () => _.min(array),
      native: () => array.reduce((a, b) => (a < b ? a : b)),
    }),
  },
  {
    name: 'reverse',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      return {
        iiris: () => I.reverse(array),
        ramda: () => R.reverse(array),
        native: () => array.slice().reverse(),
      }
    },
  },
  {
    name: 'find',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.find((x) => x === 10000, array),
      lodash: () => _.find((x) => x === 10000, array),
      ramda: () => R.find((x) => x === 10000, array),
      native: () => array.find((x) => x === 10000),
    }),
  },
  {
    name: 'groupBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.groupBy((x) => String(x % 10), array),
      lodash: () => _.groupBy(array, (x) => String(x % 10)),
      ramda: () => R.groupBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'countBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.countBy((x) => String(x % 10), array),
      lodash: () => _.countBy(array, (x) => String(x % 10)),
      ramda: () => R.countBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'indexBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.indexBy((x) => String(x % 10), array),
      lodash: () => _.keyBy(array, (x) => String(x % 10)),
      ramda: () => R.indexBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'zip',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.zip(array, array),
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
    benchmarks: (array) => ({
      iiris: () => I.flatMap((x) => [x, x], array),
      lodash: () => _.flatMap(array, (x) => [x, x]),
      ramda: () => R.chain((x) => [x, x], array),
      native: () => array.flatMap((x) => [x, x]),
    }),
  },
  {
    name: 'includes.primitive',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const last = array.length - 1
      return {
        iiris: () => I.includes(last, array),
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
        iiris: () => I.includes(last, array),
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
        iiris: () => I.indexOf(last, array),
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
        iiris: () => I.indexOf(last, array),
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
        iiris: () => I.lastIndexOf(first, array),
        lodash: () => _.lastIndexOf(array, first),
        ramda: () => R.lastIndexOf(first, array),
        native: () => array.lastIndexOf(first),
      }
    },
  },
  {
    name: 'sortWith.object',
    params: [obj1000, obj10000, obj100000],
    benchmarks: (array) => {
      const shuffled = _.shuffle(array)
      const byKConstant = (obj) => obj.kConstant
      const byK1 = (obj) => obj.k1
      return {
        iiris: () =>
          I.sortWith(
            [I.ascend(byKConstant), I.descend(byKConstant), I.ascend(byK1)],
            shuffled
          ),
        lodash: () =>
          _.orderBy(
            shuffled,
            [byKConstant, byKConstant, byK1],
            ['asc', 'desc', 'asc']
          ),
        ramda: () =>
          R.sortWith(
            [R.ascend(byKConstant), R.descend(byKConstant), R.ascend(byK1)],
            shuffled
          ),
      }
    },
  },
  {
    name: 'some',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.some((n) => n > array.length, array),
      lodash: () => _.some(array, (n) => n > array.length),
      ramda: () => R.any((n) => n > array.length, array),
      native: () => array.some((n) => n > array.length),
    }),
  },
  {
    name: 'every',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.every((n) => n < array.length, array),
      lodash: () => _.every(array, (n) => n < array.length),
      ramda: () => R.all((n) => n < array.length, array),
      native: () => array.every((n) => n < array.length),
    }),
  },
  {
    name: 'none',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      iiris: () => I.none((n) => n > array.length, array),
      ramda: () => R.none((n) => n > array.length, array),
    }),
  },
  {
    name: 'prop',
    benchmarks: () => ({
      iiris: () => I.prop('k1', obj),
      ramda: () => R.prop('k1', obj),
      lodash: () => _.get(obj, 'k1'),
      native: () => obj?.k1,
    }),
  },
  {
    name: 'at',
    benchmarks: () => ({
      iiris: () => I.at(0, num100),
      ramda: () => R.nth(0, num100),
      lodash: () => _.nth(num100, 0),
      native: () => num100?.[0],
    }),
  },
  {
    name: 'at.curried',
    benchmarks: () => {
      const Ihead = I.at(0)
      const Rhead = R.nth(0)
      const head = (array) => array?.[0]

      return {
        iiris: () => Ihead(num100),
        ramda: () => Rhead(num100),
        native: () => head(num100),
      }
    },
  },
  {
    name: 'propOr',
    benchmarks: () => ({
      iiris: () => I.propOr(0, 'kDoesNotExist', obj),
      ramda: () => R.propOr(0, 'KDoesNotExist', obj),
      lodash: () => _.get(obj, 'kDoesNotExist', 0),
      native: () => obj?.kDoesNotExist ?? 0,
    }),
  },
  {
    name: 'atOr',
    benchmarks: () => ({
      iiris: () => I.atOr(0, 150, num100),
      ramda: () => R.propOr(0, 150, num100),
      native: () => num100?.[150] ?? 0,
    }),
  },
  {
    name: 'setProp',
    benchmarks: () => ({
      iiris: () => I.setProp('k1', 0, obj),
      ramda: () => R.assoc('k1', 0, obj),
      native: () => ({ ...obj, k1: 0 }),
    }),
  },
  {
    name: 'setAt',
    benchmarks: () => ({
      iiris: () => I.setAt(0, 0, num1),
      ramda: () => R.update(0, 0, num1),
    }),
  },
  {
    name: 'modifyProp',
    benchmarks: () => ({
      iiris: () => I.modifyProp('k1', (x) => x + 1, obj),
      native: () => ({ ...obj, k1: obj.k1 + 1 }),
    }),
  },
  {
    name: 'modifyAt',
    benchmarks: () => ({
      iiris: () => I.modifyAt(0, (x) => x + 1, num1),
      ramda: () => R.adjust(0, (x) => x + 1, num1),
    }),
  },
  {
    name: 'uniq.primitive.different',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const nativeUniq = (xs) => Array.from(new Set(xs))
      return {
        iiris: () => I.uniq(array),
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
        iiris: () => I.uniq(oneToTen),
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
      iiris: () => I.uniq(array),
      ramda: () => R.uniq(array),
      lodash: () => _.uniqWith(array, _.isEqual),
    }),
  },
  {
    name: 'mapValues',
    benchmarks: () => ({
      iiris: () => I.mapValues((x) => x + 1, obj),
      ramda: () => R.map((x) => x + 1, obj),
      lodash: () => _.mapValues(obj, (x) => x + 1),
    }),
  },
  {
    name: 'union.primitive',
    params: [num10, num100, num1000],
    benchmarks: (arr) => {
      const clone = _.clone(arr)
      const nativeUnion = (xs, ys) => Array.from(new Set([...xs, ...ys]))
      return {
        iiris: () => I.union(arr, clone),
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
        iiris: () => I.union(arr, clone),
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
        iiris: () => I.intersection(arr, clone),
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
        iiris: () => I.intersection(arr, clone),
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
        iiris: () => I.difference(arr, clone),
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
        iiris: () => I.difference(arr, clone),
        ramda: () => R.difference(arr, clone),
        lodash: () => _.differenceWith(arr, clone, _.isEqual),
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
  .filter((suite) => suite.name.includes(argv.suites || ''))
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
