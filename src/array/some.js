import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { someU } from './internal/someU.js'

export const some = setName(curry2(someU), 'some')
