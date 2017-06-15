import React from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';

import Nav from '../Nav';

const Frame = ({ children }) => (
  <div className="main-wrap">
    <Nav/>
    <div className="content">
      {children}
    </div>
  </div>
);

export default Frame;