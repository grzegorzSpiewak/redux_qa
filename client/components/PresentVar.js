import React, { Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreators'
import Checkbox from './Checkbox'
import Text from './Text'
import Animated from './Animated'

function mapStateToProps(state) {
  return {
    passed: state.passed,
    failed: state.failed,
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  handleCheckbox(e) {
    const name = e.target.name
    const id = e.target.id
    const isChecked = e.target.checked
    const checkType = e.target.value

    checkType === "Passed" ?
      this.props.passedChecked(isChecked, id, name)
      :
      this.props.failedChecked(isChecked, id, name, null)
  }

  handleText(e) {
    const reason = e.target.value
    const id = e.target.id
    const key = e.key

    key === 'Enter' ? this.props.failedReason(id, reason) : null
  }

  renderList(items) {

    return items.map((item, i) =>
      <ul className="results__list" key={i}>
      <li className="results__list__item">
        <div className="results__list__item__returns">
          <b>{item.name}</b> returns <span className="orange">{item.value}</span>
        </div>
        <div className="results__list__item__inputs">
        {
          !this.props.failed[i]?
          <Checkbox
            caption={'Passed'}
            name={`${item.name}`}
            id={i}
            onClick={this.handleCheckbox.bind(this)}
          />
          :
          null
        }
        {
          !this.props.passed[i] ?
          <Checkbox
            caption={'Failed'}
            name={`${item.name}`}
            id={i}
            onClick={this.handleCheckbox.bind(this)}
          />
          :
          null
        }
        </div>
      </li>
      {
        this.props.failed[i] ?
        <Animated transitionName={'show'} className={'results__list__item__check__textarea'} component={'div'}>
          <Text
            id={i}
            onKeyUp={this.handleText.bind(this)}
            text={`${item.name}`}
          />
        </Animated>
        :
        null
      }
      </ul>
    )
  }

  render() {
    return (
      <div className="wrap">
        <h1 className="results__header">{this.props.header}</h1>
        {this.renderList(this.props.items)}
      </div>
    )
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const PresentVar = connect(mapStateToProps, mapDispachToProps)(Results)

export default PresentVar
