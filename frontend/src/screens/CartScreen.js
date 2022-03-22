import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Header2 from '../components/Header2'
import { updateProduct } from '../actions/productActions'
function CartScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    const home = () => {
        history.push('/')
    }

    return (
<div>
    <Header2 />
    <div className="rectangle-381"></div>
        <Row className='row3'>
            <Col md={8}>
            <div className="shopping-cart poppins-semi-bold-black-20px">
                Shopping Cart
                </div>

                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                        <ListGroup>
                            <div className='label1'>
                            <div className="poppins-normal-silver-14px">Product</div>
                            <div className="poppins-normal-silver-14px">Size</div>
                            <div className="poppins-normal-silver-14px">Amount</div>
                            <div className="poppins-normal-silver-14px">Price</div>
                            </div>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product} className='fl'>
                                    <Row className='row2'>
                                        <Col md={2} className='overlap-group8'>
                                            <Image src={item.image} alt={item.name} fluid rounded className='imgm2'/>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`} className='galaxy poppins-semi-bold-black-16px'>{item.name}</Link>
                                        </Col>
                                        <Col md={3} className='size'>
                                            <Form.Control
                                                as="select"
                                                value={item.brand}
                                                onChange={(e) => dispatch(updateProduct(item.product, String (e.target.value)))}
                                            >
                                                {
                                                        <option key={'xxl'} value={'xxl'}>
                                                            {'xxl'}
                                                        </option>
                                                }
                                                {
                                                        <option key={'xl'} value={'xl'}>
                                                            {'xl'}
                                                        </option>
                                                }
                                                {
                                                        <option key={'L'} value={'L'}>
                                                            {'L'}
                                                        </option>
                                                }
                                                {
                                                        <option key={'M'} value={'M'}>
                                                            {'M'}
                                                        </option>
                                                }
                                                {
                                                        <option key={'S'} value={'S'}>
                                                            {'S'}
                                                        </option>
                                                }
                                            </Form.Control>
                                        </Col>
                                        <Col md={3} className='ammount'>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {

                                                    [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }

                                            </Form.Control>
                                        </Col>

                                        <Col md={2} className='surname poppins-semi-bold-black-16px'>
                                            ${item.price}
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                            
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>
            </Row>
            <div className="rectangle-380"></div>
            <Row className='row1'>
                    <h2 className='total-cost poppins-semi-bold-black-16px'>Total Cost</h2>

                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}

                    <Button
                            type='button'
                            className='border-1px-iron continue-shopping'
                            disabled={cartItems.length === 0}
                            onClick={home}
                        >
                            <p className='continue-shopping-1 poppins-semi-bold-black-13px'>Continue Shopping</p>
                        </Button>

                        <Button
                            type='button'
                            className='next-step'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                           <p className="next-step-1 poppins-semi-bold-white-13px">Next Step</p>
                        </Button>
                    
                    </Row>
        </div>
    )
}

export default CartScreen