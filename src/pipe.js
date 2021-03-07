export function pipe(initial, ...fns) {
  for (const fn of fns) {
    initial = fn(initial)
  }

  return initial
}
