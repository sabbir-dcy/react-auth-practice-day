import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../Auth/firebase.init'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const navigate = useNavigate()
  const location = useLocation()

  /**
 * *dont need this beacuse we using redirect to path after login
 *    useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [navigate, user]) */

  // if (loading) {
  //   return <h3>loading please wait...</h3>
  // }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    const from = location.state?.from?.pathname || '/'
    signInWithEmailAndPassword(email, password).then(() => {
      navigate(from, { replace: true })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h2 className='text-center'>Have an account</h2>
      <Form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onBlur={handleEmailBlur}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='text'
            placeholder='Password'
            onBlur={handlePasswordBlur}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Agree to terms and conditions' />
        </Form.Group>
        <div className='d-flex flex-column gap-2'>
          <Button variant='dark' type='submit' onClick={handleLogin}>
            login
          </Button>
          {/* <Button variant='primary' type='submit' onClick={handleSignWithGoogle}>
            sign with google
          </Button> */}
        </div>
        <Link to='/signup'>dont have account?</Link>
      </Form>
    </>
  )
}

export default Login
