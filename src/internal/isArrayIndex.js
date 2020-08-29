import { numberIsInteger } from './builtins'

export const isArrayIndex = (index) => numberIsInteger(index) && index >= 0
