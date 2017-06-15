import React, { Component } from 'react';

import MsgItem from '../message-item';
import Loading from '../../Loading';

import './style.css';

class MsgList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMsgs();
  }

  render() {
    let { messages, loading, error } = this.props;

    let result = null;

    if(error) {
      result = <p>{`[ERROR] ${error}`}</p>;
    } else {
      result = loading ?
        <Loading/> :
        <ul>
          {
            Array.isArray(messages) && messages.map((message, i) => (
              <MsgItem
                {...message}
                key={i}
              />
            ))
          }
        </ul>
    }

    return result;
  }
}

export default MsgList;