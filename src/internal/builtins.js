const object = Object
const number = Number

export const objectProto = object.prototype

export const getPrototypeOf = object.getPrototypeOf
export const hasOwnProperty = objectProto.hasOwnProperty
export const numberIsInteger = number.isInteger
export const numberIsNan = number.isNaN
export const objectAssign = object.assign
export const objectDefineProperty = object.defineProperty
export const objectEntries = object.entries
export const objectFromEntries = object.fromEntries
export const objectKeys = object.keys
export const objectToString = objectProto.toString
export const objectValues = object.values
