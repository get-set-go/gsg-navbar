import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import NavbarDropdown from './GSGNavbarDropdown.jsx';

export default class GSGNavbarNavs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const _isOnRight = this.props.isOnRight;

    let _bClass = {
      'nav': true,
      'navbar-nav': true
    };

    if (this.props.isOnRight) {
      _bClass = objectAssign(_bClass, {
        'navbar-right': true
      });
    }

    _bClass = classNames(_bClass);

    return(
      <ul className={_bClass}>
        <li><a href="#">Link <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <NavbarDropdown />
      </ul>
    );
  }
};
