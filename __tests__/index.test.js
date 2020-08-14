const S = require('../src')

it('each function has a proper name', () => {
  Object.entries(S).forEach(([name, fn]) => expect(fn.name).toEqual(name))
})
