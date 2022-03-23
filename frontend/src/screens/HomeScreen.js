import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import Paginate2 from '../components/Paginate2'
import Paginate3 from '../components/Paginate3'
import { listProducts } from '../actions/productActions'
import Header from '../components/Header'

function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, product, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <div className='top'>
            <Header />
            </div>
            <Container className='cnt'>
            <div>
            {!keyword}
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className='pb'>
                        <h1 className='selected poppins-light-black-29px'>Selected just for you</h1>
                        <div className='group-396'>
                            <Row className="group-409">
                                {products.slice(0, 4).map((product) => (
                                    <Col key={product._id} sm={10} md={8} lg={6} xl={4}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate page={page} pages={pages} keyword={keyword} showPages={false} />

                        </div>
                    </div>}
            {!keyword}
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className='pb'>
                        <h1 className='selected poppins-light-black-29px'>Recommended Tees</h1>
                        <div className='group-396'>
                            <Row className="group-409">
                            {products.sort(({ _id: previousID }, { _id: currentID }) => previousID - currentID).slice(0, 4).map((product) => (
                                    <Col key={product.price} sm={10} md={8} lg={6} xl={4}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate2 page={page} pages={pages} keyword={keyword} showPages={false} />
                        </div>
                    </div>}
            {!keyword}
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className='pb'>
                        <h1 className='fav poppins-light-black-29px'>Favorite Tees</h1>
                        <div className='group-396'>
                            <Row className="group-409">
                                {products.slice(0, 4).map((product) => (
                                    <Col key={product._id} sm={10} md={8} lg={6} xl={4}>
                                        <Product product={product} />
                                    </Col>
                                ))}
                            </Row>
                            <Paginate3 page={page} pages={pages} keyword={keyword} />
                        </div>
                    </div>}
        </div>
        </Container>
    </div>
    )
}

export default HomeScreen
