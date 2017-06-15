import 'whatwg-fetch';
import config from '../../../config';
import serialize from '../../common/serialize';
import { LOAD_MSGS, LOAD_MSGS_SUCCESS, LOAD_MSGS_ERROR } from './constant';

export const loadMsgs = () => ({
  type: LOAD_MSGS
});

export const receiveMsgs = (messages, totalMsg) => ({
  type: LOAD_MSGS_SUCCESS,
  messages,
  total: totalMsg
});

export const missMsgs = (error) => ({
  type: LOAD_MSGS_ERROR,
  error
});

export const fetchMsgs = (page, pageSize) => dispatch => {
  dispatch(loadMsgs());

  let url = serialize(config.api.message, {
    page,
    pageSize
  });

  return fetch(url)
    .then(res => res.json())
    .then(res => {
      const { success, messages, totalMsg } = res;

      if(success) {
        dispatch(receiveMsgs(messages, totalMsg));
      } else {
        dispatch(missMsgs('留言加载失败，请联系管理员'));
      }
    })
    .catch(err => dispatch(missMsgs(err)));
};