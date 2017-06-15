import 'whatwg-fetch';
import config from '../../../config';
import { ADD_MSGS_SUCCESS, ADD_MSGS_ERROR } from './constant';

export const addSuccess = (message) => ({
  type: ADD_MSGS_SUCCESS,
  message
});

export const addFail = (error) => ({
  type: ADD_MSGS_ERROR,
  error
});

export const addMsg = (fields) => dispatch => (
  fetch(config.api.message, {
    method: 'POST',
    body: JSON.stringify(fields)
  })
    .then(res => res.json())
    .then(res => {
      const { success } = res;
      if(success) {
        fields.createTime = Date.now();
        dispatch(addSuccess(fields));
      } else {
        dispatch(addFail('留言失败，请联系管理员'));
      }
    })
    .catch(err => dispatch(addFail(err)))
);