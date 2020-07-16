import { libGetAuthorPresentation } from 'lib/api';

export default async function getPortfolios(req, res) {

    const datas = await libGetAuthorPresentation();

    res.status(200).json(datas);
}