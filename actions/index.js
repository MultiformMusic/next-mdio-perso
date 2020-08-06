import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetPortfolios = ({offset}, initialData) => {

    return useSWR(`/api/portfolios?offset=${offset || 0}`, fetcher, {initialData});

}