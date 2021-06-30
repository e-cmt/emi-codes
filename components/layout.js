import Head from "next/head";
import styles from "./layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

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
        <div className="mb-16 md:mb-20 xl:mb-36 hidden sm:block">
          <Link href="/projects/color-generator">
            <a>
              <h6 className={styles.links}>color generator</h6>
            </a>
          </Link>
          <Link href="/projects/portfolio-website">
            <a>
              <h6 className={styles.links}>portfolio website</h6>
            </a>
          </Link>
          <Link href="/projects/house-studio">
            <a>
              <h6 className={styles.links}>house studio</h6>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h6 className={styles.links}>about</h6>
            </a>
          </Link>
        </div>
        <p className={styles.contact}>Keep in contact</p>
        <div className="flex justify-start space-x-6">
          <div className="inline-block icon">
            <Link href="mailto:emicodes01@gmail.com">
              <a>
                <FontAwesomeIcon className="h-6 w-6" icon={faEnvelope} />
              </a>
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <a>
                <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
              </a>
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://linkedin.com/in/emi-t">
              <a>
                <FontAwesomeIcon className="h-6 w-5" icon={faLinkedinIn} />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
