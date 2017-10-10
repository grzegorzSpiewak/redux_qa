'use strict';
import React from 'react'

const renderList = (items) => {
  return items.map((item, i) =>
    <li className="results__list__item" key={i}>{item.name}</li>
  )
}

const MissingVar = (props) => (
  <section className="results">
      {
        props.items.length > 0 ?
        <div className="results__wrap">
          <h1 className="results__header">{props.header}</h1>
          <ul className="results__list">
            {renderList(props.items)}
          </ul>
        </div>
        :
        <div className="results__wrap">
          <h1 className="results__header">All required variables are present in this call</h1>
        </div>
      }
  </section>
)

export default MissingVar
