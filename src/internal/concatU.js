export const concatU = (a1, a2) => {
  const result = new Array(a1.length + a2.length)

  for (let i = 0; i < a1.length; i++) {
    result[i] = a1[i]
  }

  for (let i = 0; i < a2.length; i++) {
    result[i + a1.length] = a2[i]
  }

  return result
}
