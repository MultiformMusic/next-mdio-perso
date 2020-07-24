import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';
import { JackInTheBox, Zoom } from 'react-awesome-reveal';

const buildSerializers = () => {

    return ({
        types: {
            image: ({node: {asset, alt, position}}) => {
    
                let url = urlFor(asset).height(74).width(110).url();
    
                if (url.includes(undefined)) {
                    url = url.replace(undefined, process.env.SANITY_PROJECT_ID)
                }
                if (url.includes(undefined)) {
                    url = url.replace(undefined, 'production')
                }
                
                return (
                    
                        <div className={`author-content-img-${position}`}>
                            <Zoom direction="left" duration="1500" triggerOnce>
                                <img className="rounded-circle" src={url} />
                            </Zoom>
                            <div className="image-alt">
                                {alt}
                            </div>
                        </div>
                    
                )
            }
    
        }
    })

}

const AuthorContent = ({content}) => 

    <JackInTheBox direction="left" duration="1300"  triggerOnce>
        <div className='author-content-text' style={{ padding: '30px'}}>
            <BlockContent 
                blocks={content}
                serializers={buildSerializers()}
            />
        </div>
    </JackInTheBox>


export default AuthorContent;