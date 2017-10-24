'use strict'
import React from 'react'

const renderItems = (items) => {
  return items.map((item, i) =>
    <li className="informations__guide__list__item" role="inform" key={i} dangerouslySetInnerHTML={ {__html: item.name} }/>
  )
}

const Informations = (props) => (
  <aside className="informations">
    <div className="wrap">
      <h1 className="informations__guide__header" dangerouslySetInnerHTML={ {__html: props.header} } />
      <ul className="informations__guide__list">
        {renderItems(props.items)}
      </ul>
    </div>
  </aside>
)

export default Informations
