import React, { Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Checkbox from './Checkbox'

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testFailed: false,
    }
  }

  checkVariables(e) {
    const checkedVar = e.target.name
    const testType = e.target.value
    const isChecked = e.target.checked
    isChecked === true && testType === "Pass" ?
    console.log("przeszla")
    :
    this.setState({
      testFailed: true
    })
  }

  renderList(items) {
    return items.map((item, i) =>
      <li key={i} className="results__list__item">
        {item.name} with value {item.value}
        <label className="results__list__item__check">
          Passed:
          <Checkbox
            className={`results__list__item__check__input`}
            value={"Pass"}
            name={`${item.name}`}
            onClick={this.checkVariables.bind(this)}
          />
        </label>
        <label className="results__list__item__check">
          Fail:
          <Checkbox
            className={`results__list__item__check__input`}
            value={"Fail"}
            name={`${item.name}`}
            onClick={this.checkVariables.bind(this)}
          />
        </label>
        {
          this.state.testFailed === true ?
          <textarea className={`results__list__item__check__details`} key={i}/>
          :
          null
        }

      </li>
    )
  }

  render() {
    return (
      <section className="results">
        <div className="results__wrap">
          <h1 className="results__header">{this.props.results.presentVar.header}</h1>
          <ul className="results__list">
            {this.renderList(this.props.results.presentVar.items)}
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
