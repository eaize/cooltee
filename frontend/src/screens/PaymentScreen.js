import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import Header2 from '../components/Header2'
function PaymentScreen({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
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
            <CheckoutSteps step1 step2 step3 />
            </header>
            <div className='bodys'>
            <Form onSubmit={submitHandler} className='frmp'>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>
                    </Col>
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

export default PaymentScreen
