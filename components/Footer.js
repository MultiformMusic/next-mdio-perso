import { Zoom } from 'react-awesome-reveal';
import InViewport from 'components/InViewport';

export const Footer = () => {
    return (
        <section style={{backgroundColor: 'black'}}>
                <Zoom duration="500" triggerOnce>
                    <div className="footer">
                        <InViewport>
                            <div>
                                <i className="far fa-copyright"></i> 2020 
                                <a className="link link-github" href='https://github.com/MultiformMusic' target="_blank" title="Github">
                                    <i className="fab fa-github fa-2x ml-5"></i>
                                </a>
                                <a className="link link-soundcloud" href='https://soundcloud.com/multiform_bdx' target="_blank" title="Soundcloud">
                                    <i className="fab fa-soundcloud fa-2x ml-3"></i>
                                </a>
                                <a className="link link-youtube" href='https://www.youtube.com/user/Enden33/videos' target="_blank" title="Youtube">
                                    <i className="fab fa-youtube fa-2x ml-3"></i>
                                </a>
                            </div>
                        </InViewport>
                    </div>
                </Zoom>
        </section>
    )
}
