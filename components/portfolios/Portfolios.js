import { useEffect, useState } from 'react';
import { urlFor } from 'lib/api';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { getTranslation } from 'context/Translate';


export const Portfolios = ({portfolios, sectionDescription, language, mode}) => {
 
    const [directions, setDirections] = useState(["left", "top", "right"]);
    const [classLowWidth, setClassLowWidth] = useState(false);
    const portfoliosDescription = sectionDescription.filter(item => item.name === 'Portfolios')[0];

    //let directions = ["left", "top", "right"];
    let count = 0;

    useEffect(() => {

        if (window.innerWidth < 350) {
            setClassLowWidth(true);
            setDirections(["top", "top", "top"]);
        } else if (window.innerWidth < 768) {
            setDirections(["top", "top", "top"]);
        }

    }, [])


    const renderPortfolios = () => {

        return portfolios.map((portfolio, index) => {

            if (count > 2) {
                count = 0;
            }
            
            const direction = directions[count];
            count++;

            return (
                <Col key={portfolio.slug} md="6" lg="4"> 
                    <Fade direction={direction} triggerOnce>
                        <Card className={`md-card ${mode}`}>
                            <div className={` ${classLowWidth} ? card-body-wrapper-low-width : card-body-wrapper`}>
                                <Card.Header className="d-flex flex-row">
                                    <Card.Img
                                        src={
                                            urlFor(portfolio.logo.logoImage).url()
                                        }
                                    />
                                    <div>
                                        <Card.Title className="font-weight-bold mb-1">{portfolio.logo.name}</Card.Title>
                                        <Card.Text className="card-text-title">{portfolio.title[language.toLowerCase()]}</Card.Text>
                                    </div>
                                    
                                </Card.Header>
                                <div style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}> 
                                <div className="view overlay text-center">
                                    <Card.Img
                                            src={
                                                urlFor(portfolio.coverImage)
                                                .url()
                                            }
                                            alt="Card image cap"
                                            height="250"
                                    />
                                </div>
                                </div>
                                <Card.Body>
                                    <Card.Text className="card-text-subtitle">{portfolio.subTitle[language.toLowerCase()]}</Card.Text>
                                </Card.Body>
                            </div>
                            <Link href="#" >
                                <a className="card-button" style={{textDecoration: 'none', color: 'white'}}>
                                    {getTranslation('readMore', language)}
                                </a>
                            </Link>
                        </Card> 
                    </Fade>
                </Col> 
                
                )
            }                   
        
        )
    }

    return (
        <div>
            <div style={{position: "relative", top: "-70px", visibility: "hidden"}} id="portfolios">


            </div>
            <div className="portfolios-title">
                {getTranslation('portfolios', language)} {'-----'} 
                <br/>
                <div className="portfolios-title-number">
                    {portfolios.length} {' '} {getTranslation('projects', language)}
                </div>
            </div>
            <div className="section-description">
                {portfoliosDescription.description[language.toLowerCase()]} 
            </div>
            <Row>
                {renderPortfolios()}
            </Row>
        </div>
    )
}
