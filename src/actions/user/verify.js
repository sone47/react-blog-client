import 'whatwg-fetch';
import { message } from 'antd';
import config from '../../../config';
import { loginConstant } from '../constant';

message.config({ top: 80 });

const { VERIFY, VERIFY_SUCCESS, VERIFY_ERROR } = loginConstant;

export const startVerify = () => ({
  type: VERIFY
});

export const verifySuccess = (isAdmin) => ({
  type: VERIFY_SUCCESS,
  isAdmin
});

export const verifyFail = (error) => {
  message.error(error.toString());
  return {
    type: VERIFY_ERROR,
    error
  };
};

export const verify = (fields) => dispatch => {
  dispatch(startVerify);

  return fetch(config.api.verify, {
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
      const { success, isAdmin } = res;
      if(success) {
        dispatch(verifySuccess(isAdmin));
      } else {
        dispatch(verifyFail(res));
      }
    })
    .catch(err => dispatch(verifyFail(err)));
};