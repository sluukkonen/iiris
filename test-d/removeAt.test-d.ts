import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, users } from './index.test-d'

// Arrays
expectType<User[]>(I.removeAt(0, users))
expectType<User[]>(I.removeAt(0)(users))

// Nullable array
expectError(I.removeAt(0, maybeUsers))
expectError(I.removeAt(0)(maybeUsers))
