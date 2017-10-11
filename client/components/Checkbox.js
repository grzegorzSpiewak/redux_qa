'use strict';
import React from 'react'

const Checkbox = (props) => (
  <input
    className={`${props.className}`}
    type="checkbox"
    id={`${props.id}`}
    value={`${props.value}`}
    name={`${props.name}`}
    onClick={props.onClick}
  />
)

export default Checkbox
