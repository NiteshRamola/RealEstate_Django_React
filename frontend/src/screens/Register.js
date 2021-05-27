import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { setAlert } from '../Redux/actions/alert'
import PropTypes from 'prop-types'
import { register } from '../Redux/actions/auth'

function Register({ setAlert, register, isAuthenticated }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      setAlert('Password do not match', 'error')
    } else {
      register({ name, email, password, password2 })
    }
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='auth'>
      <Helmet>
        <title>Real Estate - SignUp</title>
        <meta name='description' content='Sign Up page' />
      </Helmet>
      <h1 className='auth__title'>Sign Up</h1>
      <p className='auth__lead'>Create your Account</p>
      <form className='auth__form' onSubmit={(e) => onSubmit(e)}>
        <div className='auth__form__group'>
          <input
            required
            className='auth__form__input'
            type='name'
            placeholder='Enter your name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='auth__form__group'>
          <input
            required
            className='auth__form__input'
            type='email'
            placeholder='Enter your email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='auth__form__group'>
          <input
            required
            minLength='6'
            className='auth__form__input'
            type='password'
            placeholder='Enter your password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='auth__form__group'>
          <input
            required
            minLength='6'
            className='auth__form__input'
            type='password'
            placeholder='Re-Enter your password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className='auth__form__button'>Sign Up</button>
      </form>
      <p className='auth__authtext'>
        Already have an account ?{' '}
        <Link className='auth_authtext_link' to='/login'>
          Login
        </Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { register, setAlert })(Register)
