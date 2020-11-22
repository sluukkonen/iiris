export const ifElseU = (predicate, ifTrue, ifFalse, value) =>
  predicate(value) ? ifTrue(value) : ifFalse(value)
