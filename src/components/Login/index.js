import React from 'react';
import { Button, Input } from 'antd';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import Loading from '../Loading';
import submit from './submit';

import './style.css';

const renderField = ({ input, type, name, placeholder }) => {
  return (
    <Input
      {...input}
      type={type}
      name={name}
      size="large"
      placeholder={placeholder}/>
  )
};

const LoginForm = ({ handleSubmit, reset, loading, loginAction, error }) => (
  <div id="login">
    <h2 className="title">管理员登录 {
      loading ? <Loading />: null
    }</h2>
    <form onSubmit={handleSubmit(submit(loginAction, error))}>
      <Field
        type="text"
        name="username"
        placeholder="用户名"
        component={renderField}
      />
      <Field
        type="password"
        name="password"
        placeholder="密码"
        component={renderField}
      />
      <Button size="large" htmlType="submit">登录</Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'login'
})(LoginForm);