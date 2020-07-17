import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

import { useConfiguration } from 'providers/SiteProvider';

const SiteNavbar = () => {

    const {language, changeLanguage} = useConfiguration();

    return (
        <Navbar
            className="navbar-dark bg-dark"
            bg="transparent"
            expand="lg" 
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
                                <a className="md-navbar-link" style={{textDecoration: 'none'}}>Home</a>
                            </Link>
                        }
                    />
                </Nav>

            </Navbar.Collapse>
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
        </Navbar>
    )
}

export default SiteNavbar;