import Head from "next/head";
import { siteTitle } from "../components/layout";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={homeStyles.squares}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    </>
  );
}
