import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTotalClicks } from '../reducers/root'

const ClickCount = ({ totalClicks }) => <h1>{ totalClicks }</h1>

ClickCount.PropTypes = {
  totalClicks: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  totalClicks: getTotalClicks(state)
})

export default connect(mapStateToProps)(ClickCount)


