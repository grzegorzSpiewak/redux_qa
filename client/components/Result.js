'use strict';
import React from 'react'

const renderList = (items) => {
  return items.map((item, i) =>
  item.value?
    <li key={i} className="results__list__item">
      {item.name} with value {item.value}
      <label className="results__list__item__check">
        Passed:
        <input className="results__list__item__check__input" type="radio" ref="passed" value="passed"/>
      </label>
      <label className="results__list__item__check">
        Fail:
        <input className="results__list__item__check__input" type="radio" ref="fail" value="fail"/>
      </label>
    </li>
    :
    <li key={i} className="results__list__item">{item.name}</li>
  )
}

const Result = (props) => (
  <section className="results">
    <div className="results__wrap">
      <h1 className="results__header">{props.header}</h1>
      <ul className="results__list">
       {renderList(props.items)}
      </ul>
    </div>
  </section>
)

export default Result
