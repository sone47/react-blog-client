import React, { Component } from 'react';
import { Alert } from 'antd';

import MsgItem from '../message-item';
import Loading from '../../Loading';

class MsgList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMsgs();
  }

  render() {
    let { messages, loading, error, deleteMsg } = this.props;

    let result = null,
        messageList = <ul>{
          Array.isArray(messages) && messages.map((message, i) => (
            <MsgItem
              {...message}
              key={i}
              deleteMsg={deleteMsg}
            />
          ))
        }
      </ul>;

    if(error) {
      result = <div>
        <Alert
          message="Error"
          description={error.toString()}
          type="error"
          showIcon
        />
        {messageList}
        </div>;
    } else {
      result = loading ?
        <Loading
          text='留言填充中...'
          size={30}
        /> : messageList;
        
    }

    return result;
  }
}

export default MsgList;