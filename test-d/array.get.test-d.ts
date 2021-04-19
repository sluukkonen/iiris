import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, users } from './index.test-d'

// Array
expectType<User | undefined>(A.get(0, users))
expectType<User | undefined>(A.get(0)(users))

// Nullable array
expectError(A.get(0, maybeUsers))
expectError(A.get(0)(maybeUsers))
