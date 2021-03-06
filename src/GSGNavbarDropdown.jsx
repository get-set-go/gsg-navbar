import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGNavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
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
    );
  }
};
