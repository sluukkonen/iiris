import { curry4 } from './internal/curry4'
import { ifElseU } from './internal/ifElseU'
import { setName } from './internal/setName'

export const ifElse = setName(curry4(ifElseU), 'ifElse')
