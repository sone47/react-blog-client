import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
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

    website = website ? <a href={ `http://${website}` } target="_blank">{ name }</a> : name;

    // 将时间设置为当前中国时间
    moment.locale('zh-cn');
    const boundary = moment().subtract(1, 'd');
    createTime = moment(createTime);

    createTime = createTime.isBefore(boundary) ? createTime.format('llll') : createTime.fromNow();

    return (
      <li className="msg-item">
        <div className="msg-header">
          <p className="name">{ website }</p>
          <span className="time">
            { createTime }
          </span>
        </div>
        <div className="content">{ content }</div>
      </li>
    );
  }
}

export default MsgItem;