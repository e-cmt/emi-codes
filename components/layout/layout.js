import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faDribbble,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const name = "I'm Emi";
const lead = 'frontend developer';
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

      <div className="w-full sm:hidden">
        <div className="flex flex-row w-10/12 justify-between mt-16 ml-8 mr-8">
          <div>
            <Link href="/">
              <h1 className={styles.heading}>I'm Emi</h1>
              <h6 className={styles.lead}>frontend developer</h6>
            </Link>
          </div>
          <div className="menu-container">
            <button onClick={onClick} className="menu-trigger p-2">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
        <nav
          ref={dropdownRef}
          className={[
            `menu ${isActive ? 'active' : 'hidden'}`,
            'delay-200',
            'duration-200',
          ].join(' ')}
        >
          <ul className="flex flex-col mt-4">
            <li>
              <Link
                href="/about"
                onClick={() => {
                  setIsActive(false);
                }}
                className="flex justify-center transition-opacity"
              >
                <h6 className={styles.links}>about</h6>
              </Link>
            </li>
            <li>
              <Link
                href="/projects/color-generator"
                onClick={() => {
                  setIsActive(false);
                }}
                className="flex justify-center transition-opacity"
              >
                <h6 className={styles.links}>color generator</h6>
              </Link>
            </li>
            <li>
              <Link
                href="/projects/portfolio-website"
                onClick={() => {
                  setIsActive(false);
                }}
                className="flex justify-center transition-opacity"
              >
                <h6 className={styles.links}>portfolio website</h6>
              </Link>
            </li>
            <li>
              <Link
                href="/projects/house-studio"
                onClick={() => {
                  setIsActive(false);
                }}
                className="flex justify-center transition-opacity"
              >
                <h6 className={styles.links}>house studio</h6>
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
            <h6 className={styles.lead}> frontend developer</h6>
          </Link>
        </div>

        <div className="mb-16 md:mb-20 xl:mb-36 hidden sm:block">
          <Link href="/about">
            <h6 className={styles.links}>about</h6>
          </Link>
          <Link href="/projects/color-generator">
            <h6 className={styles.links}>color generator</h6>
          </Link>
          <Link href="/projects/portfolio-website">
            <h6 className={styles.links}>portfolio website</h6>
          </Link>
          <Link href="/projects/house-studio">
            <h6 className={styles.links}>house studio</h6>
          </Link>
        </div>
        <p className={styles.contact}>Keep in contact</p>
        <div className="flex justify-start space-x-6">
          <div className="inline-block icon">
            <Link href="mailto:emicodes01@gmail.com">
              <FontAwesomeIcon className="h-6 w-6" icon={faEnvelope} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://dribbble.com/emi_t">
              <FontAwesomeIcon className="h-6 w-6" icon={faDribbble} />
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
            <Link href="mailto:emicodes01@gmail.com">
              <FontAwesomeIcon className="h-6 w-6" icon={faEnvelope} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://github.com/e-cmt">
              <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
            </Link>
          </div>
          <div className="inline-block icon">
            <Link href="https://dribbble.com/emi_t">
              <FontAwesomeIcon className="h-6 w-6" icon={faDribbble} />
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
