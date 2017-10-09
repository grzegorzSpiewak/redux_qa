'use strict';
import React from 'react'

const renderList = (items) => {
  return items.map((item, i) =>
  item.value?
    <li key={i}>{item.name} with value {item.value}</li>
    :
    <li key={i}>{item.name}</li>
  )
}

const Result = (props) => (
  <section className="missing">
    <div className="missing__wrap">
      <h1 className="missing__header">{props.header}</h1>
      <ul className="test-details__caption">
       {renderList(props.items)}
      </ul>
    </div>
  </section>
)

export default Result
