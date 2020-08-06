import { libGetPorfolios } from 'lib/api';

export default async function getPortfolios(req, res) {

    const offset = parseInt((req.query.offset || 0), 10);

    const datas = await libGetPorfolios(false, offset);

    res.status(200).json(datas);
}