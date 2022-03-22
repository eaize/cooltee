import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import Header2 from '../components/Header2'
function ShippingScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress, cartItems } = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }

    return (
        <div><Header2 />
        <div className="group-262">
      <h1 className="sale-of-the-summer-collection poppins-semi-bold-white-64px">
        Order your items
      </h1>
    </div>
        <FormContainer>

            <header className='tp'>
            <CheckoutSteps step1 step2 />
            </header>
            <div className='bodys'>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler} className='fro'>

                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter address'
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter city'
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter postal code'
                        value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter country'
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
            </div>
        </FormContainer>
        <div className='centr'></div>
        </div>
    )
}

export default ShippingScreen
