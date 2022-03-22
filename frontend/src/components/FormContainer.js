import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../box.css'


function FormContainer({ children }) {
    return (
        <Container className='create'>
            <Row className="justify-content-md-center group-394" >
                <Col xs={12} md={6} className='formc'>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
