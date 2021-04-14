import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'
import { maxU } from './max.js'
import { minU } from './min.js'

const clampU = ([low, high], n) => minU(high, maxU(low, n))

export const clamp = setName(curry2(clampU), 'clamp')
