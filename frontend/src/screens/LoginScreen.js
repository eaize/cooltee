import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Header from '../components/Header'

  
function LoginScreen({ location, history }) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className='top'>
            <Header />
        <div className='boxe'>
            <div className='wht'>
            
        <FormContainer>
            <h1 className='login'>Log in</h1>
            <p>
      Lorem Ipsum is simply dummy text of the printing <br />
      and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s
    </p>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Control className='e-mail-1 border-1px-iron email poppins-normal-gray-13px'
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password'>
                    <Form.Control className="e-mail-1 border-1px-iron email poppins-normal-gray-13px"
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                    <div className='cent'>
                    <div className="keep-me-signed-in poppins-normal-black-13px">
                    <input className="rectangle-572 border-1px-iron"
                    type="checkbox"/>
                    <p className='pk'>   Keep me signed in </p>
                    </div>
                    <div className="forgot-password poppins-normal-gray-13px">
                    Forgot password?
                </div>
                </div>
                <Button type='submit' variant='primary' className="sign-in">
                <div className="sign-in-1 poppins-semi-bold-white-13px">Sign in</div>
                </Button>
            </Form>

            <Row className='py-3'>
                <Col className='pss colo poppins-normal-gray-13px'>
                <div className="not-a-member-yet poppins-normal-black-13px">
                    Not a member yet?
                    </div> <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>
                </Col>
            </Row>

        </FormContainer>
        </div>
        </div>
        </div>
    )
}

export default LoginScreen;

