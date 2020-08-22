const { toString } = Object.prototype

export const getTag = (obj) => toString.call(obj)

export const arrayTag = '[object Array]'
export const dateTag = '[object Date]'
export const errorTag = '[object Error]'
export const mapTag = '[object Map]'
export const regExpTag = '[object RegExp]'
export const objectTAg = '[object Object]'
export const setTag = '[object Set]'
export const symbolTag = '[object Symbol]'
