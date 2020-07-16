import client, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';


// builder d'image
const builder = imageUrlBuilder(client);
// function permettant d'obtenir l'url d'une image suivant la source sanity
export function urlFor(source) {
    return builder.image(source);
}

// détermination du type de client
const getClient = preview => preview ? previewClient : client;

const authorFileds = `

    name,
    authorImage,
    authorContentEn,
    authorContentFr
`

export async function libGetAuthorPresentation(preview = false) {

    const client = getClient(preview);
    const results = await client.fetch(`*[_type == "author"] { ${authorFileds}}`);

    return results;
}