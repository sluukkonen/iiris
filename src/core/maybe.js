import { curry3 } from '../function/index.js'
import { maybeU, setName } from './internal/index.js'

export const maybe = setName(curry3(maybeU), 'maybe')
