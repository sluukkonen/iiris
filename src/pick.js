import { curry2 } from './internal/curry2'
import { pickU } from './internal/pickU'
import { setName } from './internal/setName'

export const pick = setName(curry2(pickU), 'pick')
