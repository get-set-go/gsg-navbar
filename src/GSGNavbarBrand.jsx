import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGNavbarBrand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href={this.props.linkTo}>{this.props.title}</a>
      </div>
    );
  }
};
