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
        hero="/images/rainbow_hero.png"
        title="COLOR GENERATOR"
        tags={['HTML', 'CSS', 'JavaScript', 'Git']}
        date="july 2021"
        body="While trying to mix design and code, I created a color generator. The background color is randomly generated as you click. On the right side of the screen you can save up to 4 colors from the generator. In the upper left corner you can find an Easter Egg where you have your entire screen filled with smaller colored squares. On the rainbow page, the colors of the squares will refresh just like the background of the homepage. The website also includes a custom circular cursor."
        img={['/images/colorful.png', '/images/rainbow.png']}
        link="../color-changer/index.html"
        linktxt="Check out the color generator!"
      />
    </>
  );
}
