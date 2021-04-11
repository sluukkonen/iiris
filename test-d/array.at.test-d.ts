import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, users } from './index.test-d'

// Array
expectType<User | undefined>(A.at(0, users))
expectType<User | undefined>(A.at(0)(users))

// Nullable array
expectError(A.at(0, maybeUsers))
expectError(A.at(0)(maybeUsers))
