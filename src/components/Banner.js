// import Button from 'react-bootstrap/Button';
// // Bootstrap grid system components
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';

import { Button, Row, Col} from 'react-bootstrap';

export default function Banner(){
	return(
			<Row>
	                	<Col>
		                    <h1>The Weird Coffee Person Consortium</h1>
		                    <p>We're nuts about coffee.</p>
		                    <Button variant="primary">Shop Now!</Button>
		                </Col>
	                </Row>

		)
}