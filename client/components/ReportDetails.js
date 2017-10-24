'use strict'
import React from 'react'

const renderItems = (items) => {
  return items.map((item, i) =>
    item.value ?
    <li className="report__result__details__missing__list__item" key={i}>
      <p className="report__result__details__missing__list__item__name">
        {item.name}
      </p>
      <p className="report__result__details__missing__list__item__notes">
        Notes: {item.value}
      </p>
    </li>
    :
    <li className="report__result__details__missing__list__item" key={i}>
      <p className="report__result__details__missing__list__item__name">
      {item.name}
      </p>
    </li>
  )
}

const ReportDetails = (props) => (
  <div className="report__result__details__missing">
    <h1 className="report__result__details__missing__header">
      {props.header}
    </h1>
    <ul className="report__result__details__missing__list">
      {renderItems(props.items)}
    </ul>
  </div>
)

export default ReportDetails
