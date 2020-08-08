import { useEffect, useState } from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import SectionHeader from 'components/SectionHeader';
import { useGetPortfoliosPages } from '../../actions/pagination';
import { getTranslation } from 'context/Translate';


export const Portfolios = ({portfolios, countPortfolios, sectionDescription, language, mode}) => {
 
    //const [directions, setDirections] = useState(["left", "top", "left"]);
    const [directions, setDirections] = useState(["top", "top", "top"]);
    const [isLoading, setIsLoading] = useState(false);
    const [oldPagesLength, setOldPagesLength] = useState(0);

    const portfoliosDescription = sectionDescription.filter(item => item.name === 'Portfolios')[0];
    const {pages, isLoadingMore, isReachingEnd, loadMore} = useGetPortfoliosPages({portfolios, directions, mode});

    if (oldPagesLength === 0) setOldPagesLength(pages.length);

    useEffect(() => {


        if (oldPagesLength != pages.length) {
            setTimeout(() => {
                setOldPagesLength(pages.length);
                setIsLoading(false);

            }, 1000)
        }

        // if (window.innerWidth < 350) {
        //     setClassLowWidth(true);
        //     setDirections(["top", "top", "top"]);
        // } else if (window.innerWidth < 768) {
        //     setDirections(["top", "top", "top"]);
        // }

    }, [pages])


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
                { isLoading && 
                    <div style={{textAlign: 'center', marginBottom: '15px'}}>
                        <Spinner animation="grow"  /> 
                    </div>
                    
                }
                <div className="section-description">{pages.length * 6 < countPortfolios ? (pages.length * 6) + ' / ' +  countPortfolios : countPortfolios + ' / ' + countPortfolios}</div>
                { pages.length * 6 < countPortfolios &&
                
                
                    <Button onClick={() => {setIsLoading(true); loadMore()}} disabled={isReachingEnd || isLoadingMore} variant="outline-secondary" size="lg">
                        { 
                        
                            isLoadingMore ? '...' : getTranslation('loadMore', language)
                        }
                        
                    </Button>
                
                }
            </div>

        </section>
    )
}
