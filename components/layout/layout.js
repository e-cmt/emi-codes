import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faDribbble,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const name = "I'm Emi";
const lead = 'software developer';
export const siteTitle = "Emi's Portfolio";

export default function Layout({ children }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Emi's Portfolio" />
        <meta property="og:image" content={`/favicon.png`} />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <div className="w-full bg-white sm:hidden sticky top-0 z-10">
        <div className="flex flex-row w-10/12 justify-between mx-10 mt-10 mb-4">
          <div>
            <Link href="/">
              <h1 className={styles.heading}>I'm Emi</h1>
              <h6 className={styles.lead}>software developer</h6>
            </Link>
          </div>
          <div className="menu-container relative">
            <button onClick={onClick} className="menu-trigger p-2">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
        <nav
          ref={dropdownRef}
          className={`${
            isActive ? 'active' : 'hidden'
          } absolute w-full bg-white shadow-2xl delay-200 duration-200`}
        >
          <ul className="flex flex-col mt-4">
            <li>
              <Link href="/about" onClick={onClick} className={styles.links}>
                about
              </Link>
            </li>
            <li>
              <Link
                href="/projects/client-projects"
                onClick={onClick}
                className={styles.links}
              >
                client projects
              </Link>
            </li>
            <li>
              <Link
                href="/projects/portfolio-website"
                onClick={onClick}
                className={styles.links}
              >
                portfolio website
              </Link>
            </li>
            <li>
              <Link
                href="/projects/color-generator"
                onClick={onClick}
                className={styles.links}
              >
                color generator
              </Link>
            </li>
            <li>
              <Link
                href="/projects/house-studio"
                onClick={onClick}
                className={styles.links}
              >
                house studio
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={[styles.sidebar, 'ml-6', 'sm:ml-10', 'lg:ml-16'].join(' ')}
      >
        <div>
          <Link href="/">
            <h1 className={styles.heading}>I'm Emi</h1>
            <h6 className={styles.lead}>software developer</h6>
          </Link>
        </div>

        <div className="mb-16 md:mb-20 xl:mb-36 hidden sm:block">
          <Link href="/about" className={styles.links}>
            about
            <h6></h6>
          </Link>
          <Link href="/projects/client-projects" className={styles.links}>
            client projects
          </Link>
          <Link href="/projects/portfolio-website" className={styles.links}>
            portfolio website
          </Link>
          <Link href="/projects/color-generator" className={styles.links}>
            color generator
          </Link>
          <Link href="/projects/house-studio" className={styles.links}>
            house studio
          </Link>
        </div>
        <p className={styles.contact}>Keep in contact</p>
        <div className="flex justify-start space-x-6">
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://linkedin.com/in/emi-t">
              <FontAwesomeIcon className="h-6 w-5" icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </div>

      <main className={styles.main}>{children}</main>

      <div
        id="footer"
        className="flex flex-col justify-center content-center sm:hidden w-full mb-12 "
      >
        <p className={[styles.contact, 'flex', 'justify-center'].join(' ')}>
          Keep in contact
        </p>
        <div className="flex justify-center space-x-6">
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://linkedin.com/in/emi-t">
              <FontAwesomeIcon className="h-6 w-5" icon={faLinkedinIn} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
