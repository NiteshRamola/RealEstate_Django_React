import axios from 'axios'
import { setAlert } from './alert'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../constants/constants'

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post(
      'http://localhost:8000/api/token/',
      body,
      config
    )

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(setAlert('Authenticated succesfully', 'success'))
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    })

    dispatch(setAlert('Error Authenticating'), 'error')
  }
}

export const register =
  ({ name, email, password, password2 }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ name, email, password, password2 })

    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/accounts/signup/',
        body,
        config
      )

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })

      dispatch(login(email, password))
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
      })

      dispatch(setAlert('Error Authenticating'), 'error')
    }
  }

export const logout = () => (dispatch) => {
  dispatch(setAlert('Logout succesfully', 'success'))
  dispatch({ type: LOGOUT })
}
