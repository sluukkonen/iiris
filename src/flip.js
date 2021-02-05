export const flip = (fn) => (a, b, ...rest) => fn(b, a, ...rest)
