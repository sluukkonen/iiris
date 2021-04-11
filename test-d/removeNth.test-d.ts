import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, users } from './index.test-d'

// Arrays
expectType<User[]>(A.removeNth(0, users))
expectType<User[]>(A.removeNth(0)(users))

// Nullable array
expectError(A.removeNth(0, maybeUsers))
expectError(A.removeNth(0)(maybeUsers))
