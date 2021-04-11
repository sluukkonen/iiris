import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, users } from './index.test-d'

// Arrays
expectType<User[]>(A.remove(0, users))
expectType<User[]>(A.remove(0)(users))

// Nullable array
expectError(A.remove(0, maybeUsers))
expectError(A.remove(0)(maybeUsers))
