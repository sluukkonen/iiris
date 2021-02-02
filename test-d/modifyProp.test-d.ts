import { expectError, expectType } from 'tsd'
import * as S from '..'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(S.modifyProp('name', (n) => n.toUpperCase(), user))
expectType<User>(S.modifyProp('name', toUpper)(user))
expectType<User>(S.modifyProp('name')((n) => n.toUpperCase(), user))
expectType<User>(S.modifyProp('name')(toUpper)(user))

// Optional field
expectType<User>(
  S.modifyProp('age', (a) => (a === undefined ? 0 : a + 1), user)
)
expectType<User>(
  S.modifyProp('age', (a: number | undefined) => (a === undefined ? 0 : +1))(
    user
  )
)
expectType<User>(
  S.modifyProp('age')((a) => (a === undefined ? 0 : a + 1), user)
)
expectType<User>(
  S.modifyProp('age')((a: number | undefined) => (a === undefined ? 0 : a + 1))(
    user
  )
)

// Removing a field
expectType<User>(S.modifyProp('age', S.noop, user))
expectType<User>(S.modifyProp('age', S.noop)(user))
expectType<User>(S.modifyProp('age')(S.noop, user))
expectType<User>(S.modifyProp('age')(S.noop)(user))

// Mapping identity function over mandatory field
expectType<User>(S.modifyProp('name', S.identity, user))
expectType<User>(S.modifyProp('name', (a: string) => a)(user))
expectType<User>(S.modifyProp('name')(S.identity, user))
expectType<User>(S.modifyProp('name')((a: string) => a)(user))

// Mapping identity function over optional field
expectType<User>(S.modifyProp('age', S.identity, user))
expectType<User>(S.modifyProp('age', (a?: number) => a)(user))
expectType<User>(S.modifyProp('age')(S.identity, user))
expectType<User>(S.modifyProp('age')((a?: number) => a)(user))

// Adding a new field
// expectType<User & { new: boolean }>(S.modifyProp('new', T, user))
// expectType<User & { new: boolean }>(S.modifyProp('new', T)(user))
// expectType<User & { new: boolean }>(S.modifyProp('new')(T, user))
// expectType<User & { new: boolean }>(S.modifyProp('new')(T)(user))
// Changing the type of a field

expectType<Pick<User, 'name'> & { age: string }>(
  S.modifyProp('age', () => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modifyProp('age', () => 'too old')(user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modifyProp('age')(() => 'too old', user)
)
expectType<Pick<User, 'name'> & { age: string }>(
  S.modifyProp('age')(() => 'too old')(user)
)

// Wrong type of function
expectError(S.modifyProp('age', S.add(1), user))
expectError(S.modifyProp('age', S.add(1))(user))
expectError(S.modifyProp('age')(S.add(1), user))
expectError(S.modifyProp('age')(S.add(1))(user))
