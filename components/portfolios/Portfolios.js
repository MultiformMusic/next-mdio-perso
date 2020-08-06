import { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import SectionHeader from 'components/SectionHeader';
import { useGetPortfoliosPages } from '../../actions/pagination';
import { getTranslation } from 'context/Translate';


export const Portfolios = ({portfolios, countPortfolios, sectionDescription, language, mode}) => {
 
    //const [directions, setDirections] = useState(["left", "top", "left"]);
    const [directions, setDirections] = useState(["top", "top", "top"]);
    const [classLowWidth, setClassLowWidth] = useState(false);
    const portfoliosDescription = sectionDescription.filter(item => item.name === 'Portfolios')[0];

    useEffect(() => {

        if (window.innerWidth < 350) {
            setClassLowWidth(true);
            setDirections(["top", "top", "top"]);
        } else if (window.innerWidth < 768) {
            setDirections(["top", "top", "top"]);
        }

    }, [])

    const {pages, isLoadingMore, isReachingEnd, loadMore} = useGetPortfoliosPages({portfolios, directions, classLowWidth, mode});

    return (
        <section>

            {/* {JSON.stringify(portfolios)} */}

            <SectionHeader 
                title="portfolios" 
                subtitle="projects" 
                numberItem={countPortfolios} 
                description={portfoliosDescription.description[language.toLowerCase()]} 
                language={language}
            />
            
            <Row>
                {pages}
            </Row>
            
            <div style={{textAlign: 'center', marginTop: '2.5rem'}}>
                { pages.length * 6 < countPortfolios &&
                
                
                <Button onClick={loadMore} disabled={isReachingEnd || isLoadingMore} variant="outline-secondary" size="lg">
                    { 
                    
                        isLoadingMore ? '...' : getTranslation('loadMore', language)
                    }
                    
                </Button>
                
                }
            </div>

        </section>
    )
}
