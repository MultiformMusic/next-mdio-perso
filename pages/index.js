import PageLayout from "components/PageLayout";
import { libGetAuthorPresentation, libGetPorfolios, libGetSectionDescription, libGetMusics } from 'lib/api';
import AuthorPresentation from 'components/author/AuthorPresentation';
import { useConfiguration } from 'providers/SiteProvider';
import { Portfolios } from "components/portfolios/Portfolios";
import Musics from "components/musics/Musics";
import { Contact } from "components/contact/Contact";

export default ({authorData, portfolios, sectionDescription, musics}) => {

  const {language} = useConfiguration();

  return (

    <>
      <PageLayout>

        <AuthorPresentation authorData={authorData} language={language} />

        <Portfolios portfolios={portfolios} sectionDescription={sectionDescription} language={language}/>

      </PageLayout>


      <Musics musics={musics} sectionDescription={sectionDescription} language={language} />

      <Contact sectionDescription={sectionDescription} language={language}/>

    </>
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

  const musics = await libGetMusics(false, process.env.SANITY_DEFAULT_LANGUAGE);
  
  return {
    props: {
      authorData,
      sectionDescription,
      portfolios,
      musics
    },
    unstable_revalidate: 1
  }
}