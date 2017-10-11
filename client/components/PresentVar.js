import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Checkbox from './Checkbox'

function mapStateToProps(state) {
  return {
    results: state.resultValidation
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handlePassed(e) {
    const name = e.target.name
    const id = e.target.id
    const result = e.target.value
    this.props.resultPassed(name, result, id)
  }

  renderList(items) {

    return items.map((item, i) =>
      <li key={i} className="results__list__item">
        {item.name} with value {item.value}
        <label className="results__list__item__check">
          Passed:
          <Checkbox
            className={'results__list__item__check__input'}
            value={"Pass"}
            id={i}
            name={`${item.name}`}
            onClick={this.handlePassed.bind(this)}
          />
        </label>
        <label className="results__list__item__check">
          Fail:
          <Checkbox
            className={'results__list__item__check__input'}
            value={"Fail"}
            id={i}
            name={`${item.name}`}
            onClick={this.props.resultFailed}
          />
        </label>
        <input type="text" />
      </li>
    )
  }

  render() {
    return (
      <section className="results">
        <div className="results__wrap">
          <h1 className="results__header">{this.props.header}</h1>
          <ul className="results__list">
            {this.renderList(this.props.items)}
          </ul>
        </div>
      </section>
    );
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const PresentVar = connect(mapStateToProps, mapDispachToProps)(Results);

export default PresentVar;
