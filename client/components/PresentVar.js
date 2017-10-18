import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Checkbox from './Checkbox'
import Text from './Text'

function mapStateToProps(state) {
  return {
    passed: state.passed,
    failed: state.failed,
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
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
      <li key={i} className="results__list__item">
        {item.name} with value {item.value}
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
        {
          this.props.failed[i] ?
          <Text
            id={i}
            onKeyUp={this.handleText.bind(this)}
          />
          :
          null
        }
      </li>
    )
  }

  render() {
    return (
      <div className="results__wrap">
        <h1 className="results__header">{this.props.header}</h1>
        <h2 className="results__caption">Validate value returned in call</h2>
        <ul className="results__list">
          {this.renderList(this.props.items)}
        </ul>
      </div>  
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const PresentVar = connect(mapStateToProps, mapDispachToProps)(Results);

export default PresentVar;
