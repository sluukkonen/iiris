import { builtinObjectProtoToString } from './builtins.js'

export const getTag = (obj) => builtinObjectProtoToString.call(obj)

export const booleanTag = '[object Boolean]'
export const dateTag = '[object Date]'
export const errorTag = '[object Error]'
export const mapTag = '[object Map]'
export const numberTag = '[object Number]'
export const regExpTag = '[object RegExp]'
export const objectTag = '[object Object]'
export const setTag = '[object Set]'
export const stringTag = '[object String]'
