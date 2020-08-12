
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
                <link href="https://fonts.googleapis.com/css2?family=El+Messiri&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"></link>
            </Head>
            <Container>
            
                <SiteNavbar/>

                <div style={{marginTop: '70px'}}>
                    {children}
                </div>

            </Container>
            <style global jsx>
            {`
                html {
                    scroll-behavior: smooth;
                    }
            `}
            </style>
        </div>
    )
}

export default PageLayout;
