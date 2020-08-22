/**
 * Sums numbers using the Kahan summation algorithm to minimize the numerical
 * error. Both faster and more accurate algorithms exist, but I think Kahan
 * strikes a fair balance between numerical error, performance and code size.
 *
 * @see https://en.wikipedia.org/wiki/Kahan_summation_algorithm
 */
export const sumByU = (fn, array) => {
  let sum = 0
  let c = 0

  for (let i = 0; i < array.length; i++) {
    const y = fn(array[i]) - c
    const t = sum + y
    c = t - sum - y
    sum = t
  }

  return sum
}
