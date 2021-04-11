import { expectType } from 'tsd'
import * as A from '../array'
import * as F from '../function'

expectType<<T>(value: readonly T[]) => boolean>(F.complement(A.isEmpty))
