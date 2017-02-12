import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

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
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
    );
  }
};
