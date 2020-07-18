import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';
import { useConfiguration } from 'providers/SiteProvider';

// builder d'image
const builder = imageUrlBuilder(client);
// function permettant d'obtenir l'url d'une image suivant la source sanity
export function urlFor(source) {
    return builder.image(source);
}

// détermination du type de client
const getClient = preview => preview ? previewClient : client;

const authorFields = `

    name,
    authorImage,
    authorContentEn,
    authorContentFr
`

const portfoliosFields = `

    title,
    coverImage,
    'slug': slug.current,
    'logo': logo->{name, 'logoImage': logoImage.asset->url},
    subTitle
`

export async function libGetAuthorPresentation(preview = false) {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "author"] { ${authorFields}}`);

    return results;
}

export async function libGetPorfolios(preview = false, language = "fr") {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "portfolios"] | order(date desc) { ${portfoliosFields}}`);

    return results;
}