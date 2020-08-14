import { copyName } from './internal/copyName'

export const unary = (fn) => copyName((a) => fn(a), fn)
