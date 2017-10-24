'use strict'
import React from 'react'
import { Link } from 'react-router'

const renderItems = (items) => {
  return items.map((item, i) =>
    <li className="header__list__item" role="menuitem" key={i}>
      <Link
        to={ `${item.href}` }
        className={ `${item.currentPage === true ?
        'header__list__item__link active'
        :
        'header__list__item__link' }`}
        dangerouslySetInnerHTML={ {__html: item.icon} }
      />
    </li>
  )
}

const Header = (props) => (
  <header className="header">
    <div className="header__wrap">
      <div className="header__brand">
        <h1 className="header__brand__name"
            dangerouslySetInnerHTML={ {__html: props.name} }
        />
      </div>
      <ul className="header__list">
        {renderItems(props.links)}
      </ul>
    </div>
  </header>
)

export default Header
