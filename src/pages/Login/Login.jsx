import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Auth/firebase.init'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const navigate = useNavigate()
  
  //?signup er error dey..but ekhane error dey na
  if (user) {
    navigate('/store')
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    signInWithEmailAndPassword(email, password)
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
