import { expectType } from 'tsd'
import * as S from '..'
import { User, user } from './index.test-d'

const fn = S.curry3(
  (user: User, name: string, age: number): User => ({ ...user, name, age })
)

expectType<User>(fn(user, '', 0))
expectType<User>(fn(user)('', 0))
expectType<User>(fn(user, '')(0))
expectType<User>(fn(user)('')(0))
