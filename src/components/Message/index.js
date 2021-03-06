import React from 'react';

import MsgForm from './message-form';
import MsgList from './message-list';
import Pagination from '../Pagination';

import './style.css';

const Message = ({ messages, total, msgActions, loading, error }) => (
  <div id="message">
    <h1>留言板</h1>
    <MsgForm
      addMsg={ msgActions.addMsg }
      error={error}
    />
    <MsgList
      messages={messages}
      loading={loading}
      error={error}
      {...msgActions}
    />
    {
      !loading && !error && <Pagination
        total={total}
        fetch={msgActions.fetchMsgs}
      />
    }
  </div>
);

export default Message;