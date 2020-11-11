import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 ">
        <section className={utilStyles.headingMd}>
          <p>Hey. I'm Emi. I'm learning React and Next.JS</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </div>
    </Layout>
  );
}
