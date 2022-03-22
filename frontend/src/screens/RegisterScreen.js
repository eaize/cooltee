import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import Header from '../components/Header'

function RegisterScreen({ location, history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(register(name, email, password))
        }

    return (
        <div className='top'>
        <div className='boxe'>
            <Header />
        <div className='boxed'>
        <div className='group-424'>
        <div className="create-account">
        <div className="create-an-account-an poppins-semi-bold-black-20px">
          Create an account and <br />
          discover the benefits
        </div>
        <p className="lorem-ipsum-is-simpl poppins-normal-concord-13px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy
          text ever since the 1500s
        </p>
        <FormContainer >
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} className='for'>

                <Form.Group controlId='name' className='e-mail-1 border-1px-iron email poppins-normal-gray-13px'>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className="e-mail-1 border-1px-iron email poppins-normal-gray-13px">
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password' className="e-mail-1 border-1px-iron email poppins-normal-gray-13px">
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <div className='goo'>
                <input className="rectangle-572 border-1px-iron"
                    type="checkbox" required/>
                    <p className="i-agree-to-the-googl">
                    I agree to the Google Terms of Service and<br />Privacy Policy
                    </p>
                </div>
                <div className="keep-me-signed-in poppins-normal-black-13px">
                <Button type='submit' variant='primary' className='sign-in'>
                    Register
                </Button>
                </div> 
            </Form>

            <Row className='py-3'>
                <Col className='colo'>
                <p className="are-you-already-a-member poppins-normal-black-13px">
      Are you already a member?
    </p><Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
        </FormContainer >
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default RegisterScreen
