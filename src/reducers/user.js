import config from '../../config';
import { loginConstant } from '../actions/constant';

const {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  VERIFY,
  VERIFY_SUCCESS,
  VERIFY_ERROR
} = loginConstant;

const initialState = {
  isAdmin: false,
  name: '',
  error: false,
  token: '',
  loading: false
};

function user(state = initialState, action = {}) {
  switch(action.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.name,
        token: sessionStorage.getItem('admin-token'),
        isAdmin: action.isAdmin,
        loading: false,
        error: false
      };
    }

    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    case VERIFY: {
      return {
        ...state,
        error: false
      };
    }

    case VERIFY_SUCCESS: {
      return {
        ...state,
        token: sessionStorage.getItem('admin-token'),
        isAdmin: action.isAdmin,
        error: false
      };
    }

    case VERIFY_ERROR: {
      return {
        ...state,
        error: action.error
      };
    }

    default:
      return state;
  }
}

export default user;