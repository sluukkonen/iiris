import { pickOmitBy } from './pickOmitBy'

export const omitByU = (predicate, object) =>
  pickOmitBy(predicate, object, false)
