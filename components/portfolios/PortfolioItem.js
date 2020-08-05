import { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { getTranslation } from 'context/Translate';
import { urlFor } from 'lib/api';
import InViewport from '../InViewport';

const renderLogos = logos => {

    return logos.map(logo => 
            <Card.Img
                key={logo.name}
                className="ml-1"
                src={
                    urlFor(logo.logoImage).url()
                }
            />
    )
}

const PortfolioItem = ({language, direction, mode, classLowWidth, link, logos, name, title, subTitle, coverImage}) => {
    
    // const myRef = React.createRef();
    // let observer = undefined; 

    // useEffect(() => {

    //     observer = new IntersectionObserver(
    //         ([entry]) => {
    //             console.log("In entry.intersectionRatio = ", entry.intersectionRatio)
    //             if (entry.intersectionRatio > 0) {
    //                 console.log("In Viewport = ")
    //                 myRef.current.style.opacity = "100%";
    //             }
    //         }
    //     );

    //     if (myRef.current) {
    //         observer.observe(myRef.current);
    //     }

    // }, []);
    
    
    return (
    
    <Col key={name} md="6" lg="4"> 
        <Fade direction={direction} triggerOnce >
            <Card className={`md-card ${mode}`}>
                <InViewport>
                <div className={` ${classLowWidth} ? card-body-wrapper-low-width : card-body-wrapper`} >
                    <Card.Header className="d-flex flex-row">

                        {renderLogos(logos, link)}

                        <div>
                            <Card.Title className="font-weight-bold mb-1">{logos[0].name}</Card.Title>
                            <Card.Text className="card-text-title">{title[language.toLowerCase()]}</Card.Text>
                        </div>
                        
                    </Card.Header>
                    <div style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}> 
                    <div className="view overlay text-center">
                        <Link {...link}>   
                            <Card.Img
                                    src={
                                        urlFor(coverImage)
                                        .url()
                                    }
                                    alt="Card image cap"
                                    height="250"
                            />
                        </Link>
                    </div>
                    </div>
                    <Card.Body>
                        <Card.Text className="card-text-subtitle">{subTitle[language.toLowerCase()]}</Card.Text>
                    </Card.Body>
                </div>
                </InViewport>

                {

                    link &&

                    <Link {...link} >
                        <a className="card-button" style={{textDecoration: 'none', color: 'white'}}>
                            {getTranslation('readMore', language)}
                        </a>
                    </Link>

                }
            </Card> 
        </Fade>
    </Col> 
    )
}

export default PortfolioItem;
