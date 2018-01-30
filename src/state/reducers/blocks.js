
import {BLOCK_UPDATE_POSITION} from 'types'

import {moveTo} from 'state/utils/transformations'

// First pass, set state to just the single object. Once animation is working, wrap this into
// an array and have multiple objects.
const initialState = {
  id: 'object-one',
  matrix: [1, 0, 0, 1, 0, 0]
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case BLOCK_UPDATE_POSITION:
      return Object.assign({}, state, {
        matrix: moveTo(payload.dx, payload.dy, state.matrix)
      })
    default:
      return state
  }
}
