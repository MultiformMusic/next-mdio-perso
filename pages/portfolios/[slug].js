import PageLayout from 'components/PageLayout';
import { libGetPorfolios, libGetPortfolioBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import { useConfiguration } from 'providers/SiteProvider';
import { Fade } from 'react-awesome-reveal';
import { PortfolioDetailContent } from '../../components/portfolios/PortfolioDetailContent';
import Link from 'next/link';
import { getTranslation } from 'context/Translate';

export const PortfolioDetail = ({portfolio}) => {

    const {language} = useConfiguration();
    
    const {title } = portfolio;
    const content = language == 'Fr' ? portfolio.content?.[0].portfolioContentFr : portfolio.content?.[0].portfolioContentEn

    return (
        
        <PageLayout>
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Fade direction="bottom" duration="1000" triggerOnce>
                        <div className="detail-portfolio-header">
                            <Col>
                                <div className="detail-title">
                                    {title[language.toLowerCase()]}
                                
                                </div>
                                <div>
                                    <Link href={`/#${portfolio.slug}`}>
                                        <a className="link-back ml-2" style={{textDecoration: 'none'}}>
                                        <i class="fas fa-long-arrow-alt-left"></i> {''} {getTranslation('back', language)}
                                        </a>
                                    </Link> 
                                </div>
                            </Col>

                        </div>

                        <Fade direction="bottom" duration="1000" triggerOnce>
                            <PortfolioDetailContent content={content} />
                        </Fade>
                    </Fade>
                </Col>
            </Row>
        </PageLayout>
    )
}

export default PortfolioDetail;

export async function getStaticProps({params}) {
    
    const portfolio = await libGetPortfolioBySlug(params.slug);

    return {
        props: {portfolio}
    }
}

export async function getStaticPaths() {

    const portfolios = await libGetPorfolios();
    const paths = portfolios?.map(portfolio => ({params: {slug: portfolio.slug}}));

    return {
        paths,
        fallback: false
    }
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {params: {slug: 'i-feel-run'}},
//             {params: {slug: 'i-feed-good'}},
//             {params: {slug:'antique-charm-deco'}}
//         ],
//         fallback: false
//     }
// }

// export async function getServerSideProps({params}) {
    
//     const portfolio = await libGetPortfolioBySlug(params.slug);
//     return {
//         props: {portfolio}
//     }
// }



// export async function getStaticProps({params, preview = false}) {

//     console.log("Portfolio DEtail getStaticProps")
// }