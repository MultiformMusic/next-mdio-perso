import { useSWRPages } from 'swr';
import { useGetPortfolios } from 'actions/index';
import PortfolioItem from 'components/portfolios/PortfolioItem';


export const useGetPortfoliosPages = ({portfolios, directions, mode}) => {

    let count = 0;

    return  useSWRPages('index-page', 
    
    ({offset, withSWR}) => {

        let initialData = !offset && portfolios;
        const {data: paginatedPortfolios} = withSWR(useGetPortfolios({offset}, initialData));

        if (!paginatedPortfolios) return null;

        return paginatedPortfolios.map((portfolio, index) => {

            if (count > 2) {
                count = 0;
            }
            
            const direction = directions[count];
            count++;

            return (

                    <PortfolioItem 
                        key={portfolio.slug}
                        direction={direction} 
                        mode={mode}
                        slug={portfolio.slug}
                        logos={portfolio.logos}
                        name={portfolio.name}
                        title={portfolio.title}
                        subTitle={portfolio.subTitle}
                        coverImage={portfolio.coverImage}
                        slug={portfolio.slug}
                        link={{
                            href: '/portfolios/[slug]',
                            as: `/portfolios/${portfolio.slug}`
                        }}
                    />
                
                )
            }
        )

    },
    // compute offset that will get passed into previuos callback with 'withSWR'
    // SWR: data you will get from withSWR function
    // index : number for current page
    (SWR, index) => {

        if (SWR.data && SWR.data.length === 0) {
            return null;
        }
        return (index + 1) * 6;
    },
    []
    
    );
}