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
        body="Created an NFT marketplace where a user could buy, sell or exchange their collection of NFTs. The frontend was developed with React, Next.JS and React Bootstrap. Also developed a WordPress presentation website for the client."
      />

      <Article
        title="E-commerce Platform"
        tags={[
          'AdobeXD',
          'Figma',
          'React',
          'Next.JS',
          'PostCSS',
          'npm',
          'Storybook',
          'Jest',
          'React Testing Library',
          'Sitecore',
          'Jira',
        ]}
        date="dec 2021 - apr 2023"
        body="Worked on a custom library of components to be used for different brands. Created reusable components with React, integrated them with Sitecore and maintained conventions for uniformity. Built features in Storybook and unit tested them to prevent future issues. Worked asynchronously with a team of over 20 people."
      />

      <Article
        title="Payments Service"
        tags={['Figma', 'React', 'Next.JS', 'CSS', 'Jira']}
        date="may 2023 - present"
        body="Implemented payments into a website using a third-party service. The front-end was developed with React and deployed with Next.JS."
      />
    </>
  );
}
