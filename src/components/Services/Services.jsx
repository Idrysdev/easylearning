import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import desgnIcon from '../../assets/images/design.png';
import ecommerceIcon from '../../assets/images/ecommerce.png';
import WebIcon from '../../assets/images/web.png';


class Services extends React.Component {
    render() {
        return (
            <>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>MY SERVICES</h1>
                    <div className='bottom'></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img className='ecommerceIcon' src={ecommerceIcon} alt="" />
                                <h2 className='serviceName'>Ecommerce</h2>
                                <p className='serviceDescription'>I will design and develop ecommerce online store website.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img className='desgnIcon' src={desgnIcon} alt="" />
                            <h2 className='serviceName' >Web Design</h2>
                            <p className='serviceDescription'>Qualified web design and attractive effects whitch catches visitor's Eye.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className='serviceCard text-center'>
                            <img className='webIcon' src={WebIcon} alt="" />
                            <h2 className='serviceName' >Web Development</h2>
                            <p className='serviceDescription'>Clean and fresh isse code to make your website dynamic perfectly.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Services