import { LOAD_MSGS, LOAD_MSGS_SUCCESS, LOAD_MSGS_ERROR, ADD_MSGS_SUCCESS, ADD_MSGS_ERROR } from '../actions/message/constant';

const initialState = {
  loading: true,
  error: false,
  messages: [],
  pageNum: 1
};

function article(state = initialState, action = {}) {
  switch(action.type) {
    case LOAD_MSGS: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case LOAD_MSGS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        messages: action.messages,
        total: action.total
      };
    }

    case LOAD_MSGS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case ADD_MSGS_SUCCESS: {
      return {
        ...state,
        messages: [action.message, ...state.messages],
        total: state.total + 1
      };
    }

    case ADD_MSGS_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export default article;