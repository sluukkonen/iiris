/* eslint-disable import/no-commonjs */

const Benchmark = require('benchmark')

const _ = require('lodash/fp')
const R = require('ramda')
const S = require('../')

const fill = (n) => new Array(n).fill()
const snd = (a, b) => b

const num1 = fill(1).map(snd)
const num10 = fill(10).map(snd)
const num100 = fill(100).map(snd)
const num1000 = fill(1000).map(snd)

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
    name: 'seq',
    benchmarks: () => {
      const inc = (x) => x + 1
      const _flow = _.flow([inc, inc, inc, inc])
      const Rpipe = R.pipe(inc, inc, inc, inc)

      return {
        soles: () => S.seq(1, inc, inc, inc, inc),
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
      soles: () => S.clamp(0, 1, 10),
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
        // Assign the return value of the function to variable, so v8 doesn't just
        // optimize the benchmark into thin air.
        let value
        suite.add(padName(name), () => {
          // eslint-disable-next-line no-unused-vars
          value = fn()
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
