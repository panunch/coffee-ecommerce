import {Row, Col, Card} from 'react-bootstrap';

export default function Highlights(){
    return(
        <Row className="mt-3 mb-5">
            <Col xs={12} md={4}>
                <Card className="p-3">
                    <h3 className="text-center">Manual Brewing</h3>
                </Card>
                <img className="ccc-img" style={{ width: '400px', height: '400px'}} src="https://www.comandantegrinder.com/images/2003---American-Cherry.jpg" alt="comandante c45" className="img-fluid"/>
            </Col>

            <Col xs={12} md={4}>
                <Card className="p-3">
                    <h3 className="text-center">Coffee Beans</h3>
                </Card>
                <img className="ccc-img" style={{ width: '400px', height: '400px'}} src="https://cdn.shopify.com/s/files/1/0532/3289/4112/products/ethiopia2_720x.jpg?v=1679827939" alt="wide awake coffee" className="img-fluid"/>
            </Col>

            <Col xs={12} md={4}>
                <Card className="p-3">
                    <h3 className="text-center">Espresso</h3>
                </Card>
                <img className="ccc-img" style={{ width: '400px', height: '400px'}} src="https://cdn.shopify.com/s/files/1/0002/8055/9622/products/Gaggia-classic-pro-canada-sale_408dd830-b00f-42cb-bc31-f3d1d43876e6_1500x1500.jpg?v=1604692416" alt="gaggia classic" className="img-fluid"/>
            </Col>
            
        </Row>
    )
}
