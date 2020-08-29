import {
  expectAssignable,
  expectError,
  expectNotAssignable,
  expectType,
} from 'tsd'
import * as S from '..'
import { maybeUser, maybeUsers, User, user, users } from './index.test-d'

/// Objects

const toUpper = (s: string) => s.toUpperCase()
const maybeInc = (n: number | undefined) => (n === undefined ? 0 : n + 1)

// Normal field
expectAssignable<User>(S.modify('name', (n) => n.toUpperCase(), user))
expectAssignable<User>(S.modify('name', toUpper)(user))
expectAssignable<User>(S.modify('name')((n) => n.toUpperCase(), user))
expectAssignable<User>(S.modify('name')(toUpper)(user))

// Optional field
expectAssignable<User>(
  S.modify('age', (a) => (a === undefined ? 0 : a + 1), user)
)
expectAssignable<User>(S.modify('age', (a: number) => a + 1)(user))
expectAssignable<User>(
  S.modify('age')((a) => (a === undefined ? 0 : a + 1), user)
)
expectAssignable<User>(S.modify('age')((a: number) => a + 1)(user))

// Adding a new field
// expectType<User & { new: boolean }>(S.modify('new', T, user))
// expectType<User & { new: boolean }>(S.modify('new', T)(user))
// expectType<User & { new: boolean }>(S.modify('new')(T, user))
// expectType<User & { new: boolean }>(S.modify('new')(T)(user))

// Changing the type of a field
expectAssignable<{ name: string; age: string }>(
  S.modify('age', () => 'too old', user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age', () => 'too old')(user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age')(() => 'too old', user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age')(() => 'too old')(user)
)

// Wrong type of function
expectError(S.modify('age', toUpper, user))
expectError(S.modify('age', toUpper)(user))
expectError(S.modify('age')(toUpper, user))
expectError(S.modify('age')(toUpper)(user))

// Optional object
expectNotAssignable<User>(S.modify('age', maybeInc, maybeUser))
expectNotAssignable<User>(S.modify('age', maybeInc)(maybeUser))
expectNotAssignable<User>(S.modify('age')(maybeInc, maybeUser))
expectNotAssignable<User>(S.modify('age')(maybeInc)(maybeUser))

/// Arrays

// Normal array
expectType<User[]>(S.modify(0, () => user, users))
expectType<User[]>(S.modify(0, () => user)(users))
expectType<User[]>(S.modify(0)(() => user, users))
expectType<User[]>(S.modify(0)(() => user)(users))

// Optional array
expectType<User[]>(S.modify(0, (u) => user, maybeUsers))
expectType<User[]>(S.modify(0, () => user)(maybeUsers))
expectType<User[]>(S.modify(0)(() => user, maybeUsers))
expectType<User[]>(S.modify(0)(() => user)(maybeUsers))

// Null
expectType<User[]>(S.modify(0, () => user, null))
expectType<User[]>(S.modify(0, () => user)(null))
expectType<User[]>(S.modify(0)(() => user, null))
expectType<User[]>(S.modify(0)(() => user)(null))

// Wrong type
expectError(S.modify(0, () => true, users))
expectError(S.modify(0, () => true)(users))
expectError(S.modify(0)(() => true, users))
expectError(S.modify(0)(() => true)(users))
