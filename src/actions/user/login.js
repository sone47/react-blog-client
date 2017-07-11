import 'whatwg-fetch';
import { message } from 'antd';
import config from '../../../config';
import { loginConstant } from '../constant';

message.config({ top: 80 });

const { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } = loginConstant;

export const startLogin = () => ({
  type: LOGIN
});

export const loginSuccess = (name, token) => {
  sessionStorage.setItem('admin-token', token);
  message.success('登录成功');

  return({
    type: LOGIN_SUCCESS,
    name,
    token
  });
};

export const loginFail = (error) => {
  message.error(error.toString());
  return {
    type: LOGIN_ERROR,
    error
  };
};

export const login = (fields) => dispatch => {
  dispatch(startLogin);

  return fetch(config.api.login, {
    method: 'POST',
    body: JSON.stringify(fields)
  })
    .then(res => {
      if(res.status === 401) {
        return res.text();
      } else {
        return res.json();
      }
    })
    .then(res => {
      const { success, name, token } = res;
      if(success) {
        dispatch(loginSuccess(name, token));
      } else {
        dispatch(loginFail(res));
      }
    })
    .catch(err => dispatch(loginFail(err)))
};