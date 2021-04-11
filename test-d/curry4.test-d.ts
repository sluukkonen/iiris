import { expectType } from 'tsd'
import * as F from '../function'
import { User, user } from './index.test-d'

const fn = F.curry4(
  (user: User, name: string, age: number, op: (u: User) => User): User =>
    op({ ...user, name, age })
)

expectType<User>(fn(user, '', 0, F.identity))
expectType<User>(fn(user, '', 0)(F.identity))
expectType<User>(fn(user, '')(0)(F.identity))
expectType<User>(fn(user, '')(0, F.identity))
expectType<User>(fn(user)('', 0, F.identity))
expectType<User>(fn(user)('')(0, F.identity))
expectType<User>(fn(user)('', 0)(F.identity))
expectType<User>(fn(user)('')(0)(F.identity))
