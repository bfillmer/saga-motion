
import {delay, END, eventChannel} from 'redux-saga'
import {call, put, take} from 'redux-saga/effects'
import {animate} from 'dynamics.js'

import {updatePosition} from 'actions'

// Event channel for animate transitions.
const delta = (start, end) => eventChannel(emitter => {
  animate(start, end, {
    change: (value, progress) => emitter(value),
    complete: () => emitter(END)
  })
  return () => null
})

// Perform an animation from one point to another.
function * performAnimation (start, end) {
  const channel = yield call(delta, start, end)
  while (true) {
    const value = yield take(channel)
    yield put(updatePosition('object-one', value.x, value.y))
  }
}

const positionList = [
  {x: 0, y: 0},
  {x: -200, y: -100},
  {x: 400, y: 100},
  {x: 0, y: 0}
]

// Here we would do checks for existing data and load whatever we need for this view. Also manage
// generic tasks such as showing/hiding loaders based on UI needs.
export function * init () {
  yield delay(500)
  yield call(performAnimation, positionList[0], positionList[1])
  yield call(performAnimation, positionList[1], positionList[2])
  yield call(performAnimation, positionList[2], positionList[3])
}
