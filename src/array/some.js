import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { someU } from './internal/index.js'

export const some = setName(curry2(someU), 'some')
