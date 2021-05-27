import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../Redux/actions/auth'

function Login({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }

  return (
    <div className='auth'>
      <Helmet>
        <title>Real Estate - Login</title>
        <meta name='description' content='login page' />
      </Helmet>
      <h1 className='auth__title'>Login</h1>
      <p className='auth__lead'>Login into your Account</p>
      <form className='auth__form' onSubmit={(e) => onSubmit(e)}>
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
        <button className='auth__form__button'>Login</button>
      </form>
      <p className='auth__authtext'>
        Don't have an account ?{' '}
        <Link className='auth_authtext_link' to='/register'>
          Register
        </Link>
      </p>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
