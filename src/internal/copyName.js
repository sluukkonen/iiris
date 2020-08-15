import { setName } from './setName'

export const copyName =
  process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ (fn) => fn
    : (to, from) => setName(to, from.name)
