
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from 'lib/api';

const buildSerializers = () => {

    return ({
        types: {
            image: ({node: {asset, alt, position}}) => {
    
                let url = urlFor(asset).url();
                if (url) {

                    if (url.includes(undefined)) {
                        url = url.replace(undefined, process.env.SANITY_PROJECT_ID)
                    }
                    if (url.includes(undefined)) {
                        url = url.replace(undefined, 'production')
                    }
                }
                
                return (
                    
                        <div className={`portfolio-detail-content-img-${position}`}>
                            <img className="portfolio-content-image" src={url} />
                            <div className="image-alt">
                                {alt}
                            </div>
                        </div>
                    
                )
            }
    
        }
    })

}

export const PortfolioDetailContent = ({content}) => {
    
    return (
        <div className="portfolio-detail-content">
            <BlockContent 
                blocks={content}
                serializers={buildSerializers()}
            />
        </div>
    )
}
