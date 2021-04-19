import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { User, user, users } from './index.test-d'

// Normal array
expectType<User[]>(A.modify(0, () => user, users))
expectType<User[]>(A.modify(0, () => user)(users))
expectType<User[]>(A.modify(0)(() => user, users))
expectType<User[]>(A.modify(0)(() => user)(users))

// Undefined return type
expectError(A.modify(0, () => undefined, users))
expectError(A.modify(0, () => undefined)(users))
expectError(A.modify(0)(() => undefined, users))
expectError(A.modify(0)(() => undefined)(users))

// Wrong type
expectError(A.modify(0, () => true, users))
expectError(A.modify(0, () => true)(users))
expectError(A.modify(0)(() => true, users))
expectError(A.modify(0)(() => true)(users))
