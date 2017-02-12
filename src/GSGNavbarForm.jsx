import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGNavbarForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search">
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
};
