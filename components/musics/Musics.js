import SectionHeader from "components/SectionHeader";
import { Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { useState, useEffect } from 'react';
import InViewport from "components/InViewport";

const renderLink = link => {

    return {__html: link};

}

const Musics = ({musics, sectionDescription, language}) => {

    const [showList, setShowList] = useState(true);

    useEffect(() => {

        if (window.innerWidth < 400) {
            setShowList(false);
            const el = document.getElementsByClassName("sc-background-orange");
            console.log("EL = ", el)
        } else {
            setShowList(true);
        }

    }, [])

    const musicDescription = sectionDescription.filter(item => item.name === 'Musics')[0];

    return (

        <section>

            <div className="background-music mt-5" style={{width: '100vw'}}> 
                <div className="container">

                    {/* {JSON.stringify(musics)} */}

                    <SectionHeader 
                        title="musics" 
                        subtitle="musics" 
                        numberItem={musics.length} 
                        description={musicDescription.description[language.toLowerCase()]} 
                        language={language}
                    />

                    <InViewport>
                    <Row>
                        {
                            musics.map(music => {

                                return (
                            
                                    <Col key={music.name} className="music-content mt-4" md="12" lg="6"> 
                                        <Fade direction="top" duration="1500" triggerOnce>
                                            <div className="musics" dangerouslySetInnerHTML={renderLink(showList ? music.linkList : music.linkBlock)} />
                                            <div className="musics">{music.name}</div>
                                        </Fade>
                                    </Col>
                            
                                
                                )
                            })
                        }
                    </Row>
                    </InViewport>
                </div>
            </div>
        </section>
    )
}

export default Musics;
