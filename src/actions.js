
import {createAction} from 'redux-actions'

import {BLOCK_UPDATE_POSITION} from 'types'

export const updatePosition = createAction(BLOCK_UPDATE_POSITION, (id, dx, dy) => ({id, dx, dy}))
