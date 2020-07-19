import PageLayout from "components/PageLayout";
import { libGetAuthorPresentation, libGetPorfolios, libGetSectionDescription } from 'lib/api';
import AuthorPresentation from 'components/author/AuthorPresentation';
import { useConfiguration } from 'providers/SiteProvider';
import { Portfolios } from "components/portfolios/Portfolios";
import { getTranslation } from "context/Translate";



export default ({authorData, portfolios, sectionDescription}) => {

  const {language} = useConfiguration();

  return (

    <PageLayout>

      <AuthorPresentation authorData={authorData} language={language} />

      <Portfolios portfolios={portfolios} sectionDescription={sectionDescription} language={language} />

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

  const sectionDescription = await libGetSectionDescription(false, process.env.SANITY_DEFAULT_LANGUAGE);
  //const portfoliosDesc = sectionDescription.filter(item => item.name === 'Portfolios');
  
  return {
    props: {
      authorData,
      sectionDescription,
      portfolios
    },
    unstable_revalidate: 1
  }
}