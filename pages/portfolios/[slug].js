import PageLayout from 'components/PageLayout';

export const PortfolioDetail = () => {
    return (
        <PageLayout>
            DEtail Page
        </PageLayout>
    )
}

export default PortfolioDetail;

export async function getStaticProps({params, preview = false}) {

    console.log("Portfolio DEtail getStaticProps")
}