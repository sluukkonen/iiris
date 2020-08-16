import { curryNU } from './internal/curryNU'
export const curry = (fn) => curryNU(fn.length, fn)
