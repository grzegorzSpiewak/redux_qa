'use strict';
import React from 'react'

const Checkbox = (props) => (
  <label className="results__list__item__check">
  {props.caption}
    <input
      className='results__list__item__check__input'
      type="checkbox"
      id={props.id}
      name={props.name}
      value={props.caption}
      onClick={props.onClick}
    />
  </label>
)

export default Checkbox
