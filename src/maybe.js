import { curry3 } from './internal/curry3'
import { maybeU } from './internal/maybeU'
import { setName } from './internal/setName'

export const maybe = setName(curry3(maybeU), 'maybe')
