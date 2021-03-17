import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user, users } from './index.test-d'

// Normal array
expectType<User[]>(I.modifyAt(0, () => user, users))
expectType<User[]>(I.modifyAt(0, () => user)(users))
expectType<User[]>(I.modifyAt(0)(() => user, users))
expectType<User[]>(I.modifyAt(0)(() => user)(users))

// Wrong type
expectError(I.modifyAt(0, () => true, users))
expectError(I.modifyAt(0, () => true)(users))
expectError(I.modifyAt(0)(() => true, users))
expectError(I.modifyAt(0)(() => true)(users))
