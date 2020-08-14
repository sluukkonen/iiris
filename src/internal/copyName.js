import { identity } from '../identity'
import { setName } from './setName'

export const copyName =
  process.env.NODE_ENV === 'production'
    ? /* istanbul ignore next */ identity
    : (to, from) => setName(to, from.name)
