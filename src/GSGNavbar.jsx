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
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavbarBrand />

          <div className="collapse navbar-collapse">
            <NavbarNavs />
            <NavbarForm />
            <NavbarNavs isOnRight={true}/>
          </div>
        </div>
      </nav>
    );
  }
};
