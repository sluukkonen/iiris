import * as S from '..'
import { User, users } from './index.test-d'
import { expectType } from 'tsd'

// Array
expectType<User | undefined>(S.at(0, users))
expectType<User | undefined>(S.at(0)(users))
