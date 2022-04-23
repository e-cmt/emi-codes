import Head from 'next/head';
import Card from '../components/card/card';
import { siteTitle } from '../components/layout/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className="flex flex-wrap items-center justify-start">
        <Card
          link="/projects/color-generator"
          title="color generator"
          color="yellow"
        />
        <Card link="/about" title="about" color="purple" />
        <Card
          link="/projects/portfolio-website"
          title="portfolio website"
          color="pink"
        />
        <Card link="/projects/house-studio" title="house studio" color="blue" />
      </div>
    </>
  );
}
