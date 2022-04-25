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
        hero="/images/portfolio_hero.png"
        title="PORTFOLIO WEBSITE"
        tags={[
          'AdobeXD',
          'HTML',
          'CSS',
          'React',
          'Next.JS',
          'TailwindCSS',
          'Git',
        ]}
        date="june 2021"
        body="After playing with vanilla JavaScript, I decided to try my hand at using a library. React was a great choice because of the focus on reusable components. After creating the wireframes in AdobeXD, I moved on to coding with Next.js and React. To help in creating a cohesive modern look, I worked with TailwindCSS."
        img={['/images/portfolio_0.png', '/images/portfolio_1.png']}
      />
    </>
  );
}
