import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const fn = I.curry4(
  (user: User, name: string, age: number, op: (u: User) => User): User =>
    op({ ...user, name, age })
)

expectType<User>(fn(user, '', 0, I.identity))
expectType<User>(fn(user, '', 0)(I.identity))
expectType<User>(fn(user, '')(0)(I.identity))
expectType<User>(fn(user, '')(0, I.identity))
expectType<User>(fn(user)('', 0, I.identity))
expectType<User>(fn(user)('')(0, I.identity))
expectType<User>(fn(user)('', 0)(I.identity))
expectType<User>(fn(user)('')(0)(I.identity))
