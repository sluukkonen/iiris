const { hasOwnProperty } = Object.prototype

export const hasOwn = (object, key) => hasOwnProperty.call(object, key)
