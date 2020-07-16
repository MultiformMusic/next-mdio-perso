import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';
import { Fade, JackInTheBox, Zoom } from 'react-awesome-reveal';

const serializers = {
    types: {
        image: ({node: {asset, alt, position}}) => {

            let style = {};

            if (position === 'left') {
                style.float = position;
                style.marginRight = '30px';
            }
            if (position === 'right') {
                style.float = position;
                style.marginLeft = '30px';
            }

            return (
                <Zoom direction="left" duration="1500"  triggerOnce>
                    <div className={`author-content-img-${position}`}>
                        <img className="rounded-circle" src={urlFor(asset).height(74).width(110).url()} />
                        <div className="image-alt">
                            {alt}
                        </div>
                    </div>
                </Zoom>
            )
        }

    }
}
const AuthorContent = ({content}) => 

    <JackInTheBox direction="left" duration="1300"  triggerOnce>
        <div className='author-content-text' style={{ padding: '30px'}}>
            <BlockContent 
                blocks={content}
                serializers={serializers}
            />
        </div>
    </JackInTheBox>


export default AuthorContent;