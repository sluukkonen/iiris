import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, users } from './index.test-d'

// Array
expectType<User | undefined>(I.at(0, users))
expectType<User | undefined>(I.at(0)(users))

// Nullable array
expectError(I.at(0, maybeUsers))
expectError(I.at(0)(maybeUsers))
