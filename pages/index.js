import PageLayout from "components/PageLayout";
import { libGetAuthorPresentation, libGetPorfolios } from 'lib/api';
import AuthorPresentation from 'components/author/AuthorPresentation';
import { useConfiguration } from 'providers/SiteProvider';
import { Portfolios } from "components/portfolios/Portfolios";


export default ({authorData, portfolios}) => {

  const {language} = useConfiguration();

  return (

    <PageLayout>

      <AuthorPresentation authorData={authorData} language={language} />

      <Portfolios portfolios={portfolios} language={language} />

    </PageLayout>
  )
}

export async function getStaticProps({preview = false}) {

  console.log('index getStaticProps')
  //const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  const arrayAuthorData = await libGetAuthorPresentation();
  const authorData = arrayAuthorData[0];

  //console.log(JSON.stringify(authorData))

  const portfolios = await libGetPorfolios(false, process.env.SANITY_DEFAULT_LANGUAGE);
  
  return {
    props: {
      authorData,
      portfolios
    },
    unstable_revalidate: 1
  }
}