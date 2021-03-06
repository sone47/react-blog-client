import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames';

import './style.css';

class Nav extends Component {

  static defaultProps = {
    list: [{
      name: '首页',
      link: '/'
    }, {
      name: '专题',
      link: '/topic'
    }, {
      name: '关于我',
      link: '/about'
    }, {
      name: '给我留言',
      link: '/message'
    }]
  };

  constructor(props) {
    super(props);

    this.state = {
      // only when screen's width is wider than iPad's(768px) show the navigator
      navHide: process.browser && window.innerWidth < 768
    };
    this.toggleHandler = this.toggleHandler.bind(this);
  }

  toggleHandler() {
    this.setState({
      navHide: !this.state.navHide
    });
  }

  render() {
    let navClass = classNames({ 'toggle-nav': this.state.navHide });

    return (
      <aside id="nav" className={ navClass }>
        <PopBtn toggleHandler={ this.toggleHandler }/>
        <NavList { ...this.props }/>
      </aside>
    );
  }
}

const NavList = ({ list }) => {
  list = list.map((value, i) => {
    let MyLink = Link,
        link = value.link;
    if(link === '/') {
      MyLink = IndexLink;
    }

    return (
      <li key={i} className="nav-item">
        <MyLink to={link} activeClassName="active">{value.name}</MyLink>
      </li>
    );
  });

  return (
    <ul className="nav-list">{list}</ul>
  );
};

const PopBtn = ({ toggleHandler }) => (
  <div className="pop-btn" onClick={ toggleHandler.bind(this) }>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default Nav;