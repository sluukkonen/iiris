import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { User, user, users } from './index.test-d'

// Normal array
expectType<User[]>(A.modifyNth(0, () => user, users))
expectType<User[]>(A.modifyNth(0, () => user)(users))
expectType<User[]>(A.modifyNth(0)(() => user, users))
expectType<User[]>(A.modifyNth(0)(() => user)(users))

// Wrong type
expectError(A.modifyNth(0, () => true, users))
expectError(A.modifyNth(0, () => true)(users))
expectError(A.modifyNth(0)(() => true, users))
expectError(A.modifyNth(0)(() => true)(users))
