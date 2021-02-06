import { expectType } from 'tsd'
import * as S from '..'
import { User, user } from './index.test-d'

const fn = S.curry4(
  (user: User, name: string, age: number, op: (u: User) => User): User =>
    op({ ...user, name, age })
)

expectType<User>(fn(user, '', 0, S.identity))
expectType<User>(fn(user, '', 0)(S.identity))
expectType<User>(fn(user, '')(0)(S.identity))
expectType<User>(fn(user, '')(0, S.identity))
expectType<User>(fn(user)('', 0, S.identity))
expectType<User>(fn(user)('')(0, S.identity))
expectType<User>(fn(user)('', 0)(S.identity))
expectType<User>(fn(user)('')(0)(S.identity))
