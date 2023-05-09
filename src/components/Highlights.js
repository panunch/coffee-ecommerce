import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
        <Row className="my-3">
            <Col xs={12} md={4}>
                <Card.Title>
                    <h2 className="text-center">Brewing Equipment</h2>
                </Card.Title>
                <img src="https://www.comandantegrinder.com/images/2003---American-Cherry.jpg" alt="comandante c45" className="img-fluid"/>
            </Col>

            <Col xs={12} md={4}>
                <Card.Title>
                    <h2 className="text-center">Coffee Beans</h2>
                </Card.Title>
                <img src="https://cdn.shopify.com/s/files/1/0532/3289/4112/products/ethiopia2_720x.jpg?v=1679827939" alt="wide awake coffee" className="img-fluid"/>
            </Col>

            <Col xs={12} md={4}>
                <Card.Title>
                    <h2 className="text-center">Others</h2>
                </Card.Title>
                <img src="https://m.media-amazon.com/images/I/61Yuic2RojL.jpg" alt="bottomless portafilter" className="img-fluid"/>
            </Col>
            
        </Row>
    )
}
