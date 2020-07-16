import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export const useGetAuthorPresentation = () => {

    console.log('actions useGetAuthorPresentation');

    // return useSWR(
    //     `/api/blogs?offset=${offset || 0}&date=${filter.date.asc ? 'asc' : 'desc'}`, 
    //     fetcher, 
    //     {initialData})
}