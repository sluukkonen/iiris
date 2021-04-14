import { curry3 } from '../function/curry3.js'
import { maybeU } from './internal/maybeU.js'
import { setName } from './internal/setName.js'

export const maybe = setName(curry3(maybeU), 'maybe')
