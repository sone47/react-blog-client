import 'whatwg-fetch';
import config from '../../../config';
import { messageConstant } from '../constant';

const { DELETE_MSG_SUCCESS, DELETE_MSG_ERROR } = messageConstant;

export const deleteSuccess = (id) => ({
  type: DELETE_MSG_SUCCESS,
  id
});

export const deleteFail = (error) => ({
  type: DELETE_MSG_ERROR,
  error
});

export const deleteMsg = (id) => dispatch => (
  fetch(`${config.api.message}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('admin-token')}`
    }
  })
    .then(res => {
      if(res.status === 401) {
        return res.text();
      } else {
        return res.json();
      }
    })
    .then(res => {
      const { success } = res;
      if(success) {
        dispatch(deleteSuccess(id));
      } else {
        dispatch(deleteFail(res));
      }
    })
    .catch(err => dispatch(deleteFail(err)))
);