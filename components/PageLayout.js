
import { Container } from 'react-bootstrap';
import SiteNavbar from 'components/SiteNavbar';
import Head from 'next/head';

const PageLayout = ({children}) => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Container>
            
                <SiteNavbar/>

                {children}


            </Container>
        </div>
    )
}

export default PageLayout;
