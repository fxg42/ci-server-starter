import { combineReducers } from 'redux'

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + (action.value || 1)
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const totalClicksReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state + 1
    default:
      return state
  }
}

export default combineReducers({
  count: countReducer,
  totalClicks: totalClicksReducer,
})

export const getCount = (state) => state.count
export const getTotalClicks = (state) => state.totalClicks


