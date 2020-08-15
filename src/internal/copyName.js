import { setName } from './setName'

export const copyName =
  /* c8 ignore next */ process.env.NODE_ENV === 'production'
    ? /* c8 ignore next */ (fn) => fn
    : (to, from) => setName(to, from.name)
