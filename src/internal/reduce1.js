/**
 * Note that this version of reduce1 returns undefined for an empty array.
 */
export const reduce1 = (fn, array) => {
  let acc = array[0]

  for (let i = 1; i < array.length; i++) {
    acc = fn(acc, array[i])
  }

  return acc
}
