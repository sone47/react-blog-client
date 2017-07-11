import React from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import submit from './submit';

import './style.css';

const renderField = ({ input, placeholder, maxLength, className }) => {
  // 文本框加入 required 也要求规定输入，但是兼容性不好
  return (
    input.name === 'content' ? 
    <textarea
      {...input}
      placeholder={placeholder}
      maxLength={maxLength}
      className={className}
    ></textarea> :
    <input
      {...input}
      placeholder={placeholder}
      maxLength={maxLength}
      className={className}
      type="text"
    />
  )
};

const MsgForm = ({ handleSubmit, reset, addMsg, error }) => (
  <div className="msg-item msg-form">
    <form onSubmit={handleSubmit(submit(addMsg, reset, error))}>
      <div className="msg-header">
        <Field
          name="name"
          placeholder="称呼"
          maxLength="10"
          className="name input"
          component={renderField}
        />
      </div>
      <Field
        name="content"
        placeholder="留言"
        className="content"
        component={renderField}
      />
      <div className="contact">
        <Field
          name="email"
          placeholder="邮箱（不会被公开）"
          maxLength="30"
          className="email input"
          component={renderField}
        />
        <Field
          name="website"
          placeholder="个人主页（可选）"
          maxLength="99"
          className="website input"
          component={renderField}
        />
      </div>
      <input type="submit" value="发表" className="publish input"/>
    </form>
  </div>
);

export default reduxForm({
  form: 'msg'
})(MsgForm);