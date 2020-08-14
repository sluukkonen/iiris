import { copyName } from './internal/copyName'

export const binary = (fn) => copyName((a, b) => fn(a, b), fn)
