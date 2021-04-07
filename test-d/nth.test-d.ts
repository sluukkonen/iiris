import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, users } from './index.test-d'

// Array
expectType<User | undefined>(I.nth(0, users))
expectType<User | undefined>(I.nth(0)(users))

// Nullable array
expectError(I.nth(0, maybeUsers))
expectError(I.nth(0)(maybeUsers))
