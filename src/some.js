import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { someU } from './internal/someU'

export const some = setName(curry2(someU), 'some')
