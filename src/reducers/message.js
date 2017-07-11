import { messageConstant } from '../actions/constant';

const {
  LOAD_MSGS,
  LOAD_MSGS_SUCCESS,
  LOAD_MSGS_ERROR,
  ADD_MSGS_SUCCESS,
  ADD_MSGS_ERROR,
  DELETE_MSG_SUCCESS,
  DELETE_MSG_ERROR
} = messageConstant;

const initialState = {
  loading: true,
  error: false,
  messages: [],
  total: 0
};

function message(state = initialState, action = {}) {
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

    case DELETE_MSG_SUCCESS: {
      const id = action.id,
            messages = state.messages,
            length = messages.length;
      // remove assigned id message
      for(let i = 0; i < length; i++) {
        let message = messages[i];
        if(message._id === id) {
          messages.splice(i, 1);
          break;
        }
      }

      return {
        ...state,
        total: state.total - 1,
        messages
      };
    }

    case DELETE_MSG_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export default message;