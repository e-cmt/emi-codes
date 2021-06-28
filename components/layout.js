import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";

const name = "I'm Emi";
const lead = "designer and coder";
export const siteTitle = "Emi's Portfolio";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Emi's Portfolio" />
        <meta property="og:image" content={`/favicon.png`} />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div
        className={[styles.sidebar, "ml-5", "sm:ml-10", "md:ml-20"].join(" ")}
      >
        <div>
          <Link href="/">
            <a>
              <h1 className={styles.heading}>I'm Emi</h1>
              <h6 className={styles.lead}>designer and coder</h6>
            </a>
          </Link>
        </div>
        <div className="pb-32 hidden sm:block">
          <Link href="/projects/color-generator">
            <a>
              <h6 className={styles.contact}>color generator</h6>
            </a>
          </Link>
          <Link href="/projects/portfolio-website">
            <a>
              <h6 className={styles.contact}>portfolio website</h6>
            </a>
          </Link>
          <Link href="/projects/house-studio">
            <a>
              <h6 className={styles.contact}>house studio</h6>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h6 className={styles.contact}>about</h6>
            </a>
          </Link>
        </div>
        <p className={styles.contact}>Keep in contact</p>
        <div className="flex justify-start space-x-6">
          <div className="inline-block icon">
            <Link href="mailto:emicodes01@gmail.com">
              <a>
                <Image src="/images/web_icon.png" width={24} height={24} />
              </a>
            </Link>
          </div>
          {/* <div className="inline-block m-2 icon">
            <Image src="/images/Instagram.png" width={24} height={24} />
          </div> */}
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <a>
                <Image
                  src="/images/GitHub-Mark-32px.png"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
