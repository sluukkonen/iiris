import { setName } from './setName'

export const copyName =
  /* istanbul ignore next */ process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ (fn) => fn
    : (to, from) => setName(to, from.name)
