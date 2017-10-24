'use strict'
import React from 'react'

const Text = (props) => (
  <input
    type="text"
    id={props.id}
    placeholder={`Type why ${props.text} failed and press enter`}
    className={"results__list__item__check__textarea"}
    onKeyUp={props.onKeyUp}
  />
)
export default Text
