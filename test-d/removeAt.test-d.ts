import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, users } from './index.test-d'

// Arrays
expectType<User[]>(I.removeNth(0, users))
expectType<User[]>(I.removeNth(0)(users))

// Nullable array
expectError(I.removeNth(0, maybeUsers))
expectError(I.removeNth(0)(maybeUsers))
