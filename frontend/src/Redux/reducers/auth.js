import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/constants'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.access)
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        token: payload.access,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      }

    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      }

    default:
      return state
  }
}
