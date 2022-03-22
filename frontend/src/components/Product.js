import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


function Product({ product, match }) {
    return (
        <Card className="stock-photo-confiden">
                <Card.Img src={product.image} className='group-396'/>
            <Card.Body>
                <div>
                    <Card.Title className='place poppins-light-black-16px'>
                    {product.name}
                    </Card.Title>
                    <div className='pr-btn'>
                <Card.Text>
                    ${product.price}
                </Card.Text>
                <Link to={`/cart/${product._id}`} className="group-446">
                <p className="add-to-cart poppins-normal-white-19px">ADD TO CART</p>
                </Link>
                </div>
                </div>
            </Card.Body>
        </Card> 
    )
}

export default Product
