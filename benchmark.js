const Benchmark = require('benchmark')

const _ = require('lodash')
const R = require('ramda')
const S = require('./dist/index')

const argv = require('yargs').option('suites', {
  alias: 's',
  describe: 'Filter suites to run by name',
}).argv

const benchmarks = [
  {
    name: 'curry.partial',
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
    name: 'curry.full',
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
    name: 'curry.last',
    benchmarks: () => {
      const Sadd = S.curry((a, b, c) => a + b + c)(1, 2)
      const _add = _.curry((a, b, c) => a + b + c)(1, 2)
      const Radd = R.curry((a, b, c) => a + b + c)(1, 2)
      const add = ((a) => (b) => (c) => a + b + c)(1, 2)

      return {
        soles: () => Sadd(3) === 6,
        lodash: () => _add(3) === 6,
        ramda: () => Radd(3) === 6,
        native: () => add(3) === 6,
      }
    },
  },
]

const suites = benchmarks
  .map(({ name, benchmarks }) => {
    const suite = new Benchmark.Suite(name)

    const _benchmarks = benchmarks()
    const maxLength = Object.keys(_benchmarks)
      .map((name) => name.length)
      .reduce((a, b) => Math.max(a, b))
    const padName = (name) => name.padEnd(maxLength, ' ')

    Object.entries(_benchmarks).forEach(([name, fn]) => {
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
  .filter((suite) => !argv.suites || suite.name.includes(argv.suites))

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
