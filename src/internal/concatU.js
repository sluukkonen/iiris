export const concatU = (a1, a2) => {
  const a1Length = a1.length
  const a2Length = a2.length
  const result = new Array(a1Length + a2Length)

  for (let i = 0; i < a1Length; i++) {
    result[i] = a1[i]
  }

  for (let i = 0; i < a2Length; i++) {
    result[i + a1Length] = a2[i]
  }

  return result
}
