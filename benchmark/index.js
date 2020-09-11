/* eslint-disable import/no-commonjs */

const Benchmark = require('benchmark')

const _ = require('lodash/fp')
const R = require('ramda')
const S = require('../')
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
    name: 'arity.specialized',
    benchmarks: () => {
      const Sunary = S.unary((a, b) => b)
      const _unary = _.unary((a, b) => b)
      const Runary = R.unary((a, b) => b)
      const unary = ((fn) => (x) => fn(x))((a, b) => b)

      return {
        soles: () => Sunary(1, 2),
        lodash: () => _unary(1, 2),
        ramda: () => Runary(1, 2),
        native: () => unary(1, 2),
      }
    },
  },
  {
    name: 'arity.generic',
    benchmarks: () => {
      const Sarity4 = S.arity(4, (a, b, c, d, e) => e)
      const _arity4 = _.ary(4, (a, b, c, d, e) => e)
      const Rarity4 = R.nAry(4, (a, b, c, d, e) => e)
      const arity4 = ((fn) => (a, b, c, d) => fn(a, b, c, d))(
        (a, b, c, d, e) => e
      )

      return {
        soles: () => Sarity4(1, 2, 3, 4, 5),
        lodash: () => _arity4(1, 2, 3, 4, 5),
        ramda: () => Rarity4(1, 2, 3, 4, 5),
        native: () => arity4(1, 2, 3, 4, 5),
      }
    },
  },
  {
    name: 'curry.specialized.partial',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c) => a + b + c)
      const _add = _.curry((a, b, c) => a + b + c)
      const Radd = R.curry((a, b, c) => a + b + c)
      const add = (a) => (b) => (c) => a + b + c

      return {
        soles: () => Sadd(1)(2)(3),
        lodash: () => _add(1)(2)(3),
        ramda: () => Radd(1)(2)(3),
        native: () => add(1)(2)(3),
      }
    },
  },
  {
    name: 'curry.specialized.full',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c) => a + b + c)
      const _add = _.curry((a, b, c) => a + b + c)
      const Radd = R.curry((a, b, c) => a + b + c)
      const add = (a, b, c) => a + b + c

      return {
        soles: () => Sadd(1, 2, 3),
        lodash: () => _add(1, 2, 3),
        ramda: () => Radd(1, 2, 3),
        native: () => add(1, 2, 3),
      }
    },
  },
  {
    name: 'curry.specialized.last',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c) => a + b + c)(1, 2)
      const _add = _.curry((a, b, c) => a + b + c)(1, 2)
      const Radd = R.curry((a, b, c) => a + b + c)(1, 2)
      const add = ((a, b) => (c) => a + b + c)(1, 2)

      return {
        soles: () => Sadd(3),
        lodash: () => _add(3),
        ramda: () => Radd(3),
        native: () => add(3),
      }
    },
  },
  {
    name: 'curry.generic.full',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c, d) => a + b + c + d)
      const _add = _.curry((a, b, c, d) => a + b + c + d)
      const Radd = R.curry((a, b, c, d) => a + b + c + d)
      const add = (a, b, c, d) => a + b + c + d

      return {
        soles: () => Sadd(1, 2, 3, 4),
        lodash: () => _add(1, 2, 3, 4),
        ramda: () => Radd(1, 2, 3, 4),
        native: () => add(1, 2, 3, 4),
      }
    },
  },
  {
    name: 'curry.generic.partial',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c, d) => a + b + c + d)
      const _add = _.curry((a, b, c, d) => a + b + c + d)
      const Radd = R.curry((a, b, c, d) => a + b + c + d)
      const add = (a) => (b) => (c) => (d) => a + b + c + d

      return {
        soles: () => Sadd(1)(2)(3)(4),
        lodash: () => _add(1)(2)(3)(4),
        ramda: () => Radd(1)(2)(3)(4),
        native: () => add(1)(2)(3)(4),
      }
    },
  },
  {
    name: 'curry.generic.last',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c, d) => a + b + c + d)(1, 2, 3)
      const _add = _.curry((a, b, c, d) => a + b + c + d)(1, 2, 3)
      const Radd = R.curry((a, b, c, d) => a + b + c + d)(1, 2, 3)
      const add = ((a, b, c) => (d) => a + b + c + d)(1, 2, 3)

      return {
        soles: () => Sadd(4),
        lodash: () => _add(4),
        ramda: () => Radd(4),
        native: () => add(4),
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
        soles: () => S.pipe(1, inc, inc, inc, inc),
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
      const soles = S.compose(inc, inc, inc)
      const lodash = _.compose([inc, inc, inc])
      const ramda = R.compose(inc, inc, inc)
      const native = (...args) => inc(inc(inc(...args)))

      return {
        soles: () => soles(1),
        lodash: () => lodash(1),
        ramda: () => ramda(1),
        native: () => native(1),
      }
    },
  },
  {
    name: 'compose.generic',
    benchmarks: () => {
      const inc = (x) => x + 1
      const soles = S.compose(inc, inc, inc, inc)
      const lodash = _.compose([inc, inc, inc, inc])
      const ramda = R.compose(inc, inc, inc, inc)
      const native = (...args) => inc(inc(inc(inc(...args))))

      return {
        soles: () => soles(1),
        lodash: () => lodash(1),
        ramda: () => ramda(1),
        native: () => native(1),
      }
    },
  },
  {
    name: 'map',
    params: [num1, num10, num100],
    benchmarks: (array) => {
      return {
        soles: () => S.map((x) => x + 1, array),
        lodash: () => _.map((x) => x + 1, array),
        ramda: () => R.map((x) => x + 1, array),
        native: () => array.map((x) => x + 1),
      }
    },
  },
  {
    name: 'filter',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      soles: () => S.filter((x) => x % 2 === 0, array),
      lodash: () => _.filter((x) => x % 2 === 0, array),
      ramda: () => R.filter((x) => x % 2 === 0, array),
      native: () => array.filter((x) => x % 2 === 0),
    }),
  },
  {
    name: 'reduce',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      soles: () => S.reduce((a, b) => a + b, 0, array),
      lodash: () => _.reduce((a, b) => a + b, 0, array),
      ramda: () => R.reduce((a, b) => a + b, 0, array),
      native: () => array.reduce((a, b) => a + b, 0),
    }),
  },
  {
    name: 'reduceRight',
    params: [num1, num10, num100],
    benchmarks: (array) => ({
      soles: () => S.reduceRight((a, b) => a + b, 0, array),
      lodash: () => _.reduceRight((a, b) => a + b, 0, array),
      ramda: () => R.reduceRight((a, b) => a + b, 0, array),
      native: () => array.reduceRight((a, b) => a + b, 0),
    }),
  },
  {
    name: 'clamp',
    benchmarks: () => ({
      soles: () => S.clamp([0, 1], 10),
      lodash: () => _.clamp(0, 1, 10),
      ramda: () => R.clamp(0, 1, 10),
      native: () => Math.max(0, Math.min(1, 10)),
    }),
  },
  {
    name: 'sum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.sum(array),
      lodash: () => _.sum(array),
      ramda: () => R.sum(array),
      native: () => array.reduce((x, y) => x + y, 0),
    }),
  },
  {
    name: 'concat',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.concat(array, array),
      lodash: () => _.concat(array, array),
      ramda: () => R.concat(array, array),
      native: () => [...array, ...array],
    }),
  },
  {
    name: 'maximum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.maximum(array),
      lodash: () => _.max(array),
      native: () => array.reduce((a, b) => (a > b ? a : b)),
    }),
  },
  {
    name: 'minimum',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.minimum(array),
      lodash: () => _.min(array),
      native: () => array.reduce((a, b) => (a < b ? a : b)),
    }),
  },
  {
    name: 'reverse',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      return {
        soles: () => S.reverse(array),
        lodash: () => _.reverse(array),
        ramda: () => R.reverse(array),
        native: () => array.slice().reverse(),
      }
    },
  },
  {
    name: 'find',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.find((x) => x === 10000, array),
      lodash: () => _.find((x) => x === 10000, array),
      ramda: () => R.find((x) => x === 10000, array),
      native: () => array.find((x) => x === 10000),
    }),
  },
  {
    name: 'groupBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.groupBy((x) => String(x % 10), array),
      lodash: () => _.groupBy((x) => String(x % 10), array),
      ramda: () => R.groupBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'countBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.countBy((x) => String(x % 10), array),
      lodash: () => _.countBy((x) => String(x % 10), array),
      ramda: () => R.countBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'indexBy',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.indexBy((x) => String(x % 10), array),
      lodash: () => _.indexBy((x) => String(x % 10), array),
      ramda: () => R.indexBy((x) => String(x % 10), array),
    }),
  },
  {
    name: 'zip',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.zip(array, array),
      lodash: () => _.zip(array, array),
      ramda: () => R.zip(array, array),
    }),
  },
  {
    name: 'equals.equal-numeric-arrays',
    params: [num1, num10, num100, num1000],
    benchmarks: (obj) => {
      const clone = _.clone(obj)
      return {
        soles: () => S.equals(obj, clone),
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
      const clone = _.clone(obj)
      return {
        soles: () => S.equals(obj, clone),
        lodash: () => _.isEqual(obj, clone),
        ramda: () => R.equals(obj, clone),
        native: () => util.isDeepStrictEqual(obj, clone),
      }
    },
  },
  {
    name: 'equals.primitives',
    benchmarks: () => ({
      soles: () => S.equals(1, 1),
      lodash: () => _.isEqual(1, 1),
      ramda: () => R.equals(1, 1),
      native: () => util.isDeepStrictEqual(1, 1),
    }),
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
        soles: () => S.equals(obj1, obj2),
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
      soles: () => S.flatMap((x) => [x, x], array),
      lodash: () => _.flatMap((x) => [x, x], array),
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
        soles: () => S.includes(last, array),
        lodash: () => _.includes(last, array),
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
        soles: () => S.includes(last, array),
        lodash: () => _.findIndex((o) => _.isEqual(o, last), array) !== -1,
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
        soles: () => S.indexOf(last, array),
        lodash: () => _.indexOf(last, array),
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
        soles: () => S.indexOf(last, array),
        lodash: () => _.findIndex((o) => _.isEqual(o, last), array),
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
        soles: () => S.lastIndexOf(first, array),
        lodash: () => _.lastIndexOf(first, array),
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
        soles: () =>
          S.sortWith(
            [S.ascend(byKConstant), S.descend(byKConstant), S.ascend(byK1)],
            shuffled
          ),
        lodash: () =>
          _.orderBy(
            [byKConstant, byKConstant, byK1],
            ['asc', 'desc', 'asc'],
            shuffled
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
      soles: () => S.some((n) => n > array.length, array),
      lodash: () => _.some((n) => n > array.length, array),
      ramda: () => R.any((n) => n > array.length, array),
      native: () => array.some((n) => n > array.length),
    }),
  },
  {
    name: 'every',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.every((n) => n < array.length, array),
      lodash: () => _.every((n) => n < array.length, array),
      ramda: () => R.all((n) => n < array.length, array),
      native: () => array.every((n) => n < array.length),
    }),
  },
  {
    name: 'none',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.none((n) => n > array.length, array),
      ramda: () => R.none((n) => n > array.length, array),
    }),
  },
  {
    name: 'get.object',
    benchmarks: () => ({
      soles: () => S.get('k1', obj),
      ramda: () => R.prop('k1', obj),
      lodash: () => _.get('k1', obj),
      native: () => obj?.k1,
    }),
  },
  {
    name: 'get.array',
    benchmarks: () => ({
      soles: () => S.get(0, num100),
      ramda: () => R.prop(0, num100),
      lodash: () => _.get(0, num100),
      native: () => num100?.[0],
    }),
  },
  {
    name: 'get.curried',
    benchmarks: () => {
      const Shead = S.get(0)
      const _head = _.get(0)
      const Rhead = R.prop(0)
      const head = (array) => array?.[0]

      return {
        soles: () => Shead(num100),
        lodash: () => _head(num100),
        ramda: () => Rhead(num100),
        native: () => head(num100),
      }
    },
  },
  {
    name: 'getOr.object',
    benchmarks: () => ({
      soles: () => S.getOr(0, 'kDoesNotExist', obj),
      ramda: () => R.propOr(0, 'KDoesNotExist', obj),
      lodash: () => _.getOr(0, 'kDoesNotExist', obj),
      native: () => obj?.kDoesNotExist ?? 0,
    }),
  },
  {
    name: 'getOr.array',
    benchmarks: () => ({
      soles: () => S.getOr(0, 150, num100),
      ramda: () => R.propOr(0, 150, num100),
      lodash: () => _.getOr(0, 150, num100),
      native: () => num100?.[150] ?? 0,
    }),
  },
  {
    name: 'set.object',
    benchmarks: () => ({
      soles: () => S.set('k1', 0, obj),
      ramda: () => R.assoc('k1', 0, obj),
      lodash: () => _.set('k1', 0, obj),
      native: () => ({ ...obj, k1: 0 }),
    }),
  },
  {
    name: 'set.array',
    benchmarks: () => ({
      soles: () => S.set(0, 0, num1),
      ramda: () => R.update(0, 0, num1),
      lodash: () => _.set(0, 0, num1),
    }),
  },
  {
    name: 'modify.object',
    benchmarks: () => ({
      soles: () => S.modify('k1', (x) => x + 1, obj),
      lodash: () => _.update('k1', (x) => x + 1, obj),
      native: () => ({ ...obj, k1: obj.k1 + 1 }),
    }),
  },
  {
    name: 'modify.array',
    benchmarks: () => ({
      soles: () => S.modify(0, (x) => x + 1, num1),
      ramda: () => R.adjust(0, (x) => x + 1, num1),
      lodash: () => _.update(0, (x) => x + 1, num1),
    }),
  },
  {
    name: 'uniq.primitive.different',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => ({
      soles: () => S.uniq(array),
      ramda: () => R.uniq(array),
      lodash: () => _.uniq(array),
    }),
  },
  {
    name: 'uniq.primitive.similar',
    params: [num1, num10, num100, num1000],
    benchmarks: (array) => {
      const oneToTen = array.map((n) => n % 10)
      return {
        soles: () => S.uniq(oneToTen),
        ramda: () => R.uniq(oneToTen),
        lodash: () => _.uniq(oneToTen),
      }
    },
  },
  {
    name: 'uniq.object',
    params: [obj1, obj10, obj100, obj1000],
    benchmarks: (array) => ({
      soles: () => S.uniq(array),
      ramda: () => R.uniq(array),
      lodash: () => _.uniqWith(_.isEqual, array),
    }),
  },
  {
    name: 'mapValues',
    benchmarks: () => ({
      soles: () => S.mapValues((x) => x + 1, obj),
      ramda: () => R.map((x) => x + 1, obj),
      lodash: () => _.mapValues((x) => x + 1, obj),
    }),
  },
]

const argv = require('yargs')
  .option('suites', {
    alias: 's',
    describe: 'Include only matching suites',
  })
  .option('libraries', {
    alias: 'l',
    description: 'Comma-separated list of libraries to benchmark',
    choices: ['soles', 'lodash', 'ramda', 'native'],
    coerce: (s) => s.split(','),
  }).argv

const suites = benchmarks
  .filter((suite) => suite.name.includes(argv.suites || ''))
  .flatMap(({ name, params = [undefined], benchmarks: mkBenchmarks }) => {
    return params.map((param) => {
      const suiteName = param != null ? `${name} (n=${_.size(param)})` : name
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
        suite.add(padName(name), fn)
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
