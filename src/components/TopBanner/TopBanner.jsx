import React, { Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class TopBanner extends React.Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='topFixedBanner p-0'>
                    <div className="topBannerOverlay">
                        <Container className='topContent'>
                            <Row>
                                <Col className='text-center'>
                                    <h1 className='topTitle'>NOUS CONSTRUISONS VOTRE PRESENCE DANS LE METAVERS</h1>
                                    <h4 className='topSubTitle'>Learn Professionally</h4>
                                    <Button variant="primary">Learn More</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default TopBanner