import '../node_modules/gsg-common-style/less/forms/index.less';
import '../node_modules/gsg-common-style/less/navbar/index.less';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

import NavbarBrand from './GSGNavbarBrand.jsx';
import NavbarForm from './GSGNavbarForm.jsx';
import NavbarNavs from './GSGNavbarNavs.jsx';

export default class GSGNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    console.log(this.props.children);

    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    );
  }
};
