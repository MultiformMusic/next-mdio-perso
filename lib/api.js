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
    'logos': logos[]->{name, 'logoImage': logoImage.asset->url},
    subTitle,
    'content': content[]->{portfolioContentFr, portfolioContentEn}
`

const sectionDescriptionFields = `

    name,
    description
`
const musicsFields = `

    name,
    linkList,
    linkBlock,
    pistNumber
`

export async function libGetAuthorPresentation(preview = false) {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "author"] { ${authorFields}}`);

    return results;
}

export async function libGetPorfolios(preview = false, language = "fr") {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "portfolios" && visibility == true] | order(date desc) { ${portfoliosFields}}`);

    return results;
}

export async function libGetPortfolioBySlug(slug, preview = false, language = 'fr') {

    const portfolio = await client.fetch(`*[_type == 'portfolios' && slug.current == $slug && visibility == true] { ${portfoliosFields} }`, {slug})
                                .then(portfolios => portfolios?.[0]);
    return portfolio;

}

export async function libGetSectionDescription(preview = false, language = "fr") {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "descriptionSection"] { ${sectionDescriptionFields}}`);

    return results;
}

export async function libGetMusics(preview = false, language = "fr") {
    
    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "musics" && visibility == true] | order(pistNumber asc) { ${musicsFields}}`);

    return results;
}