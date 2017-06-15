import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class MsgItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    website: PropTypes.string,
    createTime: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    let { name, website, createTime, content } = this.props;

    createTime = new Date(createTime);
    website = website ? <a href={ `http://${website}` } target="_blank">{ name }</a> : name;

    return (
      <li className="msg-item">
        <div className="msg-header">
          <p className="name">{ website }</p>
          <span className="time">
            {`${createTime.getFullYear()} 年 ${createTime.getMonth()+1} 月 ${createTime.getDate()} 日 ${('0'+createTime.getHours()).slice(-2)}:${('0'+createTime.getMinutes()).slice(-2)}:${('0'+createTime.getSeconds()).slice(-2)}`}
          </span>
        </div>
        <div className="content">{ content }</div>
      </li>
    );
  }
}

export default MsgItem;