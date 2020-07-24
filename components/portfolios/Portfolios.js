import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SectionHeader from 'components/SectionHeader';
import PortfolioItem from 'components/portfolios/PortfolioItem';


export const Portfolios = ({portfolios, sectionDescription, language, mode}) => {
 
    const [directions, setDirections] = useState(["left", "top", "right"]);
    const [classLowWidth, setClassLowWidth] = useState(false);
    const portfoliosDescription = sectionDescription.filter(item => item.name === 'Portfolios')[0];

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

                    <PortfolioItem 
                        key={portfolio.slug}
                        direction={direction} 
                        language={language} 
                        mode={mode}
                        classLowWidth={classLowWidth}
                        slug={portfolio.slug}
                        logos={portfolio.logos}
                        name={portfolio.name}
                        title={portfolio.title}
                        subTitle={portfolio.subTitle}
                        coverImage={portfolio.coverImage}
                        link={{
                            href: '/portfolios/[slug]',
                            as: `/portfolios/${portfolio.slug}`
                        }}
                    />
                
                )
            }                   
        
        )
    }

    return (
        <div>

            {/* {JSON.stringify(portfolios)} */}

            <SectionHeader 
                title="portfolios" 
                subtitle="projects" 
                numberItem={portfolios.length} 
                description={portfoliosDescription.description[language.toLowerCase()]} 
                language={language}
            />
            
            <Row>
                {renderPortfolios()}
            </Row>
        </div>
    )
}
