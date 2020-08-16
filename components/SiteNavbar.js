
import { useRouter } from 'next/router';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { useConfiguration } from 'providers/SiteProvider';
import { getTranslation } from 'context/Translate';

const SiteNavbar = source => {

    const {language, changeLanguage} = useConfiguration();
    const router = useRouter();

    const toggleNavbar = () => {

        if (window.innerWidth < 998) {
            window.document.getElementById("navbar-toggler").click();
        }

    }

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
            <Navbar.Toggle id="navbar-toggler" aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <div onClick={toggleNavbar}>
                        <Nav.Link 
                            as={() => 
                                <Link href='/'>
                                    <a className="md-navbar-link ml-3" style={{textDecoration: 'none'}}>{getTranslation('home', language)}</a>
                                </Link>
                            }
                        />
                    </div>
                    {
                        !router.pathname.includes("[slug]") &&

                            <>
                                <div onClick={toggleNavbar} className="navbar-item-spacing">
                                    <Nav.Link 
                                        as={() => 
                                            <Link href='#portfolios'>
                                                <a className="md-navbar-link ml-3" style={{textDecoration: 'none'}}>{getTranslation('portfolios', language)}</a>
                                            </Link>
                                        }
                                    />
                                </div>
                                <div onClick={toggleNavbar} className="navbar-item-spacing">
                                    <Nav.Link 
                                        as={() => 
                                            <Link href='#musics'>
                                                <a className="md-navbar-link ml-3" style={{textDecoration: 'none'}}>{getTranslation('musics', language)}</a>
                                            </Link>
                                        }
                                    />
                                </div>
                                <div onClick={toggleNavbar} className="navbar-item-spacing">
                                    <Nav.Link 
                                        as={() => 
                                            <Link href='#contact'>
                                                <a className="md-navbar-link ml-3" style={{textDecoration: 'none'}}>{getTranslation('contactNav', language)}</a>
                                            </Link>
                                        }
                                    />
                                </div>
                            </>
                    }
                </Nav>

                { language === 'Fr' && 

                    <div onClick={() => {changeLanguage('En'); toggleNavbar()}} className="navbar-item-spacing">
                        <img src="/icon/IconEnglishLanguage.png" width="32" className="ml-3 md-navbar-icon" />
                    </div>
                }
                { language === 'En' && 

                    <div onClick={() => {changeLanguage('Fr'); toggleNavbar()}} className="navbar-item-spacing">
                        <img src="/icon/IconFrenchLanguage.png" width="32" className="ml-3 md-navbar-icon" />
                    </div>
                }
                <div className="ml-5"></div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SiteNavbar;