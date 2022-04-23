import Head from 'next/head';
import { siteTitle } from '../../components/layout/layout';
import Article from '../../components/article/article';

export default function ColorGenerator() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Article
        hero="/images/house_studio_hero.png"
        title="HOUSE STUDIO"
        tags={['AdobeXD', 'HTML', 'CSS', 'Bootstrap', 'Express', 'EJS', 'Git']}
        body="This was the first project designed and implemented after finishing the Web Developer Bootcamp (Udemy). Working with technologies learned through the course I created a business website. Designed in AdobeXD, and then implemented a homepage, about, and contact page using Bootstrap, Express, and EJS."
        img={[
          '/images/house_studio_1.png',
          '/images/house_studio_2.png',
          '/images/house_studio_3.png',
          '/images/house_studio_about.png',
          '/images/house_studio_contact.png',
        ]}
      />
    </>
  );
}
