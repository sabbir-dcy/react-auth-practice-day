import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Auth/firebase.init'

const SignIn = () => {
  // const [signInWithGoogle, user] = useSignInWithGoogle(auth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const navigate = useNavigate()

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  //*handleres
  if (error) {
    console.log(error.message)
  }

  /**
   *! ekhane use effect na dile error throw kore
   * use effect ei duita depandancy chay
   */
  useEffect(() => {
    if (user) {
      navigate('/store')
    }
  }, [navigate, user])

  const handleSignWithGoogle = () => {
    // signInWithGoogle()
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordBlur = (e) => {
    setConfirmPass(e.target.value)
  }

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(email, password)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h2 className='text-center'>Create an account</h2>
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
        <Form.Group className='mb-3' controlId='formConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='text'
            placeholder='confirm password'
            onBlur={handleConfirmPasswordBlur}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Agree to terms and conditions' />
        </Form.Group>
        <div className='d-flex flex-column gap-2'>
          <Button variant='dark' type='submit' onClick={handleCreateAccount}>
            signup
          </Button>
          <Button
            variant='primary'
            type='submit'
            onClick={handleSignWithGoogle}
          >
            sign with google
          </Button>
          <Link to='/login'>Already have an account?</Link>
        </div>
      </Form>
    </>
  )
}

export default SignIn
