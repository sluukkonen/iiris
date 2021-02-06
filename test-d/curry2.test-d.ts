import { expectType } from 'tsd'
import * as S from '..'
import { User, user } from './index.test-d'

const fn = S.curry2((user: User, name: string): User => ({ ...user, name }))

expectType<User>(fn(user, ''))
expectType<User>(fn(user)(''))
