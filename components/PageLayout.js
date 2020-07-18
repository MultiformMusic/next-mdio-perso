
import { Container } from 'react-bootstrap';
import SiteNavbar from 'components/SiteNavbar';
import Head from 'next/head';

const PageLayout = ({children}) => {

    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Sansita&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Livvic:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>
            <Container>
            
                <SiteNavbar/>

                <div style={{marginTop: '70px'}}>
                {children}
                </div>

            </Container>
        </div>
    )
}

export default PageLayout;
