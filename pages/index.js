import PageLayout from "components/PageLayout";
import { libGetAuthorPresentation } from 'lib/api';
import AuthorPresentation from 'components/author/AuthorPresentation';
import { useConfiguration } from 'providers/SiteProvider';


export default ({authorData}) => {

  const {language} = useConfiguration();

  return (

    <PageLayout>

      <AuthorPresentation authorData={authorData} language={language} />

    </PageLayout>
  )
}

export async function getStaticProps({preview = false}) {

  console.log('index getStaticProps')
  //const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  const arrayAuthorData = await libGetAuthorPresentation();
  const authorData = arrayAuthorData[0];

  //console.log(JSON.stringify(authorData))

  return {
    props: {
      authorData
    },
    unstable_revalidate: 1
  }
}