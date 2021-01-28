import { expectAssignable, expectError, expectType } from 'tsd'
import * as S from '..'
import { maybeUser, User, user, users } from './index.test-d'

/// Objects

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectAssignable<User>(S.modify('name', (n) => n.toUpperCase(), user))
expectAssignable<User>(S.modify('name', toUpper)(user))
expectAssignable<User>(S.modify('name')((n) => n.toUpperCase(), user))
expectAssignable<User>(S.modify('name')(toUpper)(user))

// Optional field
expectAssignable<User>(
  S.modify('age', (a) => (a === undefined ? 0 : a + 1), user)
)
expectAssignable<User>(
  S.modify('age', (a: number | undefined) => (a === undefined ? 0 : +1))(user)
)
expectAssignable<User>(
  S.modify('age')((a) => (a === undefined ? 0 : a + 1), user)
)
expectAssignable<User>(
  S.modify('age')((a: number | undefined) => (a === undefined ? 0 : a + 1))(
    user
  )
)

// Removing a field
expectType<User>(S.modify('age', S.noop, user))
expectType<User>(S.modify('age', S.noop)(user))
expectType<User>(S.modify('age')(S.noop, user))
expectType<User>(S.modify('age')(S.noop)(user))

// Mapping identity function over mandatory field
expectType<User>(S.modify('name', S.identity, user))
expectType<User>(S.modify('name', (a: string) => a)(user))
expectType<User>(S.modify('name')(S.identity, user))
expectType<User>(S.modify('name')((a: string) => a)(user))

// Mapping identity function over optional field
expectType<User>(S.modify('age', S.identity, user))
expectType<User>(S.modify('age', (a?: number) => a)(user))
expectType<User>(S.modify('age')(S.identity, user))
expectType<User>(S.modify('age')((a?: number) => a)(user))

// Adding a new field
// expectType<User & { new: boolean }>(S.modify('new', T, user))
// expectType<User & { new: boolean }>(S.modify('new', T)(user))
// expectType<User & { new: boolean }>(S.modify('new')(T, user))
// expectType<User & { new: boolean }>(S.modify('new')(T)(user))
// Changing the type of a field

expectAssignable<{ name: string; age: string }>(
  S.modify('age', (a) => 'too old', user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age', (a) => 'too old')(user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age')((a) => 'too old', user)
)
expectAssignable<{ name: string; age: string }>(
  S.modify('age')((a) => 'too old')(user)
)

// Wrong type of function
expectError(S.modify('age', S.add(1), user))
expectError(S.modify('age', S.add(1))(user))
expectError(S.modify('age')(S.add(1), user))
expectError(S.modify('age')(S.add(1))(user))

/// Arrays

// Normal array
expectType<User[]>(S.modify(0, () => user, users))
expectType<User[]>(S.modify(0, () => user)(users))
expectType<User[]>(S.modify(0)(() => user, users))
expectType<User[]>(S.modify(0)(() => user)(users))

// Wrong type
expectError(S.modify(0, () => true, users))
expectError(S.modify(0, () => true)(users))
expectError(S.modify(0)(() => true, users))
expectError(S.modify(0)(() => true)(users))
