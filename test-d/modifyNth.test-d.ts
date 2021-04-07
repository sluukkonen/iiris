import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user, users } from './index.test-d'

// Normal array
expectType<User[]>(I.modifyNth(0, () => user, users))
expectType<User[]>(I.modifyNth(0, () => user)(users))
expectType<User[]>(I.modifyNth(0)(() => user, users))
expectType<User[]>(I.modifyNth(0)(() => user)(users))

// Wrong type
expectError(I.modifyNth(0, () => true, users))
expectError(I.modifyNth(0, () => true)(users))
expectError(I.modifyNth(0)(() => true, users))
expectError(I.modifyNth(0)(() => true)(users))
