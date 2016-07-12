import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCount } from '../reducers/root'
import * as actions from '../actions'

const Counter = ({ count, increment, decrement }) =>
  <div>
    <h1>{ count }</h1>
    <button onClick={ increment }>+</button>
    <button onClick={ decrement }>-</button>
  </div>

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  count: getCount(state)
})
const mapDispatchToProps = (dispatch) => ({
  increment() {
    // dispatch(actions.incrementCounter(5))
    dispatch(actions.findAllProjects())
  },
  decrement() {
    dispatch(actions.decrementCounter())
  },
})

export default connect(
  mapStateToProps
, mapDispatchToProps
)(Counter)
