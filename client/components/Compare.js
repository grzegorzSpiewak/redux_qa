import React, { Component} from 'react'
import { browserHistory } from 'react-router';

class Compare extends React.Component {
  constructor(props) {
    super(props);
  }

  updateDataToCompare (e) {
    const newValue = e.target.value
    this.props.getDataToCompare(newValue)
  }

  render() {
    return (
      <section className="compare">
        <h1 className="compare__header">Copy and paste variables from saved logs</h1>
        <form className="compare__form" id="compare">
          <textarea
            className="compare__form__textarea"
            onChange={this.updateDataToCompare.bind(this)}
          />
          <input
            type="button"
            value="Compare"
            name="compare_results"
            className="compare__form__submit"
          />
        </form>
      </section>
    );
  }
}

export default Compare;
