import * as S from '..'
import { expectType } from 'tsd'
import { User, user } from './index.test-d'

// Normal field
expectType<User>(S.setProp('name', '', user))
expectType<User>(S.setProp('name', '')(user))
expectType<User>(S.setProp('name')('', user))
expectType<User>(S.setProp('name')('')(user))

// Optional field
expectType<User>(S.setProp('age', 0, user))
expectType<User>(S.setProp('age', 0)(user))
expectType<User>(S.setProp('age')(0, user))
expectType<User>(S.setProp('age')(0)(user))

// Removing normal field
expectType<Omit<User, 'name'>>(S.setProp('name', undefined, user))
expectType<Omit<User, 'name'>>(S.setProp('name', undefined)(user))
expectType<Omit<User, 'name'>>(S.setProp('name')(undefined, user))
expectType<Omit<User, 'name'>>(S.setProp('name')(undefined)(user))

// Removing optional field
expectType<User>(S.setProp('age', undefined, user))
expectType<User>(S.setProp('age', undefined)(user))
expectType<User>(S.setProp('age')(undefined, user))
expectType<User>(S.setProp('age')(undefined)(user))

// Adding a new field
expectType<User & { new: true }>(S.setProp('new', true, user))
expectType<User & { new: boolean }>(S.setProp('new', true)(user))
expectType<User & { new: true }>(S.setProp('new')(true, user))
expectType<User & { new: boolean }>(S.setProp('new')(true)(user))

// Changing the type of a field
expectType<Omit<User, 'age'> & { age: string }>(
  S.setProp('age', 'too old', user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  S.setProp('age', 'too old')(user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  S.setProp('age')('too old', user)
)
expectType<Omit<User, 'age'> & { age: string }>(
  S.setProp('age')('too old')(user)
)
