import AuthorContent from "./AuthorContent";
import { Row, Col, Media } from "react-bootstrap";

const AuthorPresentation = ({authorData, language}) => {

    //console.log("********************* ", authorData);

    const content = language == 'Fr' ? authorData.authorContentFr : authorData.authorContentEn

    return (
        <Row className="justify-content-center">
            <Col md="9" lg="10">
            
            <Media className="mb-4 admin-intro">
                <Media.Body>
                    <div  className="author-presentation">
                        <AuthorContent content={content}/>
                    </div>
                </Media.Body>
            </Media>
            
            </Col>
        </Row>
    )
}

export default AuthorPresentation;