import PageLayout from 'components/PageLayout';
import { useRouter } from 'next/router';

export const PortfolioDetail = () => {

    const { query } = useRouter();

    return (
        <PageLayout>
            DEtail Page - {query.slug}
        </PageLayout>
    )
}

export default PortfolioDetail;

// export async function getStaticProps({params, preview = false}) {

//     console.log("Portfolio DEtail getStaticProps")
// }