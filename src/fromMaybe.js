import { curry2 } from './curry2'
import { fromMaybeU } from './internal/fromMaybeU'
import { setName } from './internal/setName'

export const fromMaybe = setName(curry2(fromMaybeU), 'fromMaybe')
