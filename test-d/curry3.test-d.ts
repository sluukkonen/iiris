import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const fn = I.curry3(
  (user: User, name: string, age: number): User => ({ ...user, name, age })
)

expectType<User>(fn(user, '', 0))
expectType<User>(fn(user)('', 0))
expectType<User>(fn(user, '')(0))
expectType<User>(fn(user)('')(0))
