'use strict';
import React from 'react'

const renderList = (items) => {
  return items.map((item, i) =>
    <li key={i}>{item.name}</li>
  )
}

const Missing = (props) => (
  <section className="missing">
    <div className="missing__wrap">
      <h1 className="missing__header">{props.header}</h1>
      <ul className="test-details__caption">
        {renderList(props.items)}
      </ul>
    </div>
  </section>
)

export default Missing
