import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { findIndexU } from './findIndex.js'

export const someU = (fn, array) => findIndexU(fn, array) !== -1

export const some = setName(curry2(someU), 'some')
