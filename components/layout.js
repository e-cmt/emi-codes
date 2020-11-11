import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";

const name = "I'm Emi";
const lead = "artist & coder";
export const siteTitle = "Emi's Portfolio - artist & coder";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Emi's Portfolio - artist & coder" />
        <meta property="og:image" content={`/favicon.png`} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.sidebar}>
        <h1 className={styles.heading}>I'm Emi</h1>
        <h4 className={styles.lead}>artist & coder</h4>
        <p className={styles.contact}>Keep in Contact</p>
        <div className="flex justify-start space-x-6">
          <div className="inline-block m-2 icon">
            <Image src="/images/Email.png" width={23} height={16} />
          </div>
          <div className="inline-block m-2 icon">
            <Image src="/images/Instagram.png" width={16} height={16} />
          </div>
          <div className="inline-block m-2 icon">
            <Image src="/images/GitHub-Mark-32px.png" width={16} height={16} />
          </div>
        </div>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
