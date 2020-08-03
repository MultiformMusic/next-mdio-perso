import { useEffect, useState} from 'react';
import AuthorContent from "./AuthorContent";
import { Row, Col, Media } from "react-bootstrap";

const AuthorPresentation = ({authorData, language}) => {

    //console.log("********************* ", authorData);

    const [mobileScreen, setMobileScreen] = useState(false);

    const content = language == 'Fr' ? authorData.authorContentFr : authorData.authorContentEn;

    useEffect(() => {

        const mobile = window.innerWidth < 450 ? true : false;
        setMobileScreen(mobile);

    }, []);

    return (
        <section>
            <Row className="justify-content-center">
                <Col md="9" lg="10">
                
                <Media className="mb-4 admin-intro">
                    <Media.Body>
                        <div  className="author-presentation">
                            <AuthorContent content={content} mobileScreen={mobileScreen}/>
                        </div>
                    </Media.Body>
                </Media>
                
                </Col>
            </Row>
        </section>
    )
}

export default AuthorPresentation;