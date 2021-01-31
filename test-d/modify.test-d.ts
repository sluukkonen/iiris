import { expectError, expectType } from 'tsd'
import * as S from '..'
import { User, user, users } from './index.test-d'

/// Objects

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(S.modify('name', (n) => n.toUpperCase(), user))
expectType<User>(S.modify('name', toUpper)(user))
expectType<User>(S.modify('name')((n) => n.toUpperCase(), user))
expectType<User>(S.modify('name')(toUpper)(user))

// Optional field
expectType<User>(S.modify('age', (a) => (a === undefined ? 0 : a + 1), user))
expectType<User>(
  S.modify('age', (a: number | undefined) => (a === undefined ? 0 : +1))(user)
)
expectType<User>(S.modify('age')((a) => (a === undefined ? 0 : a + 1), user))
expectType<User>(
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

expectType<Pick<User, 'name'> & { age: string }>(
  S.modify('age', () => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modify('age', () => 'too old')(user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modify('age')(() => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modify('age')(() => 'too old')(user)
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
