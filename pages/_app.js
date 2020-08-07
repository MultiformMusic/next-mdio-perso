
// import CSS
import 'styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteProvider from 'providers/SiteProvider';


export default ({Component, pageProps}) => {

    return(

        <SiteProvider>
            <Component {...pageProps} />
        </SiteProvider>
    ) 
        
}