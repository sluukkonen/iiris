export function pipe(initial, ...fns) {
  let acc = initial

  for (const fn of fns) {
    acc = fn(acc)
  }

  return acc
}
