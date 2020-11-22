import { expectType } from 'tsd'
import * as S from '..'
import { user, User } from './index.test-d'

const isVoldemort = (u: User) => u.name === 'Voldemort'
const getName = (u: User) => u.name
const getAge = (u: User) => u.age

expectType<string | number | undefined>(
  S.ifElse(isVoldemort, getName, getAge, user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort, getName, getAge)(user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort, getName)(getAge, user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort, getName)(getAge)(user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort)(getName, getAge, user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort)(getName, getAge)(user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort)(getName)(getAge, user)
)
expectType<string | number | undefined>(
  S.ifElse(isVoldemort)(getName)(getAge)(user)
)
