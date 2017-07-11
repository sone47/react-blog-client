import 'whatwg-fetch';
import config from '../../../config';
import { loginConstant } from '../constant';

const { LOGIN_SUCCESS, LOGIN_ERROR } = loginConstant;

export const loginSuccess = (name, token) => {
  sessionStorage.setItem('admin-token', token);

  return({
    type: LOGIN_SUCCESS,
    name
  });
};

export const loginFail = (error) => ({
  type: LOGIN_ERROR,
  error
});

export const logout = (fields) => dispatch => (
  fetch(config.api.login, {
    method: 'POST',
    body: JSON.stringify(fields)
  })
    .then(res => res.json())
    .then(res => {
      const { success, name, token } = res;
      if(success) {
        dispatch(loginSuccess(name, token));
      } else {
        dispatch(loginFail('登录失败'));
      }
    })
    .catch(err => dispatch(loginFail(err)))
);