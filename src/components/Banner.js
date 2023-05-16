import { Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({data}){
	const {title, destination, label } = data;
	return(
			<Row className="p-2 justify-content-center">
            	<Col className="p-5 justify-content-center">
                    <h1>{title}</h1>
                    <button type="button" class="btn btn-info">Shop Now!</button>
                </Col>
            </Row>

		)
}