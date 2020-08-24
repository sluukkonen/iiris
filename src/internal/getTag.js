import { objectToString } from './builtins'

export const getTag = (obj) => objectToString.call(obj)

export const arrayTag = '[object Array]'
export const booleanTag = '[object Boolean]'
export const dateTag = '[object Date]'
export const errorTag = '[object Error]'
export const mapTag = '[object Map]'
export const numberTag = '[object Number]'
export const regExpTag = '[object RegExp]'
export const objectTag = '[object Object]'
export const setTag = '[object Set]'
export const stringTag = '[object String]'
export const symbolTag = '[object Symbol]'
