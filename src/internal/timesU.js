export const timesU = (fn, n) => {
  const result = new Array(n)

  for (let i = 0; i < n; i++) {
    result[i] = fn(i)
  }

  return result
}
