import Head from 'next/head';
import { siteTitle } from '../../components/layout/layout';
import Article from '../../components/article/article';

export default function ClientProjects() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Article
        title="NFT Marketplace"
        tags={['Photoshop', 'React', 'Next.JS', 'React Bootstrap', 'Wordpress']}
        date="sept 2021 - dec 2021"
        body="Created an NFT marketplace where you could buy, sell or exchange your collection of NFTs. The frontend was developed with React, Next.JS and React Bootstrap. Also developed a WordPress presentation website for the client."
      />

      <Article
        title="E-commerce Platform"
        tags={[
          'AdobeXD',
          'Figma',
          'React',
          'Next.JS',
          'Vercel',
          'PostCSS',
          'npm',
          'Storybook',
          'Jest',
          'React Testing Library',
          'Sitecore',
          'Jira',
        ]}
        date="dec 2021 - apr 2023"
        body="Worked on a custom UI library of components to be used for different brands. Created reusable components with React, integrated them with Sitecore and maintained conventions for uniformity. Built features in Storybook and unit tested them to prevent future issues. Collaborated asynchronously with a cross-functional team to implement solutions that met business needs."
      />

      <Article
        title="Payments Service"
        tags={['Figma', 'React', 'Next.JS', 'CSS', 'Jira']}
        date="may 2023 - dec 2023"
        body="Implemented payments into a website using a third-party service. The frontend was developed with React and deployed with Vercel. Implemented unit testing to ensure the quality and reliability of the software."
      />
    </>
  );
}
