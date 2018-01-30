
import {combineReducers} from 'redux'
import {curiReducer as location} from '@curi/redux'

import {reducer as blocks} from 'state/reducers/blocks'

export const reducers = combineReducers({
  location,
  blocks
})
