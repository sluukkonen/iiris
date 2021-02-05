export function pipe(initial, ...fns) {
  let acc = initial

  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i]
    acc = fn(acc)
  }

  return acc
}
