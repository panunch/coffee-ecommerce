import Button from 'react-bootstrap/Button';
// Bootstrap grid system components
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Banner(){
	return(
			<Row>
	                	<Col>
		                    <h1>The One Stop Shop for your Caffeine Consumption!</h1>
		                    <p>We're nuts about coffee.</p>
		                    <button type="button" class="btn btn-info">Shop Now!</button>
		                </Col>
	                </Row>

		)
}