import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useConfiguration } from 'providers/SiteProvider';
import { getTranslation } from 'context/Translate';

const SiteNavbar = () => {

    const {language, changeLanguage} = useConfiguration();
    const navBackground = true;

    return (
        <Navbar
            className="navbar-dark navbar-background"
            expand="lg" 
            fixed="top"
        >
            <Navbar.Brand className="md-navbar-brand">
                <Link href="/">
                    <a >Michel DIO</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link 
                        as={() => 
                            <Link href='/'>
                                <a className="md-navbar-link" style={{textDecoration: 'none'}}>{getTranslation('home', language)}</a>
                            </Link>
                        }
                    />
                    <Nav.Link 
                        as={() => 
                            <Link href='/'>
                                <a className="md-navbar-link ml-3" style={{textDecoration: 'none'}}>{getTranslation('portfolios', language)}</a>
                            </Link>
                        }
                    />
                </Nav>

                { language === 'Fr' && 

                    <div onClick={() => changeLanguage('En')}>
                        <img src="/icon/IconEnglishLanguage.png" width="32" className="ml-3 md-navbar-icon" />
                    </div>
                }
                { language === 'En' && 

                    <div onClick={() => changeLanguage('Fr')}>
                        <img src="/icon/IconFrenchLanguage.png" width="32" className="ml-3 md-navbar-icon" />
                    </div>
                }
                <div className="ml-5"></div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavbar;