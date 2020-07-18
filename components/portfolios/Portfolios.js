import { useEffect, useState } from 'react';
import { urlFor } from 'lib/api';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';


export const Portfolios = ({portfolios, language, mode}) => {
 
    const [directions, setDirections] = useState(["left", "top", "right"])

    //let directions = ["left", "top", "right"];
    let count = 0;

    useEffect(() => {

        console.log(window)
        if (window.innerWidth < 400) {
            setDirections(["top", "top", "top"]);
           // directions = ["top", "top", "top"];
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
                            <div className='card-body-wrapper'>   
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
                                    />
                                </div>
                                </div>
                                <Card.Body>
                                    <Card.Text className="card-text-subtitle">{portfolio.subTitle[language.toLowerCase()]}</Card.Text>
                                </Card.Body>
                            </div>
                            <Link href="#" >
                                <a className="card-button" style={{textDecoration: 'none', color: 'white'}}>
                                    Read More
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
            <Row>
                {renderPortfolios()}
            </Row>
        </div>
    )
}
